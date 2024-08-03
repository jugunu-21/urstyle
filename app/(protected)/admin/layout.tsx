"use client"
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import { SideToolTip } from '@/components/admin/product/productutils/layout/sideToolTip';
import { ToggleSideToolTip } from "@/components/admin/product/productutils/layout/toggleSideToolTip"
import BreadCrumbsList from "@/components/admin/product/productutils/layout/breadCrumbsList"
import { DropDownMenu } from "@/components/admin/product/productutils/layout/dropDownMenu"
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
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePathname } from 'next/navigation';

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
  const item = ["Setting", "Support", "Logout"]
  const label = "My Account"
  const trigger: () => JSX.Element = () => {
    return (
      <Image
        src="/placeholder-user.jpg"
        width={36}
        height={36}
        alt="Avatar"
        className="overflow-hidden rounded-full"
      />
    );
  };
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                  />
                </div>
                <DropDownMenu item={item} label={label} trigger={trigger} />

              </header>
            </div>

            <div className={inter.className}>{children}</div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}


