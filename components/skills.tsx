'use client'

import { Card, CardContent } from "./ui/card"

import { motion } from "framer-motion"
import { SKILLS } from "@/data"



export const Skills = () => {
  return (
    <section id="skills" className="space-y-4 md:space-y-8 py-20">
      <div className="flex flex-col items-center justify-center">
        <motion.p
          className="text-primary font-semibold text-lg md:text-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeIn" }}
        >
          WHAT SHOULD I KNOW
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-bold dark:text-gray-300"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
        >
          My Skills
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeIn" }}
          >
            <Card className="flex flex-col items-center text-center p-6">
              <CardContent>
                <h3 className="text-lg md:text-xl dark:text-gray-300 font-semibold mt-2">
                  {skill}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

