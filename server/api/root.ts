import { authRouter } from "@/server/api/routers/post";
import { productRouter} from "./routers/product";
import { collectionRouter  } from "./routers/collection";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  product: productRouter, 
  collection: collectionRouter 
});

export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
