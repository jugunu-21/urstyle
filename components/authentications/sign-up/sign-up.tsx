"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { isFirebaseAuthError } from '@/utils/firebase-auth-error';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { api } from "@/trpc/react";
import { app } from "@/app/config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import OtpInput from "../auth-utils/layout/otp-input";
import toast from "react-hot-toast";
import { ConfirmationResult } from "firebase/auth";
import { useToken } from "../../helpers/zustand";
export default function Signup() {
  const changeToken = useToken((state) => (state.changeToken))
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpSentYN, setOtpSentYN] = useState("");
  const auth = getAuth(app);
  const router = useRouter();
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {},
        "expired-callback": () => {},
      }
    );
  }, []);
  const handlePhoneNumberChange = (value:string) => {
    setPhoneNumber(value);
  };
  const signUp= api.auth.sIgnup.useMutation();
  const handleSendOtp = async () => {
    try {
      console.log("send otp");
      const formattedPhoneNumber = `+${phoneNumber.replace(
        /\D/g,
        ""
      )}`;

      console.log("formattedPhoneNumber",formattedPhoneNumber);
     
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      console.log("confirmation",confirmation);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setOtpSentYN("yes");
      toast.success("Otp has been sent");
      console.log("handlsendotp");
    } catch (error) {
    
      if (isFirebaseAuthError(error)) {
        if (error instanceof Error && error.message.includes("reCAPTCHA")) {
          toast.error("There was an issue with reCAPTCHA verification. Please try again.");
        }
        else if ((error as any).code === 'auth/invalid-phone-number') {
          toast.error("The phone number you entered is invalid. Please try again.");
        }
        else {
          toast.error("An unexpected error occurred. Please try again ");
        }
      }
      else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      window.location.reload()
    }
  };
  const handleOtpSubmit = async () => {
    try {
      await confirmationResult?.confirm(otp);
      setOtp("");
      const phonenumbertosend = `${phoneNumber.replace(
        /\D/g,
        ""
      )}`;
      setPhoneNumber("");
      const requestBody = {
        phone_number: phonenumbertosend,
      };
      console.log(requestBody);
      const result = await signUp.mutateAsync(requestBody)
     
        const jwtToken = result.data;
        Cookies.set('jwtToken', jwtToken, { expires: 1, path: '/', secure: true });
        changeToken(jwtToken)
        router.push("/");
        toast.success( "sucessfully signup");
        setPhoneNumber("");
     
    } catch (error) {
    
      if (isFirebaseAuthError(error)) {
        if ((error as any).code === 'auth/invalid-verification-code') {
          toast.error("The verification code you entered is incorrect. Please try again.");
        }
        else {
          toast.error("An unexpected error occurred. Please try again later.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      window.location.reload()
    }
  };
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (phoneNumber=="") {
      event.preventDefault();
      let result: string;
      result = "Please enter correct phone number phone number ";
      alert(result);
    }
  };
  return (
    <div className="w-full lg:grid lg:min-h-[600px]  xl:min-h-[800px] py-4">
      {!otpSent ? <div id="recaptcha-container"></div> : null}
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Signup</h1>

            <p className="text-balance text-muted-foreground my-2">
              Enter your phone number below to signup
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2 w-3/4">
              <Label htmlFor="email">Phone Number </Label>
              <div className=" flex space-x-2">
              
                <PhoneInput
                //  ref={phoneInputRef}
                  country={'in'}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter 10-digit phone number"
           
                  inputClass="text-black"
                  dropdownClass="text-black"
                />
              </div>
              <div className="text-center">
                {otpSentYN === "yes" ? (
                  <div></div>
                ) : (
                  <Button
                    type="submit"
                    className="w-full"
                    onClick={handleSendOtp}
                    onMouseDown={handleMouseDown}
                  >
                    Send OTP
                  </Button>
                )}
              </div>
            </div>
            {otpSentYN === "yes" ? (
              <div>
                <div className="grid gap-2">
                  <div className=" items-center">
                    <Label>Enter OTP</Label>
                    <div className="space-y-2">
                      <OtpInput otp={otp} setOtp={setOtp} />
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
                <Button
                  type="submit"
                  className="w-full"
                  onClick={handleOtpSubmit}
                >
                  signup
                </Button>
                <Button variant="outline" className="w-full my-2">
                  signin with Google
                </Button>
              </div>
            ) : otpSentYN === "no" ? (
              <div>
                <Label> </Label>

                <p>Please Enter a Valid Number</p>
              </div>
            ) : (
              <></> // Return an empty fragment if otpSentYN is neither "yes" nor "no"
            )}
          </div>
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <Link href="/sign-in" className="underline">
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
