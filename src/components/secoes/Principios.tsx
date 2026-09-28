import { empresa } from "@/lib/empresa";
import { Rubrica } from "../Rubrica";

const artigos = [
  {
    titulo: "Identificação sempre",
    texto: "Toda abordagem informa quem está cobrando, em nome de qual empresa e por qual dívida. Sem mistério e sem intimidação.",
    base: "CDC, art. 42-A",
  },
  {
    titulo: "Sem constrangimento",
    texto: "Nenhuma ameaça, nenhuma exposição ao ridículo, nenhum tom agressivo. Firmeza está nos argumentos, não na voz.",
    base: "CDC, art. 42",
  },
  {
    titulo: "Sigilo diante de terceiros",
    texto: "A dívida é tratada apenas com o devedor ou com quem responde por ele. Vizinhos, colegas e familiares não ficam sabendo.",
    base: "CDC, art. 71",
  },
  {
    titulo: "Horários razoáveis",
    texto: "Os contatos acontecem em horário comercial, sem invadir o descanso nem o trabalho de quem está sendo cobrado.",
    base: "CDC, art. 71",
  },
  {
    titulo: "Só o valor devido",
    texto: "Cobramos o que está documentado, com encargos que tenham base no contrato ou na lei. Valor indevido pode ter de ser devolvido em dobro.",
    base: "CDC, art. 42, par. único",
  },
  {
    titulo: "Dados protegidos",
    texto: "As informações da sua carteira são usadas apenas para a cobrança contratada, com acesso restrito e descarte quando deixam de ser necessárias.",
    base: "Lei 13.709/2018 (LGPD)",
  },
];

export function Principios() {
  return (
    <section id="principios" className="border-b border-linha">
      <div className="mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Rubrica numero="03" rotulo="Princípios" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2
              data-revelar
              className="text-[2.2rem] font-light leading-[1.05] tracking-[-0.04em] text-marinho sm:text-[3rem] lg:text-[3.6rem]"
            >
              Uma cobrança mal feita pode sair <span className="font-semibold">mais cara que a dívida.</span>
            </h2>
            <p data-revelar className="mt-6 font-serif text-[1.15rem] leading-[1.55] text-grafite">
              Quando a cobrança passa do limite, quem responde na Justiça também é a empresa credora. Por isso a 3A trabalha
              com um código de conduta escrito, baseado no Código de Defesa do Consumidor e na LGPD.
            </p>
            <p data-revelar className="mt-4 font-serif text-[1.15rem] leading-[1.55] text-grafite">
              O CDC protege o consumidor, mas aplicamos o mesmo padrão a todos os devedores, inclusive empresas. É assim que
              o nome da sua marca sai preservado da negociação.
            </p>

            {/* Carimbo: o selo gráfico da seção, na inclinação da marca. */}
            <div data-revelar className="mt-12 hidden lg:block" aria-hidden>
              <div className="inline-flex rotate-[-8deg] flex-col items-center border-2 border-azul/70 px-6 py-4 font-mono uppercase text-azul/80">
                <span className="text-[0.62rem] tracking-[0.3em]">Código de conduta</span>
                <span className="my-1 text-[1.4rem] font-medium tracking-[0.12em]">Firme e legal</span>
                <span className="text-[0.62rem] tracking-[0.3em]">3A Soluções · desde {empresa.fundacao}</span>
              </div>
            </div>
          </div>

          <ol className="border-t-2 border-marinho lg:col-span-7">
            {artigos.map((a, i) => (
              <li
                key={a.titulo}
                data-revelar
                className="grid gap-x-6 gap-y-2 border-b border-linha py-6 sm:grid-cols-[5.5rem_1fr_auto] sm:items-baseline"
              >
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-azul">Art. {i + 1}º</span>
                <div>
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.015em] text-marinho">{a.titulo}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-grafite">{a.texto}</p>
                </div>
                <span className="justify-self-start whitespace-nowrap border border-linha px-2 py-1 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-grafite sm:justify-self-end">
                  {a.base}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
