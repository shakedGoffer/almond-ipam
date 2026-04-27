
import { QUERY_KEYS } from "@/lib/config/consts";
import { formatSubnetsData } from "@/lib/utils/formatDate";
import { fetchSubnets } from "@/services/apiServices";
import { queryOptions, useQuery } from "@tanstack/react-query";

const subnetsQueryOptions = (subnet_address?: string) => {
    return queryOptions({
        queryKey: [QUERY_KEYS.subnets],
        queryFn: () => fetchSubnets(subnet_address),
        staleTime: 5 * 1000,
    })
}

const useSubnetsQuery = (subnet_address?: string) => {
    const { data: subnetsList = {}} = useQuery(subnetsQueryOptions(subnet_address));
    return formatSubnetsData(subnetsList);
};


export default useSubnetsQuery;
export { subnetsQueryOptions };