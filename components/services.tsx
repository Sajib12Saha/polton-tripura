'use client'

import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"
import { Service } from "@/types/type"
import { Wrench } from "lucide-react"

interface Props{
    services:Service[]
}

export const Services = ({services}:Props) =>{
    return(
        <section className="space-y-4 py-20" id="services">
            <div className="flex flex-col items-start">
            <p className="text-primary font-semibold text-lg md:text-xl"
         
            >Services</p>

            <motion.h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300"
            initial={{opacity:0, x: -100}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
            >What I Do </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({title,desc, services}, index)=> (
            <motion.div
            key={index}
             initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
          transition={{ duration: 0.5, delay: index * 0.2 }}>
      
                <Card>
                    <CardContent className="space-y-4">
                <div className="p-2 shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.8)_inset]  dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset] size-10 rounded-full flex items-center justify-center">
                            <Wrench className="text-primary size-8"/>
                </div>
            

                    <h3 className="text-2xl font-bold dark:text-gray-300">{title}</h3>
                    <p className="text-muted-foreground">{desc}</p>
                    <div className="flex flex-col gap-y-2">
                    {services.map((element, index)=>(
                        <div className="flex gap-x-8 items-center " key={index}>
                            <div className="size-2 bg-primary rounded-full shrink-0"/>
                            <p className="tracking-wide text-muted-foreground">{element}</p>
                        </div>
                    ))}
                    </div>
                 
                    </CardContent>
                </Card>
                    </motion.div>
            ))}
            </div>
        </section>
    )
}