import { empresa, mensagemWhatsApp } from "@/lib/empresa";
import { IconeSeta, IconeWhatsApp } from "../Icones";

// Os cinco marcos do percurso de um título vencido, na inclinação da seta da logo (1:2).
const marcos = [
  { n: "01", titulo: "Carteira recebida", nota: "Títulos em aberto chegam à 3A" },
  { n: "02", titulo: "Devedor localizado", nota: "Cadastro conferido e atualizado" },
  { n: "03", titulo: "Contato feito", nota: "Abordagem identificada e cordial" },
  { n: "04", titulo: "Acordo firmado", nota: "Condições registradas por escrito" },
  { n: "05", titulo: "Valor em caixa", nota: "Pagamento acompanhado até o fim" },
];

const pontos = marcos.map((_, i) => ({ x: 56 + i * 96, y: 332 - i * 48 }));

function Figura() {
  const inicio = pontos[0];
  const fim = pontos[pontos.length - 1];
  // Degraus: anda na horizontal e sobe, como um extrato que melhora etapa a etapa.
  const degraus = pontos
    .map((p, i) => (i === 0 ? `M${p.x} ${p.y}` : `H${p.x} V${p.y}`))
    .join(" ");

  return (
    <svg viewBox="0 70 520 330" className="h-auto w-full" role="img" aria-labelledby="fig1-titulo">
      <title id="fig1-titulo">
        Diagrama: o percurso de um título vencido em cinco etapas, subindo da carteira recebida até o valor em caixa.
      </title>

      {/* eixos */}
      <g stroke="#0A2240" strokeOpacity="0.35" strokeWidth="1">
        <path d="M24 372H500" />
        <path d="M24 372V86" />
      </g>
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${pontos[i].x} 372v6`} stroke="#0A2240" strokeOpacity="0.35" />
      ))}
      <text x="500" y="394" textAnchor="end" className="fill-grafite font-mono text-[11px] uppercase tracking-[0.12em]">
        Tempo
      </text>
      <text x="16" y="86" transform="rotate(-90 16 86)" textAnchor="end" className="fill-grafite font-mono text-[11px] uppercase tracking-[0.12em]">
        Recuperação
      </text>

      {/* degraus */}
      <path d={degraus} fill="none" stroke="#1450A3" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="3 5" />

      {/* a seta da marca, desenhando-se */}
      <path
        d={`M${inicio.x} ${inicio.y}L${fim.x + 20} ${fim.y - 10}`}
        fill="none"
        stroke="#3D8BFD"
        strokeWidth="10"
        className="traco-animado"
        style={{ ["--comprimento" as string]: "452" }}
      />
      <path
        d="M476 122L465 140.8 455 120.2Z"
        fill="#3D8BFD"
        className="surgir"
        style={{ ["--atraso" as string]: "2100ms" }}
      />

      {pontos.map((p, i) => (
        <g key={i} className="surgir" style={{ ["--atraso" as string]: `${500 + i * 380}ms` }}>
          <circle cx={p.x} cy={p.y} r="15" fill="#F7F9FC" stroke="#0A2240" strokeWidth="1.5" />
          <text
            x={p.x}
            y={p.y + 4}
            textAnchor="middle"
            className="fill-marinho font-mono text-[11px] font-medium"
          >
            {marcos[i].n}
          </text>
          <path d={`M${p.x} ${p.y + 15}V372`} stroke="#0A2240" strokeOpacity="0.12" strokeDasharray="2 4" />
        </g>
      ))}
    </svg>
  );
}

export function Heroi() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-linha">
      <div className="papel-quadriculado pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />

      <div className="relative mx-auto max-w-[84rem] px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pb-0 lg:pt-16">
        <p className="surgir flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-grafite">
          <span className="text-azul">Cobrança extrajudicial</span>
          <span aria-hidden>/</span>
          <span>Pessoas físicas e jurídicas</span>
          <span aria-hidden>/</span>
          <span>Todo o Brasil</span>
        </p>

        <div className="mt-8 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="text-[2.7rem] leading-[1.02] tracking-[-0.045em] text-marinho sm:text-[4rem] lg:text-[5.4rem] xl:text-[6.2rem]">
              <span className="surgir block font-light" style={{ ["--atraso" as string]: "80ms" }}>
                Recebível vencido
              </span>
              <span className="surgir block font-semibold" style={{ ["--atraso" as string]: "180ms" }}>
                é caixa parado<span className="text-celeste">.</span>
              </span>
            </h1>

            <p
              className="surgir mt-7 max-w-[34rem] font-serif text-[1.25rem] leading-[1.5] text-grafite lg:mt-9 lg:text-[1.4rem]"
              style={{ ["--atraso" as string]: "300ms" }}
            >
              A 3A Soluções cobra, fora dos tribunais, o que pessoas e empresas devem ao seu negócio. Negociamos com firmeza e
              dentro da lei, para que o dinheiro volte a circular sem que a sua equipe precise correr atrás dele.
            </p>

            <div className="surgir mt-9 flex flex-col gap-3 sm:flex-row" style={{ ["--atraso" as string]: "420ms" }}>
              <a
                href="#contato"
                className="group inline-flex h-14 items-center justify-between gap-6 bg-marinho px-6 text-[0.95rem] font-medium text-white transition-colors hover:bg-azul sm:justify-start"
              >
                Enviar carteira para análise
                <IconeSeta className="h-5 w-5 text-celeste transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </a>
              <a
                href={empresa.whatsapp.href(mensagemWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 border border-marinho/25 bg-papel px-6 text-[0.95rem] font-medium text-marinho transition-colors hover:border-marinho"
              >
                <IconeWhatsApp className="h-5 w-5 text-azul" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <figure className="lg:col-span-5 lg:-mt-4">
            <div className="border border-linha bg-papel/80 p-4 backdrop-blur-[2px] sm:p-6">
              <div className="flex items-baseline justify-between font-mono text-[0.68rem] uppercase tracking-[0.14em] text-grafite">
                <span>Fig. 1</span>
                <span className="hidden sm:inline">Inclinação 1:2, a mesma da seta da marca</span>
                <span className="sm:hidden">Inclinação 1:2</span>
              </div>
              <div className="mt-3">
                <Figura />
              </div>
              <ol className="mt-4 grid gap-x-6 border-t border-linha pt-4 sm:grid-cols-2">
                {marcos.map((m) => (
                  <li key={m.n} className="flex gap-3 py-1.5 text-[0.85rem]">
                    <span className="font-mono text-[0.72rem] text-azul">{m.n}</span>
                    <span>
                      <span className="font-medium text-marinho">{m.titulo}</span>
                      <span className="block text-[0.78rem] text-grafite">{m.nota}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <figcaption className="mt-3 font-serif text-[0.95rem] italic text-grafite">
              O percurso de um título vencido até o caixa do credor.
            </figcaption>
          </figure>
        </div>

        {/* Ficha técnica: fatos, não promessas. */}
        <dl className="mt-14 grid grid-cols-2 border-t border-marinho lg:mt-20 lg:grid-cols-4">
          {[
            ["Modalidade", "Extrajudicial", "Sem processo, por negociação"],
            ["Devedores", "PF e PJ", "Pessoas físicas e empresas"],
            ["Setores", "Todos", "Qualquer empresa que vende a prazo"],
            ["Alcance", "27 UFs", `Sede em ${empresa.endereco.cidade}/${empresa.endereco.uf}`],
          ].map(([rotulo, valor, nota], i) => (
            <div
              key={rotulo}
              className={`border-linha py-5 pr-4 ${i % 2 === 1 ? "border-l pl-4" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-6" : ""
              } ${i > 0 ? "lg:pl-6" : ""}`}
            >
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-grafite">{rotulo}</dt>
              <dd className="mt-2 text-[1.6rem] font-light tracking-[-0.03em] text-marinho lg:text-[2rem]">{valor}</dd>
              <dd className="mt-1 text-[0.8rem] leading-snug text-grafite">{nota}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
