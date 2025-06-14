"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Gig } from "@/types/type";
import { motion } from "framer-motion";

interface Props {
  gig: Gig;
}

export const Pricing = ({ gig }: Props) => {
  const PRICING = {
    basic: gig.basic && {
      title: gig.basic.title,
    
      desc: gig.basic.desc,
      price: gig.basic.price,
      todo: gig.basic.features,
    },
    standard: gig.standard && {
      title: gig.standard.title,
   
      desc: gig.standard.desc,
      price: gig.standard.price,
      todo: gig.standard.features,
    },
    premium: gig.premium && {
      title: gig.premium.title,
  
      desc: gig.premium.desc,
      price: gig.premium.price,
      todo: gig.premium.features,
    },
  };

  return (
    <section
      id="pricing"
      className="space-y-4 md:space-y-8 grid grid-cols-1 md:grid-cols-12 py-20"
    >
      <div className="md:col-span-6">
        <motion.p
          className="text-primary font-semibold text-lg md:text-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeIn" }}
        >
          Pricing
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-bold dark:text-gray-300"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
        >
          My Pricing
        </motion.h2>
      </div>

      <div className="md:col-span-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="w-full flex gap-y-2 flex-wrap items-center justify-around rounded-md shadow-md">
            {Object.keys(PRICING).map((key) => (
              <TabsTrigger key={key} value={key} className="font-semibold capitalize">
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(PRICING).map(
            ([category, data], tabIndex) =>
              data && (
                <TabsContent key={category} value={category} className="mt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: tabIndex * 0.2,
                      ease: "easeIn",
                    }}
                  >
                    <Card>
                      <CardContent className="space-y-10">
                        <div className="flex items-center justify-between gap-8 flex-wrap">
                            <h3 className="text-2xl font-bold dark:text-gray-300 capitalize">{data.title}</h3>
                          <Button type="button" className="md:px-10 px-8 py-5 text-lg">
                            $ {data.price}
                          </Button>

                        </div>

                        <p className="text-muted-foreground ">{data.desc}</p>

                        <div className="grid grid-cols-2 gap-x-2">
                          {data.todo.map((feature, i) => (
                            <div
                              key={i}
                              className="flex gap-x-3 items-center text-muted-foreground text-base font-semibold"
                            >
                              <Check className="size-4" /> {feature}
                            </div>
                          ))}
                        </div>

                        {gig.orderLink && (
                          <a href={gig.orderLink} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full hover:bg-primary hover:text-foreground transition-all duration-200">
                              Order Now
                            </Button>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              )
          )}
        </Tabs>
      </div>
    </section>
  );
};
