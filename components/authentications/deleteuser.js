import React from "react";
import { useEffect } from "react";
import getTokenFromCookies from "@/components/authentications/deleteuser";
const deleteUser = async (jwtToken) => {

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

export default function DeleteUser() { // Renamed to start with an uppercase letter
  useEffect(() => {
      const fetchData = async () => {
      const jwtToken = await getTokenFromCookies();
      if (jwtToken) {
      await deleteUser(jwtToken);
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