import { z } from "zod"
import { createTRPCRouter, publicProcedure, protectedProcedure, publicAndProtectedProcedure } from "@/server/api/trpc";
import { ApiUploadCollection, ApiFetchCollection, ApiLikeCollection, ApiFetchCollectionById, AdminApiFetchCollection, ApiUpdateCollection, ApiDeleteCollection } from "@/components/admin/collection/collection-utils/function";

const zcollectiontDataInterface = z.object({
    collectionName: z.string(),
    collectionDescription: z.string(),
    collectionIds: z.array(z.string()),
    collectionCategory: z.array(z.string()),
})
const apiCollectionAddZodSchema = z.object({
    requestBody: zcollectiontDataInterface,
});
const apicollaectionUpdateZodSchema = z.object({
    requestBody: zcollectiontDataInterface,
    collectionId: z.string(),
});
const zsimplifiedProducts = z.object({
    image: z.string(),
    id: z.string(),
    category: z.string(),
    name: z.string(),
    webLink: z.string(),
    subCategory: z.string(),
    price: z.string(),
    link: z.string(),
    review: z.array(z.record(z.unknown())),
    description: z.string()
});
const paginationSchema = z.object({
    page: z.number(),
    limit: z.number(),
});
export const collectionRouter = createTRPCRouter({
    collectionAdd: protectedProcedure.input(apiCollectionAddZodSchema)
        .output(z.object({ data: z.string(), message: z.string(), status: z.number() }))
        .mutation(async ({ ctx, input }) => {
            const token = ctx.token
            const modifiedInput = {
                ...input,
                jwtToken: token
            }
            const response = await ApiUploadCollection(modifiedInput)
            // console.log("collection")
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
            const response = await ApiFetchCollection(modifiedInput)
            return response;
        }),
    collectionDelete: protectedProcedure
        .input(z.object({ collectionId: z.string() }))
        .output(z.object({
            data: z.string()
            , message: z.string(), status: z.number()
        }))
        .mutation(async ({ input, ctx }) => {
            const token = ctx.token
            const modifiedInput = {
                jwtToken: token,
                ...input
            }
            const response = await ApiDeleteCollection(modifiedInput)
            return response;
        }),
    collectionFetchbyAdmin: protectedProcedure
        .input(paginationSchema

        )
        .output(z.object({
            data: z.object({
                simplifiedCollection: z.array(
                    z.object({
                        name: z.string(),
                        collectionId: z.string(),
                        description: z.string(),
                        categories: z.array(z.string()),
                        products: z.array(zsimplifiedProducts)
                    })
                ),
                totalDocs: z.number()
            }),
            message: z.string(),
            status: z.number()
        }))
        .query(async ({ input, ctx }) => {
            const token = ctx.token
            const modifiedInput = {
                jwtToken: token,
                ...input
            }
            const response = await AdminApiFetchCollection(modifiedInput)
            return response;
        }),
    collectionFetchByCollectionId: publicAndProtectedProcedure
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
            // console.log("modifiedInput", modifiedInput)
            // console.log("modifiedInput", collectionId)
            const response = await ApiLikeCollection(modifiedInput)
            // console.log("response", response)
            return response;
        }),
    collectionUpdate: protectedProcedure.input(apicollaectionUpdateZodSchema)
        .output(z.object({ data: z.string(), message: z.string(), status: z.number() }))
        .mutation(async ({ input, ctx }) => {
            const token = ctx.token
            const modifiedInput = {
                ...input,
                jwtToken: token
            }
            const response = await ApiUpdateCollection(modifiedInput)
            // console.log("addproduct")
            return response;
        })
})