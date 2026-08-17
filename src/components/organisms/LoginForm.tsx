"use client";

import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { LockIcon, UserIcon } from "@/components/atoms/icons";
import { InputField } from "@/components/molecules/InputField";

export function LoginForm() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const password = formData.get("password");

    console.log({ name, password });
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl flex-col gap-4">
      <InputField
        icon={UserIcon}
        variant="dark"
        type="text"
        name="name"
        placeholder="Seu Nome"
        required
        autoComplete="username"
      />

      <InputField
        icon={LockIcon}
        variant="dark"
        type="password"
        name="password"
        placeholder="Sua Senha"
        required
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between px-1 text-sm">
        <Link href="/esqueci-senha" className="text-zinc-300 transition-colors hover:text-white">
          Recuperar minha senha
        </Link>
        <Link href="/cadastro" className="font-medium text-brand transition-colors hover:text-brand/80">
          Crie sua conta agora
        </Link>
      </div>

      <Button type="submit" variant="brand" className="mx-auto mt-2">
        Entrar
      </Button>
    </form>
  );
}
