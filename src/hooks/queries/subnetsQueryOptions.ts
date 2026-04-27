
import { QUERY_KEYS } from "@/lib/config/consts";
import { fetchSubnets  } from "@/services/apiServices"
import { queryOptions } from "@tanstack/react-query"

const subnetsQueryOptions = (subnet_address?: string) => {
    return queryOptions({
        queryKey: [QUERY_KEYS.subnets, subnet_address],
        queryFn: () => fetchSubnets(subnet_address),
        staleTime: 5 * 1000,
    })
}


export { subnetsQueryOptions };