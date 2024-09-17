
import React from "react"
import axios from "axios";
type requestBodyprops = {
    phone_number: string,
};
const ApiSignin = async (requestBody: requestBodyprops) => {
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
        return response.data; // Assuming you want to return the response body
    } catch (error) {
        console.error('API sign-in failed:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};
export { ApiSignin };
const ApiSignup = async (requestBody: requestBodyprops) => {
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
export { ApiSignup };
const deleteUser = async (jwtToken: string) => {
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
    }
    catch (error) {
        throw error
    }
} 
export { deleteUser }
const ApiUserDetail = async (jwtToken:string) => {
    const route = '/me';
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
        method: "GET",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          }
      });
      return response.data;
    } catch (error) {
        console.error('API sign-up failed:', error);
        throw error;
    }
  };
  export { ApiUserDetail} 