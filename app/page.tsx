"use client"
import Hero from "@/components/home/hero/Hero";
import Pairing from "@/components/home/pairing/Pairing";
import Benefits from "@/components/home/benefits/Benefit";
import Navbar from "@/components/layout/navbar/Navbar";
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
export default function page(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Pairing />
      <Benefits />
    </main>
  );
}
