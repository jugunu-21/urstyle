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
import getTokenFromCookies from "@/components/helpers/getcookie";
import Productnamedespridetails from "@/components/admin/product/productutils/forms/productnamedespridetails"
import ProductImageCard from "@/components/admin/product/productutils/forms/productImage"
import ProductAffiandCateg from "@/components/admin/product/productutils/forms/productAffiandCateg"
import ProductArchieve from "@/components/admin/product/productutils/forms/productArchieve"
import ProductTable from "@/components/admin/product/productutils/forms/productDetailTable"
import ProductHeader from "../productutils/forms/productHeader"
import handleSubmit from "@/components/admin/product/productFunctions/handleSubmit"
export function Dashboard() {
  const [jwtToken, setJwtToken] = useState(null);
  const [pid, setPid] = useState(null);
  const [name, setName] = useState(null);
  const [code, setCode] = useState(null);
  const [link, setLink] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null)
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const resolvedToken = await getTokenFromCookies();
        console.log("Fetched jwtToken:", resolvedToken);
        setJwtToken(resolvedToken);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };

    fetchToken();
  }, []);
  console.log("jwtTokennnn", jwtToken);
  // const handleImageChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   // Read the file as a Blob
  //   const blob = new Blob([file], { type: file.type });

  //   // Convert the Blob to a Buffer
  //   const reader = new FileReader();
  //   reader.onload = function(event) {
  //     const arrayBuffer = event.target.result;
  //     const buffer = Buffer.from(arrayBuffer);
  //     // Encode the Buffer as Base64
  //     const base64String = buffer.toString('base64');
  //     setImage(buffer);
  //   };
  //   reader.readAsArrayBuffer(blob);
  // };
  const onValueChangehandler = (value, setvariable) => {
    const valuechange = async () => {
      try {


        setvariable(value);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };

    valuechange();

  }
  const requestBody = {
    pid: pid,
    name: name,
    code: code,
    link: link,
    description: description,
    price: price,
    image: image
  };
  const handleaftersubmit = () => {
    console.log("aftersubmitaction")
    setPid(null);
    setName(null);
    setCode(null);
    setLink(null);
    setDescription(null);
    setPrice(null);
    setImage(null);
    console.log("name", name)
  }
  const SubmitHandler = () => {
    handleSubmit({ requestBody, jwtToken });
  };
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 m-4">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <ProductHeader jwtToken={jwtToken} requestBody={requestBody} />
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Productnamedespridetails name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice} />

            {/* <ProductTable price={price} setprice={setPrice}/> */}

            <ProductAffiandCateg
              code={code}
              setCode={setCode}
              link={link}
              setLink={setLink}
              pid={pid}
              setPid={setPid}
            />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <ProductStatus />
            <ProductImageCard image={image} setImage={setImage} />
            {/* <ProductArchieve /> */}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm" onClick={() => { handleSubmit({ requestBody, jwtToken }).then(() => handleaftersubmit()).catch(error => console.error("submission error:", error)) }} >Save Product</Button>
        </div>
      </div>
    </main>
  )
}
