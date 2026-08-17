import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro Elifoot",
};

export default function CadastroLayout({ children }: LayoutProps<"/cadastro">) {
  return children;
}
