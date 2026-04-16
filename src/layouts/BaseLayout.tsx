import type React from "react";


const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="flex-1 h-screen flex flex-col px-16 py-12 app-bg overflow-auto">
      {children}
    </main>
  );
};

export default BaseLayout;
