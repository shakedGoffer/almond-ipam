import LoadingSpinner from "@/components/LoadingSpinner";
import { subnetsQueryOptions } from "@/hooks/queries/subnetsQueryOptions";
import SubnetsPage from "@/pages/SubnetsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/subnets/")({
  component: SubnetsPage,
  loader: async ({ context }) => {
    return await context.queryClient.ensureQueryData(subnetsQueryOptions());
  },
  pendingComponent: LoadingSpinner,
});
