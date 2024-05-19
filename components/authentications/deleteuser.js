import React from "react";
import { useEffect } from "react";
import getTokenFromCookies from "@/components/authentications/deleteuser";
const deletUser = async (jwtToken) => {

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/delete`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
      }
    else {
        console.log("deleted user")
      }
;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function deleteuser() {
  useEffect(() => {
      const fetchData = async () =>
      {
      const jwtToken = await getTokenFromCookies();
      if (jwtToken) {
      await deletUser(jwtToken);
      }
    };

    fetchData();
  }, []);
    return (
        <div>
      
        delete user
  </div>
    )
   
}
