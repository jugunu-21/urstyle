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
  const SubmitHandler = async () => {
    console.log("jwtToken present in uploadproduct func ",jwtToken)
     const response = await PostApiCall({ jwtToken, apiroute,requestBody });
    return response;
  };
  return SubmitHandler();
}



// // import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
// import PostApiCall from "./postApiCall"
// import { useMutation } from '@tanstack/react-query';
// import { UseMutationOptions } from '@tanstack/react-query';
// import {ProductDataInterface} from "../productutils/productServices/productDataInterface"
// type ApiFetchProductsprops={
//     jwtToken:string
//     requestBody:ProductDataInterface
// }
// export default function ApiUploadProduct({jwtToken,requestBody}:ApiFetchProductsprops)  {

//   const apiroute = "/media/product/upload"
//   const mutationFunction = async () => {
//     try {
//         const result = await PostApiCall({ jwtToken, apiroute, requestBody });
//         return result;
//     } catch (error) {
//         throw new Error('Failed to upload product');
//     }
// };

// // Define the options for useMutation
// const mutationOptions: UseMutationOptions = {
//     mutationFn: mutationFunction,
//     // Add any additional options you need here
// };
// const mutation = useMutation(mutationOptions);
  
//   const SubmitHandler = async () => {
//     if (jwtToken === null) {
//       console.error("JWT Token is required");
//       return; // Optionally, you could redirect the user or show an error message
//     }
//     const result = await mutation.mutateAsync<{ data: ProductDataInterface }>();
//     const productData: ProductDataInterface = result.data;
//     console.log(productData, "dadattaa")
//     return productData;
//   };
//   return SubmitHandler();
// }



// // 