
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
interface ProductImageCardprops {
  image: string | null
  setImage: (image: string) => void
}
import { encodeBase64 ,Base64toSrc} from "@/components/admin/product/product-utils/product-services/image-services"
function ProductImageCard({ image, setImage}: ProductImageCardprops) {
  return (
    <div> <Card
      className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
          src={image?image:'/placeholder.svg'}
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
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
            <div >
              <input
                type="file"
                id="fileInput"
                name="image"
                onChange={(event) =>{if (event.target.files?.length) {
                  const file = event.target.files[0]
                  encodeBase64(file ).then(resolve=>{
                    const dataUrl =Base64toSrc(resolve)
                    setImage(dataUrl)
                  })
                }} }
              />
              {/* <button 
              onClick={() => {
                ApiUploadImage(imaggg, jwtToken ? jwtToken : '').then(response => {
                  setImage(response.data.url)
                  console.log("response.data.id", response.data.url)
                })
              }}
              // onClick={()=>setImage(imaggg)}
              >Submit</button> */}
              {/* <button onClick={() => { console.log("cll"); handleImageUpload(formData) }}>Submit</button> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card></div>
  )

}
export default ProductImageCard;