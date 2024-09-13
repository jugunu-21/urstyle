"use client"
import React from "react";
import Cookies from 'js-cookie';
import { app } from "@/app/config"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import deleteUser from "@/components/authentications/delete-user/delete-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import Image from "next/image";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
export default function Navbardrop() {
  const jwtToken = useToken().token

  const router = useRouter();
  const auth = getAuth(app)
  const handleLogout = () => {
    // Sign out from Firebase
    signOut(auth)
      .then(() => {
        Cookies.remove('jwtToken', { path: '/' });
        console.log("Signed out successfully and session cookie cleared");
        window.location.reload()
        toast.success("successfully sign Out")
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  const handledeleteuser = () => {
    deleteUser();

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
      <Image
              width={100}
              height={100}
          className="h-8 w-10 rounded-full"
          src="https://cdnb.artstation.com/p/assets/images/images/048/110/613/small/pankaj-kumar-roy-12.jpg?1649236129"
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {jwtToken !== null && <>
          <DropdownMenuItem >   <Link href="/admin/product">Products</Link></DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          <DropdownMenuItem onClick={handledeleteuser}>DeleteUser</DropdownMenuItem>
        </>}
        {jwtToken === null && <> <DropdownMenuItem>
          <Link href="/sign-up">Signup</Link>
        </DropdownMenuItem>
          <DropdownMenuItem>   <Link href="/sign-in">Login</Link></DropdownMenuItem></>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
