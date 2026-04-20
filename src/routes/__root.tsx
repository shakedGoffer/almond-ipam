import type { AuthContext } from "@/hooks/useAuth";
import BaseLayout from "@/layouts/BaseLayout";
import ErrorPage from "@/pages/ErrorPage";
import NotFoundPage from "@/pages/NotFoundPage";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";

type RouterContext = {
  auth: AuthContext;
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  notFoundComponent: () => {
    return (
      <BaseLayout>
        <NotFoundPage />
      </BaseLayout>
    );
  },
  errorComponent: () => {
    return (
      <BaseLayout>
        <ErrorPage />
      </BaseLayout>
    );
  },
});

