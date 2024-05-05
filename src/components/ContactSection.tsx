import React, { useEffect } from 'react'
import Typography from './ui/typography'
import Link from 'next/link'
import { Button } from './ui/button'
import AOS from 'aos';
import 'aos/dist/aos.css'

const ContactSection = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <div className="flex flex-col gap-6 items-center">
      <Typography data-aos="zoom-out-up" className="max-w-2xl" variant="h1">
        Get in touch with us
      </Typography>
      <Typography data-aos="zoom-out-down" className='opacity-40' variant="h5">Send us a direct message</Typography>

      <div className="flex flex-col md:flex-row">
        <Link
          href=""
          target="_blank"
        >
          <Button data-aos="fade-in" className='rounded-none px-8 py-6 text-xl m-6' variant="ghost">
            {`Send us a message`}
          </Button>
        </Link>

        <Link
          href=""
          target="_blank"
        >
          <Button data-aos="fade-out" className='rounded-none px-8 py-6 text-xl m-6' variant="ghost">
            {`Book an appointment`}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ContactSection