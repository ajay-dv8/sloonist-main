/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
// import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { cn } from "@/utils/cn";
import Typography from "./ui/typography";

import AOS from 'aos';
import 'aos/dist/aos.css'

export function TracingBeamMain() {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <TracingBeam className="px-6 w-full">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 data-aos="fade-out" className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={cn("text-xl mb-4")}>
              {item.title}
            </p>

            <div data-aos="fade-left" data-aos-duration="2000" className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "We are about giving you te best.",
    description: (
      <>
        <Typography variant="p" className="tracking-wide leading-loose">
          Welcome to Saloonist, where your style is our passion. We are more than just a salon and barber shop - we are a haven of beauty and relaxation that caters to all your grooming needs.

          At Saloonist, we believe in the power of transformation. We understand that looking good is not just about vanity, but about feeling confident and expressing your unique personality. That’s why we are committed to providing our clients with top-notch services that leave them feeling refreshed, rejuvenated, and ready to conquer the world.
        </Typography>
        <Typography variant="p" className="tracking-wide leading-loose">
        Our team of highly skilled stylists and barbers are trained in the latest trends and techniques, ensuring that you always get the best. Whether you’re looking for a fresh haircut, a relaxing facial, or a complete makeover, we’ve got you covered.
        </Typography>
        <Typography variant="p" className="tracking-wide leading-loose">
        But we don’t stop at providing excellent services. We also strive to create a warm and welcoming environment where you can relax and enjoy your time with us. From the moment you step into our salon, you’ll be treated like a VIP.
        </Typography>
      </>
    ),
    badge: "Our Establishment",
    image:
      "https://img.freepik.com/free-photo/beautiful-afro-american-woman_144627-13084.jpg?t=st=1714866123~exp=1714869723~hmac=00f351d86ad3ea260e2dc927d61100ee25d8b1778634695e91448797d30503c0&w=740",
  },
  {
    title: "The Premier Patron Experience",
    description: (
      <>
        <Typography variant="p" className="tracking-wide leading-loose">
        Welcome to the Saloonist Barber Shop, where every snip is a step towards perfection. Our expert barbers are dedicated to delivering precision cuts and smooth shaves, tailored to suit your style. As a Premier Patron, you’ll enjoy a personalized grooming experience in a relaxed and comfortable atmosphere. Step into our barber shop and leave with a renewed sense of confidence.
        </Typography>
      </>
    ),
    badge: "Our Barber Shop",
    image:
      "https://img.freepik.com/free-vector/barber-shop-hair-styling-tools-supplies-set-realistic-monochrome-top-view-with-shaving-brush-vector-illustration_1284-30216.jpg?w=996&t=st=1714865972~exp=1714866572~hmac=8ed6a4329af46806540ea5071d9f427c048d3a0c688547ba5bd025d12cfa7e77",
  },
  {
    title: "Elegance Redefined",
    description: (
      <>
        <Typography variant="p" className="tracking-wide leading-loose">
          Step into the world of beauty with Saloonist Salon. Our professional stylists are committed to bringing out your inner radiance with our range of services. From trendy haircuts to rejuvenating facials, we ensure our clients leave feeling pampered and beautiful. As a valued client, your satisfaction is our top priority. Experience elegance redefined at Saloonist Salon. 
        </Typography>
      </>
    ),
    badge: "Our Salon",
    image:
      "https://img.freepik.com/free-psd/3d-rendering-hairdressing-blank-banner-sales_23-2151244435.jpg?w=1380&t=st=1714866103~exp=1714866703~hmac=651ae56dcf67405a2c42c9e2fa01b88698d73f48899a6bb8fc1711c974992c2d",
  },
];
