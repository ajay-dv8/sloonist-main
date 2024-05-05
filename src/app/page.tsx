"use client";

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
// import Image from 'next/image'
import Feature from './feature'
import { BadgeCent, Timer, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { LayoutGridMain } from '@/components/ServiceGrid'
import { ImageSlider } from '@/components/ImageSlider'
import { HighlightSection } from '@/components/HighlightSection'
import { SVGMaskEffect } from '@/components/SVGMaskEffect'
import { TextGenerateEffectMain } from '@/components/TextGenerateEffect'
import { TracingBeamMain } from '@/components/TracingBeam'
import { SparklesBg } from '@/components/SparklesBg'
import { useEffect } from 'react'
// import { LampBg } from '@/components/LampBg'

import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Home() {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography data-aos="zoom-in" className="max-w-2xl" variant="h1">
          Welcome To Saloonist  
        </Typography>

        <Typography data-aos="fade-up" data-aos-duration="3000" className="max-w-2xl" variant="h5">
          At Saloonist, we believe in the power of looking good
          and feeling great. Step into our salon for a transformation
          that leaves you feeling confident and refreshed.
        </Typography>

        <Link
          href=""
          target="_blank"
        >
          <Button 
            variant="ghost"
            className='rounded-none px-8 py-6 text-xl my-12'
            data-aos="zoom-in"
          >
            {`Book An Appointment`}
          </Button>
        </Link>

        {/* replace wit carousel */}
        <ImageSlider data-aos="zoom-in-down"/>

      </div>

      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          
          <Typography className="max-w-2xl" variant="h1">
            <span data-aos="zoom-in" className='opacity-30'>“ </span> Our &nbsp; Foundation <span className='opacity-30'>”</span>
          </Typography>

          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              data-aos="fade-right"
              icon={<Timer size={24} />}
              headline="“ Your Time, Our Priority ”"
              description="At Saloonist, your satisfaction is our highest priority. We promise to make your visit worth every minute."
            />
            <Feature
              data-aos="zoom-in"
              icon={<BadgeCent size={24} />}
              headline="“ Affordable Luxury ”"
              description="Experience the perfect blend of affordability and luxury at saloonist. Because when it comes to beauty, you shouldn't have to compromise"
            />
            <Feature
              data-aos="fade-left"
              icon={<UsersRound size={24} />}
              headline="“ We value You ”"
              description="At saloonist, you're not just a customer - you're part of our salon family. And your happiness is our highest reward"
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center">

            {/* About */}
          <div className="mb-20">
            <Typography className="max-w-2xl tracking-wide mb-16" variant="h1">
              <span data-aos="zoom-in" className='opacity-40'>Let me tell you something</span> <br/>
              about us !
            </Typography>

            <TracingBeamMain data-aos="zoom-out-up" />
          </div>

            {/* Our Works */}
          <div className="flex flex-col gap-x-4 max-w-full w-full items-center mt-8">
            <Typography data-aos="zoom-in" className="max-w-2xl mb-6" variant="h1">
              Our Works
            </Typography>

            <Typography data-aos="zoom-in-down" className="max-w-2xl opacity-40" variant="h5">
              At Saloonist we are committed to helping you look and feel your best 
              come experience the difference today.
            </Typography>

            <div className="w-full -mt-16">
              <LayoutGridMain />
            </div>

            <Link
              href=""

            >
              <Button data-aos="zoom-in" className='rounded-none px-8 py-6 text-xl font-normal -mt-16 bg-transparent text-white border hover:text-black transition-all duration-500' variant="ghost">
                {`More works ->`}
              </Button>
            </Link>

          </div>

            
        </div>

        <TextGenerateEffectMain data-aos="zoom-out-up"/>

        {/* join family at saloonist */}
        <HighlightSection data-aos="zoom-out-up"/>

        {/* mask article */}
        <SVGMaskEffect data-aos="zoom-out-down"/>

        {/* Contact Section */}
        <SparklesBg />

        {/* Tank you */}
        <Typography data-aos="fade-up"  variant="h4" className="opacity-40">
        “ We are here to help you look and feel your best <br />
          experience the difference. ”
        </Typography>
      </div>
    </div>
  )
}
