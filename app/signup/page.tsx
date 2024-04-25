"use client"
import Signup from "@/components/authentication/Signup";
import { app } from "@/app/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import { useEffect } from "react";

export default function Page() { 

 const auth = getAuth(app);

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // router.push('/');
      }
    });

   
    return () => unsubscribe();
 }, [auth]);

 return (
    <div>
      <Signup />
    </div>
 );
}

