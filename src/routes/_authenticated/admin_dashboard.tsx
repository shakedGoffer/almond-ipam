import LoadingSpinner from "@/components/LoadingSpinner";
import { subnetsQueryOptions } from "@/hooks/queries/subnetsQueryOptions";
import AdminDashboardPage from "@/pages/AdminDashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/admin_dashboard")({
  component: AdminDashboardPage,
  loader: async ({ context }) => {
    return await context.queryClient.ensureQueryData(subnetsQueryOptions());
  },
  pendingComponent: LoadingSpinner,
});
