
import { Card } from "@/components/home/cards/card";
import { api } from "@/trpc/react";
import { Divide } from "lucide-react";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
export function Collection({ categoryQuery, likedQuery }: { categoryQuery?: string, likedQuery?: string }) {
    const { data: response, isLoading, refetch, error } = api.collection.collectionFetch.useQuery({ categoryQuery: categoryQuery, likedQuery: likedQuery });
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}
        </div>;
    }
    if (response?.data.length == 0) {
        return (
            <div>There is no collection available </div>
        )
    }
    if (response) {
        return (
            <div className=" justify-center items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {response.data.map((productCollection, index) => (
                    <div key={productCollection.name} className="  mx-14 my-2 sm:m-0 ">
                        <div className="col-span-1  mx-2 " >
                            <Card productColl={productCollection} refetch={refetch} />
                        </div>

                    </div>
                )
                )}</div>
        )
    }
}