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
  const collectionId = String(param1);
  const { data: response, isLoading, refetch ,error }  = api.collection.collectionFetchById.useQuery({collectionId:collectionId});
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (response?.data) {
      return (
        <Details filteredItems={response.data} />
      );
  }

  return (
    // <Details filteredItems={response.data} groupIndex={groupIndex} />
    <div>error</div>
  );

}

export default Dashboard;
