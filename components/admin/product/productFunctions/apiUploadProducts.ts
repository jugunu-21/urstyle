// import React, { useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import PostApiCall from "./postApiCall"
import {ProductDataInterface} from "../productutils/productServices/productDataInterface"
type ApiFetchProductsprops={
    jwtToken:string
    requestBody:ProductDataInterface
}
export default function ApiUploadProduct({jwtToken,requestBody}:ApiFetchProductsprops)  {


  const apiroute = "/media/product/upload"
  let data: Array<object>;
  const SubmitHandler = async () => {
    if (jwtToken === null) {
      console.error("JWT Token is required");
      return; // Optionally, you could redirect the user or show an error message
    }
     const result = await PostApiCall({ jwtToken, apiroute,requestBody });
     const productData:ProductDataInterface=result.data
    console.log(productData, "dadattaa")
    return productData;
  };
  return SubmitHandler();
}



