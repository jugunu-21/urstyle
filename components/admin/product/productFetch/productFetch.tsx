
import Image from "next/image"
import Link from "next/link"
import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import StatusandFilter from "@/components/admin/product/productutils/layout/statusandFilter"
import { DropDownMenu } from "@/components/admin/product/productutils/layout/dropDownMenu"
import { ProductsContext, Productsprops } from '@/components/context/mycontext';
import { useContext, useEffect } from 'react';

export function Dashboard() {
    const contextValue = useContext(ProductsContext);
    const trigger = () => {
        return (
            <>
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
            </>
        )
    }
    const label = "Action"
    const item = ["create", "Delete"]
    if (!Array.isArray(contextValue)) {
        return <div>Loading products...</div>;
    }
    return (
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

                                            {contextValue.map((data, index) => (
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
                                                            {data.name}
                                                        </TableCell>
                                                       
                                                        <TableCell className="hidden md:table-cell">
                                                            ${data.price}
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            {data.description}
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">
                                                            {data.link}
                                                        </TableCell>
                                                        <TableCell>
                                                            <DropDownMenu item={item} label={label} trigger={trigger} />
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
                </main>
            </div>
        </div>
    )
}
