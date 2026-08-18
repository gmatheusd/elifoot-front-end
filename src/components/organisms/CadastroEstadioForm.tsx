"use client";

import { Button } from "@/components/atoms/Button";
import { LocationIcon, StadiumIcon, ImageIcon, UsersIcon } from "@/components/atoms/icons";
import { FileField } from "@/components/molecules/FileField";
import { InputField } from "@/components/molecules/InputField";
import { SelectField } from "@/components/molecules/SelectField";

const CIDADES = [
  { value: "rio-de-janeiro", label: "Rio de Janeiro" },
  { value: "sao-paulo", label: "São Paulo" },
  { value: "belo-horizonte", label: "Belo Horizonte" },
  { value: "porto-alegre", label: "Porto Alegre" },
  { value: "salvador", label: "Salvador" },
];

const CAPACIDADES = [
  { value: "0-10000", label: "Até 10.000 lugares" },
  { value: "10000-30000", label: "10.000 a 30.000 lugares" },
  { value: "30000-60000", label: "30.000 a 60.000 lugares" },
  { value: "60000+", label: "Acima de 60.000 lugares" },
];

export function CadastroEstadioForm() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log({
      nome: formData.get("nome"),
      cidade: formData.get("cidade"),
      capacidade: formData.get("capacidade"),
      imagem: formData.get("imagem"),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 [&_button]:text-base [&_input]:text-base [&_label>div]:text-base [&_select]:text-base"
    >
      <InputField
        icon={StadiumIcon}
        variant="dark"
        type="text"
        name="nome"
        placeholder="Nome do Estádio"
        required
      />

      <SelectField
        icon={LocationIcon}
        variant="dark"
        name="cidade"
        placeholder="Em qual cidade fica o estádio?"
        options={CIDADES}
        required
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SelectField
          icon={UsersIcon}
          variant="dark"
          name="capacidade"
          placeholder="Capacidade"
          options={CAPACIDADES}
          required
        />
        <FileField icon={ImageIcon} variant="dark" name="imagem" label="Imagem" />
      </div>

      <Button type="submit" variant="brand-block" className="mt-2">
        Cadastrar Estádio
      </Button>
    </form>
  );
}
