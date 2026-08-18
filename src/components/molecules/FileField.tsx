import type { ComponentType, InputHTMLAttributes } from "react";

type FileFieldProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  variant?: "dark" | "light";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const variantClasses: Record<NonNullable<FileFieldProps["variant"]>, string> = {
  dark: "border-zinc-800 bg-zinc-900 text-zinc-500",
  light: "border-zinc-200 bg-zinc-100 text-zinc-400",
};

const iconVariantClasses: Record<NonNullable<FileFieldProps["variant"]>, string> = {
  dark: "text-zinc-500",
  light: "text-zinc-400",
};

export function FileField({ icon: Icon, label, variant = "dark", className = "", ...props }: FileFieldProps) {
  return (
    <label className="relative block cursor-pointer">
      <Icon
        className={`pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 ${iconVariantClasses[variant]}`}
      />
      <div className={`w-full rounded-2xl border py-4 pl-12 pr-5 text-sm ${variantClasses[variant]} ${className}`}>
        {label}
      </div>
      <input type="file" accept="image/*" className="sr-only" {...props} />
    </label>
  );
}
