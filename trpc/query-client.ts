import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import SuperJSON from "superjson";
type DehydrateFunction = (
  query: any,
  key: string,
  value: any
) => boolean;
const shouldDehydrateQuery: DehydrateFunction = (query, key, value) =>
  defaultShouldDehydrateQuery(query) ||
  query.state.status === "pending";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000,
      },
      // dehydrate: {
      //   serializeData: SuperJSON.serialize,
      //   shouldDehydrateQuery: (query) =>
      //     defaultShouldDehydrateQuery(query) ||
      //     query.state.status === "pending",
      // },
      // hydrate: {
      //   deserializeData: SuperJSON.deserialize,
      // },
    },
  });
