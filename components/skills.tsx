'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { SkillType } from "@/types/type"

interface Props {
  skills:SkillType[]
}

export const Skills = ({skills}:Props) => {
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

      <Tabs defaultValue={skills[0]?.name ?? ""} className="w-full p-0">
        <TabsList className="w-full flex gap-y-2 md:flex-wrap items-center justify-around rounded-md shadow-md">
          {skills.map((type) => (
            <TabsTrigger key={type.id} value={type.name} className="font-semibold capitalize">
              {type.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {skills.map((type) => (
          <TabsContent key={type.id} value={type.name} className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {type.skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2, ease: "easeIn" }}
                >
                  <Card className="flex flex-col items-center">
                    <CardContent className="space-y-4 flex flex-col items-center justify-center">
                      <Image
                        src={skill.skillImage}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="overflow-hidden object-contain size-10 md:size-16 shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.8)_inset] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset] p-1.5 rounded-md"
                      />
                      <h3 className="text-lg md:text-xl dark:text-gray-300 font-semibold mt-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm md:text-base text-center text-muted-foreground">
                        {skill.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
    )
}