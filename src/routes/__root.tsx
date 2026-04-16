import type { AuthContext } from "@/hooks/useAuth";
import BaseLayout from "@/layouts/BaseLayout";
import ErrorPage from "@/pages/ErrorPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { createRootRouteWithContext } from "@tanstack/react-router";

type RouterContext = {
  auth: AuthContext;
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

