"use client"

import React from "react";
import Cookies from 'js-cookie';
import { app } from "@/app/config"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import deleteUser from "@/components/authentications/deleteUser";


export default function Navbardrop() {


  const router = useRouter();
  const auth = getAuth(app)
  const handleLogout = () => {
    // Sign out from Firebase
    signOut(auth)
      .then(() => {
        Cookies.remove('jwtToken', { path: '/' });
        console.log("Signed out successfully and session cookie cleared");

        // Redirect to home page or any other page
        router.push("/");
        toast.success("successfully sign Out")
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
  const handledeleteuser = () => {
    deleteUser();

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          className="h-8 w-10 rounded-full"
          src="https://cdnb.artstation.com/p/assets/images/images/048/110/613/small/pankaj-kumar-roy-12.jpg?1649236129"
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/signup">signup</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}> signout</DropdownMenuItem>
        <DropdownMenuItem>   <Link href="/signin">Login</Link></DropdownMenuItem>
        <DropdownMenuItem >   <Link href="/admin/product">Products</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={handledeleteuser}>deleteUser</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
