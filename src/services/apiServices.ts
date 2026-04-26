import { formatSubnetsData } from "@/lib/utils/formatDate"
import fakeData from "../../fakeData/fakeData"
import type Subnet from "@/types/subnet";



interface filterOptionsType {
    subnet_addresses?: string[];
    subnet_name?: string;
    subnet_description?: string;
    subnet_cidr?: number;
}

type GetSubnetType = (filterOptions?: filterOptionsType) => Promise<Subnet[]>;


const getSubnets: GetSubnetType = async (filterOptions) => {
    console.log("Fetching Data");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (!filterOptions)
        return formatSubnetsData(fakeData);

    // TODO - add filtering 
    console.log(filterOptions);
    return formatSubnetsData(fakeData);
};


const deleteSubnet = async (id: number) => {
    console.log("Deleting subnet:", id);

    await new Promise((r) => setTimeout(r, 1000));

    // later:
    // await api.delete(`/subnets/${id}`);

    return id;
};

export { getSubnets, deleteSubnet, type filterOptionsType }