import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import ApiSignin from "@/components/authentications/authfunction/apiSignin";
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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      post = { id: post.id + 1, name: input.name };
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return post;
  }),
  signup: publicProcedure
    .input(z.object({ phone_number: z.string().min(1) }))
    .query(({ input }) => {
      const response = ApiSignin(input)

    })
});
