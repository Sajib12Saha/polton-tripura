'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  name: string;
  professionBio: string;
  welcomeMessage: string;
  primaryImage: string;
  secondaryImage: string;
  profession: string;
}

export const HeroSection = ({
  name,
  profession,
  primaryImage,
  professionBio,
  secondaryImage,
  welcomeMessage,
}: Props) => {
  // Typing Effect Logic
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + profession.charAt(i));
      i++;
      if (i >= profession.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [profession]);

  return (
    <section id="home" className="px-4 py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="order-2 md:order-1 lg:col-span-7 space-y-6">
          <motion.p
            className="text-xl font-semibold tracking-widest md:text-2xl dark:text-gray-300"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeIn" }}
          >
            {welcomeMessage}
          </motion.p>

          <h3 className="text-4xl sm:text-5xl font-bold dark:text-gray-300">
            Hi, I'm <span className="text-primary">{name}</span>
            <br />
            a{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary"
            >
              {typedText}
            </motion.span>
          </h3>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
          >
            {professionBio}
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="relative order-1 md:order-2 lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
        >
          {/* Background Box Behind Image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] bg-background shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)] rounded-md z-0" />

          {/* Foreground Image */}
          <Image
            src={secondaryImage}
            alt={name}
            width={1000}
            height={1000}
            className="relative z-10 object-contain h-[250px] sm:h-[280px] lg:h-[300px] w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
