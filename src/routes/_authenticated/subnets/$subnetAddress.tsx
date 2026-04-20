import LoadingSpinner from "@/components/LoadingSpinner";
import { subnetsQueryOptions } from "@/hooks/queries/subnetsQueryOptions";
import SubnetDetailsPage from "@/pages/SubnetDetailsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/subnets/$subnetAddress")({
  loader: async ({ params, context}) => {
    const subnetsList = await context.queryClient.ensureQueryData(subnetsQueryOptions())
    return {
      subnetAddress: params.subnetAddress,
      subnetsList: subnetsList,
    };
  },
  pendingComponent: LoadingSpinner,
  component: SubnetDetailsPage
});

