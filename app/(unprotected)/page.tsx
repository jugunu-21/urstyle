"use client"
import Hero from "@/components/home/hero/Hero";
import Pairing from "@/components/home/pairing/Pairing";
import Benefits from "@/components/home/benefits/Benefit";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
export default function Page() {

  return (
    <main>
  
      <Hero />
      <Pairing />
      <Benefits />
    
    </main>
  );
}
