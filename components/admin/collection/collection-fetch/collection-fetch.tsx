"use client"
import Image from "next/image"
import {
    MoreHorizontal,
} from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
} from "@/components/ui/tabs"
import { StatusandFilterForCollection } from "@/components/admin/product/product-utils/layout/fetch-product-header"
import { useState, useEffect } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { api } from "@/trpc/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CollectionUpdate from "@/components/admin/collection/collection-update/collection-update"
import { collectionInterfacewithproducts, collectionproductInterface } from "../../collection/collection-utils/collection-interface"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
export default function Dashboard() {
    const LIMIT = 4
    const [sheetOpenCollection, setSheetOpenCollection] = useState(false);
    const [selectProduct, setSelectProduct] = useState(false);
    const [page, setPage] = useState(1)
    const [selectedCollection, setSelectedCollection] = useState<collectionInterfacewithproducts>();
    const [collection, setCollection] = useState<Array<collectionproductInterface>>([]);
    const { data: response, isLoading, refetch, error } = api.collection.collectionFetchbyAdmin.useQuery({ page: page, limit: LIMIT });
    const trigger = () => {
        return (
            <>
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
            </>
        )
    }
    const deleteCollection = api.collection.collectionDelete.useMutation({
        onSuccess: () => {
            refetch();
        },
    })

    const label = "Action"
    const item = ["Update", "Delete"]
    const itemsLength = item.length;
    const Loading = () => {
        return (
            <DotLottieReact
                className="h-40"
                src="/Animation.lottie"
                loop
                autoplay
            />
        );
    };
    const CollectionNotFound = () => {
        return (
            <DotLottieReact
                className="h-40"
                src="/Animation (2).lottie"
                loop
                autoplay
            />
        );
    };
    if (isLoading) {
        return (
            <Loading />
        );
    }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (response.data.totalDocs === 0) {
        return (

            <div>
                <CollectionNotFound />
                <div className="flex items-center justify-center"> No collection found.
                </div>
            </div>
        )
    }
    if (response) {
        const fetchedData = response.data.simplifiedCollection
        const totalDocs = response.data.totalDocs
        const totalPages = Math.floor(totalDocs / LIMIT) + 1;
        console.log("totalpage", page, LIMIT,)
        const startno = ((page - 1) * LIMIT) + 1
        const endno = (startno + LIMIT - 1) > totalDocs ? totalDocs : startno + LIMIT - 1
        return (<>
            {fetchedData &&
                (
                    <div className="flex min-h-screen w-full flex-col bg-muted/40">
                        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                                <Tabs defaultValue="all">
                                    <StatusandFilterForCollection setSheetOpenCollection={setSheetOpenCollection} setSelectProduct={setSelectProduct} collection={collection} />
                                    <TabsContent value="all">
                                        <Card x-chunk="dashboard-06-chunk-0">
                                            <CardHeader>
                                                <CardTitle>Collections</CardTitle>
                                                <CardDescription>
                                                    Manage your collections and view their information.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead className="hidden w-[240px] sm:table-cell ml-8">Image</TableHead>
                                                            <TableHead>Name</TableHead>
                                                            {/* <TableHead>Price(in rupee)

                                                            </TableHead> */}
                                                            <TableHead className="hidden lg:table-cell">
                                                                Description
                                                            </TableHead>
                                                            <TableHead className="hidden md:table-cell">
                                                                Categories
                                                            </TableHead>

                                                            <TableHead >
                                                                Action
                                                            </TableHead>


                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody className="">
                                                        {fetchedData.map((collection) => (

                                                            <TableRow key={collection.collectionId}>

                                                                <TableCell className="hidden w-[100px] sm:table-cell">
                                                                    <div className="grid grid-cols-2 gap-0 ">
                                                                        {collection.products?.map((product) =>
                                                                            <div key={product.id} className=" m-0">
                                                                                <Image
                                                                                    alt="Product image"
                                                                                    className="  aspect-square rounded-md object-cover"
                                                                                    height="90"
                                                                                    src={product.image}
                                                                                    width="90"
                                                                                />
                                                                            </div>
                                                                        )}</div>

                                                                </TableCell>
                                                                <TableCell className="font-medium">
                                                                    {collection.name}
                                                                </TableCell>

                                                                {/* <TableCell className="font-medium">
                                                                    {product.price}
                                                                </TableCell> */}
                                                                <TableCell className="hidden lg:table-cell">
                                                                    {collection.description}
                                                                </TableCell>
                                                                <TableCell className="hidden md:table-cell">

                                                                    {collection.categories.map((category, index) =>
                                                                        <div key={index} className="m-1">
                                                                            <Badge variant="secondary">{category}

                                                                            </Badge>
                                                                        </div>
                                                                    )}
                                                                </TableCell>

                                                                <TableCell>
                                                                    <DropdownMenu>
                                                                        <DropdownMenuTrigger >

                                                                            {trigger()}
                                                                        </DropdownMenuTrigger>
                                                                        <DropdownMenuContent align="end">
                                                                            <DropdownMenuLabel>{label}</DropdownMenuLabel>
                                                                            <DropdownMenuSeparator />
                                                                            {item.map((item, i) =>
                                                                            (
                                                                                <div key={i}
                                                                                    onClick={() => {
                                                                                        if (item === "Update") {
                                                                                            { setSheetOpenCollection && setSheetOpenCollection(true) }
                                                                                            setSelectedCollection(collection)

                                                                                        }
                                                                                        if (item === "Delete") {

                                                                                            deleteCollection.mutateAsync({ collectionId: collection.collectionId })


                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    <DropdownMenuItem>{item}</DropdownMenuItem>
                                                                                    {i !== itemsLength - 1 && <DropdownMenuSeparator />}
                                                                                </div>
                                                                            )
                                                                            )}
                                                                        </DropdownMenuContent>
                                                                    </DropdownMenu>
                                                                </TableCell>

                                                            </TableRow>

                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </CardContent>
                                            <CardFooter>


                                                (
                                                <div className="text-xs text-muted-foreground">
                                                    Showing <strong>{startno}-{endno}</strong> of <strong>{totalDocs}</strong>{" "}
                                                    Collections
                                                </div>
                                                )

                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                </Tabs>

                                <Sheet open={sheetOpenCollection} onOpenChange={setSheetOpenCollection}>
                                    <SheetContent >

                                        <div className=" overflow-y-auto w-full  h-full">
                                            {selectedCollection && (
                                                <CollectionUpdate
                                                    collectionToUpdate={selectedCollection}
                                                    setSheetOpen={setSheetOpenCollection}
                                                    refetch={refetch}
                                                />
                                            )}

                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </main>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        {page > 1 && (
                                            <PaginationPrevious
                                                onClick={() => {
                                                    setPage((prev) => prev - 1);
                                                }}
                                            />
                                        )}

                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >{page}</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        {page < totalPages && (
                                            <PaginationNext
                                                onClick={() => {
                                                    // if(page!==1){
                                                    setPage((prev) => prev + 1)
                                                    // }
                                                }} />
                                        )}
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>)

            } </>
        )
    }

}
