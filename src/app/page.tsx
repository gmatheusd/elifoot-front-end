import type { Metadata } from "next";
import { LoginForm } from "@/components/organisms/LoginForm";
import { CenteredDarkTemplate } from "@/components/templates/CenteredDarkTemplate";

export const metadata: Metadata = {
  title: "Login Elifoot",
};

export default function Home() {
  return (
    <CenteredDarkTemplate>
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Bem-vindo de volta!</h1>
        <p className="mt-2 text-zinc-400">Acesse a sua conta</p>
      </div>

      <LoginForm />
    </CenteredDarkTemplate>
  );
}
