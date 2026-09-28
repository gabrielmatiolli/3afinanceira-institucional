import { empresa } from "@/lib/empresa";
import { Rubrica } from "../Rubrica";

const setores = [
  ["Comércio varejista", "Lojas, crediário, vendas parceladas"],
  ["Atacado e distribuição", "Revendas e redes de clientes"],
  ["Indústria", "Fornecimento para outras empresas"],
  ["Agronegócio", "Insumos, máquinas, revendas agrícolas"],
  ["Saúde", "Clínicas, laboratórios, consultórios"],
  ["Educação", "Escolas, faculdades, cursos livres"],
  ["Serviços profissionais", "Escritórios, consultorias, agências"],
  ["Construção", "Materiais, obras, empreiteiras"],
  ["Transporte e logística", "Fretes e contratos recorrentes"],
  ["Tecnologia", "Software, assinaturas, provedores"],
  ["Locação", "Equipamentos, veículos, imóveis"],
  ["Bem-estar", "Academias, estúdios, estética"],
];

// Mapa em ladrilhos: cada UF é um quadrado na posição aproximada do mapa.
// [sigla, nome, coluna, linha]
const ufs: [string, string, number, number][] = [
  ["RR", "Roraima", 1, 0], ["AP", "Amapá", 3, 0],
  ["AM", "Amazonas", 1, 1], ["PA", "Pará", 2, 1], ["MA", "Maranhão", 3, 1], ["CE", "Ceará", 4, 1], ["RN", "Rio Grande do Norte", 5, 1],
  ["AC", "Acre", 0, 2], ["RO", "Rondônia", 1, 2], ["TO", "Tocantins", 2, 2], ["PI", "Piauí", 3, 2], ["PE", "Pernambuco", 4, 2], ["PB", "Paraíba", 5, 2],
  ["MT", "Mato Grosso", 1, 3], ["GO", "Goiás", 2, 3], ["BA", "Bahia", 3, 3], ["SE", "Sergipe", 4, 3], ["AL", "Alagoas", 5, 3],
  ["MS", "Mato Grosso do Sul", 1, 4], ["DF", "Distrito Federal", 2, 4], ["MG", "Minas Gerais", 3, 4], ["ES", "Espírito Santo", 4, 4],
  ["PR", "Paraná", 1, 5], ["SP", "São Paulo", 2, 5], ["RJ", "Rio de Janeiro", 3, 5],
  ["SC", "Santa Catarina", 1, 6],
  ["RS", "Rio Grande do Sul", 1, 7],
];

function MapaLadrilhos() {
  return (
    <figure>
      <div
        className="grid w-full max-w-[22rem] grid-cols-6 gap-1.5"
        style={{ gridTemplateRows: "repeat(8, minmax(0, 1fr))" }}
        role="img"
        aria-label={`Mapa do Brasil com as 27 unidades da federação atendidas. Sede em ${empresa.endereco.cidade}, Minas Gerais.`}
      >
        {ufs.map(([sigla, nome, c, l]) => {
          const sede = sigla === empresa.endereco.uf;
          return (
            <span
              key={sigla}
              title={nome}
              style={{ gridColumn: c + 1, gridRow: l + 1 }}
              className={`flex aspect-square items-center justify-center font-mono text-[0.68rem] font-medium tracking-[0.04em] transition-colors ${
                sede ? "bg-celeste text-marinho" : "border border-gelo/25 text-gelo/80 hover:border-celeste hover:text-white"
              }`}
            >
              {sigla}
            </span>
          );
        })}
      </div>
      <figcaption className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-gelo/60">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 bg-celeste" aria-hidden /> Sede, {empresa.endereco.cidade}/{empresa.endereco.uf}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 border border-gelo/40" aria-hidden /> Atendimento remoto
        </span>
      </figcaption>
    </figure>
  );
}

export function Setores() {
  return (
    <section id="setores" className="relative overflow-hidden bg-marinho text-gelo">
      <div className="hachura pointer-events-none absolute -right-24 top-0 h-full w-1/2 text-white/[0.035]" aria-hidden />
      <div className="relative mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Rubrica numero="04" rotulo="Setores e alcance" escuro />

        <div className="mt-12 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2
              data-revelar
              className="text-[2.2rem] font-light leading-[1.05] tracking-[-0.04em] sm:text-[3rem] lg:text-[3.6rem]"
            >
              Se a sua empresa vende a prazo, <span className="font-semibold text-white">a 3A atende.</span>
            </h2>
            <p data-revelar className="mt-6 max-w-xl font-serif text-[1.15rem] leading-[1.55] text-gelo/70">
              A inadimplência não escolhe ramo. Trabalhamos com qualquer setor e, como a cobrança é feita por telefone,
              WhatsApp, e-mail e carta, a distância não pesa: o devedor pode estar em qualquer estado.
            </p>

            <ul className="mt-12 grid border-t border-linha-clara sm:grid-cols-2">
              {setores.map(([nome, exemplo], i) => (
                <li
                  key={nome}
                  className={`group flex items-baseline gap-4 border-b border-linha-clara py-4 ${i % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6"}`}
                >
                  <span className="w-6 shrink-0 font-mono text-[0.68rem] text-celeste numeros">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[1.12rem] font-medium tracking-[-0.01em] text-white">{nome}</span>
                    <span className="block text-[0.85rem] text-gelo/55">{exemplo}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gelo/60">Fig. 2 · Alcance</p>
              <p className="mt-2 text-[5.5rem] font-extralight leading-none tracking-[-0.06em] text-white numeros">27</p>
              <p className="mt-1 text-[1rem] text-gelo/70">unidades da federação atendidas</p>
              <div className="mt-8">
                <MapaLadrilhos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
