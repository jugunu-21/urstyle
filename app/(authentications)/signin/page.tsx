"use client"
import Signin from "@/components/authentications/Signin";

import { app } from "@/app/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() { 

 
  const router = useRouter();
 const auth = getAuth(app);

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/signout');
      }
    });

   
    return () => unsubscribe();
 }, [auth]);

 return (
    <div >
      <Signin />
    </div>
 );
}