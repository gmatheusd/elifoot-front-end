"use client";

import { Button } from "@/components/atoms/Button";
import { CalendarIcon, ImageIcon, ShieldIcon, StadiumIcon } from "@/components/atoms/icons";
import { FileField } from "@/components/molecules/FileField";
import { InputField } from "@/components/molecules/InputField";
import { SelectField } from "@/components/molecules/SelectField";

const ESTADIOS = [
  { value: "sao-januario", label: "São Januário" },
  { value: "maracana", label: "Maracanã" },
  { value: "morumbi", label: "Morumbi" },
  { value: "mineirao", label: "Mineirão" },
];

export function CadastroClubeForm() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log({
      nome: formData.get("nome"),
      dataFundacao: formData.get("dataFundacao"),
      imagem: formData.get("imagem"),
      estadioId: formData.get("estadioId"),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 [&_button]:text-base [&_input]:text-base [&_label>div]:text-base [&_select]:text-base"
    >
      <InputField
        icon={ShieldIcon}
        variant="dark"
        type="text"
        name="nome"
        placeholder="Nome do Clube"
        required
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField
          icon={CalendarIcon}
          variant="dark"
          type="date"
          name="dataFundacao"
          placeholder="Data de fundação"
          required
        />
        <FileField icon={ImageIcon} variant="dark" name="imagem" label="Imagem" />
      </div>

      <SelectField
        icon={StadiumIcon}
        variant="dark"
        name="estadioId"
        placeholder="Seu clube faz parte de qual Estádio?"
        options={ESTADIOS}
        required
      />

      <Button type="submit" variant="brand-block" className="mt-2">
        Cadastrar Clube
      </Button>
    </form>
  );
}
