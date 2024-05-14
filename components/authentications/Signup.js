"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import Countrycode from "./Countrycode";
import { app } from "@/app/config";
import Countrycodedata from "./ContextCountryCode";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OtpInput from "./OtpInput";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken";
export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    console.log("Phone number:", event.target.value);
  };
  const handleSendOtp = async () => {
    try {
      console.log("send otp");
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
      // setPhoneNumber("");
      // alert("Otp has been sent");
      toast.success("Otp has been sent");
      console.log("handlsendotp");
    } catch (error) {
      setOtpSent(false);
      setOtpSentYN("");
      // alert("please enter a valid number ");
      toast.success("please enter a valid number");

      setPhoneNumber("");

      console.error(error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await confirmationResult.confirm(otp);
      setOtp("");

      const phonenumbertosend = `${selectedCountryCode}${phoneNumber.replace(
        /\D/g,
        ""
      )}`;
      setPhoneNumber("");
      const requestBody = {
        // email: email,
        phone_number: phonenumbertosend,
        // password: password,
      };
      console.log(requestBody);
      // Make a POST request to your backend API to store the phone number

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign-up`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      // Check if the response is successful (status code 200-299)
      if (response.ok) {
        const responseData = await response.json();
        const jwtToken = responseData.data; // Extract the JWT token from the response
        // console.log(jwtToken);
        // try {
        //   const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;
        //   console.log(secretKey, "secretkey"); // Your backend will need to verify the JWT token before signing in the user

        //   const decoded = jwt.verify(jwtToken, secretKey);
        //   console.log(decoded);
        //   const userId = decoded.id;
        //   console.log(userId, "userid");
        // } catch (error) {
        //   console.error("Error decoding JWT:", error);
        // }
        document.cookie = `jwtToken=${jwtToken}; path=/; max-age=3600`; 

        console.log("Phone number stored successfully on the backend.");
        router.push("/");
        toast.success("Otp submitted successfully ");
        setPhoneNumber("");

        // Assuming 'confirmationResult' and 'otp' are defined elsewhere
      } else {
        // If the response is not successful, handle the error
        console.error(
          "Failed to store phone number on the backend:",
          response.statusText
        );

        toast.error("error while storing phone number on the backend");

        console.log("reload");
      }
    } catch (error) {
      console.error("Error occurred while storing phone number:", error);
      router.push("/");
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
            Have an account?{" "}
            <Link href="/signin" className="underline">
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
