import type { Metadata } from "next";
import { ButtonLink } from "@/components/atoms/Button";
import { CenteredDarkTemplate } from "@/components/templates/CenteredDarkTemplate";

export const metadata: Metadata = {
  title: "Cadastrar Clube - Elifoot",
};

export default function CadastrarClubePage() {
  return (
    <CenteredDarkTemplate>
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Cadastrar Clube</h1>
        <p className="mt-2 text-zinc-400">Em construção.</p>
      </div>

      <ButtonLink href="/dash" variant="pill-muted">
        <span aria-hidden="true">←</span>
        Voltar
      </ButtonLink>
    </CenteredDarkTemplate>
  );
}
