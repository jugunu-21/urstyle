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
  subCategory: string|null;
  setSubCategory: (subCategory: string) => void;
  link: string|null;
  setLink: (link: string) => void;
  category: string|null;
  setCategory: (category: string) => void;
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
export default function ProductAffiandCateg({ subCategory, setSubCategory, link, setLink, category, setCategory }: ProductAffiandCategProps) {
  const [prelink,setPrelink]=useState("")

  const [categories, setCategories] = useState([
    { id: 1, name: 'Clothing', subCategoryegories: ['T-Shirts', 'Sweatshirts', 'Hoodies'] },
    { id: 2, name: 'Footwear', subCategoryegories: ['Shoes', 'Boots', 'Sandals'] },
    { id: 3, name: 'Accessories', subCategoryegories: ['Hats', 'Scarves', 'Belts'] }
  ]);

  const [selectedCategoryId, setSelectedCategoryId] = useState(category|| '');
  const [selectedsubCategoryegoryId, setSelectedsubCategoryegoryId] = useState(subCategory || '');

  const handleCategoryChange = (value: string) => {
    console.log("value",value)
    setSelectedCategoryId(value);
    setSelectedsubCategoryegoryId('');
    setCategory(value);
  ;
  };

  const handlesubCategoryegoryChange = (value: string ) => {
    setSelectedsubCategoryegoryId(value);
    setSubCategory(value);
  };

//   const urlInput = document.getElementById('urlInput');
//   if (urlInput !== null) {
//     urlInput.addEventListener('input', (event) => {
//       if (event.target instanceof HTMLInputElement && event.target.value.startsWith(prelink)) {
//           const inputValue = event.target.value;
//           const isValid = true; // Since we've already checked startsWith('https://')
          
//           if (!isValid) {
//               // Handle invalid input, e.g., display an error message
//               event.target.value = 'https://'; // Or clear the input
//               // You can also add custom validation logic here
//           }
//       }
//   });
// }
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
              type="url"
              placeholder="Enter the url "
              defaultValue={link?link:''}
              // id="urlInput"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      {/* <Card x-chunk="dashboard-07-chunk-2"> */}
      <CardHeader>
        <CardTitle>Product affiliate details </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger id="category" aria-label="Select category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem value={`${category.name}`} key={category.id}>{category.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="subCategory">subCategoryegory</Label>
            <Select onValueChange={handlesubCategoryegoryChange}>
              <SelectTrigger id="subCategory" aria-label="Select subCategoryegory">
                <SelectValue placeholder="Select subCategoryegory" />
              </SelectTrigger>
              <SelectContent>
                {selectedCategoryId.length!==0 && categories.find(c => c.name === selectedCategoryId)?.subCategoryegories?.map(subCategoryegory => (
                  <SelectItem value={subCategoryegory} key={subCategoryegory}>{subCategoryegory}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    {/* </Card> */}
    </Card>
  )
}