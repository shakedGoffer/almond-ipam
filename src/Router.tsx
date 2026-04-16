import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}


const router = createRouter({
  routeTree,
  context: { auth: undefined! },
});

export default router;