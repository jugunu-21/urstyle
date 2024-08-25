"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import itemsData from "@/public/items.json";
import Details from "@/components/details/detail/detail";
function Dashboard() {
  const params = useParams();
  const productIdArray = Array.isArray(params.index)
    ? params.index
    : [params.index];
  const [param1] = productIdArray;
  const groupIndex = param1 ? parseInt(param1, 10) : undefined;

  if (
    groupIndex === undefined ||
    isNaN(groupIndex) ||
    groupIndex < 0 ||
    groupIndex >= itemsData.length
  ) {
    return <div>Item not found</div>;
  }
  const filteredItems = itemsData[groupIndex];
  return (
    <Details filteredItems={filteredItems} groupIndex={groupIndex} />
  );
}

export default Dashboard;
