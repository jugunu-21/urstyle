

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
import { ProductDataInterface } from "@/components/admin/product/productUtils/productServices/productDataInterface";
import toast from "react-hot-toast";
interface SubmitHandlerInterface {
  jwtToken: string
  requestBody: ProductDataInterface
  id?: string|undefined
  setSheetOpen?: (value: boolean) => void;
  refetch?: (options?: RefetchOptions) => Promise<any>;
}
// import Router from "next/router"
import { useStore, } from "@/components/helpers/zustand"
import { useRouter } from "next/navigation";

import {  productsProp, minimalProductArray } from '@/components/admin/product/productUtils/productInterface';
import { api } from "@/trpc/react";
import { RefetchOptions } from "@tanstack/react-query"
export default function ProductHeader({ jwtToken, requestBody, id, setSheetOpen,refetch }: SubmitHandlerInterface) {
  const router = useRouter();
  const productaddpost = api.product.productAdd.useMutation();
  const productUpdatepost = api.product.productUpdate.useMutation();
  // const setData = useStore((state) => state.setData);

    const handlerupload = async () => {
      if (jwtToken === null) {
        console.error("JWT Token is required");
        return;
      }
    
        if (jwtToken) {
          productaddpost.mutateAsync({ requestBody, jwtToken:jwtToken })
            .then(()=> {
              router.push("/admin/product/productfetch")
              toast.success("sucessfully uploaded");
            
            })
            .catch(function (error) {
              console.log("apiaddproduct", error);
              toast.error("failed to upload product")
            });
  
        }
      }

  const handlerupdate=async(id:string) => {
    if (jwtToken === null) {
      console.error("JWT Token is required");
      return;
    }
    console.log("iddd", id);
    if (jwtToken) {
      productUpdatepost.mutateAsync({ requestBody, jwtToken: jwtToken, id:id  })
        .then
        (() => {
         {setSheetOpen&&setSheetOpen(false)}
         {refetch&&refetch()}
          // router.push("/admin/product/productfetch")
          toast.success("sucessfully updated");}
      ).catch((error) => console.error("submission error:", error))
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
        <Button variant="outline" size="sm" onClick={()=>router.push("/admin/product")}>
          Discard
        </Button>

        {id == null ? (
          <Button size="sm" onClick={()=>handlerupload()}>Save Product</Button>

        ) : (<Button size="sm" onClick={() => handlerupdate(id)}>Save Product</Button>)}
      </div>
    </div>
  )
}