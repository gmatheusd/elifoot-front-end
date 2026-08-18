import Link from "next/link";
import { AuthSidePanel } from "@/components/organisms/AuthSidePanel";
import { EsqueciSenhaForm } from "@/components/organisms/EsqueciSenhaForm";
import { AuthSplitTemplate } from "@/components/templates/AuthSplitTemplate";

export default function EsqueciSenhaPage() {
  return (
    <AuthSplitTemplate
      sidePanel={
        <AuthSidePanel
          title={
            <>
              Esqueceu
              <br />
              sua senha?
            </>
          }
          subtitle="Sem problemas, vamos te ajudar a recuperar o acesso."
        >
          <Link href="/cadastro" className="w-fit text-sm text-zinc-400 hover:underline">
            Não tem uma conta? Cadastre-se.
          </Link>
        </AuthSidePanel>
      }
    >
      <h1 className="text-3xl font-bold text-zinc-900">Recuperar senha</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Informe seu email para receber o link de recuperação
      </p>

      <EsqueciSenhaForm />
    </AuthSplitTemplate>
  );
}
