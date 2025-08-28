'use client'

import Image from "next/image";
import { motion } from "framer-motion"



export const HeroSection = () => {
return (
<section id="home" className="px-4 py-10 sm:py-16 md:py-20 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
{/* Text Section */}
<div
className="order-2 md:order-1 lg:col-span-7 space-y-6"

>  
      <motion.p className="text-xl font-semibold tracking-widest md:text-2xl dark:text-gray-300"  
         initial={{opacity:0, x: -100}}  
        whileInView={{opacity:1, x: 0}}  
        transition={{duration:1, delay:0.2, ease:"easeIn"}}  
      >  
       Welcome To My World 
      </motion.p>  

      <h3 className="text-4xl sm:text-5xl font-bold dark:text-gray-300"  
        
      >  
        Hi, I'm <span className="text-primary"> Paltanjoy!</span>  
        <br />  
        a Web Analytics Specialist
      </h3>  

      <motion.p className="text-lg md:text-xl text-muted-foreground font-semibold"  
        initial={{opacity:0, x: -100}}  
        whileInView={{opacity:1, x: 0}}  
        transition={{duration:1, delay:0.4, ease:"easeIn"}}  
      >  
  Through data-driven tracking and smart optimization, I help businesses become more intelligent, profitable, and growth-focused. My mission is to provide you with accurate and actionable data, so you can make decisions based on facts, not guesswork.With a proper tracking system in place, you can identify your most valuable customers, target the right audience with precision, and re-engage past visitors. This not only reduces unnecessary ad spend but also significantly boosts conversions and ROI.I make sure that every dollar you invest in advertising works harder for your business. As a result, your campaigns deliver measurable growth, stronger performance, and long-term success. In today’s highly competitive market, running ads is not enough. Real success comes from the combination of accurate tracking, reliable data, and effective optimization.<br/><br/>
  
I work with powerful tools like Google Analytics (GA4), Google Tag Manager, Meta Pixel & Facebook CAPI, Server-Side Tracking, and Google Ads Conversion Tracking to ensure your campaigns are cost-effective and result-oriented.


      </motion.p>  
    </div>  

    {/* Image Section */}  
    <motion.div className="relative order-1 md:order-2 lg:col-span-5 flex justify-center"  
       initial={{opacity:0, y: -100}}  
       whileInView={{opacity:1, y: 0}}  
       transition={{duration:1, delay:0.4, ease:"easeIn"}}  
      
    >  
      {/* Background Box Behind Image */}  
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] bg-background shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_3px_rgba(0,0,0,0.25),-1px_-1px_4px_rgba(255,255,255,0.16)] rounded-md z-0" />  

      {/* Foreground Image */}  
      <Image  
        src={"/paltan.jpeg"}  
        alt={"Paltan Joy Tripura"}  
        width={1000}  
        height={1000}  
        className="relative z-10 object-contain h-[250px] sm:h-[280px] lg:h-[300px] w-auto"  
      />  
    </motion.div>  


  </div>  
</section>

);
};

