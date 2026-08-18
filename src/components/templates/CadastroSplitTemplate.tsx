import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";

type CadastroSplitTemplateProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  backHref?: string;
  children: ReactNode;
};

export function CadastroSplitTemplate({
  title,
  imageSrc,
  imageAlt,
  backHref = "/dash",
  children,
}: CadastroSplitTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans md:flex-row">
      <div className="flex w-full flex-col justify-center gap-8 bg-black px-8 py-12 md:w-[62%] md:px-20 md:py-16 lg:px-24">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
          <Link
            href={backHref}
            className="w-fit text-lg text-zinc-400 transition-colors hover:text-white"
          >
            ← Voltar a tela de cadastros
          </Link>

          <Logo size="sm" />

          <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>

          {children}
        </div>
      </div>

      <div className="relative hidden md:block md:w-[38%]">
        <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      </div>
    </div>
  );
}
