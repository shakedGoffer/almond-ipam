import { BookOpenText, Home, Network } from "lucide-react";
import Sidebar from "@/features/sidebar";
import { Outlet } from "@tanstack/react-router";
import BaseLayout from "./BaseLayout";

const SidebarLayout = () => {
  return (
    <div className="flex">
      <Sidebar.provider>
        <Sidebar>
          <Sidebar.item icon={<Home size={20} />} text="Home" link="/home" />
          <Sidebar.item
            icon={<Network size={20} />}
            text="Subnets"
            link="/subnets"
          />
          <Sidebar.item
            icon={<BookOpenText size={20} />}
            text="About"
            link="/about"
          />
        </Sidebar>
      </Sidebar.provider>
      <BaseLayout/>
    </div>
  );
};

export default SidebarLayout;
