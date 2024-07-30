import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import ApiSignin from "@/components/authentications/authfunction/apiSignin";
import ApiSignup from "@/components/authentications/authfunction/apiSignup";
let post = {
  id: 1,
  name: "Hello World",
};
type requestBodyprops = {
  phone_number: string,
};
export const postRouter = createTRPCRouter({
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

    // response {
    //   data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGVjMWQzNjAxY2IwMjhkNjBmM2FiNSIsImlhdCI6MTcyMjMzODU4NSwiZXhwIjoxNzIyMzQyMTg1fQ.EYsDf-zjddHHGYiEaGN7JA5vf6tGWhfND18685oUDyM',
    //   message: 'OK',
    //   status: 200
    // }
  getLatest: publicProcedure.query(() => {
    return post;
  }),
  sIgnin: publicProcedure
    .input(z.object({ phone_number: z.string().min(1) }))
    .output(z.object({data:z.string(),message:z.string(),status:z.number()}))
    .mutation (async({ input }) => {
      console.log("yy")
      const response = await ApiSignin(input)
      console.log("response",response)
      console.log("okke")
      return response
    }),
    sIgnup: publicProcedure
    .input(z.object({ phone_number: z.string().min(1) }))
    .output(z.object({data:z.string(),message:z.string(),status:z.number()}))
    .mutation (async({ input }) => {
      console.log("yy")
      const response = await ApiSignup(input)
      console.log("response",response)
      console.log("okke")
      return response
    })
});
