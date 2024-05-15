"use client"
import React from 'react';
import Signout from "@/components/authentications/Signout";
import { useParams } from 'next/navigation';
export default function page() {
  const params = useParams();
    const param1 = Array.isArray(params.url) ? params.url : [params.url];
    const [paramsurl] = param1;
  const redirecturl = paramsurl ? paramsurl : "/";

  console.log(redirecturl)
  return (
    <div>
    
      <Signout  redirecturl={redirecturl} />
    </div>
  );
}
