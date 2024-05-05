import Image from 'next/image'
import { cn } from '@/lib/utils'
// import AOS from 'aos';
// import 'aos/dist/aos.css'
// import { useEffect } from 'react';

interface AboutProps  {
  className?   : string;
  title?       : string;
  description? : string;
  image?       : string | any;
}

const About = ({ className, title, description, image } : AboutProps) => {

  // useEffect(() => {
  //   AOS.init({duration: 1000});
  // },[]);

  return (
    
      <div className={cn("container flex justify-between items-center gap-20 sm:gap-18 h-full text-gray-800" , className)}>

        <div className="flex-1 mx-2">
          <h1 data-aos="fade-right-down" className='text-xl py-4 pb-8 font-semibold drop-shadow-lg'>{title}</h1>

          <p data-aos="fade-right"  className='text-lg opacity-90'>{ description }</p>

          <div className="pt-8 opacity-70 hover:opacity-100 hover:drop-shadow-lg hover:text-[0.9rem] transition-all duration-500">
            More About Us {"->"}
          </div>
        </div>

        <div className="flex-1 mx-2">
          <div data-aos="fade-left">
            <Image src={image} alt=""  className="drop-shadow-lg"/>
          </div>
        </div>

    </div>
    
  )
}

export default About