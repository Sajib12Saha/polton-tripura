import { BlogCard } from "@/components/blog-card"
import Link from "next/link"
import { BLOGS } from "@/data"
import { BlogType } from "@/types/type"

interface BlogPageProps {
  searchParams?: Promise<{ page?: string }>
}

// items per page
const ITEMS_PER_PAGE = 6

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const params = await searchParams
  const currentPage = Number(params?.page || 1)

  // paginate blogs
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const blogs = BLOGS.slice(startIndex, endIndex)
  const totalPages = Math.ceil(BLOGS.length / ITEMS_PER_PAGE)

  return (
    <div className="mt-18 space-y-8">
      <div className="flex flex-col items-center">
        <p className="text-primary font-semibold text-lg md:text-xl">
          Visit my blog and keep your feedback
        </p>
        <h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300">
          My Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog: BlogType, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 pt-10">
{currentPage > 1 ? (
  <Link
    href={`?page=${currentPage - 1}`}
    className="px-4 py-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
               dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]
               rounded hover:bg-primary transition"
  >
    Previous
  </Link>
) : (
  <span className="px-4 py-2 rounded opacity-50 pointer-events-none shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
                    dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]">
    Previous
  </span>
)}

<span className="text-lg dark:text-gray-300 font-medium">
  Page {currentPage} of {totalPages}
</span>

{currentPage < totalPages ? (
  <Link
    href={`?page=${currentPage + 1}`}
    className="px-4 py-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
               dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]
               rounded hover:bg-primary transition"
  >
    Next
  </Link>
) : (
  <span className="px-4 py-2 rounded opacity-50 pointer-events-none shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)]
                    dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]">
    Next
  </span>
)}


      </div>
    </div>
  )
}

export default BlogPage
