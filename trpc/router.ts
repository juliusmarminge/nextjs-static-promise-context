import { createTRPCRouter, publicProcedure } from "./init";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  app: createTRPCRouter({
    info: publicProcedure.query(async () => {
      return {};
    }),

    update: publicProcedure.mutation(async (opts) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }),
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
