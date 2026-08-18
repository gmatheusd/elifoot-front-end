import type { ComponentType, SelectHTMLAttributes } from "react";
import { ChevronDownIcon } from "@/components/atoms/icons";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  icon: ComponentType<{ className?: string }>;
  placeholder: string;
  options: SelectOption[];
  variant?: "dark" | "light";
} & SelectHTMLAttributes<HTMLSelectElement>;

const variantClasses: Record<NonNullable<SelectFieldProps["variant"]>, string> = {
  dark: "border-zinc-800 bg-zinc-900 text-white",
  light: "border-zinc-200 bg-zinc-100 text-zinc-900",
};

const iconVariantClasses: Record<NonNullable<SelectFieldProps["variant"]>, string> = {
  dark: "text-zinc-500",
  light: "text-zinc-400",
};

export function SelectField({
  icon: Icon,
  placeholder,
  options,
  variant = "dark",
  className = "",
  ...props
}: SelectFieldProps) {
  return (
    <div className="relative">
      <Icon
        className={`pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 ${iconVariantClasses[variant]}`}
      />
      <select
        className={`w-full appearance-none rounded-2xl border py-4 pl-12 pr-10 text-sm outline-none ${variantClasses[variant]} ${className}`}
        defaultValue=""
        {...props}
      >
        <option value="" hidden disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        className={`pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 ${iconVariantClasses[variant]}`}
      />
    </div>
  );
}
