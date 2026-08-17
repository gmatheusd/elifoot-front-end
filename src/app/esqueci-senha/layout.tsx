import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar Senha Elifoot",
};

export default function EsqueciSenhaLayout({ children }: LayoutProps<"/esqueci-senha">) {
  return children;
}
