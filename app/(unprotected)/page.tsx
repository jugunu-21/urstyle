"use client"

import Benefits from "@/components/home/benefits/benefit";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Hero from "@/components/home/hero/Hero";
import Pairing from "@/components/home/pairing/Pairing";
export default function Page() {

  return (
    <main>
  
      <Hero />
      <Pairing />
      <Benefits />
    
    </main>
  );
}
