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
import { ProductDataInterface,ProductDataInterfacewithid } from "@/components/admin/product/productutils/productServices/productDataInterface"
import ApiUpdateProduct from "@/components/admin/product/productFunctions/apiUpdateProduct"
import { useContext } from "react"
import { createContext } from "react"
import { ProductsContext } from "@/components/context/mycontext"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default  function Dashboard({ index }: { index: number | undefined }) {
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const [pid, setPid] = useState<number | null>();
  const [id, setId] = useState<string>("0");
  const [name, setName] = useState<string | null>("");
  const [code, setCode] = useState<string | null>("");
  const [link, setLink] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");
  const [price, setPrice] = useState<string | null>("");
  const [image, setImage] = useState<string | null>("");
  
  const contextValue = useContext(ProductsContext);
  let rawdata: ProductDataInterfacewithid | undefined;
  const router = useRouter();
  useEffect(() => {
    if (index != undefined) {
      rawdata = contextValue[index]
    } else {
  
      rawdata = contextValue[0]
    }
    const fetchToken = async () => {
      try {
        const resolvedToken: string | null = await getTokenFromCookies();
        console.log("Fetched jwtToken:", resolvedToken);
        setJwtToken(resolvedToken);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };
    fetchToken();
    let initialdata
    if(rawdata){
    initialProductData(rawdata);
    }
 
 
  }, [contextValue]);


  const initialProductData = async(rawdata: ProductDataInterfacewithid) => {
    setId(rawdata.id)
    setPid(rawdata.pid);
    setName(rawdata.name);
    setCode(rawdata.code);
    setLink(rawdata.link);
    setDescription(rawdata.description);
    setPrice(rawdata.price);
    setImage(rawdata.image);
  };



  const requestBody = {
    pid: pid ??rawdata?.pid??0, // Default to 0 if pid is null or undefined
    name: name ?? "", // Default to empty string if name is null or undefined
    code: code ?? "", // Default to empty string if code is null or undefined
    link: link ?? "", // Default to empty string if link is null or undefined
    description: description ?? "", // Default to empty string if description is null or undefined
    price: price ?? "0", // Ensure price is a string, defaulting to "0"
    image: image ?? "",
  };

  // let tokendata: string | undefined;

  // if (rawdata && rawdata.id !== undefined) {
  //     tokendata = rawdata.id.toString(); // Ensure it's a string
  // } else {
  //     console.error("rawdata or rawdata.id is undefined");
  //     tokendata = "default_value"; // Provide a default value or handle the undefined case appropriately
  // }
 





  const handleaftersubmit = async() => {
    console.log("aftersubmitaction")
    setPid(null);
    setName(null);
    setCode(null);
    setLink(null);
    setDescription(null);
    setPrice(null);
    setImage(null);
  
  }
  interface SubmitFunctionArgs {
    requestBody: ProductDataInterface;
    jwtToken: string; // Assuming jwtToken is a string
  }

  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 m-4">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <ProductHeader jwtToken={jwtToken || ""} requestBody={requestBody} id={id}/>
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
        <div className="flex items-center justify-center gap-2 ">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm" onClick={() => {
  if (jwtToken === null) {
    console.error("JWT Token is required");
    return;
  }
  console.log("iddd", id);
  ApiUpdateProduct({ requestBody, jwtToken, id })
    .then(() =>{ router.push("/admin/product/productfetch")

      toast.success("sucessfully updated");
    }
  )

    .catch((error) => console.error("submission error:", error));
}}>Save updatedProduct</Button>
        </div>
      </div>
    </main>
  )
}
