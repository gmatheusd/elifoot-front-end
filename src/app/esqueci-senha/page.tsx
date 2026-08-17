"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "../_components/icons";

export default function EsqueciSenhaPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    console.log({ email });
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col font-sans md:flex-row">
      <div className="flex flex-col items-center justify-center gap-6 bg-black px-10 py-16 md:w-2/5 md:px-12 lg:w-1/3">
        <Image src="/img/logo.svg" alt="Elifoot logo" width={160} height={48} priority />

        <div>
          <h2 className="text-3xl font-bold leading-tight text-white">
            Esqueceu
            <br />
            sua senha?
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Sem problemas, vamos te ajudar a recuperar o acesso.
          </p>
        </div>

        <Link
          href="/login"
          className="inline-block w-fit rounded-xl border-2 border-white px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
        >
          Entrar
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center bg-white px-6 py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-zinc-900">Recuperar senha</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Informe seu email para receber o link de recuperação
          </p>

          {submitted ? (
            <p className="mt-8 text-sm text-zinc-600">
              Se esse email estiver cadastrado, você vai receber um link para redefinir sua senha
              em instantes.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
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

              <button
                type="submit"
                className="mt-2 cursor-pointer rounded-2xl bg-zinc-900 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-zinc-700"
              >
                Enviar link
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
