"use client"
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { app } from "@/app/config"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
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
interface UserInfo {
  phone_number?: string; 
}
import { Collection } from "@/components/home/hero/card-collection";
import { Sheet, SheetClose, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
export default function Navbardrop() {
  const jwtToken = useToken().token
  const [liked, setLiked] = useState<boolean>(false);
  const auth = getAuth(app)
 const handleLogout = () => {
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
  const [sheetOpenLikedCollection, setSheetOpenLikedCollection] = useState(false);
  return (
    <div>
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
            <DropdownMenuItem onClick={() =>{ setLiked(true); setSheetOpenLikedCollection(true)} }>Wishlist</DropdownMenuItem>
            <DropdownMenuItem >   <Link href="/admin/product">Admin Dashboard</Link></DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            <DropdownMenuItem onClick={handledeleteuser}>Delete User</DropdownMenuItem>
          </>}
          {jwtToken === null && <> <DropdownMenuItem>
            <Link href="/sign-up">Signup</Link>
          </DropdownMenuItem>
            <DropdownMenuItem>   <Link href="/sign-in">Login</Link></DropdownMenuItem></>
          }
        </DropdownMenuContent>
      </DropdownMenu>
      {liked &&
      <Sheet open={sheetOpenLikedCollection} onOpenChange={setSheetOpenLikedCollection}>
        <SheetContent className="h-full overflow-y-auto" >
          <div className=" overflow-y-auto w-full  h-full">
            <Collection likedQuery="user"  />
          </div>
          <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={()=>setSheetOpenLikedCollection(false)}>close</Button>
          </SheetClose>
        </SheetFooter>
        </SheetContent>
      </Sheet>}
    </div>
  );
}
