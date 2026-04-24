import { useState } from "react";
import { cn } from "@/lib/utils/cn";

import React, { createContext, useContext } from "react";
import type { Table } from "@tanstack/react-table";

interface TableContextType<TData = any> {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  table: Table<TData> | null;
  setTable: (table: Table<TData>) => void;
}

const TableContext = createContext<TableContextType | null>(null);

const DataTableProvider = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [table, setTable] = useState<Table<any> | null>(null);
  return (
    <TableContext.Provider value={{ globalFilter, setGlobalFilter, table, setTable }}>
      <div className={cn("flex flex-col gap-6", className)}>{children}</div>
    </TableContext.Provider>
  );
};

const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context)
    throw new Error("Table components must be used within DataTableProvider");
  return context;
};

export default DataTableProvider;
export { useTableContext };
