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
import { useState } from "react"
import { useRouter } from "next/navigation"; // Corrected import path
import ProductAdd from "@/components/admin/product/productadd/productAdd"
type dropdownmenuprops = {
  item: string[], trigger: () => JSX.Element, label: string, setIndex?:(index:number)=>void ,setSheetOpen:(sheetOpen:boolean)=>void,recentindex?:number
}
export function DropDownMenu({ item, label, trigger, setIndex,setSheetOpen,recentindex }: dropdownmenuprops) {
  const router = useRouter();
  const itemsLength = item.length;
  // const [open, setOpen] = useState(false);
  // const [sheetOpen, setSheetOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setSheetOpen(true);
    
  };

  return (
<>
    <DropdownMenu>
      <DropdownMenuTrigger >
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          {trigger()}   </Button>`  `
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {item.map((item, i) => {
          return (
            <div key={i} 
            onClick={() => {
              if(item==="Update"){
                handleDropdownItemClick()
              { setIndex&&recentindex&&setIndex(recentindex)}
              }
            
            }}
            >
          <DropdownMenuItem>{item}</DropdownMenuItem>
              {i !== itemsLength - 1 && <DropdownMenuSeparator />}
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  
</>
  )
}

