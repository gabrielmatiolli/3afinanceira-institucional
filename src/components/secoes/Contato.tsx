import { empresa, enderecoLinhas, mensagemWhatsApp } from "@/lib/empresa";
import { FormularioContato } from "../FormularioContato";
import { IconeSeta } from "../Icones";
import { Rubrica } from "../Rubrica";

export function Contato() {
  const canais = [
    { rotulo: "WhatsApp", valor: empresa.telefone.exibicao, href: empresa.whatsapp.href(mensagemWhatsApp), externo: true },
    { rotulo: "Telefone", valor: empresa.telefone.exibicao, href: empresa.telefone.href },
    { rotulo: "E-mail", valor: empresa.email, href: `mailto:${empresa.email}` },
  ];

  return (
    <section id="contato" className="relative overflow-hidden bg-marinho text-gelo">
      <div className="papel-quadriculado-escuro pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Rubrica numero="06" rotulo="Contato" escuro />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2
              data-revelar
              className="text-[2.4rem] font-light leading-[1.02] tracking-[-0.045em] sm:text-[3.2rem] lg:text-[4.2rem]"
            >
              Mande a carteira. <span className="block font-semibold text-white">A gente analisa.</span>
            </h2>
            <p data-revelar className="mt-6 max-w-md font-serif text-[1.15rem] leading-[1.55] text-gelo/70">
              Conte quem está devendo e quanto, mesmo por alto. Respondemos com uma leitura da sua carteira e o caminho que
              recomendamos para cada tipo de título.
            </p>

            <ul className="mt-12 border-t border-linha-clara">
              {canais.map((c) => (
                <li key={c.rotulo} className="border-b border-linha-clara">
                  <a
                    href={c.href}
                    {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-16 items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block font-mono text-[0.66rem] uppercase tracking-[0.14em] text-gelo/55">{c.rotulo}</span>
                      <span className="mt-1 block break-all text-[1.05rem] text-white sm:text-[1.15rem]">{c.valor}</span>
                    </span>
                    <IconeSeta className="h-5 w-5 shrink-0 text-celeste transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
              <li className="border-b border-linha-clara py-4">
                <span className="block font-mono text-[0.66rem] uppercase tracking-[0.14em] text-gelo/55">Endereço</span>
                <address className="mt-1 not-italic text-[1.05rem] text-white">
                  {enderecoLinhas[0]} <span className="whitespace-nowrap">{enderecoLinhas[1]}</span>
                </address>
              </li>
            </ul>
          </div>

          <div data-revelar className="lg:col-span-7">
            <FormularioContato />
          </div>
        </div>
      </div>
    </section>
  );
}
