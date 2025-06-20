import { getBlog } from "@/actions/get-blog";
import { getBlogs } from "@/actions/get-blogs";
import { BlogCard } from "@/components/blog-card";
import { Separator } from "@/components/ui/separator";
import { BlogType } from "@/types/type";
import Image from "next/image";

interface BlogIdPageProps {
  params: Promise<{ blogId: string }>;
}

export default async function BlogIdPage({ params }: BlogIdPageProps) {
  const { blogId } = await params;

  let blog: BlogType | null = null;
  try {
    blog = await getBlog(blogId);
  } catch {
    blog = null;
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Blog Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We couldn't find the blog you're looking for.
        </p>
      </div>
    );
  }

  const { data: blogs = [] } = await getBlogs(1);
  const recentBlogs = blogs.filter((b) => b.id !== blogId).slice(0, 3);

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

 return (
  <div className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
    {/* Main Blog Content */}
    <article className="space-y-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-gray-300 font-bold break-words leading-tight tracking-wide">
        {blog.title}
      </h1>

      <p className="text-sm lg:text-base font-semibold text-muted-foreground">
        {formattedDate}
      </p>

      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow">
        <Image
          src={blog.image || "/fallback.jpg"}
          alt={blog.title || "Blog Image"}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 800px"
          priority
        />
      </div>

      <div
        className="prose prose-zinc dark:prose-invert text-muted-foreground text-lg lg:text-xl leading-8 tracking-wide 
                   break-words prose-img:max-w-full prose-img:rounded-lg 
                   prose-pre:overflow-x-auto prose-pre:whitespace-pre-wrap prose-pre:rounded-md 
                   prose-table:w-full prose-th:break-words prose-td:break-words"
        dangerouslySetInnerHTML={{
          __html: blog.content || "<p>No content available.</p>",
        }}
      />
    </article>

    {/* Recent Blogs Sidebar */}
    {recentBlogs.length > 0 && (
      <aside className="bg-background p-4 rounded-xl border shadow-md h-fit sticky top-20">
        <h2 className="text-xl font-bold text-foreground mb-3">Recent Blogs</h2>
        <Separator />
        <div className="grid gap-4 mt-4">
          {recentBlogs.map((recent) => (
            <div
              key={recent.id}
              className="grid grid-cols-[80px_1fr] gap-4 items-start p-2 rounded-lg hover:bg-muted transition"
            >
              <div className="relative w-full h-20 rounded-md overflow-hidden">
                <Image
                  src={recent.image || "/fallback.jpg"}
                  alt={recent.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm font-semibold line-clamp-2">{recent.title}</p>
                <span className="text-xs text-muted-foreground mt-1">
                  {new Date(recent.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    )}
  </div>
);

}
