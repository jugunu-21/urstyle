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
  Upload,
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { useRouter } from "next/navigation"; // Corrected import path
type dropdownmenuprops = {
  item: string[], trigger: () => JSX.Element, label: string, index?: number
}
export function DropDownMenu({ item, label, trigger, index }: dropdownmenuprops) 
{
  const router = useRouter();
  const itemsLength = item.length;

  // Define the function you want to trigger when "update" is found
  // type UpdateFoundParams = {
  //   inn: number;
  // };
  // const handleUpdateFound = (inn: number) => {
  //   console.log("Update found!");
  //   console.log("index",index)
  //   router.push(`/admin/product/productUpdate/${inn}`)

  //   // Add any additional logic you need here
  // };

  // function onClicked() {
  //   const triggerData = "Update";
  //   // Iterate over the item array
  //   for (let i = 0; i < itemsLength; i++) {
  //     if (item[i].includes(triggerData)) {
  //       // Call the function if "update" is found
  //       handleUpdateFound(i);
  //       break; // Exit the loop once "update" is found
  //     }
  //   }
  // }
    return (

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
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

          {item.map((item, i) => {

            return (
              <div key={i} onClick={() => {
                if (item === "Update") {
                  router.push(`/admin/product/productUpdate/${index}`);
                }
              }}>
                <DropdownMenuItem>{item}</DropdownMenuItem>
                {i !== itemsLength - 1 && <DropdownMenuSeparator />}
              </div>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }