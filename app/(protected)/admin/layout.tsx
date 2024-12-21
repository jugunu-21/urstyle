"use client"

import { Inter } from "next/font/google";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { SideToolTip } from '@/components/admin/product/product-utils/layout/side-tool-tip';
import { ToggleSideToolTip } from "@/components/admin/product/product-utils/layout/toggle-side-tool-tip"
import BreadCrumbsList from "@/components/admin/product/product-utils/layout/bread-crumbs-list"
import { DropDownMenu } from "@/components/admin/product/product-utils/layout/drop-down-menu"
import {
  ChevronLeft,
  Divide,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  User,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { SignOutButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  interface Crumb {
    href: string;
    label: string;
  }
  const pathname = usePathname()
  const crumbs = pathname.split("/").reduce<Crumb[]>((acc, curr, index, arr) => {
    if (curr === "") return acc
    const href = "/" + arr.slice(1, index + 1).join("/")
    const label = curr.charAt(0).toUpperCase() + curr.slice(1)
    const pathParts = ["/"].concat(arr.slice(index + 1));

    const newPath = pathParts.join("/");
    // Create a new Crumb object with the modified href and label arrays
    const newCrumb: Crumb = {
      href,
      label
    };
    acc.push(newCrumb);
    return acc;
  }, [])
  const transformedLabels = crumbs.map(crumb => crumb.label.split('/').map(part => part.trim()));
  const item = [<SignOutButton />, "Home"]
  const label = "My Account"
  const trigger: () => JSX.Element = () => {
    return (
      <Users2 className="h-6 w-6 items-center focus:bg-accent justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground " />
    );
  };
  const [hoverContent, setHoverContent] = useState<JSX.Element | null>(null);
  return (
    <>
      {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
      <div className='flex'>
        <div className=" flex-col bg-muted/40">
          <SideToolTip />
        </div>
        <div className='w-full'>
          <div className=" bg-background  w-full flex-grow  sticky top-0 flex  sm:gap-4 sm:py-2 sm:pl-14 ">
            <header className="flex-grow  z-50 flex h-14 items-center gap-4 border-b bg-primary-foreground  sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <ToggleSideToolTip />
              <BreadCrumbsList segments={transformedLabels.flat()} />
              <div className="relative ml-auto flex-1 md:grow-0">
                {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                /> */}
              </div>
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/"
                      className="flex h-9 w-9 items-center focus:bg-accent justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                      <Home className="h-5 w-5" />
                      <span className="sr-only">Main Page</span>
                    </Link>

                  </TooltipTrigger>

                  <TooltipContent side="bottom">Main Page</TooltipContent>
                </Tooltip></TooltipProvider> */}
              <DropDownMenu item={item} label={label} trigger={trigger} />
            </header>
          </div>

          <div className={inter.className}>{children}</div>
        </div>
      </div>
      {/* </ThemeProvider> */}
    </>
  );
}


