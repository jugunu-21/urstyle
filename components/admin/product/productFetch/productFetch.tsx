
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
import StatusandFilter from "@/components/admin/product/productutils/layout/statusandFilter"
import { DropDownMenu } from "@/components/admin/product/productutils/layout/dropDownMenu"
import { ProductsContext, Productsprops, productlistprop } from '@/components/context/mycontext';

import { useState, useEffect } from "react";
import { useToken } from "@/components/helpers/zustand"

import { api } from "@/trpc/react"
// import { LoadingPage, LoadingSpinner } from "@/components/admin/product/productutils/loaders";
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
import ProductUpdate from "@/components/admin/product/productUpdate/productUpdate"
export function Dashboard() {
    const token = useToken((state) => state.token);
    const [fetchedData, setFetchedData] = useState<productlistprop>();
    const [sheetOpen, setSheetOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [index, setIndex] = useState(0);
    const { data:productData, isLoading, refetch, error } = api.product.productfetch.useQuery( { jwtToken: token || '' } );
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
    if (isLoading) { return <div>Loading...</div>; }
    if (error) {
        return <div>Error:
            {error.message}</div>;
    }
   
   
    
    return (<>
        {productData &&
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
                                                    {productData.data.map((product, index) => (
                                                        <>
                                                            <TableRow key={index}>

                                                                <TableCell className="hidden sm:table-cell">
                                                                    <Image
                                                                        alt="Product image"
                                                                        className="aspect-square rounded-md object-cover"
                                                                        height="64"
                                                                        src="/placeholder.svg"
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
                                                                    <DropDownMenu  item={item} label={label} trigger={trigger} setIndex={setIndex} recentindex={index} setSheetOpen={setSheetOpen} />
                                                                </TableCell>
                                                            </TableRow>
                                                        </>
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
                                        <ProductUpdate fetchedData={productData.data} setSheetOpen={setSheetOpen} index={index} refetch={refetch} />
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </main>
                    </div>
                </div>)

        } </>
    )
}


// useEffect(() => {
//     console.log("fhe")
//     console.log("token", token)
//     if (token) {
//         console.log("token", token)
//         productFetchPost.mutateAsync({ jwtToken: token })
//             .then(response => {
//                 setFetchedData(response.data);
//             }
//             )
//     }
// }, []);

// useEffect(() => {
//     if (data) { // Check if data has a value before setting fetchedData
//       setFetchedData(data.data);
//     }
//   }, [data]);