import {
  defaultShouldDehydrateQuery,
  QueryClient,
  QueryObserverResult, 
} from "@tanstack/react-query";
import SuperJSON from "superjson";

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
      //   shouldDehydrateQuery: (query: QueryObserverResult<any>) =>
      //     defaultShouldDehydrateQuery(query) ||
      //     query.state.status === "pending",
      // },
      // hydrate: {
      //   deserializeData: SuperJSON.deserialize,
      // },
    },
  });
