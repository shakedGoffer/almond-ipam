import SidebarLayout from "@/layouts/SidebarLayout";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

// src/routes/_authenticated.tsx
export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({context}) => {
     const isAuthenticated = context.auth.isAuthenticated();
    if (!isAuthenticated) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => {
    return <SidebarLayout><Outlet/></SidebarLayout>;
  },
});
