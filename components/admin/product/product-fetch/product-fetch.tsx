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
import StatusandFilter from "@/components/admin/product/product-utils/layout/status-filter"
import { DropDownMenu } from "@/components/admin/product/product-utils/layout/drop-down-menu"
import { useState, useEffect } from "react";
import { useToken } from "@/components/helpers/zustand"
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
import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-services/product-data-interface"
import ProductUpdate from "@/components/admin/product/product-update/product-update"
export default function Dashboard() {
    const token = useToken((state) => state.token);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductDataInterfacewithid>();
    const { data: productData, isLoading, refetch, error } = api.product.productfetch.useQuery();
    const trigger = () => {
        return (
            <>
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
            </>
        )
    }
    const label = "Action"
    const item = ["Create", "Update"]
    const itemsLength = item.length;
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
    if (productData) {
        const fetchedData = productData.data
        return (<>
            {fetchedData &&
                (
                    <div className="flex min-h-screen w-full flex-col bg-muted/40">
                        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                                <Tabs defaultValue="all">
                                    <StatusandFilter />
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
                                                            <TableHead className="hidden w-[100px] sm:table-cell">
                                                                <span className="sr-only">Image</span>
                                                            </TableHead>
                                                            <TableHead>Name</TableHead>
                                                            <TableHead>Price</TableHead>
                                                            <TableHead className="hidden md:table-cell">
                                                                Description
                                                            </TableHead>
                                                            <TableHead className="hidden md:table-cell">
                                                                Link
                                                            </TableHead>
                                                            <TableHead className="hidden md:table-cell">
                                                                Created at
                                                            </TableHead>
                                                            <TableHead>
                                                                <span className="sr-only">Actions</span>
                                                            </TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {fetchedData.map((product) => (
                                                          
                                                                <TableRow key={product.id}>

                                                                    <TableCell className="hidden sm:table-cell">
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

                                                                    <TableCell className="hidden md:table-cell">
                                                                        ${product.price}
                                                                    </TableCell>
                                                                    <TableCell className="hidden md:table-cell">
                                                                        {product.description}
                                                                    </TableCell>
                                                                    <TableCell className="hidden md:table-cell">
                                                                        {product.link}
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {/* <DropDownMenu  item={item} label={label} trigger={trigger} setIndex={setIndex} recentindex={product.id} setSheetOpen={setSheetOpen} /> */}
                                                                        <DropdownMenu>
                                                                            <DropdownMenuTrigger >
                                                                                <Button
                                                                                    variant="outline"
                                                                                    size="icon"
                                                                                    className="overflow-hidden rounded-full"
                                                                                >
                                                                                    {trigger()}   </Button>
                                                                            </DropdownMenuTrigger>
                                                                            <DropdownMenuContent align="end">
                                                                                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                                                                                <DropdownMenuSeparator />
                                                                                {item.map((item, i) => 
                                                                                     (
                                                                                        <div key={i}
                                                                                            onClick={() => {
                                                                                                if (item === "Update") {
                                                                                                    { setSheetOpen && setSheetOpen(true) }
                                                                                                    setSelectedProduct(product)
                                                                                                  
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
                                                <div className="text-xs text-muted-foreground">
                                                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                                    products
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                                    <SheetContent >
                                        <div className=" overflow-y-auto w-full  h-full">
                                            <ProductUpdate selectedProduct={selectedProduct} setSheetOpen={setSheetOpen} refetch={refetch} />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </main>
                        </div>
                    </div>)

            } </>
        )
    }
}
