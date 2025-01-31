"use client"
import React from 'react';
import Image from "next/image"
import Link from "next/link"
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
  ListPlus,
  Upload,
  Table2,
  Users2,
} from "lucide-react"
import { GiClothes } from "react-icons/gi";
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GiDress } from "react-icons/gi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"



export function SideToolTip() {

  return (
    <div className='sticky top-0 h-screen'>
      {/* <aside  className={`fixed left-0 z-10 hidden h-full w-14 flex-col border-r bg-background sm:flex ${tooltipClass}`}> */}
      <aside className=" h-screen z-10 inset-y-0 left-0  hidden w-14 flex-col border-r bg-background sm:flex">

        <TooltipProvider>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/admin"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button className=' bg-blue focus:none hover:bg-blue'
                // onClick={async () =>onclickfun()}
                >
                  <Link
                    href="/admin/product/productfetch" // Use React Router's `to` prop for navigation
                    className="flex h-9 w-9 items-center focus:bg-accent justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <GiDress className="h-5 w-5" />

                    <span className="sr-only">Products Table</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Products Table</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className=' bg-blue focus:none hover:bg-blue'
                // onClick={async () =>onclickfun()}
                >
                  <Link
                    href="/admin/collection/collectionfetch" // Use React Router's `to` prop for navigation
                    className="flex h-9 w-9 items-center focus:bg-accent justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >

                    <GiClothes className="h-5 w-5" />
                    <span className="sr-only">Collection Table </span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Collection Table </TooltipContent>
            </Tooltip>
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/product/productadd"
                  className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-accent text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    < ListPlus className="h-5 w-5 " />
                  <span className="sr-only"> Add Product</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Add Product</TooltipContent>
            </Tooltip> */}
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-accent text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip> */}
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center focus:bg-accent rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <PlusCircle className="h-5 w-5 " />
                  <span className="sr-only">Add Product</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Add Product</TooltipContent>
            </Tooltip> */}
          </nav>
          <nav className="mt-auto flex flex-col items-center focus:bg-accent gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Main Page</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Main Page</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>
      </aside>
    </div>
  )
}
