import React, { useEffect, useState } from "react";
import { app } from "@/app/config";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation"; // Corrected import path
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { useParams } from "next/navigation"; // Corrected import path
import getJwtTokenFromCookies from "../helpers/get-cookie";
export default function Signout() {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();
  const params = useParams();
  const param1 = Array.isArray(params.url) ? params.url : [params.url];
  const [paramsUrl] = param1;
  const redirectUrl = paramsUrl ? paramsUrl : "/";
  console.log("redirectUrllll", redirectUrl);
  useEffect(() => {

    fetchData();
  }, []);

  
  const fetchData = async () => {
    const jwtToken = await getJwtTokenFromCookies();
    console.log("jwttokenn",jwtToken)
    if (jwtToken) {
      const userDetails = await fetchUserDetails(jwtToken);
      setUserInfo(userDetails);
    }
  return null;
};
  const fetchUserDetails = async (jwtToken) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      console.log("Signed out successfully and session cookie cleared");
      toast.success("You Signed Out ");
      // document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      Cookies.remove('jwtToken', { path: '/' });
      if (redirectUrl) {
        router.push(`/${redirectUrl}`);
      } else {
        router.push("/");
      }
    });
  };

  return (
    <>
      <h1 className="bg-black text-red-900">
          you are a user with phone number{" "}
          <span>{userInfo && userInfo.phone_number}</span>
      </h1> 
      <div className="bg-orange-700"></div>
      <Button onClick={handleLogout}>Sign Out</Button>
    </>
  );
}
