"use client";
import  { useRef } from 'react';
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
  const [image, setImage] = useState("default string ");
  const imageRef = useRef();
  useEffect(() => {
    getTokenFromCookies().then((resolvedToken) => {
      setJwtToken(resolvedToken);
      console.log("jwtToken", jwtToken);
    });
    // setJwtToken(token);
  }, []);
  console.log(jwtToken);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected');
      setImage(file) 
      return file;
    }

  };
  const handleSubmit = async (jwtToken) => {
    // const images = handleFileUpload();
    console.log(image)

    const requestBody = {
      id: 1,
      name: "test",
      code: "1",
      link: "asdfghj",
      image: `${image}`,
      description: "test",
      price: "100",
      review:[{
        "iiid":"dfghj"
      }]
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
              Make changes to your profile here. Click save when you're done.
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
              <Label htmlFor="photo" className="text-right">
                Add Photo
              </Label>
              <input
                type="file"
                id="photo"
                // accept="image/*"
                onClick={handleFileUpload}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose>
              <Button variant="outline" onClick={handleSubmit}>
                Save
              </Button>
              {/* <Button onClick-={handleSubmit}>  submit</Button> */}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {/* 
         <Button  onClick={() => {console.log("clicked")}}>Click me</Button> */}
    </div>
  );
}
