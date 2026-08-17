"use client";

import Image from "next/image";
import Link from "next/link";
import { LockIcon, UserIcon } from "../_components/icons";

export default function LoginPage() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const password = formData.get("password");

    console.log({ name, password });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black px-6 py-16 text-center font-sans">
      <Image src="/img/logo.svg" alt="Elifoot logo" width={220} height={66} priority />

      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Bem-vindo de volta!</h1>
        <p className="mt-2 text-zinc-400">Acesse a sua conta</p>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full max-w-xl flex-col gap-4">
        <div className="relative">
          <UserIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            required
            autoComplete="username"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 py-4 pl-12 pr-5 text-left text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="relative">
          <LockIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
          <input
            type="password"
            name="password"
            placeholder="Sua Senha"
            required
            autoComplete="current-password"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 py-4 pl-12 pr-5 text-left text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="flex items-center justify-between px-1 text-sm">
          <Link href="/esqueci-senha" className="text-zinc-300 transition-colors hover:text-white">
            Recuperar minha senha
          </Link>
          <Link href="/cadastro" className="font-medium text-brand transition-colors hover:text-brand/80">
            Crie sua conta agora
          </Link>
        </div>

        <button
          type="submit"
          className="cursor-pointer mx-auto mt-2 rounded-2xl bg-brand px-16 py-4 text-sm font-bold text-black transition-colors hover:bg-brand/90"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
