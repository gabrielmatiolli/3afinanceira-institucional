import Link from "next/link";
import { Cabecalho } from "./Cabecalho";
import { Faixa } from "./Faixa";
import { Rodape } from "./Rodape";

export function PaginaLegal({
  documento,
  titulo,
  atualizacao,
  children,
}: {
  documento: string;
  titulo: string;
  atualizacao: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Faixa />
      <Cabecalho />
      <main className="border-b border-linha">
        <div className="mx-auto max-w-[84rem] px-4 pb-24 pt-12 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-20">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Link href="/" className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-azul hover:underline">
                Voltar ao início
              </Link>
              <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-grafite">{documento}</p>
              <p className="mt-2 text-[0.9rem] text-grafite">Última atualização: {atualizacao}</p>
            </div>
          </aside>
          <article className="mt-8 max-w-3xl lg:col-span-8 lg:mt-0">
            <h1 className="text-[2.4rem] font-light leading-[1.05] tracking-[-0.04em] text-marinho sm:text-[3.4rem]">{titulo}</h1>
            <div className="texto-legal mt-10 border-t-2 border-marinho pt-2">{children}</div>
          </article>
        </div>
      </main>
      <Rodape />
    </>
  );
}
