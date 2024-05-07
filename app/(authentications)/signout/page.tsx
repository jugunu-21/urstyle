"use client"
import React from 'react';
import { app } from "@/app/config"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
export default function page() {
  const router = useRouter();
  const auth =getAuth(app)
  const handleLogout = () => {
    // Sign out from Firebase
    signOut(auth)
     .then(() => {
        // Sign-out successful.
        // Clear the session cookie
        // document.cookie = `sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        console.log("Signed out successfully and session cookie cleared");
  toast.success("You Signed Out ")
        // Redirect to home page or any other page
        router.push("/signin");
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
