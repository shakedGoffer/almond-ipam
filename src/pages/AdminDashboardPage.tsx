import type Subnet from "@/types/subnet";

import { type ColumnDef, type Row } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import DataTable from "@/features/dataTable";
import useSubnetsQuery from "@/hooks/queries/useSubnets";

import type Address from "@/types/address";
import { formatAddressesData } from "@/lib/utils/formatDate";

const AdminPage = () => {
  const subnetsList = useSubnetsQuery();

  const subnetAddressesColumns: ColumnDef<Address>[] = [
    {
      id: "description",
      accessorKey: "address_description",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Description" />
      ),
    },
    {
      id: "ip",
      accessorKey: "ip",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Address" />
      ),
    },
    {
      id: "mac",
      accessorKey: "mac_address",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Mac" />
      ),
    },
    {
      id: "type",
      accessorKey: "type",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Type" />
      ),
    },
  ];

  const subnetsColumns: ColumnDef<Subnet>[] = [
    {
      accessorKey: "fullAddress",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} title="Address" />
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} title="Name" />
      ),
    },
    {
      id: "usage",
      accessorKey: "allocated_ips_percent",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Usage" />
      ),
    },
    {
      id: "expander",
      header: () => null,
      cell: ({ row }) => {
        return row.getCanExpand() ? (
          <Button
            className="size-7 text-muted-foreground"
            onClick={row.getToggleExpandedHandler()}
            variant={"ghost"}

            /*  'aria-expanded': row.getIsExpanded(),
            'aria-label': row.getIsExpanded()
              ? `Collapse details for ${row.original.teamName}`
              : `Expand details for ${row.original.teamName}`, */
          >
            {row.getIsExpanded() ? (
              <ChevronUpIcon className="opacity-60" aria-hidden="true" />
            ) : (
              <ChevronDownIcon className="opacity-60" aria-hidden="true" />
            )}
          </Button>
        ) : undefined;
      },
    },
  ];

  const renderSubTable = ({ row }: { row: Row<Subnet> }) => {
    const index = row.index;
    return (
      <DataTable.Content
        columns={subnetAddressesColumns}
        data={formatAddressesData(
          subnetsList[index] ? subnetsList[index].allocated_ips : {},
        )}
      />
    );
  };

  return (
    <DataTable.Provider>
      <DataTable.Content
        columns={subnetsColumns}
        data={subnetsList}
        renderSubComponent={renderSubTable}
      />
    </DataTable.Provider>
  );
};

export default AdminPage;
