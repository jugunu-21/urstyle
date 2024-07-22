

import React from "react"
import axios from "axios";
type requestBodyprops = {
    phone_number: string,
  };
const ApiSignin = async (requestBody:requestBodyprops) => {
  const route = '/auth/sign-in';

  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
      withCredentials: true,
      data: requestBody,
      headers: {
        "Content-Type": "application/json",
        'Cache-Control': 'public, max-age=3600', 
      },
    });

    return response; // Assuming you want to return the response body
  } catch (error) {
    console.error('API sign-in failed:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export default ApiSignin;