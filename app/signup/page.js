"use client"
import Signup from "@/components/signup/Signup"
import{getAuth , onAuthStateChanged } from "firebase/auth"
// import React from 'react';
import { app } from "@/app/config"
import { useRouter } from "next/navigation";

import {useEffect} from "react"
export default function page() {
  const router=useRouter();
  const auth =getAuth(app)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('./welcome');
          
      }
    })
  }, [auth, router]);
  return (
    <div>
      <Signup/>
    </div>
  );
}

