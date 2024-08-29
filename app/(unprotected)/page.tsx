"use client"
import Hero from "@/components/home/hero/hero";
import Pairing from "@/components/home/pairing/pairing";
import Benefits from "@/components/home/features/features";
import { CategoryCarousel } from "@/components/home/hero/category-carousel"
import { HeroCarousel } from "@/components/home/hero/hero-carousel";
export default function Page() {
  return (
    <main className="w-full border-2 border-red-200 ">
      <div className="flex justify-center border-2   border-red-500  items-center  my-8 px-32  ">
        <div className="border-2 border-gray-950 aspect-square h-16 rounded-full items-center text-center p-0 m-0">hey</div>
        <CategoryCarousel />
      </div>
      <HeroCarousel />
      <Hero />
      <Pairing />
      <Benefits />
    </main>
  );
}
