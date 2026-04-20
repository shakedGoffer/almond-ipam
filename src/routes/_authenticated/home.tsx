import LoadingSpinner from "@/components/LoadingSpinner";
import { subnetsQueryOptions } from "@/hooks/queries/subnetsQueryOptions";
import HomePage from "@/pages/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/home")({
  component: HomePage,
  loader: async ({ context }) => {
    return await context.queryClient.ensureQueryData(subnetsQueryOptions());
  },
  pendingComponent: LoadingSpinner,
});
