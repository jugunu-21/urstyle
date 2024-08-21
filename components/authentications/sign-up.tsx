"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { isFirebaseAuthError } from '@/utils/firebase-auth-error';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { api } from "@/trpc/react";
import Countrycode from "./country-code";
import { app } from "@/app/config";
import Countrycodedata from "./context-country-code";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OtpInput from "./otp-input";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken";
import axios from "axios";
import ApiSignup from "./auth-function/apiSignup";
import { ConfirmationResult } from "firebase/auth";
import { ChangeEvent } from "react";
import { useToken } from "../helpers/zustand";
export default function Signup() {
  const changeToken = useToken((state) => (state.changeToken))
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpSentYN, setOtpSentYN] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
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
  }, [auth]);
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };
  const createPost = api.auth.sIgnup.useMutation();
  const handleSendOtp = async () => {
    try {
      console.log("send otp");
      const formattedPhoneNumber = `+${selectedCountryCode}${phoneNumber.replace(
        /\D/g,
        ""
      )}`;

      console.log("formattedPhoneNumber",formattedPhoneNumber);
      if (!window.recaptchaVerifier) {
        throw new Error("reCAPTCHA verifier not found.");
      }
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      console.log("confirmation",confirmation);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setOtpSentYN("yes");
      toast.success("Otp has been sent");
      console.log("handlsendotp");
    } catch (error) {
      setOtpSent(false);
    
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
      setPhoneNumber("");
      console.error(error);
    }
  };
  const handleOtpSubmit = async () => {
    try {
      await confirmationResult?.confirm(otp);
      setOtp("");
      const phonenumbertosend = `${selectedCountryCode}${phoneNumber.replace(
        /\D/g,
        ""
      )}`;
      setPhoneNumber("");
      const requestBody = {
        phone_number: phonenumbertosend,
      };
      console.log(requestBody);
      const result = await createPost.mutateAsync(requestBody)
      if (result) {
        const jwtToken = result.data;
        Cookies.set('jwtToken', jwtToken, { expires: 1, path: '/', secure: true });
        changeToken(jwtToken)
        router.push("/");
        toast.success("Otp submitted successfully ");
        setPhoneNumber("");
      } else {
        console.error("Failed to store phone number on the backend");
        setOtpSentYN("");
        return Error

      }
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
      setOtpSentYN("");
      setOtp("");
      // setOtpSentYN("");
      setPhoneNumber("")
      return Error
    }
  };
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (selectedCountryCode === "" || phoneNumber == "") {
      event.preventDefault();
      const result =
        selectedCountryCode == ""
          ? phoneNumber == ""
            ? "please Enter phone number and also select the country"
            : "please select country"
          : "Please enter phone number ";
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
            <div className="grid gap-2">
              <Label htmlFor="email">Phone Number </Label>
              <div className=" flex space-x-2">
                <Countrycodedata.Provider
                  value={{ selectedCountryCode, setSelectedCountryCode }}
                >
                  <Countrycode />
                </Countrycodedata.Provider>
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter 10-digit phone number "
                  className="your-class-names-here"
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
