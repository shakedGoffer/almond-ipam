import { env } from "@/lib/config/consts";
import fakeData from "../../fakeData/fakeData"
import type Subnet from "@/types/subnet";


type GetSubnetType = (subnet_address?: string) => Promise<Record<string, Subnet>>;


const fetchSubnets: GetSubnetType = async (subnet_address) => {
    if (!env.BACK_URL)
        return subnet_address ? {subnet_address:fakeData[subnet_address]} : fakeData;
    console.log("Fetching Data");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return subnet_address ?{subnet_address:fakeData[subnet_address]} : fakeData; //axios fetch
};


const deleteSubnet = async (subnet_address?: string) => {
    console.log("Deleting subnet:", subnet_address);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return subnet_address; //axios delete
};

export { fetchSubnets, deleteSubnet }