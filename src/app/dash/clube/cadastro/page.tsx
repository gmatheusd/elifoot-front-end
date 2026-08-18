import type { Metadata } from "next";
import { CadastroClubeForm } from "@/components/organisms/CadastroClubeForm";
import { CadastroSplitTemplate } from "@/components/templates/CadastroSplitTemplate";

export const metadata: Metadata = {
  title: "Cadastrar Clube - Elifoot",
};

export default function CadastroClubePage() {
  return (
    <CadastroSplitTemplate
      title="Cadastre o seu Clube"
      imageSrc="/img/escudo-vasco.svg"
      imageAlt="Escudo do Vasco da Gama"
    >
      <CadastroClubeForm />
    </CadastroSplitTemplate>
  );
}
