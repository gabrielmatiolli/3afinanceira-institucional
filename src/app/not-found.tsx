import Link from "next/link";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";

export default function NaoEncontrada() {
  return (
    <>
      <Cabecalho />
      <main className="papel-quadriculado border-b border-linha">
        <div className="mx-auto max-w-[84rem] px-4 py-24 sm:px-6 lg:px-10 lg:py-40">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-azul">Erro 404</p>
          <h1 className="mt-4 max-w-3xl text-[2.6rem] font-light leading-[1.05] tracking-[-0.04em] text-marinho sm:text-[4rem]">
            Esta página não consta <span className="font-semibold">nos nossos registros.</span>
          </h1>
          <Link
            href="/"
            className="mt-10 inline-flex h-14 items-center bg-marinho px-6 text-[0.95rem] font-medium text-white hover:bg-azul"
          >
            Voltar ao início
          </Link>
        </div>
      </main>
      <Rodape />
    </>
  );
}
