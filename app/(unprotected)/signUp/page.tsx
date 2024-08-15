"use client"
import Signup from "@/components/authentications/signUp";


import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import toast from 'react-hot-toast';


export default function Page() {
 
  return (
   <Signup /> 
    // <div>signuppage</div>
  )
  

}