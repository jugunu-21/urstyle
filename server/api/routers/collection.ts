import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";
import { ApiUpdateProduct, ApiUploadImage, ApiFetchProducts, ApiUploadProduct, ApiUploadCollection } from "@/components/admin/product/product-utils/function";
const productDataInterface = z.object({
    CollectionName: z.string(),
    CollectionDescription: z.string(),
    CollectionIds: z.array(z.string()),
})
const apiProductsAddZodSchema = z.object({
    requestBody: productDataInterface,
});
export const collectionRouter = createTRPCRouter({
    collectionAdd: protectedProcedure.input(apiProductsAddZodSchema)
        .output(z.object({ data: z.string(), message: z.string(), status: z.number() }))
        .mutation(async ({ ctx, input }) => {
            const token = ctx.token
            const modifiedInput = {
                ...input,
                jwtToken: token
            }
            const response = await ApiUploadCollection(modifiedInput)
            console.log("collection")
            return response;
        })

})