'use client'

import { BlogCard } from "./blog-card"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { BlogType } from "@/types/type"

interface Props{
 blogs:BlogType[]
}

export const Blogs = ({blogs}:Props) =>  {
    const router = useRouter();
    return(
        <section className="space-y-4 md:space-y-8 py-20">
       <div className="flex flex-col items-center  justify-center">
        <motion.p className="text-primary font-semibold text-lg md:text-xl"
                           initial={{opacity:0, y: -100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.2, ease:"easeIn"}}
        >Visit my blog and keep your feedback</motion.p>
        <motion.h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300"
             initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
        >My Blog</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.slice(0,3).map((blog, index)=>(
                <motion.div
                key={index}
                           initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
                >
              
                <BlogCard blog={blog}/>
                  </motion.div>
            ))}

        </div>
        {blogs.length > 3 && (
            <div className="flex items-center justify-center w-full">
                <Button className="hover:bg-primary hover:text-white transition-all duration-100 px-10" onClick={()=> router.push('/blogs')}>
                See All
                </Button>
            </div>
        )}
        </section>
    )
}