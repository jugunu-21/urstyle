// import React, { useEffect } from 'react';
import React, { useState, useEffect } from 'react';


// import Dashboard from "@/components/admin/product/productadd/productAdd"
import PostApiCall from "@/components/admin/product/productFunctions/postApiCall"
import { Productsprops } from '@/components/context/mycontext';
// import ProductImageCard from "@/components/admin/forms/productImage"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
export default async function ApiFetchProducts ({ jwtToken }: { jwtToken: string  }) 
{
  const apiroute = "/media/product/fetch"
  
    const SubmitHandler = async () => {
      console.log("jwtToken present in fetchproduct func ",jwtToken)
       const response = await PostApiCall({ jwtToken, apiroute })
      return response.data;
    };
    return SubmitHandler();
}





