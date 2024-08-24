
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

import { encodeBase64, Base64toSrc } from "@/components/admin/product/product-utils/product-services/image-services"
function CollectionImageCard({ image }: { image: string[] }) {
  return (
    <Card
      className="overflow-hidden my-2" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>Products Images</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 m-2">
          <div className="grid grid-cols-4 gap-2">
            {image && image.map((image) => {
              console.log("imageee",image)
              return (
                <Image
                  alt="image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="84"
                  src={image ? image : '/placeholder.svg'}
                  width="84"
                />
              )
            })}
            {/* <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            />


            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src="/placeholder.svg"
              width="84"
            /> */}

          </div>
        </div>
      </CardContent>
    </Card>
  )

}
export default CollectionImageCard;