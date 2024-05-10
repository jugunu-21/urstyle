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
  

  return (
    <Signin />  )
   
  
}