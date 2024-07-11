"use client";
import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import toast from "react-hot-toast";
import Countrycode from "./Countrycode";
import { app } from "@/trash/config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OtpInput from "./OtpInput";
import Countrycodedata from "./ContextCountryCode";

// import cookie from 'cookie';
export default function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
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
        callback: (response) => {},
        "expired-callback": () => {},
      }
    );
  }, [auth]);
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    // console.log(selectedCountryCode)
    console.log("Phone number:", event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      console.log("send otp");
      const phonenumbertosend = `${selectedCountryCode}${phoneNumber.replace(
        /\D/g,
        ""
      )}`;
      const requestBody = {
        phone_number: phonenumbertosend,
      };
      console.log(requestBody);

      // console.log(process.env.NEXT_PUBLIC_SIGNUP_API);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign-in`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        console.log("Phone number verified in db .");
        const responseData = await response.json();
        const jwtToken = responseData.data;
        console.log(jwtToken);
        document.cookie = `jwtToken=${jwtToken}; path=/; max-age=3600`;

        const formattedPhoneNumber = `+${selectedCountryCode}${phoneNumber.replace(
          /\D/g,
          ""
        )}`;
        console.log(formattedPhoneNumber);

        const confirmation = await signInWithPhoneNumber(
          auth,
          formattedPhoneNumber,
          window.recaptchaVerifier
        );

        console.log(confirmation);
        setConfirmationResult(confirmation);
        setOtpSent(true);
        setOtpSentYN("yes");
        toast.success("Otp has been sent");
        console.log("handlsendotp");
        return true;
        //  }
      } else {
        console.error("phone number doesnot exsist :", response.statusText);
        toast.error("Need to sigup or signin with different number ");
        // setPhoneNumber("");
        window.location.reload();
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
      setOtp("");

      toast.success("you are successfully signin");
      router.push("/");
      // console.log(sessionId);
    } catch (error) {
      console.error("Error occurred while authenticating:", error);
    }
  };
  const handleMouseDown = (event) => {
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
              {/* <Label htmlFor="phone">Phone number</Label> */}
              <Label htmlFor="email">Phone Number </Label>
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
