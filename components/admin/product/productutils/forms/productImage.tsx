
import Image from "next/image"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Files, Upload } from 'lucide-react'
interface ProductImageCardprops {
  image: string | null
  setImage: (image: string) => void
}
import axios from 'axios';  // Assuming you're using Axios for requests
import { useToken } from "@/components/helpers/zustand"
import { ApiUploadImage } from "@/components/admin/product/productUtils/function"
function ProductImageCard({ image, setImage }: ProductImageCardprops) {
  const [images, setImages] = useState<File[] | null>(null)
  const jwtToken = useToken((state) => state.token)
  let imaggg: File
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      imaggg = event.target.files[0]
    }
  };
  const formData = new FormData();
  let i = 0
  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      // formData.append(`files[${i++}]`, event.target.files[0]);
      formData.append('files', event.target.files[0]);
      console.log(" formData", formData)
      console.log("toke", jwtToken)
    }
  };
  return (
    <div> <Card
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
            {/* <button>
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
            </button> */}
            {/* <button type="file" className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
            onClick={() => {setImage("https://m.media-amazon.com/images/I/51p6ELTSNpL._SY879_.jpg")
              console.log("clicked button for image")}
            }
          >
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only"
            >Upload</span>
          </button> */}
            <div className="relative">
              <input
                type="file"
                id="fileInput"
                name="image"
                onChange={(e) => { console.log("e", e); console.log("e", jwtToken); handleFileChange(e) }}
              />
              <button onClick={() => {
                console.log("cll"); ApiUploadImage(imaggg, jwtToken ? jwtToken : '').then(response => {
                  setImage(response.data.url)
                  console.log("response.data.id", response.data.id)
                })
              }}>Submit</button>
              {/* <button onClick={() => { console.log("cll"); handleImageUpload(formData) }}>Submit</button> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card></div>
  )

}
export default ProductImageCard;