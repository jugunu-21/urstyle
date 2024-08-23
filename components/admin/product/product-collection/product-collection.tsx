"use client"

import { useState, useEffect } from "react";

import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-services/product-data-interface"

import { useRouter } from "next/navigation";

import { useStore, useToken } from "@/components/helpers/zustand"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/trpc/react"
import { collectionproductInterface } from "../../product/product-utils/product-interface"
import { RefetchOptions } from "@tanstack/react-query"
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
type addprops = {
  collection: Array<collectionproductInterface>,
  setSheetOpen: (sheetOpen: boolean) => void,
  setCollection:( collection: Array<collectionproductInterface>)=>(void);
  refetch?: (options?: RefetchOptions) => Promise<any>;
  setSelectProduct:(sheetOpen: boolean) => void,
}
export default function Dashboard({  setSelectProduct,collection,setCollection, setSheetOpen, refetch }: addprops) {
  const collectionAddPost = api.collection.collectionAdd.useMutation();

  const [name, setName] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const router = useRouter();
  interface SubmitFunctionArgs {
    requestBody: ProductDataInterface;
    jwtToken: string; // Assuming jwtToken is a string
  }
  const requestBody = {
    CollectionName: name ?? '', // Provide a default empty string if name is null
    CollectionDescription: description ?? '', // Provide a default empty string if description is null
    CollectionIds: collection?.map(item => item.productId) || [],
  }
  const handler = async () => {
    collectionAddPost.mutateAsync({ requestBody: requestBody })
      .then(() => {
        setSheetOpen(false)
        setCollection([])
        setSelectProduct(false)
        { refetch && refetch(); }
        toast.success("sucessfully created the collection")
      })
      .catch(function (error) {
        console.log("apicollectionUpload ", error);
        toast.error("failed to add collection")
      });
  }
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="grid flex-1 items-start gap-4  sm:px-6 sm:py-0 md:gap-8 m-4">
      <div >

        {/* <ProductCollection name={rawdata ? rawdata.name : null} setName={setName} description={rawdata ? rawdata.description : null} setDescription={setDescription} price={rawdata ? rawdata.price : null} setPrice={(value: string) => setPrice(value)}  /> */}
        <Card x-chunk="dashboard-07-chunk-0 mb-4">
          <CardHeader>
            <CardTitle>Collection Details</CardTitle>
            <CardDescription>
              Add Collection Details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  placeholder="Enter Name of Collection"
                  defaultValue={name ? name : ''}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(name);
                  }}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter description."
                  className="min-h-20"
                  defaultValue={description ? description : ''}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Button onClick={() => handler()}>click</Button>
              {collection?.map((item) => {
                return (
                  <div key={item.productId}>
                    <Label htmlFor="price">{item.productName}</Label>
                  </div>
                )



              })}
              <div className="grid gap-3">
                <Label htmlFor="price">Price</Label>
                <Input
                  type="number"
                  id="price"
                  pattern="\d*"
                  className="w-full"
                  defaultValue={price ? price : ''}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price..."

                />

              </div>

            </div>
          </CardContent>
        </Card>

      </div>

    </main>
  )
}
