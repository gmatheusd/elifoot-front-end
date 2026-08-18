import type { Metadata } from "next";
import { ButtonLink } from "@/components/atoms/Button";
import { CenteredDarkTemplate } from "@/components/templates/CenteredDarkTemplate";

export const metadata: Metadata = {
  title: "Dashboard Elifoot",
};

export default function Home() {
  return (
    <CenteredDarkTemplate>
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">O que Vamos cadastrar hoje?</h1>
        <p className="mt-2 text-zinc-400">Escolha o que cadastrar</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <ButtonLink href="/dash/estadio/cadastro" variant="pill-outline">
          Cadastrar Estádio
        </ButtonLink>
        <ButtonLink href="/dash/clube/cadastro" variant="pill-outline">
          Cadastrar Clube
        </ButtonLink>
        <ButtonLink href="/dash/jogador/cadastro" variant="pill-outline">
          Cadastrar Jogador
        </ButtonLink>
      </div>

      <ButtonLink href="/" variant="pill-muted">
        Quero ir direto para home
        <span aria-hidden="true">→</span>
      </ButtonLink>
    </CenteredDarkTemplate>
  );
}
