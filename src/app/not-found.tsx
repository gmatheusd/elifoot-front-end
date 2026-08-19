import type { Metadata } from "next";
import { ButtonLink } from "@/components/atoms/Button";
import { CenteredDarkTemplate } from "@/components/templates/CenteredDarkTemplate";

export const metadata: Metadata = {
  title: "Página não encontrada - Elifoot",
};

export default function NotFound() {
  return (
    <CenteredDarkTemplate>
      <div>
        <h1 className="text-6xl font-bold text-brand sm:text-7xl">404</h1>
        <p className="mt-4 text-2xl font-bold text-white sm:text-3xl">Página não encontrada</p>
        <p className="mt-2 text-zinc-400">O link que você acessou não existe ou foi movido.</p>
      </div>

      <ButtonLink href="/" variant="pill-outline">
        Voltar para o início
      </ButtonLink>
    </CenteredDarkTemplate>
  );
}
