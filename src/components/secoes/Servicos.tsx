import { Rubrica } from "../Rubrica";

const fichas = [
  {
    letra: "A",
    tipo: "Pessoa jurídica",
    resumo: "Empresas, de MEIs a grandes contas, que compraram da sua e não pagaram.",
    dividas: [
      "Duplicatas e boletos vencidos",
      "Faturas de fornecimento recorrente",
      "Contratos de prestação de serviço",
      "Cheques devolvidos",
      "Notas promissórias",
      "Acordos anteriores descumpridos",
    ],
  },
  {
    letra: "B",
    tipo: "Pessoa física",
    resumo: "Consumidores com parcelas, mensalidades ou compras em aberto no seu negócio.",
    dividas: [
      "Crediário e carnês próprios",
      "Mensalidades e planos",
      "Parcelamentos diretos com a loja",
      "Cheques devolvidos",
      "Contratos de serviço",
      "Boletos e confissões de dívida",
    ],
  },
];

const inclusos = [
  ["Análise da documentação", "Conferimos valores, vencimentos e a prova de cada dívida antes do primeiro contato."],
  ["Atualização cadastral", "Buscamos telefones, e-mails e endereços válidos quando os dados do devedor estão desatualizados."],
  ["Contato em vários canais", "Telefone, WhatsApp, e-mail e carta, sempre com identificação clara de quem cobra."],
  ["Negociação com alçada", "Propostas à vista ou parceladas, dentro dos limites de desconto e prazo que você aprovar."],
  ["Acordo por escrito", "Cada negociação fechada vira um termo com valores, datas e condições."],
  ["Acompanhamento", "Monitoramos as parcelas e retomamos o contato no primeiro sinal de atraso."],
];

export function Servicos() {
  return (
    <section id="servicos" className="border-b border-linha">
      <div className="mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Rubrica numero="01" rotulo="O que fazemos" />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <h2
            data-revelar
            className="text-[2.2rem] font-light leading-[1.05] tracking-[-0.04em] text-marinho sm:text-[3rem] lg:col-span-7 lg:text-[4rem]"
          >
            Cobramos quem deve ao seu negócio, <span className="font-semibold">seja pessoa ou empresa.</span>
          </h2>

          {/* Verbete de dicionário: define o termo que o leigo não conhece. */}
          <div data-revelar className="border-l-2 border-celeste pl-5 lg:col-span-4 lg:col-start-9 lg:mt-3">
            <p className="text-[1.15rem] font-semibold text-marinho">
              ex·tra·ju·di·ci·al{" "}
              <span className="font-serif text-[1rem] font-normal italic text-grafite">adj.</span>
            </p>
            <p className="mt-2 font-serif text-[1.08rem] leading-[1.55] text-grafite">
              Que se resolve fora do Judiciário, sem processo, por meio de contato e negociação direta com o devedor.
              É mais rápido e mais barato que a ação judicial e preserva a chance de o cliente voltar a comprar.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {fichas.map((f, i) => (
            <article
              key={f.letra}
              data-revelar
              style={{ ["--atraso" as string]: `${i * 140}ms` }}
              className="group relative border border-marinho/80 bg-white"
            >
              <header className="flex items-center justify-between border-b border-marinho/80 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-grafite">
                <span>Ficha {f.letra}</span>
                <span>Devedor</span>
              </header>
              <div className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
                <span
                  aria-hidden
                  className="text-[5rem] font-semibold leading-[0.8] tracking-[-0.06em] text-gelo [-webkit-text-stroke:1.5px_var(--color-azul)] sm:text-[7rem]"
                >
                  {f.letra}
                </span>
                <div>
                  <h3 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-marinho">{f.tipo}</h3>
                  <p className="mt-2 font-serif text-[1.1rem] leading-[1.5] text-grafite">{f.resumo}</p>
                  <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-azul">O que cobramos</p>
                  <ul className="mt-2 border-t border-linha">
                    {f.dividas.map((d) => (
                      <li key={d} className="flex items-center justify-between gap-4 border-b border-linha py-2.5 text-[0.95rem] text-marinho">
                        {d}
                        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-celeste" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 data-revelar className="text-[1.6rem] font-semibold leading-tight tracking-[-0.03em] text-marinho lg:sticky lg:top-28">
              Incluído em toda cobrança,
              <span className="block font-light text-grafite">qualquer que seja o tamanho da carteira.</span>
            </h3>
          </div>
          <ol className="grid border-t border-marinho sm:grid-cols-2 lg:col-span-8">
            {inclusos.map(([titulo, texto], i) => (
              <li
                key={titulo}
                data-revelar
                style={{ ["--atraso" as string]: `${(i % 2) * 100}ms` }}
                className={`border-b border-linha py-6 sm:pr-6 ${i % 2 === 1 ? "sm:border-l sm:pl-6" : ""}`}
              >
                <span className="font-mono text-[0.72rem] text-azul numeros">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-2 text-[1.15rem] font-semibold tracking-[-0.01em] text-marinho">{titulo}</h4>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-grafite">{texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
