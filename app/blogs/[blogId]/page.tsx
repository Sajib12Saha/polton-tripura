import { BLOGS } from "@/data";
import { BlogCard } from "@/components/blog-card";
import { Separator } from "@/components/ui/separator";

interface BlogIdPageProps {
  params: Promise<{ blogId: string }>;
}

export default async function BlogIdPage({ params }: BlogIdPageProps) {
  const { blogId } = await params;

  // Find blog from BLOGS array
  const blog = BLOGS.find((b) => b.id.toString() === blogId) || null;

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

  // Recent blogs (exclude current)
  const recentBlogs = BLOGS.filter((b) => b.id.toString() !== blogId).slice(0, 3);

  // Format date
  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <div className="max-w-6xl mx-auto mt-16 px-2 grid grid-cols-1 md:grid-cols-12 md:gap-2 lg:gap-4">
      {/* Main Blog Content */}
      <article className="space-y-8 md:col-span-7 lg:col-span-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold break-words leading-tight tracking-wide dark:text-gray-300">
          {blog.title}
        </h1>

        <p className="text-sm lg:text-base font-semibold text-muted-foreground">
          {formattedDate}
        </p>

        <div className="prose prose-zinc dark:prose-invert text-muted-foreground text-lg lg:text-xl leading-8 tracking-wide break-words">
          {/* Description */}
          <p>{blog.description}</p>

          {/* Content paragraphs */}
          {blog.content?.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Benefits section */}
          {blog.benefits && blog.benefits.length > 0 && (
            <>
              <h3 className="mt-6 text-2xl font-semibold dark:text-gray-300">Business Benefits</h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                {blog.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </article>

      {/* Recent Blogs Sidebar */}
      {recentBlogs.length > 0 && (
        <aside className="md:col-span-5 lg:col-span-4 h-fit md:sticky md:top-20 space-y-4">
          <h2 className="text-xl font-bold text-foreground">Recent Blogs</h2>
          <Separator />
          <div className="space-y-4">
            {recentBlogs.map((recentBlog) => (
              <BlogCard blog={recentBlog} key={recentBlog.id} />
            ))}
          </div>
        </aside>
      )}
    </div>
  );
}
