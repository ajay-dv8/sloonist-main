"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Step into the world of style and elegance with Saloonist, your ultimate destination for all things beauty. We’re not just a salon and barber shop, we’re a family that values each member’s unique style and personality.`;

export function TextGenerateEffectMain() {
  return <TextGenerateEffect words={words} />;
}
