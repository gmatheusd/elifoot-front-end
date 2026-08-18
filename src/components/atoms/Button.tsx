import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";

export type ButtonVariant =
  | "brand"
  | "brand-block"
  | "dark"
  | "outline-white"
  | "solid-white"
  | "outline-zinc"
  | "pill-outline"
  | "pill-muted";

const variantClasses: Record<ButtonVariant, string> = {
  brand:
    "rounded-2xl bg-brand px-16 py-4 text-sm font-bold text-black transition-colors hover:bg-brand/90",
  "brand-block":
    "w-full rounded-2xl bg-brand py-4 text-sm font-bold text-black transition-colors hover:bg-brand/90",
  dark: "w-full rounded-2xl bg-zinc-900 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-zinc-700",
  "outline-white":
    "inline-block w-fit rounded-xl border-2 border-white px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black",
  "solid-white":
    "rounded-md bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-zinc-200",
  "outline-zinc":
    "rounded-md border border-zinc-700 px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-900",
  "pill-outline":
    "inline-block rounded-xl border-2 border-white px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-black",
  "pill-muted":
    "inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white",
};

type ButtonProps = { variant: ButtonVariant } & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

type ButtonLinkProps = { variant: ButtonVariant } & ComponentProps<typeof Link>;

export function ButtonLink({ variant, className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${variantClasses[variant]} ${className}`} {...props} />;
}
