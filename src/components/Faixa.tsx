import { empresa } from "@/lib/empresa";

// Faixa de identificação no topo, como o cabeçalho corrido de um relatório.
export function Faixa() {
  const itens = [
    empresa.razaoSocial,
    `CNPJ ${empresa.cnpj}`,
    `${empresa.endereco.cidade}/${empresa.endereco.uf}`,
    "Cobrança extrajudicial",
    "Atendimento em todo o Brasil",
  ];
  const linha = itens.map((t) => (
    <span key={t} className="flex items-center gap-6 pr-6">
      {t}
      <span aria-hidden className="h-1 w-1 rotate-45 bg-celeste" />
    </span>
  ));

  return (
    <div className="overflow-hidden bg-marinho font-mono text-[0.64rem] uppercase tracking-[0.14em] text-gelo/75">
      <div className="letreiro flex w-max py-2 lg:hidden" aria-hidden>
        {linha}
        {linha}
      </div>
      <p className="sr-only">{itens.join(", ")}</p>
      <div className="mx-auto hidden max-w-[84rem] justify-between px-10 py-2 lg:flex" aria-hidden>
        {itens.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
