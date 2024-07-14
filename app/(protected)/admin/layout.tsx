"use client"
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import { SideToolTip } from '@/components/admin/product/productutils/layout/sideToolTip';
import { ToggleSideToolTip } from "@/components/admin/product/productutils/layout/toggleSideToolTip"
import BreadCrumbsList from "@/components/admin/product/productutils/layout/breadCrumbsList"
import { DropDownMenu } from "@/components/admin/product/productutils/layout/dropDownMenu"
// import {ToggleSideToolTip } from '@/components/admin/product/productutils/layout/toggleSideToolTip';


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
import { useEffect } from 'react';
import { useRef ,useState} from 'react';
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split('/').filter(Boolean);
    console.log("p",pathSegments)
 
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="flex  w-full flex-col bg-muted/40">
          <SideToolTip />
        </div>

        <div className="  sticky top-0 flex flex-col sm:gap-4 sm:py-2 sm:pl-14 bg-gray-900">
          <header className="  sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background  px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <ToggleSideToolTip />
            <BreadCrumbsList segments={pathSegments}/>
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
        </div>
        <div>
        </div>
        <div className={inter.className}>{children}</div>
      </ThemeProvider>
    </>
  );
}


