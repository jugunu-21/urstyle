

import React from "react"
import axios from "axios";
type requestBodyprops = {
    phone_number: string,
  };
const ApiSignup = async (requestBody:requestBodyprops) => {
  const route = '/auth/sign-up';

  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
      withCredentials: true,
      data: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Assuming you want to return the response body
  } catch (error) {
    console.error('API sign-up failed:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export default ApiSignup;