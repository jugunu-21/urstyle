




"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber

} from "firebase/auth";
import { app } from "@/app/config";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OtpInput from "./OtpInput";

 
export default function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const [otpSent, setOtpSent] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();
 
  useEffect(() => {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
        
          },
          "expired-callback": () => {},
        }
    );
 
   
  }, [auth]);
  const handlePhoneNumberChange = (event) => {

    setPhoneNumber(event.target.value);
    console.log("Phone number:", event.target.value);
  
  };
  
  const handleSendOtp = async () => {
    try {
        console.log("send otp");
        const requestBody = {
            phone_number: phoneNumber
      
          };
          console.log(requestBody)
        
          console.log(process.env.NEXT_PUBLIC_SIGNUP_API);
    
          const response = await fetch(process.env.NEXT_PUBLIC_SIGNIN_API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
         
          if (response.ok) {
            console.log('Phone number verified in db .');
          
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
            console.log(formattedPhoneNumber);
            const confirmation = await signInWithPhoneNumber(
              auth,
              formattedPhoneNumber,
              window.recaptchaVerifier
            );
            console.log(confirmation)
            setConfirmationResult(confirmation);
            setOtpSent(true);
            alert("Otp has been sent");
              console.log("handlsendotp");
              return true;
          } else {
           
              console.error('phone number doesnot exsist :', response.statusText);
              return false; 
          }
    } catch (error) {
        console.error(error);
        // return false
    }
  };
 
  const handleOtpSubmit = async () => {
    try {
        await confirmationResult.confirm(otp);
        setPhoneNumber("");
      setOtp("");
      router.push("/");
    } catch (error) {
      console.error('Error occurred while storing phone number:', error);
    }
  };
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      {!otpSent ? <div id="recaptcha-container"></div> : null}
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">signin</h1>
            <p className="text-balance text-muted-foreground">
              Enter your phone number below to signin
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter 10-digit phone number with countrycode"
                className="your-class-names-here"
              />
              <button
                className="text-center text-sm hover:cursor-pointer"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </div>
            <div className="grid gap-2">
              <div className=" items-center">
                <Label>Enter OTP</Label>
                <div className="space-y-2">
                  <OtpInput otp={otp} setOtp={setOtp}/>
                  <div className="text-center text-sm">
                    {otp === "" ? (
                      <>Enter your one-time otp</>
                    ) : (
                      <>You entered: {otp}</>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full" onClick={handleOtpSubmit}>
              signin
            </Button>
            <Button variant="outline" className="w-full">
              signin with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
           Dont have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
