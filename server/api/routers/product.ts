import { z } from "zod"
import { createTRPCRouter, publicProcedure,protectedProcedure } from "@/server/api/trpc";
import {ApiUpdateProduct, ApiUploadImage,ApiFetchProducts,ApiUploadProduct} from "@/components/admin/product/product-utils/function";

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
  requestBody: productDataInterface,
});
const apiProductsfetchZodSchema = z.object({
  // jwtToken: z.string()
});
const apiProductUpdateZodSchema = z.object({
  // jwtToken: z.string(),
  requestBody: productDataInterface,
  id: z.string().optional()
});
const paginationSchema = z.object({
  page: z.number(),
  limit: z.number(),
});
// const apiImageUploadZodSchema = z.object({
// files:z.
// });
export const productRouter = createTRPCRouter({
  productAdd: protectedProcedure.input(apiProductsAddZodSchema)
    .output(z.object({ message: z.string(), status: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const token = ctx.token
        const modifiedInput={...input,
          jwtToken:token
        }
      const response = await ApiUploadProduct(modifiedInput)
      console.log("adddproduct")
      return response;
    }),
  productfetch: protectedProcedure
  .input(paginationSchema)
    .output(z.object({ data:z.object({simplifiedProducts:z.array(simplifiedProducts),totalDocs:z.number()}) , message: z.string(), status: z.number() }))
    .query(async ({ ctx, input}) => {
      const token = ctx.token
      const {page,limit}=input
      const modifiedInput={
        jwtToken:token,
        page:page,
        limit:limit
      }
      console.log(" modifiedInput", modifiedInput)
      const response = await ApiFetchProducts(modifiedInput)
      return response;
    }),
  productUpdate: protectedProcedure.input( apiProductUpdateZodSchema)
  .output(z.object({data:z.string() , message:z.string() , status:z.number()}))
    .mutation(async ({ input,ctx }) => {
      const token = ctx.token
      const modifiedInput={...input,
        jwtToken:token
      }
      const response = await ApiUpdateProduct(modifiedInput)
      console.log("adddproduct")
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