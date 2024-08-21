"use client";
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}
import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { isFirebaseAuthError } from '@/utils/firebase-auth-error';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import toast from "react-hot-toast";
import Countrycode from "./country-code";
import { app } from "@/app/config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OtpInput from "./otp-input";
import Countrycodedata from "./context-country-code";
import ApiSignin from "@/components/authentications/auth-function/apiSignin"
import { useToken } from "../helpers/zustand";
import { api } from "@/trpc/react";
import Cookies from 'js-cookie';

export default function Signin() {
  const changeToken = useToken((state) => (state.changeToken));
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpSentYN, setOtpSentYN] = useState<string>("");
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const auth = getAuth(app);
  const router = useRouter();
  interface Window {
    recaptchaVerifier: RecaptchaVerifier | null;
  }

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => { /* Handle successful verification */ },
        "expired-callback": () => { /* Handle expiration */ },
      }
    );

  }, []);

  const createPost = api.auth.sIgnin.useMutation();

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      // console.log("send otp");
      const phonenumbertosend = `${selectedCountryCode}${phoneNumber.replace(/\D/g, "")}`;
      const requestBody = {
        phone_number: phonenumbertosend,
      };

      const formattedPhoneNumber = `+${selectedCountryCode}${phoneNumber.replace(/\D/g, "")}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      console.log("confirmation", confirmation);
      const result = await createPost.mutateAsync(requestBody);
      const response = result.data;
      setJwtToken(response);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setOtpSentYN("yes");
      toast.success("Otp has been sent");
    } catch (error) {
      console.error(error);
      // initializeRecaptchaVerifier();
      setPhoneNumber("")

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
      console.log("ERRorr", error)
      return error
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await confirmationResult?.confirm(otp);
      setOtp("");

      toast.success("you are successfully signin");
      console.log("jwtToken", jwtToken);
      Cookies.set('jwtToken', jwtToken!, { expires: 1, path: '/', secure: true });
      changeToken(jwtToken!);
      router.push("/");
    } catch (error) {
      setOtp("");
      setOtpSentYN("");
      setPhoneNumber("")
      // initializeRecaptchaVerifier();

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

      console.error("Erroorr", error);


      return;
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (selectedCountryCode === "" || phoneNumber === "") {
      event.preventDefault();
      let result: string;
      if (selectedCountryCode === "") {
        result = phoneNumber === "" ? "please Enter phone number and also select the country" : "please select country";
      } else {
        result = "Please enter phone number ";
      }
      alert(result);
    }
  };
  return (
    <div className="w-full lg:grid lg:min-h-[600px]  xl:min-h-[800px] ml-0 my-4">
      {!otpSent ? <div id="recaptcha-container"></div> : null}
      <div className="flex items-center justify-center py-12">
        <div className=" mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold ">Sign-In</h1>
          </div>
          <p className="text-balance text-muted-foreground my-2 left-0">
            Enter your phone number below to signin
          </p>
          <div className="grid gap-4">
            <div className="grid gap-2">
              {/* <Label htmlFor="phone">Phone number</Label> */}
              <Label >Phone Number </Label>
              <div className="flex space-x-2">
                <Countrycodedata.Provider
                  value={{ selectedCountryCode, setSelectedCountryCode }}
                >
                  <Countrycode />
                </Countrycodedata.Provider>
                {/* {selectedCountryCode !== "" ? ():()} */}

                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter 10-digit phone number"
                  className="your-class-names-here"
                //   disabled={selectedCountryCode == ""}
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
                  signin
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
            Dont have an account?{" "}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted md:block">
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
