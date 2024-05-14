"use client";
import React from 'react';
import { app } from "@/app/config"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { useRouter } from "next/navigation";
// import { JsonWebTokenError } from 'jsonwebtoken';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
export default function Signout() {
  const router = useRouter();
  const auth =getAuth(app)
  const handleLogout = () => {
    // Sign out from Firebase
    signOut(auth)
     .then(() => {
   
       document.cookie = `jwtToken=; max-age=0; path=/`;

        console.log("Signed out successfully and session cookie cleared");
  toast.success("You Signed Out ")
   
      //  router.push("/");
      })
     .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
  return (
    <div>
      <Button onClick={handleLogout}> signout</Button>
          
    </div>
  );
}
