import { formatSubnetsData } from "@/lib/utils/formatDate"
import fakeData from "../../fakeData/fakeData"
import type Subnet from "@/types/subnet";

const getSubnets : Subnet[] = async () => {
    console.log("Fetching Data");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return formatSubnetsData(fakeData);
}

export { getSubnets }