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
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { handleLogout } from "../auth-utils/helpers/log-out";
interface UserInfo {
  phone_number?: string;
}

export const Signout = () => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const params = useParams();
  const param1 = Array.isArray(params.url) ? params.url : [params.url];
  const [paramsUrl] = param1;
  const redirectUrl = paramsUrl ? paramsUrl : "/";
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
  return (
    <>
      <div className="bg-orange-700"></div>
      <Button onClick={() => handleLogout(router)}>Logout</Button>
    </>
  );
}
