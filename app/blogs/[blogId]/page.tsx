import { getBlog } from "@/actions/get-blog";
import { getBlogs } from "@/actions/get-blogs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { BlogType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold break-words leading-tight tracking-wide dark:text-gray-300">
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

      {/* Recent Blogs Sidebar (Manual Cards) */}
      {recentBlogs.length > 0 && (
        <aside className=" p-4 rounded-xl h-fit sticky top-20 lg:relative space-y-4">
          <h2 className="text-xl font-bold text-foreground">Recent Blogs</h2>
          <Separator />
          <div className="grid gap-4 mt-4">
            {recentBlogs.map((recent) => {
              const formattedDate = new Date(recent.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              // Sanitize and preview content
              const cleanHTML = DOMPurify.sanitize(recent.content, {
                ALLOWED_TAGS: [
                  "p", "br", "b", "strong", "i", "em", "u", "s", "ul", "ol", "li",
                  "h1", "h2", "h3", "blockquote", "code", "pre", "div", "span", "a"
                ],
                ALLOWED_ATTR: ["class", "href", "target", "rel", "style"],
              });

              const tempDiv = typeof window !== "undefined" ? document.createElement("div") : null;
              if (tempDiv) {
                tempDiv.innerHTML = cleanHTML;
              }
              const plainText = tempDiv?.textContent || tempDiv?.innerText || "";
              const previewText = plainText.split(" ").slice(0, 20).join(" ") + "...";

              return (
                <Link
                  key={recent.id}
                  href={`/blog/${recent.id}`}
                  className="block hover:shadow-md transition-shadow duration-200"
                >
                  <Card className="overflow-hidden flex flex-col">
                    <CardContent className="space-y-3 flex flex-col p-3">
                      <div className="relative w-full h-40 rounded-md overflow-hidden">
                        <Image
                          src={recent.image || "/fallback.jpg"}
                          alt={recent.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 400px"
                          priority
                        />
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <h4 className="text-base font-semibold truncate max-w-[70%] dark:text-gray-300">
                          {recent.title}
                        </h4>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {formattedDate}
                        </span>
                      </div>

                      <p
                        className="text-sm text-muted-foreground line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(previewText),
                        }}
                      />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </aside>
      )}
    </div>
  );
}
