import type { Metadata } from "next";
import { CadastroEstadioForm } from "@/components/organisms/CadastroEstadioForm";
import { CadastroSplitTemplate } from "@/components/templates/CadastroSplitTemplate";

export const metadata: Metadata = {
  title: "Cadastrar Estádio - Elifoot",
};

export default function CadastroEstadioPage() {
  return (
    <CadastroSplitTemplate
      title="Cadastre o seu Estádio"
      imageSrc="/img/estadio-sao-januario.svg"
      imageAlt="Estádio São Januário visto de cima"
    >
      <CadastroEstadioForm />
    </CadastroSplitTemplate>
  );
}
