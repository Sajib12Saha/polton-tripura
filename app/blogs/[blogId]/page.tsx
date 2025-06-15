import { BlogCard } from "@/components/blog-card";
import { Separator } from "@/components/ui/separator";
import { BlogType } from "@/types/type";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlog } from "@/actions/get-blog";
import { getBlogs } from "@/actions/get-blogs";

interface BlogPageProps {
  params: { blogId: string };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { blogId } = params;

  let blog: BlogType;
  try {
    blog = await getBlog(blogId);
  } catch (err) {
    return notFound();
  }

  const { data: blogs } = await getBlogs(1);

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const recentBlogs = blogs
    .filter((b) => b.id !== blogId)
    .slice(0, 3);

  return (
    <div className="mt-18 flex flex-col lg:flex-row gap-8">
      {/* Main Blog Content */}
      <div className="flex-1 bg-gradient-to-br from-background to-accent shadow p-4 space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-gray-300 font-bold mt-6">
          {blog.title}
        </h1>
        <p className="text-sm lg:text-base font-semibold text-muted-foreground">
          {formattedDate}
        </p>

        <div className="relative w-full h-80">
          <Image
            src={blog.image}
            alt={blog.title || "Blog Image"}
            fill
            className="rounded-lg object-contain shadow"
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <div
          className="prose prose-zinc dark:prose-invert text-muted-foreground leading-8 tracking-wide text-lg lg:text-xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Recent Blogs Section */}
      <aside className="w-full lg:w-[300px] space-y-4">
        <h2 className="text-xl font-semibold pb-2">Recent Blogs</h2>
        <Separator />
        {recentBlogs.map((recent) => (
          <BlogCard key={recent.id} blog={recent} />
        ))}
      </aside>
    </div>
  );
};

export default BlogPage;
