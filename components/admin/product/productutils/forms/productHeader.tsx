

import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,

  PlusCircle,

} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
import { ProductRequestBody } from "@/components/admin/product/productFunctions/handleSubmit";

interface SubmitHandlerInterface {
  jwtToken:string
  requestBody:ProductRequestBody
}
import handleSubmit from "@/components/admin/product/productFunctions/handleSubmit"
export default function ProductHeader({jwtToken, requestBody}:SubmitHandlerInterface) {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="icon" className="h-7 w-7">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        Pro Controller
      </h1>
      <Badge variant="outline" className="ml-auto sm:ml-0">
        In stock
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm" onClick={()=>{
          handleSubmit({requestBody,jwtToken})
          console.log("submitted ")
        }}>Save Product</Button>
      </div>
    </div>
  )
}