"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LockIcon, MailIcon, UserIcon } from "../_components/icons";

export default function CadastroPage() {
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
    <div className="flex min-h-screen flex-col font-sans md:flex-row">
      <div className="flex flex-col items-center justify-center gap-6 bg-black px-10 py-16 md:w-2/5 md:px-12 lg:w-1/3">
        <Image src="/img/logo.svg" alt="Elifoot logo" width={160} height={48} priority />

        <div>
          <h2 className="text-3xl font-bold leading-tight text-white">
            Bem-vindo
            <br />
            de volta!
          </h2>
          <p className="mt-2 text-sm text-zinc-400">Acesse sua conta agora mesmo.</p>
        </div>

        <Link
          href="/login"
          className="inline-block w-fit rounded-xl border-2 border-white px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
        >
          Entrar
        </Link>

        <Link href="/esqueci-senha" className="w-fit text-sm text-zinc-400 hover:underline">
          Esqueci minha senha.
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center bg-white px-6 py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-zinc-900">Crie sua conta</h1>
          <p className="mt-1 text-sm text-zinc-500">Preencha seus dados</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div className="relative">
              <UserIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
                autoComplete="name"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-100 py-4 pl-12 pr-5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>

            <div className="relative">
              <MailIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                required
                autoComplete="email"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-100 py-4 pl-12 pr-5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>

            <div className="relative">
              <LockIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <input
                type="password"
                name="password"
                placeholder="Sua Senha"
                required
                autoComplete="new-password"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-100 py-4 pl-12 pr-5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>

            <div>
              <div className="relative">
                <LockIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  required
                  autoComplete="new-password"
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-100 py-4 pl-12 pr-5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                />
              </div>
              {passwordError && <p className="mt-2 text-sm text-red-500">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="mt-2 cursor-pointer rounded-2xl bg-zinc-900 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-zinc-700"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
