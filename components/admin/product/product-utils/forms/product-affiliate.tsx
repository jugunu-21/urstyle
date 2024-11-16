import Image from "next/image"
import {
  Card,
  CardContent,
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
type ProductAffiandCategProps = {
  subCategory: string | null;
  setSubCategory: (subCategory: string) => void;
  link: string | null;
  setLink: (link: string) => void;
  webLink: string | null;
  setWebLink: (link: string) => void;
  category: string | null;
  setCategory: (category: string) => void;
};
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
export default function ProductAffiandCateg({ subCategory, setSubCategory, link, setLink, webLink, setWebLink, category, setCategory }: ProductAffiandCategProps) {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Clothing', subCategoryegories: ['T-Shirts', 'Sweatshirts', 'Hoodies'] },
    { id: 2, name: 'Footwear', subCategoryegories: ['Shoes', 'Boots', 'Sandals'] },
    { id: 3, name: 'Accessories', subCategoryegories: ['Hats', 'Scarves', 'Belts'] }
  ]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(category || '');
  const [selectedsubCategoryegoryId, setSelectedsubCategoryegoryId] = useState(subCategory || '');
  const handleCategoryChange = (value: string) => {
    console.log("value", value)
    setSelectedCategoryId(value);
    setSelectedsubCategoryegoryId('');
    setCategory(value);
  };
  const handlesubCategoryegoryChange = (value: string) => {
    setSelectedsubCategoryegoryId(value);
    setSubCategory(value);
  };
  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>Product affiliate details </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Affiliate webssite</Label>


            <Select
              value={webLink ? webLink : ''}
              onValueChange={(value) => {
                setWebLink(value as string);

              }}
            >
              <SelectTrigger
                id="category"
                aria-label="Select category"
              >
                <SelectValue placeholder={webLink ? webLink : "select website"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Amazon">Amazon</SelectItem>
                <SelectItem value="Flipkart">Flipkart</SelectItem>
                <SelectItem value="Meesho">Meesho</SelectItem>
                <SelectItem value="Myntra">Myntra</SelectItem>
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
              defaultValue={link ? link : ''}
              // id="urlInput"
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
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
                {categories.map((category, index) => (
                  <SelectItem value={`${category.name}`} key={index}>{category.name}</SelectItem>
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
                {selectedCategoryId.length !== 0 && categories.find(c => c.name === selectedCategoryId)?.subCategoryegories?.map((subCategoryegory, index) => (
                  <SelectItem value={subCategoryegory} key={index}>{subCategoryegory}</SelectItem>
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