import type { ComponentType, InputHTMLAttributes } from "react";

type InputFieldProps = {
  icon: ComponentType<{ className?: string }>;
  variant?: "dark" | "light";
} & InputHTMLAttributes<HTMLInputElement>;

const variantClasses: Record<NonNullable<InputFieldProps["variant"]>, string> = {
  dark: "border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-500",
  light: "border-zinc-200 bg-zinc-100 text-zinc-900 placeholder:text-zinc-400",
};

const iconVariantClasses: Record<NonNullable<InputFieldProps["variant"]>, string> = {
  dark: "text-zinc-500",
  light: "text-zinc-400",
};

export function InputField({ icon: Icon, variant = "light", className = "", ...props }: InputFieldProps) {
  return (
    <div className="relative">
      <Icon
        className={`pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 ${iconVariantClasses[variant]}`}
      />
      <input
        className={`w-full rounded-2xl border py-4 pl-12 pr-5 text-sm outline-none ${variantClasses[variant]} ${className}`}
        {...props}
      />
    </div>
  );
}
