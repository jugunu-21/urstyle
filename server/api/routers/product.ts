import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {ApiUploadProduct} from "@/components/admin/product/productUtils/function";
import {ApiFetchProducts} from "@/components/admin/product/productUtils/function";
import {ApiUpdateProduct} from "@/components/admin/product/productUtils/function";

const productDataInterface = z.object({
  pid: z.number(),
  name: z.string(),
  code: z.string(),
  link: z.string(),
  description: z.string(),
  price: z.string(),
  image: z.string() // Assuming image can be null or a string URL
})
const simplifiedProducts= z.object({
  image: z.string(),
  id:  z.string(),
  pid: z.number(),
  name: z.string(),
  code:  z.string(),
  price: z.string(),
  link:  z.string(),
  review: z.array(z.record(z.unknown())),
  description:  z.string(),
 })

const apiProductsAddZodSchema = z.object({
  jwtToken: z.string(),
  requestBody: productDataInterface, // Use z.any() or a more specific schema for ProductDataInterface
});
const apiProductsfetchZodSchema = z.object({
  jwtToken: z.string()
});
const apiProductUpdateZodSchema = z.object({
  jwtToken: z.string(),
  requestBody: productDataInterface,
  id: z.string().optional()
});
export const productRouter = createTRPCRouter({
  productAdd: publicProcedure.input(apiProductsAddZodSchema)
    .output(z.object({ message: z.string(), status: z.number() }))
    .mutation(async ({ input }) => {
      const response = await ApiUploadProduct(input)
      console.log("adddproduct")
      return response;
    }),
  productfetch: publicProcedure.input(apiProductsfetchZodSchema)
  
    .output(z.object({ data:z.array(simplifiedProducts) , message: z.string(), status: z.number() }))
    .query(async ({ input }) => {
      const response = await ApiFetchProducts(input)
      console.log("adddfetch")
      return response;
    }),
  productUpdate: publicProcedure.input( apiProductUpdateZodSchema)
  .output(z.object({data:z.string() , message:z.string() , status:z.number()}))
    .mutation(async ({ input }) => {
      const response = await ApiUpdateProduct(input)
      console.log("adddproduct")
      return response;
    })
})