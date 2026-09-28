import { empresa, mensagemWhatsApp } from "@/lib/empresa";
import { IconeMais, IconeWhatsApp } from "../Icones";
import { Rubrica } from "../Rubrica";

const perguntas = [
  {
    p: "O que é cobrança extrajudicial?",
    r: "É a cobrança feita fora do Judiciário, sem abrir processo. O devedor é procurado, recebe uma proposta e fecha um acordo por escrito. Costuma ser mais rápida e mais barata que a via judicial e mantém aberta a chance de ele voltar a comprar de você.",
  },
  {
    p: "Vocês cobram pessoas físicas e empresas?",
    r: "Sim. A 3A cobra tanto consumidores (pessoas físicas) quanto empresas (pessoas jurídicas) que estejam devendo ao seu negócio.",
  },
  {
    p: "Preciso ter um contrato assinado com o devedor?",
    r: "Não necessariamente. Notas fiscais, duplicatas, boletos, pedidos, cheques, comprovantes de entrega e conversas registradas também ajudam a provar a dívida. Na análise da carteira dizemos o que cada título tem de documentação e o que falta.",
  },
  {
    p: "Dívidas antigas ainda podem ser cobradas?",
    r: "Depende do tipo de título e do tempo passado. Em regra, a cobrança de dívida documentada prescreve em cinco anos, mas há prazos diferentes para alguns casos. Analisamos cada título e avisamos se o prazo estiver perto do fim.",
  },
  {
    p: "Minha empresa ou meus clientes estão em outro estado. Vocês atendem?",
    r: `Sim. A sede fica em ${empresa.endereco.cidade}/${empresa.endereco.uf}, mas a cobrança é feita por telefone, WhatsApp, e-mail e carta, o que permite atender credores e devedores em todo o Brasil.`,
  },
  {
    p: "Quem define os descontos e os parcelamentos?",
    r: "Você. Antes de começar, combinamos os limites de desconto, entrada e número de parcelas. Qualquer proposta fora desses limites só é aceita com a sua aprovação.",
  },
  {
    p: "Como acompanho o andamento da cobrança?",
    r: "Você recebe relatórios periódicos com a situação de cada título: contatos feitos, propostas, acordos fechados e parcelas pagas. E pode falar com a nossa equipe sempre que quiser.",
  },
  {
    p: "Como os dados da minha empresa e dos meus clientes são tratados?",
    r: "Conforme a LGPD. As informações são usadas apenas para a cobrança contratada, com acesso restrito à equipe responsável. Os detalhes estão na nossa Política de Privacidade.",
  },
];

export function Duvidas() {
  return (
    <section id="duvidas" className="border-b border-linha">
      <div className="mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Rubrica numero="05" rotulo="Dúvidas frequentes" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2
                data-revelar
                className="text-[2.2rem] font-light leading-[1.05] tracking-[-0.04em] text-marinho sm:text-[3rem] lg:text-[3.4rem]"
              >
                Perguntas que <span className="font-semibold">todo credor faz.</span>
              </h2>
              <p data-revelar className="mt-6 font-serif text-[1.12rem] leading-[1.55] text-grafite">
                Não encontrou a sua? Pergunte direto para quem vai cuidar da sua carteira.
              </p>
              <a
                href={empresa.whatsapp.href(mensagemWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 items-center gap-2 border-b-2 border-azul text-[0.95rem] font-medium text-marinho transition-colors hover:text-azul"
              >
                <IconeWhatsApp className="h-5 w-5 text-azul" />
                Perguntar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t-2 border-marinho lg:col-span-8">
            {perguntas.map((item, i) => (
              <details key={item.p} className="group border-b border-linha" name="duvidas">
                <summary className="flex min-h-16 cursor-pointer items-start gap-4 py-5 transition-colors hover:text-azul sm:gap-6">
                  <span className="mt-1 w-7 shrink-0 font-mono text-[0.72rem] text-azul numeros">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[1.1rem] font-medium leading-snug tracking-[-0.01em] text-marinho sm:text-[1.25rem]">
                    {item.p}
                  </span>
                  <IconeMais className="mt-1 h-5 w-5 shrink-0 text-azul transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="pb-7 pl-11 pr-2 font-serif text-[1.1rem] leading-[1.6] text-grafite sm:pl-[3.25rem] sm:pr-12">
                  {item.r}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
