// import React, { useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import PostApiCall from "./postApiCall"
import { ProductDataInterface } from "../productutils/productServices/productDataInterface"
import jwt from 'jsonwebtoken'
type ApiFetchProductsprops = {
  jwtToken: string
  requestBody: ProductDataInterface
  id?:string 
}
export default async function ApiUpdateProduct({ jwtToken, requestBody, id }: ApiFetchProductsprops) {
  const apiroute = `/media/product/update/${id}`
  const SubmitHandler = async () => {
    if (jwtToken === null) {
      console.error("JWT Token is required");
      return; // Optionally, you could redirect the user or show an error message
    }
    console.log("jwttttokkkkk", jwtToken)
    console.log("id", id)
    const result = await PostApiCall({ jwtToken, apiroute, requestBody });
    console.log("sucessufully updated")
    return result.data;
  };
  return SubmitHandler();
}



