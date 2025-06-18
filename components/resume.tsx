'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Resume as ResumeType } from "@/types/type";
import { motion } from "framer-motion";

interface Props {
  resume: ResumeType;
}

export const Resume = ({ resume }: Props) => {
  const [activeEducation, setActiveEducation] = useState<number | null>(null);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  const { education, experience } = resume;

  return (
    <section id="resume" className="space-y-4 md:space-y-8 py-20">
      <div className="flex flex-col items-center justify-center">
        <motion.p
          className="text-primary font-semibold text-lg md:text-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeIn" }}
        >
          YEARS OF EXPERIENCE
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-bold dark:text-gray-300"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
        >
          My Resume
        </motion.h2>
      </div>

      <Tabs defaultValue="education" className="w-full">
        <TabsList className="w-full flex gap-y-2 flex-wrap items-center justify-around rounded-md shadow-md">
          <TabsTrigger value="education" className="font-semibold">Education</TabsTrigger>
          <TabsTrigger value="experience" className="font-semibold">Experience</TabsTrigger>
        </TabsList>

        {/* === Education Tab === */}
        <TabsContent value="education" className="py-8 lg:px-14">
          <div className="relative border-l-4 border-neutral-300 dark:border-black/30 ml-4 pl-4">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-10 group"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.4, ease: "easeIn" }}
              >
                {index !== education.length && (
                  <span className="absolute left-[-2px] top-6 h-1 w-full bg-neutral-300 dark:bg-black/30 z-[-1] max-w-lg" />
                )}

                <button
                  onMouseEnter={() => setActiveEducation(index)}
                  onMouseLeave={() => setActiveEducation(null)}
                  className={cn(
                    "absolute left-[-24px] z-10 top-5 w-3 h-3 rounded-full shadow-[0_0_0_4px] shadow-neutral-300 dark:shadow-black/30 transition-all duration-300 cursor-pointer",
                    activeEducation === index
                      ? "bg-primary -z-0"
                      : "bg-background"
                  )}
                ></button>

                <div className="ml-8">
                  <Card
                    onMouseEnter={() => setActiveEducation(index)}
                    onMouseLeave={() => setActiveEducation(null)}
                    className="max-w-lg"
                  >
                    <CardContent className="space-y-2">
                      <h3 className="text-xl font-bold dark:text-gray-300">{item.degree}</h3>
                      <p className="text-base text-muted-foreground font-semibold">
                        {item.institution}
                      </p>
                      <p className="text-base text-muted-foreground font-semibold">{item.startYear} -  {item.endYear}</p>
                      <p className="text-base text-primary font-medium">{item.cgpa === 0 ? "Ongoing" : item.cgpa}</p>
                      <p className="text-base text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* === Experience Tab === */}
        <TabsContent value="experience" className="py-8 lg:px-14">
          <div className="relative border-l-4 border-neutral-300 dark:border-black/30 ml-4 pl-4">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-10 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.4, ease: "easeIn" }}
              >
                {index !== experience.length && (
                  <span className="absolute left-[-2px] top-6 h-1 w-full max-w-lg bg-neutral-300 dark:bg-black/30 z-[-1]" />
                )}

                <button
                  onMouseEnter={() => setActiveExperience(index)}
                  onMouseLeave={() => setActiveExperience(null)}
                  className={cn(
                    "absolute left-[-24px] z-10 top-5 w-3 h-3 rounded-full shadow-[0_0_0_4px] shadow-neutral-300 dark:shadow-black/30 transition-all duration-300 cursor-pointer",
                    activeExperience === index ? "bg-primary" : "bg-background"
                  )}
                ></button>

                <div className="ml-8">
                  <Card
                    onMouseEnter={() => setActiveExperience(index)}
                    onMouseLeave={() => setActiveExperience(null)}
                    className="max-w-lg"
                  >
                    <CardContent className="space-y-2">
                      <h3 className="text-xl font-bold dark:text-gray-300">
                        {item.profession} at <span className="text-primary">{item.company}</span>
                      </h3>
                      <p className="text-sm text-primary">
                  Technologies:{" "}
                  <span className="font-medium ml-1 text-muted-foreground">
                    {item.technology.join(", ")}
                  </span>
                </p>
                      <p className="text-base text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
