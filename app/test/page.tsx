"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import itemsData from "@/public/items.json";
import Details from "@/components/details/detail/detail";
import { api } from "@/trpc/react";
function Dashboard() {
  const params = useParams();
  const productIdArray = Array.isArray(params.index)
    ? params.index
    : [params.index];
  const [param1] = productIdArray;
  console.log(param1,"groupIndex")
  const groupIndex = String(param1);
  console.log(groupIndex,"groupIndex")

  const { data: response, isLoading, refetch ,error }  = api.product.productfetchById.useQuery({productId:groupIndex});
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (response?.data && Array.isArray(response.data.simplifiedProducts)) {
      return (
        <div>{response.data.simplifiedProducts.map(product => product.name).join(', ')}</div>
      );
    }

  return (
    // <Details filteredItems={response.data} groupIndex={groupIndex} />
    <div>error</div>
  );

}

export default Dashboard;
