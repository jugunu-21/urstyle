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
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import StatusandFilter from "@/components/admin/product/product-utils/layout/fetch-product-header"
import { DropDownMenu } from "@/components/admin/product/product-utils/layout/drop-down-menu"
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
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-interface"
import ProductUpdate from "@/components/admin/product/product-update/product-update"
import CollectionAdd from "@/components/admin/collection/collection-add/collection-add"
import { Checkbox } from "@/components/ui/checkbox"
import { collectionproductInterface } from "../../collection/collection-utils/collection-interface"
import { useParams, useSearchParams } from "next/navigation"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
export default function Dashboard() {
    // const searchParams = useSearchParams();

    // const selectProductfromCollection = searchParams.get('selectProduct') === 'true';
    // console.log("selectProductfromCollection", searchParams.get('selectProduct'))

    const selectProductfromCollection = false
    const LIMIT = 4
    const [sheetOpenUpdate, setSheetOpenUpdate] = useState(false);
    const [sheetOpenCollection, setSheetOpenCollection] = useState(false);
    const [selectProduct, setSelectProduct] = useState(selectProductfromCollection);
    const [page, setPage] = useState(1)
    const [selectedProduct, setSelectedProduct] = useState<ProductDataInterfacewithid>();
    const [collection, setCollection] = useState<Array<collectionproductInterface>>([]);
    const { data: response, isLoading, refetch, error } = api.product.productfetch.useQuery({ page: page, limit: LIMIT });
    const trigger = () => {
        return (
            <>
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
            </>
        )
    }
    const deleteProduct = api.product.productDeleteByProductId.useMutation({
        onSuccess: () => {
            refetch();
        },
    })
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
    const ProductNotFound = () => {
        return (
            <DotLottieReact
                className="h-40"
                src="/Animation (2).lottie"
                loop
                autoplay
            />
        );
    };
    const label = "Action"
    const item = ["Update", "Delete"]
    const itemsLength = item.length;
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
                <ProductNotFound />
                <div className="flex items-center justify-center">
                    No Product found.
                </div>
            </div>
        )
    }
    if (response) {
        const fetchedData = response.data.simplifiedProducts
        const totalDocs = response.data.totalDocs
        const totalPages = Math.floor(totalDocs / LIMIT) + 1;
        const startno = ((page - 1) * LIMIT) + 1
        const endno = (startno + LIMIT - 1) > totalDocs ? totalDocs : startno + LIMIT - 1
        return (<>
            {fetchedData &&
                (
                    <div className="flex min-h-screen w-full flex-col bg-muted/40">
                        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                                <Tabs defaultValue="all">
                                    <StatusandFilter setSheetOpenCollection={setSheetOpenCollection} setSelectProduct={setSelectProduct} collection={collection} />
                                    <TabsContent value="all">
                                        <Card x-chunk="dashboard-06-chunk-0">
                                            <CardHeader>
                                                <CardTitle>Products</CardTitle>
                                                <CardDescription>
                                                    Manage your products and view their sales performance.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                                                            <TableHead>Name</TableHead>
                                                            <TableHead>Price(in rupee)

                                                            </TableHead>
                                                            <TableHead className="hidden md:table-cell">
                                                                Description
                                                            </TableHead>
                                                            <TableHead className="hidden md:table-cell">
                                                                Link
                                                            </TableHead>
                                                            <TableHead >
                                                                Action
                                                            </TableHead>
                                                            {selectProduct ? <TableHead >
                                                                Select
                                                            </TableHead> : null}

                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {fetchedData.map((product) => (

                                                            <TableRow key={product.id}>

                                                                <TableCell className="hidden w-[100px] sm:table-cell">
                                                                    <Image
                                                                        alt="Product image"
                                                                        className="aspect-square rounded-md object-cover"
                                                                        height="64"
                                                                        src={product.image}
                                                                        width="64"
                                                                    />
                                                                </TableCell>
                                                                <TableCell className="font-medium">
                                                                    {product.name}
                                                                </TableCell>

                                                                <TableCell className="font-medium">
                                                                    {product.price}
                                                                </TableCell>
                                                                <TableCell className="hidden md:table-cell">
                                                                    {product.description}
                                                                </TableCell>
                                                                <TableCell className="hidden md:table-cell">
                                                                    {product.link}
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
                                                                                            { setSheetOpenUpdate && setSheetOpenUpdate(true) }
                                                                                            setSelectedProduct(product)

                                                                                        }
                                                                                        if (item === "Delete") {

                                                                                            deleteProduct.mutateAsync({ productId: product.id })
                                                                                            console.log("id", product.id)

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
                                                                {selectProduct ? <TableCell className="">
                                                                    <div className="flex items-center space-x-2">
                                                                        <Checkbox id="terms" checked={collection.some(item => item.productId === product.id)} onClick={() => {
                                                                            const existingIndex = collection.findIndex(item => item.productId === product.id);
                                                                            if (existingIndex >= 0) {
                                                                                // Product exists in the collection, remove it
                                                                                setCollection(prev => [...prev.slice(0, existingIndex), ...prev.slice(existingIndex + 1)]);
                                                                            } else {
                                                                                // Product does not exist in the collection, add it
                                                                                const collectionproduct = {
                                                                                    productId: product.id,
                                                                                    productName: product.name,
                                                                                    ProductImage: product.image
                                                                                };
                                                                                setCollection(prev => [...prev, collectionproduct]);
                                                                            }
                                                                            console.log("Updated collection:", collection);
                                                                        }} />

                                                                    </div>
                                                                </TableCell> : null}
                                                            </TableRow>

                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="text-xs text-muted-foreground">
                                                    Showing <strong>{startno}-{endno}</strong> of <strong>{totalDocs}</strong>{" "}
                                                    products
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                                <Sheet open={sheetOpenUpdate} onOpenChange={setSheetOpenUpdate}>
                                    <SheetContent >
                                        <div className=" overflow-y-auto w-full  h-full">
                                            <ProductUpdate selectedProduct={selectedProduct} setSheetOpen={setSheetOpenUpdate} refetch={refetch} />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                                <Sheet open={sheetOpenCollection} onOpenChange={setSheetOpenCollection}>
                                    <SheetContent >
                                        <div className=" overflow-y-auto w-full  h-full">
                                            <CollectionAdd setSelectProduct={setSelectProduct} setCollection={setCollection} products={collection} setSheetOpen={setSheetOpenCollection} refetch={refetch} />
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
