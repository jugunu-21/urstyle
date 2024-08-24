"use client"
import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-services/product-data-interface"
import { useRouter } from "next/navigation";
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
  setCollection: (collection: Array<collectionproductInterface>) => (void);
  refetch?: (options?: RefetchOptions) => Promise<any>;
  setSelectProduct: (sheetOpen: boolean) => void,
}

import React, { useState } from "react";
import { MultiSelect } from "@/components/admin/collection/multi-select";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";

const frameworksList = [
  { value: "react", label: "React", icon: Turtle },
  { value: "angular", label: "Angular", icon: Cat },
  { value: "vue", label: "Vue", icon: Dog },
  { value: "svelte", label: "Svelte", icon: Rabbit },
  { value: "ember", label: "Ember", icon: Fish },
];

export default function Dashboard({ setSelectProduct, collection, setCollection, setSheetOpen, refetch }: addprops) {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(["react", "angular"]);
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
              <div className="p-4 max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Multi-Select Component</h1>
                <MultiSelect
                  options={frameworksList}
                  onValueChange={setSelectedFrameworks}
                  defaultValue={selectedFrameworks}
                  placeholder="Select frameworks"
                  variant="inverted"
                  animation={2}
                  maxCount={3}
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold">Selected Frameworks:</h2>
                  <ul className="list-disc list-inside">
                    {selectedFrameworks.map((framework) => (
                      <li key={framework}>{framework}</li>
                    ))}
                  </ul>
                </div>
              </div>
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
