
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
import { ImagePlus } from "lucide-react"
import { encodeBase64, Base64toSrc } from "@/components/admin/product/product-utils/product-services/image-services"
import { Label } from "@/components/ui/label"
function CollectionImageCard({ image }: { image: string[] }) {
  return (
    <Card
      className="overflow-hidden my-4 " x-chunk="dashboard-07-chunk-4">
      <CardContent>
        <div className="grid gap-2 m-2">
          <div className="grid grid-cols-4 gap-2">
            {image && image.map((image) => {
              // console.log("imageee", image)
              return (
                <>
                  {image ? <Image key={image}
                    alt="image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={image ? image : '/placeholder.svg'}
                    width="84"
                  /> : <ImagePlus />}

                </>)
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )

}
export default CollectionImageCard;