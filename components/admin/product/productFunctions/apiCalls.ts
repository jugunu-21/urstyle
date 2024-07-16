// import React, { useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { Dashboard } from "@/components/admin/product/productFetch/productFetch"
import getTokenFromCookies from "@/components/helpers/getcookie";
// import Dashboard from "@/components/admin/product/productadd/productAdd"
import handleSubmit from "@/components/admin/product/productFunctions/handleSubmit"
import { Productsprops } from '@/components/context/mycontext';
// import ProductImageCard from "@/components/admin/forms/productImage"

export default function apiCall  ({jwtToken}:{jwtToken:string|null})  {


  const apiroute = "/media/product/fetch"
  let data: Array<object>;
  const SubmitHandler = async () => {
    if (jwtToken === null) {
      console.error("JWT Token is required");
      return; // Optionally, you could redirect the user or show an error message
    }
     const datas = await handleSubmit({ jwtToken, apiroute });
     const datasss:Productsprops=datas.data
    console.log(datas.data, "dadattaa")
    return datasss;
  };
  return SubmitHandler();
}



