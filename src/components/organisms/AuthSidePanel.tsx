import type { ReactNode } from "react";
import { ButtonLink } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";

type AuthSidePanelProps = {
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
};

export function AuthSidePanel({ title, subtitle, children }: AuthSidePanelProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-black px-10 py-16 md:w-2/5 md:px-12 lg:w-1/3">
      <Logo size="sm" />

      <div>
        <h2 className="text-3xl font-bold leading-tight text-white">{title}</h2>
        <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
      </div>

      <ButtonLink href="/login" variant="outline-white">
        Entrar
      </ButtonLink>

      {children}
    </div>
  );
}
