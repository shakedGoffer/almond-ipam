import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

interface RadioButtonOptions {
  label: string;
  value: string;
  className?: string;
}

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  radioButtons: RadioButtonOptions[];
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ label, radioButtons, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2.5")}>
        <label className="text-xs text-primary-text px-1">
          {label}
        </label>
        <div className="flex flex-row gap-4 px-1">
          {radioButtons.map((radio) => (
            <label
              key={radio.value}
              className={cn(
                "flex items-center gap-2 cursor-pointer text-sm transition-opacity hover:opacity-80",
                radio.className
              )}
            >
              <input
                type="radio"
                ref={ref}
                value={radio.value}
                className={cn("size-4 accent-primary-text", radio.className)}
                {...props}
              />
              {radio.label}
            </label>
          ))}
        </div>
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;