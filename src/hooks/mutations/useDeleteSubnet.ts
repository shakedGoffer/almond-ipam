import { QUERY_KEYS } from "@/lib/config/consts";
import { deleteSubnet } from "@/services/apiServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteSubnet() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (subnet_address: string) => deleteSubnet(subnet_address),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.subnets],
      });
    },
  });
}