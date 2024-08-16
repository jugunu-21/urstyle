import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import ApiSignin from "@/components/authentications/auth-function/apiSignin";
import ApiSignup from "@/components/authentications/auth-function/apiSignup";
let post = {
  id: 1,
  name: "Hello World",
};
type requestBodyprops = {
  phone_number: string,
};
export const authRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      console.log("cr")
      await new Promise((resolve) => setTimeout(resolve, 1000));

      post = { id: post.id + 1, name: input.name };
      return post;
    }),
  getLatest: publicProcedure.query(() => {
    return post;
  }),
  sIgnin: publicProcedure
    .input(z.object({ phone_number: z.string().min(1) }))
    .output(z.object({data:z.string(),message:z.string(),status:z.number()}))
    .mutation (async({ input }) => {
      const response = await ApiSignin(input)
      console.log("response",response)
      return response
    }),
    sIgnup: publicProcedure
    .input(z.object({ phone_number: z.string().min(1) }))
    .output(z.object({data:z.string(),message:z.string(),status:z.number()}))
    .mutation (async({ input }) => {
      const response = await ApiSignup(input)
      console.log("response",response)
      return response
    })
});
