import Link from "next/link";
import { AuthSidePanel } from "@/components/organisms/AuthSidePanel";
import { CadastroForm } from "@/components/organisms/CadastroForm";
import { AuthSplitTemplate } from "@/components/templates/AuthSplitTemplate";

export default function CadastroPage() {
  return (
    <AuthSplitTemplate
      sidePanel={
        <AuthSidePanel
          title={
            <>
              Bem-vindo
              <br />
              de volta!
            </>
          }
          subtitle="Acesse sua conta agora mesmo."
        >
          <Link href="/esqueci-senha" className="w-fit text-sm text-zinc-400 hover:underline">
            Esqueci minha senha.
          </Link>
        </AuthSidePanel>
      }
    >
      <h1 className="text-3xl font-bold text-zinc-900">Crie sua conta</h1>
      <p className="mt-1 text-sm text-zinc-500">Preencha seus dados</p>

      <CadastroForm />
    </AuthSplitTemplate>
  );
}
