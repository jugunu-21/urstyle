import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";
import { ApiSignin, ApiSignup, ApiUserDetail } from "@/components/authentications/auth-utils/function";
export const authRouter = createTRPCRouter({
  sIgnin: publicProcedure
    .input(z.object({ phone_number: z.string().min(1) }))
    .output(z.object({ data: z.string(), message: z.string(), status: z.number() }))
    .mutation(async ({ input }) => {
      const response = await ApiSignin(input)
      return response
    }),
  sIgnup: publicProcedure
    .input(z.object({ phone_number: z.string().min(1) }))
    .output(z.object({ data: z.string(), message: z.string(), status: z.number() }))
    .mutation(async ({ input }) => {
      const response = await ApiSignup(input)
      console.log("response", response)
      return response
    }),
  userDetail: protectedProcedure
    .output(z.object({ data: z.string(), message: z.string(), status: z.number() }))
    .mutation(async ({ ctx }) => {
      const response = await ApiUserDetail(ctx.token)
      console.log("response", response)
      return response
    })
});
