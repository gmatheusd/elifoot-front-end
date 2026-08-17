import { ButtonLink } from "@/components/atoms/Button";
import { CenteredDarkTemplate } from "@/components/templates/CenteredDarkTemplate";

export default function Home() {
  return (
    <CenteredDarkTemplate>
      <p className="max-w-md text-center text-zinc-400">
        O clássico jogo de gerenciamento de futebol, de volta.
      </p>

      <div className="flex gap-4">
        <ButtonLink href="/login" variant="solid-white">
          Entrar
        </ButtonLink>
        <ButtonLink href="/cadastro" variant="outline-zinc">
          Criar conta
        </ButtonLink>
      </div>
    </CenteredDarkTemplate>
  );
}
