


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
import { useState } from "react"
import {collectionproductInterface} from "../../../collection/collection-utils/collection-interface"
export default function statusandFilter({setSheetOpenCollection,collection,setSelectProduct}:{collection:Array<collectionproductInterface>,setSheetOpenCollection:(sheetOpenCollection:boolean)=>(void),setSelectProduct:(selectProduct:boolean)=>(void)}) {


    return (
        <div className="flex items-center">
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                    Archived
                </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Filter
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>
                            Active
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                            Archived
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu> */}
                <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Export
                    </span>
                </Button>
                <Button size="sm" variant="outline" className="h-8">

                    <Link href="/admin/product/productadd" className="flex gap-1 items-center ">
                    <PlusCircle className="h-3.5 w-3.5  " />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Product

                        </span>
                    </Link>

                </Button >
                {(collection.length>0 ? <Button size="sm" variant="outline" className="h-8" onClick={()=>setSheetOpenCollection
                    (true)} >
                
                {/* <Link  href="/admin/product/productadd" className="flex gap-1 items-center "> */}
                <PlusCircle className="h-3.5 w-3.5  " />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Create collection

                </span>
                {/* </Link> */}

            </Button>: <Button size="sm" variant="outline" className="h-8" onClick={()=>setSelectProduct
                    (true)
                }>
                
                {/* <Link  href="/admin/product/productadd" className="flex gap-1 items-center "> */}
                <PlusCircle className="h-3.5 w-3.5  " />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  
                    Select Product
                </span>
                {/* </Link> */}

            </Button>)

                }
               
            </div>
        </div>



    )
} 