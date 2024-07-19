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
import { Textarea } from "@/components/ui/textarea"
interface ProductDetailFormProps {
  name: string;
  setName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
}
const Productnamedespridetails = ({ name, setName, description, setDescription, price, setPrice }: ProductDetailFormProps) => {
  return (
    <Card x-chunk="dashboard-07-chunk-0 mb-4">
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
              placeholder="Enter Name of Product"
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter description."
              className="min-h-32"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
            pattern="\d*" 
              className="w-full"
              
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price..."
             
            />
            
          </div>

        </div>
      </CardContent>
    </Card>
  )
}
export default Productnamedespridetails