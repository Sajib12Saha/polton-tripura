import { getBlogs } from "@/actions/get-blogs";
import { BlogCard } from "@/components/blog-card";
import { BlogType } from "@/types/type";
import Link from "next/link";


interface BlogPageProps {
  searchParams?: {
    page?: string;
  };
}


const BlogPage = async({searchParams}:BlogPageProps) =>{
      const currentPage = Number( searchParams?.page || 1);
        const {data:blogs, totalPages} = await getBlogs(currentPage)
    return (
        <div className="mt-18 space-y-8">
            <div className="flex flex-col items-center">
             <p className="text-primary font-semibold text-lg md:text-xl">Visit my blog and keep your feedback</p>
        <h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300">My Blog</h2>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog:BlogType, index:number)=>(
        <BlogCard key={index} blog={blog}/>
            ))}
            
         </div>
               <div className="flex justify-center items-center gap-4 pt-10">
        <Link
          href={`?page=${currentPage - 1}`}
          className={`px-4 py-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]  rounded ${
            currentPage === 1
              ? "pointer-events-none opacity-50"
              : "hover:bg-primary  transition"
          }`}
        >
          Previous
        </Link>

        <span className="text-lg dark:text-gray-300 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <Link
          href={`?page=${currentPage + 1}`}
          className={`px-4 py-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)]   rounded ${
            currentPage >= totalPages
              ? "pointer-events-none opacity-50"
              : "hover:bg-primary  transition"
          }`}
          
        >
      

          Next
        </Link>
      </div>
        </div>
    )
}

export default BlogPage;