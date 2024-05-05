"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import barberImage from "../../public/barberImage.jpg"
import salonImage from "../../public/salonImage.jpg"
import barberShopVector from "../../public/barberShopVector.png"
import salonVector from "../../public/salonVector.png"

export function LayoutGridMain() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">“Transformative Haircut Experience”</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the transformative power of a great haircut!, a testament to 
        Saloonist commitment to precision, style, and customer satisfaction. 
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">A wide list of Barbering services</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Saloonist we take pride in offering a comprehensive range of barbering &
        grooming services to cater for your unique style and preferences. We do, 
        haircuts & styling, shaving & beard trimming, hair coloring etc.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Exceptional hairdressing services</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience te difference of professional hairdressing at Saloonist. We are 
        committed to helping look and feel your best. we provide services such as
        braids, hair extensions, hair treatment, blowouts & styling, hair coloring etc.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Embrace your radience</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A customer in the process of getting her hair done at our salon. It&apos;s 
        a moment of transformation, a testament to the magic our skilled stylists 
        creativity
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: barberImage,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: barberShopVector,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: salonVector,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: salonImage,
  },
];
