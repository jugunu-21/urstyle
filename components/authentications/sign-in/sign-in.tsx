"use client";
import Cookies from 'js-cookie';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SignIn, useSignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import OtpInput from "../auth-utils/layout/otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { api } from "@/trpc/react";
import { useToken } from "../auth-utils/helpers/zustand";
import { Token } from '@clerk/nextjs/server';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function Signin() {
  const changeToken = useToken((state) => (state.changeToken));
  const useTokenn = useToken((state) => (state.token));
  const { isLoaded, signIn, setActive } = useSignIn(); // Clerk sign-in hook
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpSentYN, setOtpSentYN] = useState<string>("");
  const router = useRouter();
  const signInbackend = api.auth.sIgnin.useMutation();
  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };
  const handleSendOtp = async () => {
    if (!isLoaded) return;
    try {
      const phonenumbertosend = `${phoneNumber.replace(/\D/g, "")}`;
      const PHONE_NUMBER = '916306441401'
      const requestBody = {
        phone_number: PHONE_NUMBER,
      };
      const phoneNumberForClerk = `+${phoneNumber.replace(/\D/g, "")}`;
      await signIn.create({
        strategy: "phone_code",
        identifier: phoneNumberForClerk,
      });
      const result = await signInbackend.mutateAsync(requestBody);
      const response = result.data;
      setJwtToken(response);
      // console.log("request body ", requestBody)
      setOtpSent(true); setOtpSentYN("yes");
      toast.success("OTP sent successfully!");
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      console.error("Send OTP Error:", error);
    }
  };

  const handleOtpSubmit = async () => {
    if (!isLoaded) return;

    try {
      const completeSignIn = await signIn.attemptFirstFactor({
        strategy: "phone_code",
        code: otp,
      });

      if (completeSignIn.status === "complete") {
        router.push("/");
        await setActive({ session: completeSignIn.createdSessionId });
        toast.success("You have successfully signed in!");
        Cookies.set('jwtToken', jwtToken!, { expires: 2, path: '/', secure: true });
        changeToken(jwtToken!);
        setOtp("");
      } else {
        toast.error("OTP verification failed. Please try again.");
      }
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
    }
  };
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (phoneNumber == "") {
      event.preventDefault();
      let result: string;
      result = "Please enter correct phone number phone number ";
      alert(result);
    }
  };
  return (
    <div className="w-full  mt-4 pt-4 mb-4 h-full ">
      <div className="flex items-center justify-center">
        <div className="grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign-In</h1>
          </div>
          <p className="text-balance text-muted-foreground my-2 ">
            Enter your phone number below to sign in
          </p>
          <div className="grid gap-4">
            <div className="grid gap-2 w-3/4">
              <Label>Phone Number</Label>
              <div className="w-full">
                <PhoneInput
                  country={"in"}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter your phone number"
                  containerClass="w-full"
                  inputClass="text-black"
                  dropdownClass="text-black"
                />
              </div>
              {otpSentYN === "yes" ? (
                <div></div>
              ) : (
                <Button
                  type="submit"
                  className="w-full"

                  onClick={handleSendOtp}
                >
                  Send OTP
                </Button>
              )}

              {otpSentYN === "yes" ? (

                <div>
                  <div className="grid gap-2">
                    <div className="items-center">
                      <Label>Enter OTP</Label>
                      <div className="space-y-2">
                        <OtpInput otp={otp} setOtp={setOtp} />
                        <div className="text-center text-sm">
                          {otp === "" && <>Enter the one-time code sent to your phone</>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button type="submit" className='w-full' onClick={handleOtpSubmit}>
                    Sign In
                  </Button>

                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            No account?{" "}
            <a href="/sign-up" className="underline">
              Create one
            </a>
          </div>
          <div className='mr-6'>
            <Card className='w-full p-2 '>
              <CardHeader className=''>
                <CardTitle className='text-xl'>Admin Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className='font-semibold'>  Phone number</span> - 15555550100
                <br />
                <span className='font-semibold'>OTP</span> - 424242
                <br />
                <Alert className='mt-2'>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle> Important Notice!</AlertTitle>
                  <AlertDescription>
                    OTP is currently not being send as it exceeded monthly free tier limit

                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
