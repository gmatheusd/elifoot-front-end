"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { LockIcon, MailIcon, UserIcon } from "@/components/atoms/icons";
import { FormError } from "@/components/molecules/FormError";
import { InputField } from "@/components/molecules/InputField";

export function CadastroForm() {
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem.");
      return;
    }

    setPasswordError("");
    console.log({ name, email, password });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <InputField
        icon={UserIcon}
        type="text"
        name="name"
        placeholder="Seu Nome"
        required
        autoComplete="name"
      />

      <InputField
        icon={MailIcon}
        type="email"
        name="email"
        placeholder="Seu Email"
        required
        autoComplete="email"
      />

      <InputField
        icon={LockIcon}
        type="password"
        name="password"
        placeholder="Sua Senha"
        required
        autoComplete="new-password"
      />

      <div>
        <InputField
          icon={LockIcon}
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          required
          autoComplete="new-password"
        />
        <FormError message={passwordError} />
      </div>

      <Button type="submit" variant="dark" className="mt-2">
        Cadastrar
      </Button>
    </form>
  );
}
