// "use client"
// import React, { useState } from "react";
// ;
// import { useParams } from 'next/navigation';

// import Link from "next/link";

// import Sitelink from "@/components/reusable-components/site-link";

// import itemsData from "@/public/items.json"


// import Moredetails from "@/components/details/more-detail/more-detail"
// export default function Page() {
//   const [selectedContent, setSelectedContent] = useState("customers");
//   const params = useParams();

//   // Ensure productid is an array
//   const productIdArray = Array.isArray(params.productid) ? params.productid : [params.productid];

//   const [param1, param2] = productIdArray;

//   const groupId = param1 ? parseInt(param1, 10) : undefined;
//   const cartId = param2 ? parseInt(param2, 10) : undefined;
//   let finalItem;

//   if (groupId !== undefined && cartId !== undefined) {
//     finalItem = itemsData[groupId].cart[cartId];
//   }

//   if (!finalItem) {
//     return <div>Item not found</div>;
//   }

//   return (
//     <Moredetails finalItem={finalItem} />
//   );
// }


"use client";
import Moredetails from "@/components/details/more-detail/more-detail"
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import { api } from "@/trpc/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
function Dashboard() {
  const params = useParams();
  const productIdArray = Array.isArray(params.productid) ? params.productid : [params.productid];
  const [param1, param2] = productIdArray;
  const productId = param2
  console.log(productId, "productId")
  const { data: response, isLoading, refetch, error } = api.product.productfetchById.useQuery({ productId: productId });
  if (isLoading) {
    return <DotLottieReact
      className="h-40"
      src="/Animation.lottie"
      loop
      autoplay
    />;
  }
  if (error) {
    return <div>Error:
      {error.message}</div>;
  }
  if (response?.data) {
    return (
      <Moredetails product={response.data.simplifiedProducts} />
    );
  }

  return (
    <div>Cannot Find the products</div>
  );

}

export default Dashboard;

