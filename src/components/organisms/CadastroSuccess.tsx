import { Button, ButtonLink } from "@/components/atoms/Button";
import { CheckIcon } from "@/components/atoms/icons";
import { Logo } from "@/components/atoms/Logo";

type CadastroSuccessProps = {
  onNovoCadastro: () => void;
};

export function CadastroSuccess({ onNovoCadastro }: CadastroSuccessProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black px-6 text-center font-sans">
      <Logo />

      <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-green-500">
        <CheckIcon className="h-8 w-8 text-green-500" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-brand sm:text-3xl">Cadastro efetuado com sucesso!</h2>
        <p className="mt-2 text-zinc-400">Escolha seu próximo destino</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button type="button" variant="pill-outline" onClick={onNovoCadastro}>
          Novo Cadastro
        </Button>
        <ButtonLink href="/" variant="brand-pill">
          Ir para home
        </ButtonLink>
      </div>
    </div>
  );
}
