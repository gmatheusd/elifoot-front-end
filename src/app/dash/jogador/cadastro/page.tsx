import type { Metadata } from "next";
import { CadastroJogadorForm } from "@/components/organisms/CadastroJogadorForm";
import { CadastroSplitTemplate } from "@/components/templates/CadastroSplitTemplate";

export const metadata: Metadata = {
  title: "Cadastrar Jogador - Elifoot",
};

export default function CadastroJogadorPage() {
  return (
    <CadastroSplitTemplate
      title="Cadastre o seu Jogador"
      imageSrc="/img/goleiro-do-vasco.svg"
      imageAlt="Jogador do Vasco da Gama"
    >
      <CadastroJogadorForm />
    </CadastroSplitTemplate>
  );
}
