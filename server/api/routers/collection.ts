import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";
import { ApiUploadCollection, ApiFetchCollection } from "@/components/admin/collection/collection-utils/function";
const zcollectiontDataInterface = z.object({
    CollectionName: z.string(),
    CollectionDescription: z.string(),
    CollectionIds: z.array(z.string()),
})
const apiProductsAddZodSchema = z.object({
    requestBody: zcollectiontDataInterface,
});
const zsimplifiedProducts = z.object({
    image: z.string(),
    id: z.string(),
    pid: z.number(),
    name: z.string(),
    code: z.string(),
    price: z.string(),
    link: z.string(),
    review: z.array(z.record(z.unknown())),
    description: z.string()
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
        }),
    collectionFetch: protectedProcedure
        .output(z.object({
            data: z.array(z.object({ name: z.string(),collectionId: z.string(), description: z.string(), products: z.array(zsimplifiedProducts) }))
            , message: z.string(), status: z.number()
        }))
        .query(async ({ ctx }) => {
            const token = ctx.token
            const modifiedInput = {
                jwtToken: token
            }
            const response = await ApiFetchCollection(modifiedInput)
            console.log("collection", response)
            return response;
        }),


})