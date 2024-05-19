import React from "react";

const getTokenFromCookies = async () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === "jwtToken") {
      return value;
    }
  }
  return null;
};
export default getTokenFromCookies;
