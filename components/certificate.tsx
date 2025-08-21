'use client'
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CerticateCard } from "./certificate-card"

interface Props {
    certificates:string[]
}

export const Certificate = ({certificates}:Props) =>{
    const router = useRouter();
    return (
        <section className="space-y-4 md:space-y-8 py-20" id="certifications">
       <div className="flex flex-col items-center  justify-center">
        <motion.p className="text-primary font-semibold text-lg md:text-xl"
                   initial={{opacity:0, y: -100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.2, ease:"easeIn"}}
        > Achievements & Professional Certifications</motion.p>
        <motion.h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300"
                  initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
        > My Certifications</motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((certificate, index)=>(
                  <motion.div
            key={index}
             initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
          transition={{ duration: 0.5, delay: index * 0.2 }}>
                <CerticateCard key={index} certificate={certificate}/>
           </motion.div>
        ))}
        </div>
        </section>
    )
}