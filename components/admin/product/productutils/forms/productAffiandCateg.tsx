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
type ProductAffiandCategProps = {
  code: string|null;
  setCode: (code: string) => void;
  link: string|null;
  setLink: (link: string) => void;
  pid: number|null;
  setPid: (pid: number) => void;
};
const item = ["heyy", "hlww"]
const label = "LL"
const trigger: () => JSX.Element = () => {
  return (
    <Image
      src="/placeholder-user.jpg"
      width={36}
      height={36}
      alt="Avatar"
      className="overflow-hidden rounded-full"
    />
  );
};
import { useState } from "react"
export default function ProductAffiandCateg({ code, setCode, link, setLink, pid, setPid }: ProductAffiandCategProps) {
  const [prelink,setPrelink]=useState("")

  const urlInput = document.getElementById('urlInput');
  if (urlInput !== null) {
    urlInput.addEventListener('input', (event) => {
      if (event.target instanceof HTMLInputElement && event.target.value.startsWith(prelink)) {
          const inputValue = event.target.value;
          const isValid = true; // Since we've already checked startsWith('https://')
          
          if (!isValid) {
              // Handle invalid input, e.g., display an error message
              event.target.value = 'https://'; // Or clear the input
              // You can also add custom validation logic here
          }
      }
  });
}
  return (
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
                <SelectItem value="clothing" onClick={()=>{setPrelink("https://amzn.to/"); console.log(prelink)}}>
                  Amazon
                </SelectItem>
                <SelectItem value="electronics"  onClick={()=>setPrelink(" Flipkart")} >
                  Flipkart
                </SelectItem>
                <SelectItem value="accessories"  onClick={()=>setPrelink(" Meesho")}>
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
              type="text"
              placeholder=".com"
              defaultValue={link?link:''}
              id="urlInput"
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

            <Select onValueChange={(value) => {
              const numericValue = Number(value);
              setPid(numericValue);
            }}>

              <SelectTrigger
                id="pid"
                aria-label="Select category"
                defaultValue={pid?pid:0}
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
              Subcategory
            </Label>
            <Select onValueChange={(value) => {
              setCode(value)
              console.log("code ", code)
            }} >
              <SelectTrigger
                id="code"
                aria-label="Select subcategory"
                defaultValue={code?code:''}
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
  )
}