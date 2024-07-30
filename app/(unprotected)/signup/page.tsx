"use client"
import Signup from "@/components/authentications/Signup";

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import toast from 'react-hot-toast';

import { Button } from "@/components/ui/button";

export default function Page() {
 
  return (
   <Signup /> 
    // <div>signuppage</div>
  )
  

}