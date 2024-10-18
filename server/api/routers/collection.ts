import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure, publicAndProtectedProcedure } from "@/server/api/trpc";
import { ApiUploadCollection, ApiFetchCollection, ApiLikeCollection, ApiFetchCollectionById } from "@/components/admin/collection/collection-utils/function";
const zcollectiontDataInterface = z.object({
    collectionName: z.string(),
    collectionDescription: z.string(),
    collectionIds: z.array(z.string()),
    collectionCategory: z.array(z.string()),
})
const apiProductsAddZodSchema = z.object({
    requestBody: zcollectiontDataInterface,
});
const zsimplifiedProducts = z.object({
    image: z.string(),
    id: z.string(),
    category: z.string(),
    name: z.string(),
    subCategory: z.string(),
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
    collectionFetch: publicAndProtectedProcedure
        .input(z.object({
            categoryQuery: z.string().optional(),
            likedQuery: z.string().optional()
        }))
        .output(z.object({
            data: z.array(z.object({ name: z.string(), likestatus: z.boolean().optional(), collectionId: z.string(), description: z.string(), products: z.array(zsimplifiedProducts) }))
            , message: z.string(), status: z.number()
        }))
        .query(async ({ input, ctx }) => {
            const token = ctx.token ? ctx.token : ""
            const modifiedInput = {
                jwtToken: token,
                ...input
            }
            console.log("modifiedInput", modifiedInput)
            const response = await ApiFetchCollection(modifiedInput)
            console.log("collectionfetch", response)
            return response;
        }),
    collectionFetchById: publicAndProtectedProcedure
        .input(z.object({
            collectionId: z.string()

        }))
        .output(z.object({
            data: z.object({ name: z.string(), collectionId: z.string(), description: z.string(), products: z.array(zsimplifiedProducts) })
            , message: z.string(), status: z.number()
        }))
        .query(async ({ input, ctx }) => {
            const token = ctx.token ? ctx.token : ""
            const modifiedInput = {
                jwtToken: token,
                ...input
            }
            const response = await ApiFetchCollectionById(modifiedInput)
            // console.log("collectionfetch", response)
            return response;
        }),
    collectionLike: protectedProcedure
        .input(z.object({ collectionId: z.string() }))
        .output(z.object({
            message: z.string(), status: z.number()
        }))
        .mutation(async ({ ctx, input }) => {
            const token = ctx.token
            const modifiedInput = {
                ...input,
                jwtToken: token
            }
            console.log("modifiedInput", modifiedInput)
            // console.log("modifiedInput", collectionId)
            const response = await ApiLikeCollection(modifiedInput)
            console.log("response", response)
            return response;
        }),
})