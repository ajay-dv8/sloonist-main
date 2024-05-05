"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";

// import img1 from "../../public/img1.jpg"
// import img2 from "../../public/img2.jpg"

export function ImageSlider() {
  const images = [
    "https://img.freepik.com/free-photo/stylist-woman-taking-care-her-client-afro-hair_23-2149259393.jpg?t=st=1714845254~exp=1714848854~hmac=9e12b990d170b04db487bb6ba9c2fcf8ff0a2c1d074683058003adc9d5787820&w=996",

    "https://img.freepik.com/free-photo/high-angle-man-getting-haircut_23-2150665401.jpg?t=st=1714845483~exp=1714849083~hmac=ae1262d7380b9aac51122b0cc1ed1807216e5de3b4851f799831a1c05a2f3d1e&w=996",

    "https://img.freepik.com/free-photo/woman-getting-her-hair-done-salon_23-2148976115.jpg?t=st=1714845565~exp=1714849165~hmac=aad0beece3934e0ab0e0feed55f9254e0bb62672bc6c2bb4f64ddc42a780fc94&w=996",

    "https://img.freepik.com/free-photo/hairdresser-grooming-their-client_23-2149205916.jpg?t=st=1714845561~exp=1714849161~hmac=ab2f6b177ab6403cda0851a694965a0153869be948a2b3a93d0467aec58464c7&w=996",

    "https://img.freepik.com/free-photo/side-view-hairdresser-washing-man-s-hair_23-2150665393.jpg?t=st=1714845822~exp=1714849422~hmac=e1ad33794f018c707238e4d1dbe16a1c5e424001549298b71666190a3c63acfd&w=996",
  ];
  
  return (
    <ImagesSlider className="h-[40rem] rounded-2xl w-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* slider overlay */}

        {/* 
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> 
        */}
      </motion.div>
    </ImagesSlider>
  );
}
