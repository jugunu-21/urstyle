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
import ProductStatus from "@/components/admin/product/product-utils/forms/product-status"
import { useState, useEffect } from "react";
import Productnamedespridetails from "@/components/admin/product/product-utils/forms/product-name-despridetails"
import ProductImageCard from "@/components/admin/product/product-utils/forms/product-image"
import ProductAffiandCateg from "@/components/admin/product/product-utils/forms/product-affiliate"
import ProductArchieve from "@/components/admin/product/product-utils/forms/product-archieve"
import Header from "../product-utils/layout/header"
import { ProductDataInterface, ProductDataInterfacewithid } from "@/components/admin/product/product-utils/product-interface"
import toast from "react-hot-toast";
import { api } from "@/trpc/react"
import { RefetchOptions } from "@tanstack/react-query"
type addprops = {
  selectedProduct?: ProductDataInterfacewithid,
  setSheetOpen: (sheetOpen: boolean) => void,
  refetch?: (options?: RefetchOptions) => Promise<any>;
}
export default function Dashboard({ selectedProduct, setSheetOpen, refetch }: addprops) {
  const utils = api.useUtils();
  const productUpdatepost = api.product.productUpdate.useMutation({
    onSuccess: async () => {
      // console.log("successful")
      await utils.product.invalidate();
    },
  })

  const [category, setCategory] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [webLink, setWebLink] = useState<string | null>("");
  const [subCategory, setSubCategory] = useState<string | null>(null); 0
  const [link, setLink] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [rawdata, setRawdata] = useState<ProductDataInterfacewithid>()
  useEffect(() => {
    { selectedProduct && setRawdata(selectedProduct) }
  }, [selectedProduct])
  const requestBody = {
    category: category ?? rawdata?.category ?? '', // Default to 0 if pid is null or undefined
    name: name ?? rawdata?.name ?? '', // Default to empty string if name is null or undefined
    subCategory: subCategory ?? rawdata?.subCategory ?? '', // Default to empty string if subCategory is null or undefined
    link: link ?? rawdata?.link ?? '', // Default to empty string if link is null or undefined
    description: description ?? rawdata?.description ?? '', // Default to empty string if description is null or undefined
    price: price ?? rawdata?.price ?? '', // Ensure price is a string, defaulting to "0"
    image: image ?? rawdata?.image ?? '',
    webLink: webLink ?? rawdata?.webLink ?? ''

  };
  const hasAnyFieldEmptyOrNull = Object.entries(requestBody).some(([key, value]) => {
    if (value === '' || value === undefined) {
      return true;
    }


    return false;
  });

  const updateProducthandler = async () => {
    productUpdatepost.mutateAsync({ requestBody, id: selectedProduct?.id })
      .then
      (() => {
        { setSheetOpen && setSheetOpen(false) }
        { refetch && refetch() }
        // router.push("/admin/product/productfetch")
        toast.success("sucessfully updated");
      }
      ).catch((error) => console.error("submission error:", error))

  }
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="grid flex-1 items-start gap-4  sm:px-6 sm:py-0 md:gap-8 m-4">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <Header handler={updateProducthandler} title="Update Product" />
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Productnamedespridetails name={rawdata ? rawdata.name : null} setName={setName} description={rawdata ? rawdata.description : null} setDescription={setDescription} price={rawdata ? rawdata.price : null} setPrice={(value: string) => setPrice(value)} />
            <ProductAffiandCateg
              subCategory={rawdata ? rawdata.subCategory : null}
              setSubCategory={setSubCategory}
              link={rawdata ? rawdata.link : null}
              setLink={setLink}
              webLink={webLink || ''}
              setWebLink={setWebLink}
              category={rawdata ? rawdata.category : null}
              setCategory={setCategory}
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
              productUpdatepost.mutateAsync({ requestBody, id: rawdata ? rawdata.id : undefined })
                .then
                (() => {
                  // console.log("updateedcompleteinfetch")
                  try {
                    setSheetOpen(false)
                    { refetch && refetch(); }
                    // console.log("refetch", refetch)
                    toast.success("sucessfully updated");

                  }
                  catch (error) {
                    console.error("Error updating product:", error);
                  }

                }).catch((error) => console.error("submission error:", error))
            }}
          >Save Product</Button>
        </div>
      </div>
    </main>
  )
}
