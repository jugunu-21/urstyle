"use client";
import  { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: any; // Use the specific type if available
  }
}
import toast from "react-hot-toast";
import React, { useContext } from 'react';
import { app } from "@/app/config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ConfirmationResult } from "firebase/auth";
import OtpInput from "./otpInput";
import { CountryCodeData } from "./contextCountryCode";
import { api } from "@/trpc/react";
import Cookies from 'js-cookie';
import {Countrycode} from "@/components/authentications/countryCode"
export default function Signin () {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpSentYN, setOtpSentYN] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const auth = getAuth(app);
  const router = useRouter();
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        "expired-callback": () => { },
      }
    );
  }, [auth]);
  const createPost = api.auth.sIgnin.useMutation();
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
    console.log("Phone number:", event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      console.log("send otp");
      const phonenumbertosend = `${selectedCountryCode}${phoneNumber.replace(/\D/g, "")}`;
      const requestBody = {
        phone_number: phonenumbertosend,
      };
      console.log(requestBody);
      const result = await createPost.mutateAsync(requestBody)
      const response = result.data;
      console.log("response", response);
      setJwtToken(result.data);
      const formattedPhoneNumber = `+${selectedCountryCode}${phoneNumber.replace(/\D/g, "")}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      console.log("confirmation", confirmation);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setOtpSentYN("yes");
      toast.success("Otp has been sent");
      console.log("handlsendotp");
    }
    catch (error) {
      console.error(error);

      toast.error("An error occurred. Please try again.");
    
    }
  };
  const handleOtpSubmit = async () => {
    try {
      if (!confirmationResult) {
        throw new Error("No confirmation result available.");
      }
      await confirmationResult.confirm(otp);
      setOtp("");
      toast.success("you are successfully signin");
      console.log("jwtToken", jwtToken);
      Cookies.set('jwtToken', jwtToken!, { expires: 1, path: '/', secure: true });
      // changeToken(jwtToken!); // Assuming changeToken accepts a string argument
      router.push("/");
    } catch (error) {
      console.error("Error occurred while authenticating:", error);
    }
  };
  const handleMouseDown = (eventt: React.MouseEvent<HTMLButtonElement>) => {
    if (selectedCountryCode === "" || phoneNumber == "") {
      eventt.preventDefault();
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
    <div className="w-full lg:grid lg:min-h-[600px]  xl:min-h-[800px] ml-0 my-4">
      {!otpSent ? <div id="recaptcha-container"></div> : null}
      <div className="flex items-center justify-center py-12">
        <div className=" mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold ">Signin</h1>
          </div>
          <p className="text-balance text-muted-foreground my-2 left-0">
            Enter your phone number below to signin
          </p>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label >Phone Number </Label>
              <div className="flex space-x-2">
                <Countrycode
                 setSelectedCountryCode={setSelectedCountryCode}
                />
              
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter 10-digit phone number"
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
              <></> 
            )}
          </div>
          <div className="mt-4 text-center text-sm">
            Dont have an account?{" "}
            <Link href="/signup" className="underline">
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
