
import { Card} from "@/components/home/cards/card";
import { api } from "@/trpc/react";
export function Collection() {
    const { data: response, isLoading, refetch, error }  = api.collection.collectionFetch.useQuery();
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (response) {
        return (
            <div className=" justify-center items-center border-2 border-red-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {response.data.map((productCollection, index) => (
                <div key={productCollection.name} className="border-2 border-green-500  mx-14 my-2 sm:m-0">
                    <div className="col-span-1 border-2 border-red-500" >
                        <Card productColl={productCollection}/>
                    </div>
                </div>
            )
            )}</div>
        )
    }
   
}