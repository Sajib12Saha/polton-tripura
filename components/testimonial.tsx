"use client"

import { useRef, useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "./ui/separator"
import Image from "next/image"
import { Star, StarHalf } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Testimonial as ResponseTestimonials } from "@/types/type"

interface Props {
  testimonials: ResponseTestimonials[]
}

export const Testimonial = ({ testimonials }: Props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const getStarRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 >= 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStar

    return [
      ...Array(fullStars).fill(null).map((_, i) => (
        <Star key={`full-${i}`} className="fill-yellow-600 stroke-yellow-500" size={10} />
      )),
      ...Array(halfStar).fill(null).map((_, i) => (
        <StarHalf key={`half-${i}`} className="fill-yellow-600 stroke-yellow-500" size={10} />
      )),
      ...Array(emptyStars).fill(null).map((_, i) => (
        <Star key={`empty-${i}`} className="stroke-yellow-500" size={10} />
      )),
    ]
  }

  return (
    <section className="space-y-6 md:space-y-8 py-20" id="testimonial">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.p
          className="text-primary font-semibold text-lg md:text-xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeIn" }}
        >
          What Clients Say
        </motion.p>
        <motion.h2 className="text-4xl md:text-5xl font-bold dark:text-gray-300">
          Testimonial
        </motion.h2>
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        <Carousel className="w-full" setApi={setApi} plugins={[plugin.current]}>
          <CarouselContent className="mt-8 shrink-0 p-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="w-full flex gap-4 flex-col md:flex-row items-start"
              >
                {/* Client Info Card */}
                <Card className="w-full lg:w-60">
                  <CardContent className="w-full flex flex-col items-center text-center space-y-4">
                    <Image
                      src={testimonial.image as string || "/placeholder.jpg"}
                      alt={testimonial.name}
                      height={400}
                      width={400}
                      className="object-cover w-full rounded-md"
                    />
                    <div>
                      <h3 className="text-xl dark:text-gray-300 font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.authorProfession} @ {testimonial.companyName}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Review Content Card */}
                <Card className="w-full md:w-2/3">
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-start">
                        <h3 className="dark:text-gray-300 font-semibold text-xl">
                          {testimonial.projectTitle}
                        </h3>
                        <p className="text-sm font-semibold text-muted-foreground">
                          {testimonial.platform} -{" "}
                          <span className="ml-2">
                            {new Date(testimonial.startDate).toLocaleDateString("en-GB", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}{" "}
                            -{" "}
                            {new Date(testimonial.endDate).toLocaleDateString("en-GB", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </p>
                      </div>
                      <p className="flex items-center gap-x-0.5 ">
                        {getStarRating(testimonial.rating)}
                      </p>
                    </div>

                    <Separator />

                    <p className="text-base text-muted-foreground font-semibold italic">
                      “ {testimonial.message} ”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons: grouped in a flex container */}
          <div className="absolute top-0 right-1/8 flex gap-2 z-10">
            <CarouselPrevious />
            <CarouselNext />
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-x-3 flex-wrap mt-1.5">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2.5 cursor-pointer rounded-full transition-all shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.8)_inset] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25)_inset,-1px_-1px_4px_rgba(255,255,255,0.16)_inset]",
                  current === index ? "bg-primary" : "bg-input"
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
