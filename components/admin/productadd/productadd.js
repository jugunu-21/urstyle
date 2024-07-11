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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { useState, useEffect } from "react";
import getTokenFromCookies from "@/components/helpers/getcookie";

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
  const onValueChangehandler =( value, setvariable )=>{
    const valuechange  = async () => {
      try {
       
       
        setvariable(value);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };

    valuechange();

  }
  const handleSubmit = async () => {
    // const images = handleFileUpload();
    console.log("image", image)

    const requestBody = {
      pid: pid,
      name: name,
      code: code,
      link: link,
      description: description,
      price: price,
      image: image

    };
    console.log(requestBody)
    //   const formData = new FormData();

    // // Append text fields to formData
    // Object.keys(requestBody).forEach(key => {
    //   formData.append(key, requestBody[key]);
    // });
    // formData.append('image', image);
    //   console.log(formData);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/media/product/upload`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (!response.ok) {
      console.log("error");
      // throw new Error("Failed to fetch user details");
    } else {
      console.log("uploaded product");
    }
  };
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
   
      
       
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
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
                <Button size="sm" onClick={handleSubmit}>Save Product</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                      Add product with its details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="Gamer Gear Pro Controller"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                          className="min-h-32"
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Stock</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">SKU</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="w-[100px]">Size</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-001
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-1" className="sr-only">

                            </Label>
                            <Input
                              id="stock-1"
                              type="number"
                              defaultValue="100"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price" className="sr-only">
                              Price
                            </Label>
                            <Input
                              id="price"
                              type="number"
                              defaultValue="99.99"
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="s"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-002
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-2" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-2"
                              type="number"
                              defaultValue="143"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-2" className="sr-only">
                              Price
                            </Label>
                            <Input
                              id="price-2"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="m"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-003
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-3" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-3"
                              type="number"
                              defaultValue="32"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-3" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="price-3"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="s"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      Add Variant
                    </Button>
                  </CardFooter>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Product affiliate details </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Affiliate webssite</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="website" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clothing" >
                              Amazon
                            </SelectItem>
                            <SelectItem value="electronics">
                              Flipkart
                            </SelectItem>
                            <SelectItem value="accessories">
                              Meesho
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="link">
                          Affiliate link
                        </Label>

                        <Input
                          className="w-full grid-cols-2"
                          id="link"
                          type="text"
                          defaultValue="99.99"
                          onChange={(e) => setLink(e.target.value)}

                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle>Product Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="pid">Category</Label>

                        <Select onValueChange={(value)=>{setPid(value)
                          console.log("pid ",pid)
                        }}>
                          <SelectTrigger
                            id="pid"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent  >
                        <SelectItem value="1">Clothing</SelectItem>
                            <SelectItem value="2" >
                              Footwear
                            </SelectItem>
                            <SelectItem value="3"  >
                              Accessories
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="code">
                          Subcategory (optional)
                        </Label>
                        <Select onValueChange={(value)=>{setCode(value)
                          console.log("code ",code)
                        }} >
                          <SelectTrigger
                            id="code"
                            aria-label="Select subcategory"

                          >
                            <SelectValue placeholder="Select subcategory" />
                          </SelectTrigger>
                          <SelectContent

                          >
                            
                            <SelectItem value="11" >T-Shirts</SelectItem>
                            <SelectItem value="13" >Sweatshirts</SelectItem>
                            <SelectItem value="12"  >Hoodies</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Product Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Active</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Product Images</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src="/placeholder.svg"
                        width="300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="/placeholder.svg"
                            width="84"

                          />
                        </button>
                        <button>
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src="/placeholder.svg"
                            width="84"
                          />
                        </button>
                        <button htmlFor="image" className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
                          onClick={() => setImage("https://m.media-amazon.com/images/I/51p6ELTSNpL._SY879_.jpg")}
                        >
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only"

                          >Upload</span>

                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Archive Product</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <Button size="sm" variant="secondary">
                      Archive Product
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm" onClick={handleSubmit} >Save Product</Button>
            </div>
          </div>
        </main>

   
  )
}
