import SidebarLayout from "@/layouts/SidebarLayout";
import NotFoundPage from "@/pages/NotFoundPage";
import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <SidebarLayout />
    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
