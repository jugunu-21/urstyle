"use client"
import Hero from "@/components/home/hero/Hero";
import Pairing from "@/components/home/pairing/Pairing";
import Benefits from "@/components/home/benefits/Benefit";
// import Image from "next/image";
import { useEffect } from 'react';
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
// import Cookies from 'js-cookie';
// import { Toaster } from 'react-hot-toast';
export default function Home() {
  // const router = useRouter();
  // const sessionId = Cookies.get('sessionId');
  // useEffect(() => {
  //   const sessionId = Cookies.get('sessionId');
  //   if (!sessionId) {
  //     alert("sessionIdhere")
  //   alert(sessionId)  // Redirect to login page if not authenticated
  //     router.push('/signin');
  //     alert("you can signin")
  //   }
  // }, []);
  return (
    <main>
      <Hero />
      <Pairing />
      <Benefits />
      {/* <Toaster /> */}
    </main>

  );
}
