import { Rubrica } from "../Rubrica";

const etapas = [
  {
    titulo: "Envio da carteira",
    texto:
      "Você manda a relação dos títulos em aberto no formato que já tem: planilha, relatório do sistema, contratos ou fotos de cheques. Não exigimos modelo próprio.",
    entrega: "Confirmação de recebimento",
  },
  {
    titulo: "Análise",
    texto:
      "Conferimos documentos, valores e vencimentos de cada título. Os que estão perto do prazo de prescrição entram primeiro na fila.",
    entrega: "Diagnóstico da carteira",
  },
  {
    titulo: "Localização",
    texto:
      "Quando o cadastro está desatualizado, buscamos telefones, e-mails e endereços válidos para chegar ao devedor certo.",
    entrega: "Cadastro atualizado",
  },
  {
    titulo: "Contato e negociação",
    texto:
      "A abordagem é identificada, educada e objetiva. Apresentamos propostas à vista ou parceladas dentro da alçada que você definiu.",
    entrega: "Propostas dentro da sua alçada",
  },
  {
    titulo: "Formalização",
    texto:
      "O acordo fechado é registrado por escrito, com valor, datas e consequências do descumprimento. Nada fica apenas na palavra.",
    entrega: "Termo de acordo",
  },
  {
    titulo: "Acompanhamento",
    texto:
      "Seguimos cada parcela até a quitação, retomamos o contato em caso de atraso e prestamos contas a você durante todo o processo.",
    entrega: "Relatórios de andamento",
  },
];

export function Metodo() {
  return (
    <section id="metodo" className="border-b border-linha bg-gelo">
      <div className="mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Rubrica numero="02" rotulo="Método" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2
                data-revelar
                className="text-[2.2rem] font-light leading-[1.05] tracking-[-0.04em] text-marinho sm:text-[3rem] lg:text-[3.4rem]"
              >
                Seis etapas, <span className="font-semibold">nenhuma improvisada.</span>
              </h2>
              <p data-revelar className="mt-6 max-w-sm font-serif text-[1.15rem] leading-[1.55] text-grafite">
                Cobrança boa é rotina bem feita. Cada título percorre o mesmo caminho, e você sabe em que ponto dele está.
              </p>

              {/* Nota de margem, como num relatório. */}
              <div data-revelar className="mt-10 border-t border-marinho/30 pt-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-azul">Nota de margem</p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-grafite">
                  Pelo Código Civil (art. 206, § 5º, I), a cobrança de dívida líquida registrada em documento prescreve, em
                  regra, em cinco anos. Quanto antes a carteira chega, mais caminhos continuam abertos.
                </p>
              </div>
            </div>
          </aside>

          <ol className="relative lg:col-span-8">
            {/* Linha vertical que costura as etapas. */}
            <span aria-hidden className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-marinho/20 sm:left-[2.1rem]" />
            {etapas.map((e, i) => (
              <li key={e.titulo} data-revelar className="relative grid grid-cols-[2.75rem_1fr] gap-4 pb-12 last:pb-0 sm:grid-cols-[4.2rem_1fr] sm:gap-8">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center border border-marinho bg-gelo font-mono text-[0.8rem] font-medium text-marinho numeros sm:h-[4.2rem] sm:w-[4.2rem] sm:text-[1rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-b border-marinho/15 pb-10 sm:pt-2">
                  <h3 className="text-[1.45rem] font-semibold tracking-[-0.025em] text-marinho sm:text-[1.75rem]">{e.titulo}</h3>
                  <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-grafite">{e.texto}</p>
                  <p className="mt-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 border border-azul/30 bg-white px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em]">
                    <span className="text-grafite">Você recebe</span>
                    <span className="text-azul">{e.entrega}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
