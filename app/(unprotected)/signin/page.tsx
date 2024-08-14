"use client"
import Signin from "@/components/authentications/signIn";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Page() {
  return (
    <Signin />  ) 
}