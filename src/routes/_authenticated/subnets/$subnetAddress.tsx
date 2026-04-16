import SubnetDetailsPage from "@/pages/SubnetDetailsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/subnets/$subnetAddress")({
  loader: async ({ params }) => {
    return {
      subnetAddress: params.subnetAddress,
    };
  },
  component: SubnetDetailsPage
});

