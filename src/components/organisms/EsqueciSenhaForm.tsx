"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { MailIcon } from "@/components/atoms/icons";
import { InputField } from "@/components/molecules/InputField";

export function EsqueciSenhaForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    console.log({ email });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-8 text-sm text-zinc-600">
        Se esse email estiver cadastrado, você vai receber um link para redefinir sua senha em
        instantes.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <InputField
        icon={MailIcon}
        type="email"
        name="email"
        placeholder="Seu Email"
        required
        autoComplete="email"
      />

      <Button type="submit" variant="dark" className="mt-2">
        Enviar link
      </Button>
    </form>
  );
}
