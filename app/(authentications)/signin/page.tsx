"use client"
import Signin from "@/components/authentications/Signin";

import { app } from "@/app/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
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
    isLoading ? (<Button onClick={handleLogout}> signout</Button>  ):(  <Signin />  )
   
  )
}