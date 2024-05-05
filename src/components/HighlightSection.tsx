"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Button } from "./ui/button";
import Typography from "./ui/typography";

export function HighlightSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-full leading-relaxed lg:leading-snug text-center mx-auto flex flex-col"
      >

        <div className="">
          <Highlight className="text-black dark:text-white ">
            Join our family at Saloonist! 💇‍♀️💇‍♂️✨
          </Highlight>
        </div>
        
        <br/>
        <br/>

        <Typography className="leading-relaxed tracking-wide" variant="h1">
          Join us and step into a world where style meets sophistication,{" "} 
        </Typography>
        
        <br/>
        <br/>

        <div className="">
          <Button 
            variant="ghost"
            className='rounded-none px-8 py-6 text-xl my-12 '
          >
            {`Become a Prime Patron`}
          </Button>
        </div>

        <motion.p className="text-[1rem] opacity-40">
        Become a “Premier Patron” at Saloonist and experience the difference. As a Premier Patron, you’ll enjoy priority bookings, special discounts, and access to our latest services and products before anyone else.
        </motion.p>

        

      </motion.h1>
    </HeroHighlight>
  );
}
