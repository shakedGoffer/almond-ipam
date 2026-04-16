import { Outlet } from "@tanstack/react-router";
import type React from "react";


const BaseLayout = () => {
  return (
    <main className="flex-1 h-screen flex flex-col px-16 py-12 app-bg overflow-auto">
      <Outlet />
    </main>
  );
};

export default BaseLayout;
