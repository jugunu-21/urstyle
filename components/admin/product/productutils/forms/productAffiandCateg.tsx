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
    code: string;
    setCode: (code: string) => void;
    link: string;
    setLink: (link: string) => void;
    pid:string;
    setPid:(pid:string)=>void;
  };
  
export default function ProductAffiandCateg({code,setCode,link,setLink,pid,setPid}: ProductAffiandCategProps){
    return(
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
                          placeholder=".com"
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
    )
}