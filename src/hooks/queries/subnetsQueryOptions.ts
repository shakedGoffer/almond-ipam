
import { QUERY_KEYS } from "@/lib/config/consts";
import { getSubnets } from "@/services/apiServices"
import { queryOptions } from "@tanstack/react-query"

function subnetsQueryOptions() {
    return queryOptions({
        queryKey: [QUERY_KEYS.subnets,],
        queryFn: () => getSubnets(),
        staleTime: 5 * 1000,
    })
}


export { subnetsQueryOptions };