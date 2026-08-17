import type { ReactNode } from "react";
import { Logo } from "@/components/atoms/Logo";

type CenteredDarkTemplateProps = {
  children: ReactNode;
};

export function CenteredDarkTemplate({ children }: CenteredDarkTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black px-6 py-16 text-center font-sans">
      <Logo />
      {children}
    </div>
  );
}
