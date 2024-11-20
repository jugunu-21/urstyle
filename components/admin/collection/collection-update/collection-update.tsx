
import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-interface"
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
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import React, { useState } from "react";
import { MultiSelect } from "@/components/admin/collection/collection-utils/layout/multi-select";
import CollectionImageCard from "../collection-utils/layout/collection-image"
import { addprops, collectionupdateprops } from "../../collection/collection-utils/collection-interface";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { fashionCategory } from "@/public/category"
import { Checkbox } from "@/components/ui/checkbox";

export default function Dashboard({ collectionToUpdate, setSheetOpen, refetch }: collectionupdateprops) {
    const collectionIds = () => collectionToUpdate.products.map((product => product.id));

    const [selectedIds, setSelectedIds] = useState<string[]>(collectionIds);
    const collectionAddPost = api.collection.collectionAdd.useMutation();
    const collectUpdatePost = api.collection.collectionUpdate.useMutation();
    const [category, setCategory] = useState<string[]>([])
    const fashionCategoryLength = fashionCategory.length;

    const [name, setName] = useState<string | null>(collectionToUpdate.name);
    const [description, setDescription] = useState<string | null>(collectionToUpdate.description);
    const [price, setPrice] = useState<string | null>(null);
    const [productWebsite, setProductWebsite] = useState<string | null>(null);
    const requestBody = {
        collectionName: name ?? '', // Provide a default empty string if name is null
        collectionDescription: description ?? '', // Provide a default empty string if description is null
        // CollectionIds: collection?.map(item => item.productId) || [],
        collectionIds: selectedIds,
        collectionCategory: category
    }

    const productInclude = collectionToUpdate.products?.filter((product) => {
        const isIncluded = selectedIds.includes(product.id);
        return isIncluded ? product.image : null;
    }).filter(image => image !== null);

    const images = productInclude.map(product => product.image)
    const handler = async () => {
        collectUpdatePost.mutateAsync({ requestBody: requestBody, collectionId: collectionToUpdate.collectionId })
            .then(() => {
                setSheetOpen(false)
                // setCollection([])
                // setSelectProduct(false)
                { refetch && refetch(); }
                toast.success("sucessfully updated the collection")
            })
            .catch(function (error) {
                console.log("eeeroorrwhileupdating ", requestBody, error);
                toast.error("failed to add collection")
            });
    }
    const imgg = collectionToUpdate.products.filter(product => selectedIds.includes(product.id)).map(product => product.image);

    const selectedNames = collectionToUpdate.products.filter(product => selectedIds.includes(product.id)).map(product => product.name);
    return (
        <main className="grid flex-1 items-start gap-4  sm:px-6 sm:py-0 md:gap-8 m-4">
            <div >
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
                                <Label className="text-xl" htmlFor="name">Name</Label>
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
                                <Label className="text-xl" htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Enter description."
                                    className="min-h-20"
                                    defaultValue={description ? description : ''}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className=" max-w-xl">
                                <Label className="text-xl" htmlFor="name">Products to Add In Collection</Label>
                                <MultiSelect
                                    options={collectionToUpdate.products.map(product => ({
                                        productId: product.id,
                                        productName: product.name
                                    }))}
                                    onValueChange={setSelectedIds}
                                    defaultValue={selectedIds}
                                    placeholder="Select Products"
                                    variant="inverted"
                                    animation={2}
                                    maxCount={3}
                                />

                                {(imgg.length > 0) && <CollectionImageCard image={imgg} />}
                                <div className="mt-4">
                                    {/* <h2 className=" font-semibold">Selected Products</h2> */}
                                    <Label className="text-xl" htmlFor="name">Selected Products</Label>
                                    <ul className="list-disc list-inside">
                                        {selectedNames.map((name) => (
                                            <li key={name}>{name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-4 ">

                                    <DropdownMenu >
                                        <DropdownMenuTrigger asChild className=" pl-0 mt-2" >
                                            {/* <button className="text-xl" htmlFor="name">Select the Collection Type</Label> */}
                                            <Button variant="outline" className="text-lg ml-0">Select the Categories</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56 overflow-y-auto max-h-[200px]">
                                            <DropdownMenuLabel>Panel category</DropdownMenuLabel>
                                            <DropdownMenuSeparator />

                                            {fashionCategory.map((fashion, index) => (
                                                <div key={index} className="h-full"  >
                                                    <DropdownMenuItem >{fashion.look}
                                                        <Checkbox className="mx-2 " id="terms" checked={category.some(item => item === fashion.look)} onClick={() => {
                                                            const existingIndex = category.findIndex(item => item === fashion.look);
                                                            if (existingIndex >= 0) {

                                                                setCategory(prev => [...prev.slice(0, existingIndex), ...prev.slice(existingIndex + 1)]);
                                                            } else {


                                                                setCategory(prev => [...prev, fashion.look]);
                                                            }
                                                            console.log("Updated catgeory:", category);
                                                        }} /></DropdownMenuItem>
                                                    {index !== fashionCategoryLength - 1 && <DropdownMenuSeparator />}
                                                </div>
                                            ))}

                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <ul className="list-disc list-inside" >
                                        {category.map((cat, index) => (
                                            //  <li key={name}>{name}</li>
                                            <li key={index}>{cat}</li>
                                        ))}</ul>

                                </div>
                            </div>
                            {/* <div className="grid gap-3">
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
              </div> */}
                            <Button className="mx-auto" onClick={() => handler()}>Update Collection</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
