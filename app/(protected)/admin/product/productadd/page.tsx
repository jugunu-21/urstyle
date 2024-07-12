"use client"
import React from 'react';
import { Dashboard } from "@/components/admin/product/productadd/productAdd"

import { Togglesidetooltip } from "@/components/admin/product/productutils/layout/togglesidetooltip"
import BreadCrumbsList from "@/components/admin/product/productutils/layout/breadCrumbsList"
import{ DropDownMenu} from "@/components/admin/product/productutils/layout/dropDownMenu"
import {
    ChevronLeft,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Upload,
    Users2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import ProductImageCard from "@/components/admin/forms/productImage"
export default function Productadd() {
    return (
        <div >
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14"></div>
            <header className="  sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background  px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Togglesidetooltip />
                <BreadCrumbsList />
                <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>
                <DropDownMenu />

            </header>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Dashboard />
            </div>
        </div>
       
    )
}



