"use client"
import { Category } from "@/components/home/hero/category"
import { HeroCarousel } from "@/components/home/hero/hero-carousel";
import { Collection } from "@/components/home/hero/collection"
import { useState } from "react";
export default function Page() {
  const [categoryQuery, setCategoryQuery] = useState<string>('')
  return (
    <main className="w-full ">
      <div className="justify-center  items-center  my-8 px-4 sm:px-32  ">
        <Category setCategoryQuery={setCategoryQuery} />
      </div>
      <HeroCarousel />
      <Collection categoryQuery={categoryQuery} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-auto" />
    </main>
  );
}
