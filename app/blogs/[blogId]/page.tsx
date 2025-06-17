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
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Blog Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We couldn't find the blog you're looking for.
        </p>
      </div>
    );
  }

  const { data: blogs } = await getBlogs(10);
  const recentBlogs = blogs.filter((b) => b.id !== blogId).slice(0, 3);

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-18 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 bg-gradient-to-br from-background to-accent shadow p-4 space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-gray-300 font-bold mt-6">
          {blog.title}
        </h1>
        <p className="text-sm lg:text-base font-semibold text-muted-foreground">
          {formattedDate}
        </p>

        <div className="relative w-full h-80">
          <Image
            src={blog.image || "/fallback.jpg"}
            alt={blog.title || "Blog Image"}
            fill
            className="rounded-lg object-contain shadow"
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
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

      </div>

      <aside className="w-full lg:w-[300px] space-y-4">
        <h2 className="text-xl font-semibold pb-2">Recent Blogs</h2>
        <Separator />
        {recentBlogs.map((recent) => (
          <BlogCard key={recent.id} blog={recent} />
        ))}
      </aside>
    </div>
  );
}
