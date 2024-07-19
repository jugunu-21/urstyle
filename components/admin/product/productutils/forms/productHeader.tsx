

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
import { ProductDataInterface } from "@/components/admin/product/productutils/productServices/productDataInterface";
import toast from "react-hot-toast";
interface SubmitHandlerInterface {
  jwtToken: string
  requestBody: ProductDataInterface
  id?: string
}
import { useRouter } from "next/navigation";
import ApiUploadProduct from '@/components/admin/product/productFunctions/apiUploadProducts';
import ApiUpdateProduct from '@/components/admin/product/productFunctions/apiUpdateProduct';
export default function ProductHeader({ jwtToken, requestBody, id }: SubmitHandlerInterface) {
  const router = useRouter();
  const handlerupload=async()=>{
    console.log("Handler invoked");
    console.log("jwttoken",jwtToken)
     try {
      
    if(jwtToken!==null){
      const response = await ApiUploadProduct({requestBody, jwtToken })
      .then(function (response) {
        console.log(response);
        toast.success("product added successfully ")
        router.push('/admin/product/productfetch')
      
      })
      .catch(function (error) {
        console.log("errrooh",error);
        toast.error ("failed to upload product")
      });
  
  }} catch (error) {
   
    console.error("Error uploading product:", error);
    toast.error("Error uploading product")
  }
  }
  const handlerupdate=async(id:string)=>{
    console.log("Handler invoked");
    console.log("jwttoken",jwtToken)
     try {
      
    if(jwtToken!==null){
      const response = await  ApiUpdateProduct({ requestBody, jwtToken, id })
      
      .then(function (response) {
        console.log(response);
        toast.success("product added successfully ")
        router.push('/admin/product/productfetch')
      
      })
      .catch(function (error) {
        console.log("errrooh",error);
        toast.error ("failed to upload product")
      });
  
  }} catch (error) {
   
    console.error("Error uploading product:", error);
    toast.error("Error uploading product")
  }
  }
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

        {id == null ? (
          <Button size="sm" onClick={()=>handlerupload()}>Save Product</Button>

        ) : (<Button size="sm" onClick={() => handlerupdate(id)}>Save Product</Button>)}
      </div>
    </div>
  )
}