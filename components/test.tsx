"use client"
import { api } from "@/trpc/react"
export default function Dashboard() {
 
    const { data: response, isLoading, refetch, error }  = api.collection.collectionFetch.useQuery();
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (response) {
        return (

            <div>hey</div>
        )
    }
}
