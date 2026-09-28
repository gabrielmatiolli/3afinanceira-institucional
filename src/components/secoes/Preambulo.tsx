import { Rubrica } from "../Rubrica";

const custos = [
  {
    titulo: "O tempo",
    texto:
      "Horas do financeiro e do comercial vão embora em ligações que não avançam, mensagens sem resposta e planilhas de acompanhamento que ninguém consegue manter em dia.",
  },
  {
    titulo: "A relação",
    texto:
      "Quem vende não deveria cobrar. Quando o mesmo profissional atende e cobra, a conversa azeda e o cliente que poderia voltar a comprar some de vez.",
  },
  {
    titulo: "O caixa",
    texto:
      "A mercadoria já saiu, o serviço já foi prestado e, muitas vezes, os tributos da venda já foram pagos. O título em aberto é dinheiro que a empresa adiantou e ainda não viu voltar.",
  },
];

export function Preambulo() {
  return (
    <section className="relative overflow-hidden bg-marinho text-gelo">
      <div className="papel-quadriculado-escuro pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Rubrica numero="00" rotulo="Preâmbulo" escuro />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <p
            data-revelar
            className="text-[2rem] font-light leading-[1.12] tracking-[-0.035em] sm:text-[2.6rem] lg:col-span-9 lg:text-[3.6rem]"
          >
            Toda venda a prazo é um voto de confiança. Quando ele não é honrado, alguém precisa cobrar.{" "}
            <span className="font-serif italic text-celeste">E não deveria ser você.</span>
          </p>
        </div>

        <div className="mt-16 grid border-t border-linha-clara lg:mt-24 lg:grid-cols-3">
          {custos.map((c, i) => (
            <article
              key={c.titulo}
              data-revelar
              style={{ ["--atraso" as string]: `${i * 120}ms` }}
              className={`border-b border-linha-clara py-8 lg:border-b-0 lg:py-10 ${i > 0 ? "lg:border-l lg:pl-8" : ""} lg:pr-8`}
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-gelo/55">Custo {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[1.5rem] font-semibold tracking-[-0.02em]">{c.titulo}</h3>
              <p className="mt-3 font-serif text-[1.12rem] leading-[1.55] text-gelo/75">{c.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
