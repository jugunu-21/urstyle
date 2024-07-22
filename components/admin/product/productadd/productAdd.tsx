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
import toast from "react-hot-toast"
import ProductStatus from "@/components/admin/product/productutils/forms/productStatus"
import { useState, useEffect } from "react";
import getTokenFromCookies from "@/components/helpers/getcookie";
import Productnamedespridetails from "@/components/admin/product/productutils/forms/productnamedespridetails"
import ProductImageCard from "@/components/admin/product/productutils/forms/productImage"
import ProductAffiandCateg from "@/components/admin/product/productutils/forms/productAffiandCateg"
import ProductArchieve from "@/components/admin/product/productutils/forms/productArchieve"
import ProductTable from "@/components/admin/product/productutils/forms/productDetailTable"
import ProductHeader from "../productutils/forms/productHeader"
import {ProductDataInterface} from "@/components/admin/product/productutils/productServices/productDataInterface"
import PostApiCall from "../productFunctions/postApiCall"
import ApiUploadProduct from "../productFunctions/apiUploadProducts"
import Router from "next/router"
import { useRouter } from "next/navigation"
import useJwtToken from "@/components/helpers/getToken"
import { useToken } from "@/components/helpers/zustand"
export default function Dashboard() {
  const token= useToken((state) => state.token);
  const [pid, setPid] = useState<number | null>();
  const [name, setName] = useState<string | null>("");
  const [code, setCode] = useState<string | null>("");
  const [link, setLink] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");
  const [price, setPrice] = useState<string | null>("");
  const [image, setImage] = useState<string | null>("");

  const router = useRouter();
  const requestBody = {
    pid: pid ?? 0, // Default to 0 if pid is null or undefined
    name: name ?? "", // Default to empty string if name is null or undefined
    code: code ?? "", // Default to empty string if code is null or undefined
    link: link ?? "", // Default to empty string if link is null or undefined
    description: description ?? "", // Default to empty string if description is null or undefined
    price: price ?? "0", // Ensure price is a string, defaulting to "0"
    image: image ?? "",
  };


  // const handleaftersubmit = () => {
  //   console.log("aftersubmitaction")
  //   setPid(null);
  //   setName(null);
  //   setCode(null);
  //   setLink(null);
  //   setDescription(null);
  //   setPrice(null);
  //   setImage(null);
  //   console.log("name", name)
  // }
  interface SubmitFunctionArgs {
    requestBody: ProductDataInterface;
    jwtToken: string; // Assuming jwtToken is a string
  }
      const apiroute="/media/product/upload"
 
  const handler=async()=>{
    console.log("Handler invoked");
    console.log("jwttoken",token)
     try {
      
    if(token!==null){
      const response = await ApiUploadProduct({requestBody, jwtToken:token })
      .then(function (response) {
        console.log(response);
        router.push('/admin/product/productfetch')
        toast.success("product added successfully ")
      })
      .catch(function (error) {
        console.log("apiaddproduct",error);
        toast.error ("failed to upload product")
      });
  
  }} catch (error) {
   
    console.error("Error uploading producta:", error);
    toast.error("Error uploading producta")
  }
  }
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 m-4">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <ProductHeader jwtToken={token || ""} requestBody={requestBody} />
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Productnamedespridetails name={name || ""} setName={setName} description={description || ""} setDescription={setDescription} price={price || "0"} setPrice={(value: string) => setPrice(value)} />

            {/* <ProductTable price={price} setprice={setPrice}/> */}

            <ProductAffiandCateg
              code={code || ""}
              setCode={setCode}
              link={link || ""}
              setLink={setLink}
              pid={pid || 0}
              setPid={setPid}
            />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <ProductStatus />
            <ProductImageCard image={image || ""} setImage={setImage} />
            {/* <ProductArchieve /> */}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm" onClick={() =>handler()} >Save Product</Button>
        </div>
      </div>
    </main>
  )
}
