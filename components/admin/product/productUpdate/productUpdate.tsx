"use client"
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
import ProductStatus from "@/components/admin/product/productutils/forms/productStatus"
import { useState, useEffect } from "react";
import Productnamedespridetails from "@/components/admin/product/productutils/forms/productnamedespridetails"
import ProductImageCard from "@/components/admin/product/productutils/forms/productImage"
import ProductAffiandCateg from "@/components/admin/product/productutils/forms/productAffiandCateg"
import ProductArchieve from "@/components/admin/product/productutils/forms/productArchieve"
import ProductTable from "@/components/admin/product/productutils/forms/productDetailTable"
import ProductHeader from "../productutils/forms/productHeader"
import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/productutils/productServices/productDataInterface"
import ApiUpdateProduct from "@/components/admin/product/productFunctions/apiUpdateProduct"
import ApiFetchProducts from "@/components/admin/product/productFunctions/apiFetchProducts"
import { useContext } from "react"
import { createContext } from "react"
// import { ProductsContext } from "@/components/context/mycontext"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useStore, useToken } from "@/components/helpers/zustand"

import { ProductsContext, Productsprops, productlistprop } from '@/components/context/mycontext';
import { api } from "@/trpc/react"
type addprops = {
  fetchedData?: productlistprop,
  setSheetOpen: (sheetOpen: boolean) => void,
  index: number
}
export default function Dashboard({ fetchedData, setSheetOpen, index }: addprops) {
  const utils = api.useUtils();
  const productUpdatepost = api.product.productUpdate.useMutation({
    onSuccess: async () => {
      console.log("successful")
      await utils.product.invalidate();
    },
  })
  const [pid, setPid] = useState<number | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [rawdata, setRawdata] = useState<ProductDataInterfacewithid>()
  const router = useRouter();
  const token = useToken((state) => state.token);
  const data = useStore((state) => (state.data));

  useEffect(() => {
    if (index != undefined) {
      console.log("fetchedData", fetchedData)
      console.log("index", index)
      { fetchedData && setRawdata(fetchedData[index]) }
    }

  },[])
  const requestBody = {
    pid: pid ?? rawdata?.pid ?? 0, // Default to 0 if pid is null or undefined
    name: name ?? rawdata?.name ?? '', // Default to empty string if name is null or undefined
    code: code ?? rawdata?.code ?? '', // Default to empty string if code is null or undefined
    link: link ?? rawdata?.link ?? '', // Default to empty string if link is null or undefined
    description: description ?? rawdata?.description ?? '', // Default to empty string if description is null or undefined
    price: price ?? rawdata?.price ?? '', // Ensure price is a string, defaulting to "0"
    image: image ?? rawdata?.image ?? '',
  };

  // const handleaftersubmit = async () => {
  //   console.log("aftersubmitaction")
  //   setPid(null);
  //   setName(null);
  //   setCode(null);
  //   setLink(null);
  //   setDescription(null);
  //   setPrice(null);
  //   setImage(null);

  // }
  interface SubmitFunctionArgs {
    requestBody: ProductDataInterface;
    jwtToken: string; // Assuming jwtToken is a string
  }

  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 m-4">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <ProductHeader jwtToken={token || ""} requestBody={requestBody} id={rawdata ? rawdata.id : undefined} setSheetOpen={ setSheetOpen} />
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Productnamedespridetails name={rawdata ? rawdata.name : null} setName={setName} description={rawdata ? rawdata.description : null} setDescription={setDescription} price={rawdata ? rawdata.price : null} setPrice={(value: string) => setPrice(value)}  />

            {/* <ProductTable price={price} setprice={setPrice}/> */}

            <ProductAffiandCateg
              code={rawdata ? rawdata.code : null}
              setCode={setCode}
              link={rawdata ? rawdata.link : null}
              setLink={setLink}
              pid={rawdata ? rawdata.pid : null}
              setPid={setPid}
            />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <ProductStatus />
            <ProductImageCard image={rawdata ? rawdata.image : null} setImage={setImage} />
            {/* <ProductArchieve /> */}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden ">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm" onClick=
            {() => {
              if (token === null) {
                console.error("JWT Token is required");
                return;
              }
              console.log("iddd", id);
              if (token) {
                productUpdatepost.mutateAsync({ requestBody, jwtToken: token, id: rawdata ? rawdata.id : undefined })
                  .then
                  (() => {
                    console.log("updateedcompleteinfetch")
                    try {
                      setSheetOpen(false)
                      // router.push("/admin/product/productfetch")
                      toast.success("sucessfully updated");

                    }
                    catch (error) {
                      console.error("Error updating product:", error);
                    }

                  }).catch((error) => console.error("submission error:", error))
              }


            }}

          >Save Product</Button>
        </div>
      </div>
    </main>
  )
}
