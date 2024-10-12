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

  // if (
  //   groupIndex === undefined ||
  //   isNaN(groupIndex) ||
  //   groupIndex < 0 ||
  //   groupIndex >= itemsData.length
  // ) {
  //   return <div>Item not found</div>;
  // }
  // const filteredItems = itemsData[groupIndex];

  const { data: response, isLoading, refetch ,error }  = api.collection.collectionFetchById.useQuery({collectionId:groupIndex});
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (response?.data) {
      return (
        <Details filteredItems={response.data} groupIndex={groupIndex} />
      );
  }

  return (
    // <Details filteredItems={response.data} groupIndex={groupIndex} />
    <div>error</div>
  );

}

export default Dashboard;
