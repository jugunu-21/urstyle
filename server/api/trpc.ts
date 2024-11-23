
import { NextApiRequest } from 'next';
import superjson from "superjson";
import { ZodError } from "zod";
import { initTRPC, TRPCError } from "@trpc/server";

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
// export const createTRPCContext = async (opts: { headers: Headers }) => {
//   return {
//     ...opts,
//   };
// };
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const result = () => {
    const cookies = opts.headers.get('cookie')
    // console.log("cookie", cookies)
    if (cookies) {
      const jwtTokenMatch = cookies.split('; ').find(row => row.startsWith('jwtToken'));
      if (jwtTokenMatch) {
        const jwtToken = jwtTokenMatch.split('=')[1];
        return jwtToken
      }
    }
  }

  // console.log("tokenjwttt", result())
  return {
    ...opts,
    token: result()
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  // transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ?
            error.cause.flatten() : null,
      },
    };
  },
});


const enforceUserIsHavingToken = t.middleware(async ({ next, ctx }) => {
  const token = ctx.token
  // console.log("tokennnnnn", token)
  if (token == null) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  else {
    return next({
      ctx: {
        token: token,
      },
    });
  }

});
const UserMayHaveToken = t.middleware(async ({ next, ctx }) => {
  const token = ctx.token
  // console.log("tokennnnnn", token)
  // if (token == null) {
  //   throw new TRPCError({
  //     code: "UNAUTHORIZED",
  //   });
  // }
  // else{ 
  return next({
    ctx: {
      token: token,
    },
  });
  // }

});
/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceUserIsHavingToken);
export const publicAndProtectedProcedure = t.procedure.use(UserMayHaveToken);

// export const protectedProcedure = t.procedure.use(enforceUserIsHavingToken);


