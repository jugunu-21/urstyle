import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure, publicAndProtectedProcedure } from "@/server/api/trpc";
import { ApiUpdateProduct, ApiUploadImage, ApiFetchProducts, ApiUploadProduct, ApiFetchProductById } from "@/components/admin/product/product-utils/function";
const zproductDataInterface = z.object({
  category: z.string(),
  name: z.string(),
  subCategory: z.string(),
  link: z.string(),
  webLink: z.string(),
  description: z.string(),
  price: z.string(),
  image: z.string()
})
const simplifiedProducts = z.object({
  image: z.string(),
  id: z.string(),
  category: z.string(),
  name: z.string(),
  subCategory: z.string(),
  price: z.string(),
  link: z.string(),
  webLink: z.string(),
  review: z.array(z.record(z.unknown())),
  description: z.string(),
})




const apiProductsAddZodSchema = z.object({
  requestBody: zproductDataInterface,
});
const apiProductUpdateZodSchema = z.object({
  requestBody: zproductDataInterface,
  id: z.string().optional()
});
const paginationSchema = z.object({
  page: z.number(),
  limit: z.number(),
});
export const productRouter = createTRPCRouter({
  productAdd: protectedProcedure.input(apiProductsAddZodSchema)
    .output(z.object({ message: z.string(), status: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const token = ctx.token
      const modifiedInput = {
        ...input,
        jwtToken: token
      }
      const response = await ApiUploadProduct(modifiedInput)
      console.log("adddproduct")
      return response;
    }),

  productfetchById: publicAndProtectedProcedure
    .input(z.object({
      productId: z.string(),
    }))
    .output(z.object({ data: z.object({ simplifiedProducts: simplifiedProducts }), message: z.string(), status: z.number() }))
    .query(async ({ ctx, input }) => {
      const token = ctx.token
      const { productId } = input
      const modifiedInput = {
        jwtToken: token,
        productId

      }
      console.log(" modifiedInput", modifiedInput)
      const response = await ApiFetchProductById(modifiedInput)
      return response;
    }),
  productfetch: protectedProcedure
    .input(paginationSchema)
    .output(z.object({ data: z.object({ simplifiedProducts: z.array(simplifiedProducts), totalDocs: z.number() }), message: z.string(), status: z.number() }))

    .query(async ({ ctx, input }) => {
      const token = ctx.token;
      const { page, limit } = input;
      const modifiedInput = {
        jwtToken: token,
        page: page,
        limit: limit
      }
      console.log(" modifiedInput", modifiedInput)
      const response = await ApiFetchProducts(modifiedInput)
      return response;
    }),
  productUpdate: protectedProcedure.input(apiProductUpdateZodSchema)
    .output(z.object({ data: z.string(), message: z.string(), status: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const token = ctx.token
      const modifiedInput = {
        ...input,
        jwtToken: token
      }
      const response = await ApiUpdateProduct(modifiedInput)
      console.log("addproduct")
      return response;
    })
  // imageUpload: protectedProcedure.input()
  // .output(z.object({data:z.string() , message:z.string() , status:z.number()}))
  //   .mutation(async ({ input,ctx }) => {
  //     const token = ctx.token
  //     const modifiedInput={...input,
  //       jwtToken:token
  //     }
  //     const response = await  ApiUploadImage(modifiedInput)
  //     console.log("adddproduct")
  //     return response;
  //   })
})