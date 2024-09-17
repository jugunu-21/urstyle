"use client"
import Hero from "@/components/home/hero/hero";
import Pairing from "@/components/home/pairing/pairing";
import Benefits from "@/components/home/features/features";
import { Category } from "@/components/home/hero/category"
import { HeroCarousel } from "@/components/home/hero/hero-carousel";
import { Collection } from "@/components/home/hero/card-collection"
import { useState } from "react";
export default function Page() {
  const [categoryQuery, setCategoryQuery] = useState<string>('')
  return (
    <main className="w-full border-2 border-red-200 ">
      <div className="justify-center  items-center  my-8 px-32  ">
        <Category setCategoryQuery={setCategoryQuery} />
      </div>
      <HeroCarousel />
      <Collection categoryQuery={categoryQuery} />
    </main>
  );
}
