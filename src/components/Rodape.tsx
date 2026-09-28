import Link from "next/link";
import { empresa, enderecoLinhas } from "@/lib/empresa";
import { secoes } from "@/lib/navegacao";
import { Logo } from "./Logo";

export function Rodape() {
  return (
    <footer className="bg-marinho-900 text-gelo">
      <div className="mx-auto max-w-[84rem] px-4 pb-24 pt-16 sm:pb-10 sm:px-6 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo id="mascara-rodape" variante="negativa" className="h-24 w-auto" />
            <p className="mt-6 max-w-xs font-serif text-[1.05rem] leading-relaxed text-gelo/65">
              Cobrança extrajudicial para empresas de todos os setores, em todo o Brasil.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3 lg:col-start-6">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-gelo/50">Índice</p>
            <ul className="mt-4 space-y-1">
              {secoes.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="flex min-h-10 items-center gap-3 text-[0.95rem] text-gelo/80 hover:text-white">
                    <span className="font-mono text-[0.68rem] text-celeste">{s.numero}</span>
                    {s.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-gelo/50">Dados da empresa</p>
            <dl className="mt-4 space-y-3 text-[0.92rem]">
              <div>
                <dt className="text-gelo/50">Razão social</dt>
                <dd className="text-white">{empresa.razaoSocial}</dd>
              </div>
              <div>
                <dt className="text-gelo/50">CNPJ</dt>
                <dd className="font-mono text-white">{empresa.cnpj}</dd>
              </div>
              <div>
                <dt className="text-gelo/50">Endereço</dt>
                <dd className="text-white">
                  {enderecoLinhas[0]} <span className="whitespace-nowrap">{enderecoLinhas[1]}</span>
                </dd>
              </div>
              <div>
                <dt className="text-gelo/50">Contato</dt>
                <dd>
                  <a href={`mailto:${empresa.email}`} className="break-all text-white hover:text-celeste">
                    {empresa.email}
                  </a>
                  <br />
                  <a href={empresa.telefone.href} className="text-white hover:text-celeste">
                    {empresa.telefone.exibicao}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-linha-clara pt-6 text-[0.8rem] text-gelo/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {empresa.fundacao} {empresa.nomeFantasia}. Todos os direitos reservados.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/politica-de-privacidade/" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso/" className="hover:text-white">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
