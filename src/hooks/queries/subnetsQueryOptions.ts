
import { QUERY_KEYS } from "@/lib/config/consts";
import { getSubnets, type filterOptionsType } from "@/services/apiServices"
import { queryOptions } from "@tanstack/react-query"

const subnetsQueryOptions = (filterOptions?: filterOptionsType) => {
    return queryOptions({
        queryKey: [QUERY_KEYS.subnets, filterOptions ?? {}],
        queryFn: () => getSubnets(filterOptions),
        staleTime: 5 * 1000,
    })
}


export { subnetsQueryOptions };