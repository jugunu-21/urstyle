

import React from "react"
import axios from "axios";
type requestBodyprops = {
    phone_number: string,
  };
const ApiDeleteUser = async (jwtToken:string) => {
  const route = '/user/delete';

  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
      withCredentials: true,
    
      headers: {
        "Content-Type": "application/json",
        'Cache-Control': 'public, max-age=3600',
        Authorization: `Bearer ${jwtToken}`, 
      },
    });

    return response; // Assuming you want to return the response body
  } catch (error) {
    console.error('API sign-in failed:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export default ApiDeleteUser;