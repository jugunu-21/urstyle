"use client";
import { useRef } from 'react';
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import getTokenFromCookies from "@/components/helpers/getcookie";
export default function Product() {
  const [jwtToken, setJwtToken] = useState(null);
  const [pid, setPid] = useState(null);
  const [name, setName] = useState(null);
  const [code, setCode] = useState(null);
  const [link, setLink] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [image ,setImage] =useState(null)
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const resolvedToken = await getTokenFromCookies();
        console.log("Fetched jwtToken:", resolvedToken);
        setJwtToken(resolvedToken);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };

    fetchToken(); 
  }, []);
  console.log("jwtTokennnn",jwtToken);
 
  const handleSubmit = async () => {
    // const images = handleFileUpload();
    console.log(image)

    const requestBody = {
      pid: pid,
      name: name,
      code: code,
      link: link,
      description: description,
      price:price,
      image: image
    };
    console.log(requestBody);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/media/product/upload`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (!response.ok) {
      console.log("error");
      // throw new Error("Failed to fetch user details");
    } else {
      console.log("uploaded product");
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Upload product</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
           a
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div> */}
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div> */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="id"  className="text-right">
                id
              </Label>
              <input
                type="number"
                id="id"
                // accept="image/*"
                onChange={(e) => setPid(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Enter ur name
              </Label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="code" className="text-right">
                code
              </Label>
              <input
                type="text"
                id="code"
                onChange={(e) => setCode(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Link" className="text-right">
                Link
              </Label>
              <input 
                type="text"
                id="Link"
                // accept="image/*"
                onChange={(e) => setLink(e.target.value)}
                className="col-span-3 "
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <input
                type="text"
                id="description"
                // accept="image/*"
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price"className="text-right">
                price
              </Label>
              <input
                type="text"
                id="price"
                // accept="image/*"
                onChange={(e) => setPrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="photo" className="text-right">
                Add Photo
              </Label>
              <input
                type="text"
                id="photo"
                // accept="image/*"
                onChange={(e)=>setImage(e.target.value)}
                className="col-span-3"
              />
            </div>

          </div>
          <SheetFooter>
            <SheetClose>
              <Button variant="outline" onClick={handleSubmit}>
                Save
              </Button>
              {/* <Button onChange-={handleSubmit}>  submit</Button> */}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {/* 
         <Button  onChange={() => {console.log("clicked")}}>Click me</Button> */}
    </div>
  );
}
