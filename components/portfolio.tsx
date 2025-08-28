'use client'
import { PortfolioCard } from "./portfolio-card"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

interface Props {
    portfolios:string[]
}

export const Portfolio = ({portfolios}:Props) =>{
    const router = useRouter();
    return (
        <section className="space-y-4 md:space-y-8 py-20">
       <div className="flex flex-col items-center  justify-center">
        <motion.p className="text-primary font-semibold text-lg md:text-xl"
                   initial={{opacity:0, y: -100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.2, ease:"easeIn"}}
        >Visit my portfolio and keep your feedback</motion.p>
        <motion.h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300"
                  initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
        >My Portfolio</motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolios.slice(0,6).map((project, index)=>(
                  <motion.div
            key={index}
             initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
          transition={{ duration: 0.5, delay: index * 0.2 }}>
                <PortfolioCard key={index} project={project}/>
           </motion.div>
        ))}
        </div>
        {portfolios.length > 6 && (
            <div className="flex items-center justify-center w-full">
                <Button className="hover:bg-primary hover:text-white transition-all duration-100 px-10" onClick={()=> router.push('/portfolio')}>
                See All
                </Button>
            </div>
        )}
        </section>
    )
}