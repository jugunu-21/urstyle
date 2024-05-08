"use client"
import Signup from "@/components/authentications/Signup";
import { app } from "@/app/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import toast from 'react-hot-toast';

import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  const auth = getAuth(app);
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
        router.push("/signup");
      })
     .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(true); // Redirect to sign out page if user is authenticated
      } else {
        setIsLoading(false); // Set loading to false if no user is found
      }
    });

    return () => unsubscribe();
  }, [auth, router]);
  return (
    isLoading ? (<Button onClick={handleLogout}> signout</Button>  ):(  <Signup />  )
   
  )
  

}