"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { ImageIcon, JerseyIcon, ShieldIcon, UserIcon } from "@/components/atoms/icons";
import { CadastroSuccess } from "@/components/organisms/CadastroSuccess";
import { InputField } from "@/components/molecules/InputField";
import { SelectField } from "@/components/molecules/SelectField";

const POSICOES = [
  { value: "goleiro", label: "Goleiro" },
  { value: "zagueiro", label: "Zagueiro" },
  { value: "lateral", label: "Lateral" },
  { value: "meio-campo", label: "Meio-campo" },
  { value: "atacante", label: "Atacante" },
];

const CLUBES = [
  { value: "vasco-da-gama", label: "Vasco da Gama" },
  { value: "flamengo", label: "Flamengo" },
  { value: "fluminense", label: "Fluminense" },
  { value: "botafogo", label: "Botafogo" },
];

const NUMEROS_CAMISA = Array.from({ length: 99 }, (_, i) => {
  const numero = String(i + 1);
  return { value: numero, label: numero };
});

export function CadastroJogadorForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log({
      nome: formData.get("nome"),
      posicao: formData.get("posicao"),
      numeroCamisa: formData.get("numeroCamisa"),
      clubeId: formData.get("clubeId"),
      imagem: formData.get("imagem"),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return <CadastroSuccess onNovoCadastro={() => setSubmitted(false)} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 [&_button]:text-base [&_input]:text-base [&_label>div]:text-base [&_select]:text-base"
    >
      <InputField
        icon={UserIcon}
        variant="dark"
        type="text"
        name="nome"
        placeholder="Nome do Jogador"
        required
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SelectField
          icon={JerseyIcon}
          variant="dark"
          name="posicao"
          placeholder="Posição de Jogo"
          options={POSICOES}
          required
        />
        <SelectField
          icon={JerseyIcon}
          variant="dark"
          name="numeroCamisa"
          placeholder="Número camisa"
          options={NUMEROS_CAMISA}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SelectField
          icon={ShieldIcon}
          variant="dark"
          name="clubeId"
          placeholder="Clube atual"
          options={CLUBES}
          required
        />
        <InputField
          icon={ImageIcon}
          variant="dark"
          type="url"
          name="imagem"
          placeholder="URL da Imagem"
        />
      </div>

      <Button type="submit" variant="brand-block" className="mt-2">
        Cadastrar Jogador
      </Button>
    </form>
  );
}
