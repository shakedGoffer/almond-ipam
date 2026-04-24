import { useTableContext } from "./TableProvider";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/FormInput";
import RadioGroup from "@/components/RadioGroup";
import { useState } from "react";

interface FilterInputConfig {
  id: string;
  label: string;
  placeholder?: string;
}

interface TableFilterProps {
  filterInputs: FilterInputConfig[];
}

const TableFilter = ({ filterInputs }: TableFilterProps) => {

  const { table } = useTableContext();
  const [open, setOpen] = useState(false);
  const form = useForm<Record<string, any>>({
    defaultValues: { type: "" }
  });
  if (!table) return null;

  const onSubmit: SubmitHandler<any> = (data) => {
    Object.entries(data).forEach(([columnId, value]) => {
      table.getColumn(columnId)?.setFilterValue(value);
    });
    setOpen(false);
  };

  const handleReset = () => {
    setOpen(false);
    table.resetColumnFilters();
    form.reset();
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="p-2.5 h-fit w-fit rounded-2xl">
          <Filter className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-92 p-5 rounded-xl bg-container-bg-basic border-gray-500/20">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm text-primary uppercase text-center">
              Filter Results
            </h3>

            <div className="grid gap-5">
              {filterInputs.map((input) => (
                <div key={input.id}>
                  {input.id === "type" ? (
                    <RadioGroup
                      label={input.label}
                      {...form.register("type")}
                      radioButtons={[
                        { label: "All", value: "" },
                        { label: "Dynamic", value: "dynamic", className: "text-address-dynamic" },
                        { label: "Reserved", value: "reserved", className: "text-address-reserved" },
                      ]}
                    />
                  ) : (
                    <FormInput
                      {...form.register(input.id)}
                      label={input.label}
                      placeholder={input.placeholder || `Filter`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* bottom apply & cancel button */}
          <div className="flex flex-row flex-1 gap-4">
            <Button
              type="submit"
              variant="form"
              disabled={form.formState.isSubmitting}
              className="flex flex-1 "
            >
              {form.formState.isSubmitting ? "Loading..." : "Apply"}
            </Button>

            <Button type="reset" variant="outline" onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableFilter;