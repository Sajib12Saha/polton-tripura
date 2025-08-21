'use client'

import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { FormCard } from "./form-card"
import { motion } from "framer-motion"
import { SOCIAL_MEDIA } from "@/data"




export const Contact = () =>{

    return (
        <section id="contact" className="space-y-4 py-20 ">
            <div className="flex flex-col items-center justify-center gap-y-2">
                <motion.p className="text-primary font-semibold text-lg md:text-xl"
                           initial={{opacity:0, y: -100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.2, ease:"easeIn"}}
                >CONTACT</motion.p>
                <motion.h2 className="text-5xl md:text-6xl font-bold dark:text-gray-300"
                       initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
                >Contact With Me</motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <motion.div className=" md:col-span-4"
                    initial={{opacity:0, x: -100}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
            >
                <Card>
                    <CardContent className="">
            <div className="p-8">
      <img
  src={"/paltan.jpeg"}
  alt={"Paltan Joy Tripura"}
  width={1000}
  height={1000}
  className="object-cover overflow-hidden rounded-lg shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.8)_inset] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset] p-2 w-full"
/>


            </div>
          
                        <div className="space-y-0.5">
                          <h3 className="text-2xl font-bold dark:text-gray-300">Paltan Joy Tripura</h3>
                        <p className="text-base font-semibold text-muted-foreground">Web Analytics</p>
                        </div>
                  
                        <p className="text-sm text-muted-foreground">I am available for freelance work. Connect with me via and call in to my account.</p>
                        <div className="flex flex-col gap-y-0.5">
              <p className="text-accent-foreground font-semibold group">
             Phone:
                    <a href={`tel:01608731422`} className="text-muted-foreground font-medium group-hover:underline cursor-pointer group-hover:text-primary ml-1">
                 01608731422
                  </a>
                </p>

            <p className="text-accent-foreground font-semibold group">
            Email:
         <a href={`mailto:skillpaltanbd@gmail.com`} className="text-muted-foreground font-medium group-hover:underline cursor-pointer group-hover:text-primary ml-1">
        skillpaltanbd@gmail.com </a>
            </p>

                        </div>
                        <p className="text-base font-semibold text-primary">FIND WITH ME</p>
                        <div className="flex items-center gap-2 flex-wrap">
                      {SOCIAL_MEDIA.map(({link, platform}, index) => (
    <Link
      key={index}
      href={link}
      className="hover:scale-110 transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="icon">
        <Image
          src={platform}
          alt={link}
          width={27}
          height={27}
          className="object-cover rounded-full"
        />
      </Button>
    </Link>
  )
)}

                        </div>
                    </CardContent>
                </Card>

            </motion.div>

            <motion.div className="md:col-span-8"
            initial={{opacity:0, x: 10}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
            >
         <FormCard/>
            </motion.div>
            </div>
        </section>
    )
}
