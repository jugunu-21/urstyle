




"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "@/app/config";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function Signup() {
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
          handleOtpSubmit();
        },
        "expired-callback": () => {},
      }
    );
  }, [auth]);
  const handlePhoneNumberChange = (event) => {
    // const inputPhoneNumber = event.target.value;

    setPhoneNumber(event.target.value);
    console.log("Phone number:", event.target.value);
  };
  // const handleOtpChange = (event) => {
  //   setOtp(event.target.value);
  // };
  const handleSendOtp = async () => {
    try {
      console.log("send otp");
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      // setPhoneNumber("");
      alert("Otp has been sent");
      console.log("handlsendotp");
    } catch (error) {
      console.error(error);
    }
  };
  // const handleOtpSubmit = async () => {
  //   try {
  //     console.log("hehehhhhh");
  //     await confirmationResult.confirm(otp);
  //     setOtp("");
  //     router.push("/signup/welcome");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const handleOtpSubmit = async () => {
    try {
      // Assuming 'phoneNumber' contains the phone number value
      const requestBody = {
       email:"aarukhuue@gmail.com",
        phone_number: phoneNumber,
        password:"vfefsdfgf"
      };
  
      // Make a POST request to your backend API to store the phone number
      const response = await fetch('http://localhost:8000/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      // Check if the response is successful (status code 200-299)
      if (response.ok) {
        console.log('Phone number stored successfully on the backend.');
  
        // Assuming 'confirmationResult' and 'otp' are defined elsewhere
        await confirmationResult.confirm(otp);
        setOtp("");
        setPhoneNumber("");
        router.push("/");
      } else {
        // If the response is not successful, handle the error
        console.error('Failed to store phone number on the backend:', response.statusText);
      }
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
            <h1 className="text-3xl font-bold">signup</h1>
            <p className="text-balance text-muted-foreground">
              Enter your phone number below to signup
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
                  <InputOTP
                 
                    maxLength={6}
                    value={otp}
                    onChange={(otp) => setOtp(otp)}
                   >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
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
              signup
            </Button>
            <Button variant="outline" className="w-full">
              signup with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <Link href="#" className="underline">
              Sign in
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
