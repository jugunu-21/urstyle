// import React, { useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { Dashboard } from "@/components/admin/product/productFetch/productFetch"
import getTokenFromCookies from "@/components/helpers/getcookie";
// import Dashboard from "@/components/admin/product/productadd/productAdd"
import PostApiCall from "@/components/admin/product/productFunctions/postApiCall"
import { Productsprops } from '@/components/context/mycontext';
// import ProductImageCard from "@/components/admin/forms/productImage"

export default function ApiFetchProducts({jwtToken}:{jwtToken:string|null})  {


  const apiroute = "/media/product/fetch"

  const SubmitHandler = async () => {
    if (jwtToken === null) {
      console.error("JWT Token is required");
      return; // Optionally, you could redirect the user or show an error message
    }
     const result = await PostApiCall({ jwtToken, apiroute });
     const productData:Productsprops=result.data
    console.log(productData, "dadattaa")
    return productData;
  };
  return SubmitHandler();
}



