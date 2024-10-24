import React, { useEffect, useState } from "react";
import { app } from "@/app/config";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { useParams } from "next/navigation"; 
import getJwtTokenFromCookies from "../auth-utils/helpers/get-cookie";
interface UserInfo {
  phone_number?: string; 
}
export const useLogout = () => {
  const router = useRouter();
  const logout = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      toast.success("You Signed Out ");
      Cookies.remove('jwtToken', { path: '/' });
      router.push("/");
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };
  return logout;
};
export default function Signout() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();
  const params = useParams();
  const param1 = Array.isArray(params.url) ? params.url : [params.url];
  const [paramsUrl] = param1;
  const redirectUrl = paramsUrl ? paramsUrl : "/";
  console.log("redirectUrllll", redirectUrl);
  const fetchData = async () => {
    const jwtToken = getJwtTokenFromCookies();
    console.log("jwttokenn", jwtToken)
    if (jwtToken) {
      const userDetails = await fetchUserDetails(jwtToken);
      setUserInfo(userDetails);
    }
    return null;
  };
  useEffect(() => {
    fetchData();
  }, [fetchData()]);
  const fetchUserDetails = async (jwtToken: string) => {
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


  return (
    <>
      <h1 className="bg-black text-red-900">
        you are a user with phone number{" "}
        <span>{userInfo && userInfo.phone_number}</span>
      </h1>
      <div className="bg-orange-700"></div>
      <Button onClick={useLogout}>Logout</Button>
    </>
  );
}
