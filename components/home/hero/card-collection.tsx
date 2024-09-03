
import { Card} from "@/components/home/cards/card";
import { api } from "@/trpc/react";
import { Divide } from "lucide-react";
export function Collection({categoryQuery}:{categoryQuery:string}) {
    const { data: response, isLoading, refetch, error }  = api.collection.collectionFetch.useQuery({categoryQuery:categoryQuery});
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (response?.data.length==0) {
        return(
            <div>There is no collection available </div>
        )
    }
    if (response) {
        // console.log("responseiinn",response)
        return (
            <div className=" justify-center items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {response.data.map((productCollection, index) => (
                <div key={productCollection.name} className="  mx-14 my-2 sm:m-0 ">
                    <div className="col-span-1  mx-1 bg-slate-300" >
                        <Card productColl={productCollection}/>
                    </div>
                </div>
            )
            )}</div>
        )
    }
   
}