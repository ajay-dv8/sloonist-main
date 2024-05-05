"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffect() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold tracking-wider">
            By joining us, you’ll not only transform your look but also enjoy a plethora of amazing benefits. From exclusive discounts to personalized services, we ensure our customers feel valued and pampered.
          </p>
        }
        className="h-[40rem] border rounded-md tracking-wide leading-6"
      >
        By joining <span className="text-red-500">saloonist</span>, you’ll not only transform your look but also <span className="text-red-500"> enjoy </span> a plethora of amazing <span className="text-red-500"> benefits</span>. and From exclusive <span className="text-red-500"> discounts </span> to <span className="text-red-500"> personalized services </span> we ensure our customers feel valued and pampered.
      </MaskContainer>
    </div>
  );
}
