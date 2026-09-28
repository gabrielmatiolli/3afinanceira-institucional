import type { Metadata } from "next";
import { PaginaLegal } from "@/components/PaginaLegal";
import { empresa, enderecoCompleto } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a 3A Soluções coleta, usa, guarda e protege dados pessoais, conforme a LGPD.",
  alternates: { canonical: "/politica-de-privacidade/" },
};

export default function PoliticaDePrivacidade() {
  return (
    <PaginaLegal documento="Documento 01" titulo="Política de Privacidade" atualizacao="27 de setembro de 2026">
      <p className="mt-6">
        Esta política explica como a {empresa.razaoSocial}, inscrita no CNPJ sob o nº {empresa.cnpj}, com sede na{" "}
        {enderecoCompleto} (&quot;3A Soluções&quot;), trata os dados pessoais de quem visita este site, entra em contato
        conosco ou é parte de uma cobrança que conduzimos, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados
        Pessoais, LGPD).
      </p>

      <h2>1. Quem é o responsável pelos dados</h2>
      <p>
        Para os dados de visitantes e de empresas que nos procuram, a 3A Soluções é a controladora. Para os dados de
        devedores que recebemos das empresas credoras, atuamos em nome delas, seguindo as instruções do contrato de
        prestação de serviços. Dúvidas e solicitações podem ser enviadas para{" "}
        <a href={`mailto:${empresa.email}`}>{empresa.email}</a>.
      </p>

      <h2>2. Quais dados tratamos</h2>
      <ul>
        <li>
          Dados enviados pelo formulário ou pelo WhatsApp: nome, empresa, CNPJ, e-mail, telefone e as informações que você
          decidir incluir na mensagem.
        </li>
        <li>
          Dados de cobrança fornecidos pelos credores: identificação do devedor (nome, CPF ou CNPJ), contatos, endereço,
          valores, vencimentos e documentos que comprovam a dívida.
        </li>
        <li>
          Registros das negociações: histórico de contatos, propostas, acordos e pagamentos.
        </li>
        <li>
          Dados técnicos de navegação coletados automaticamente pelo servidor que hospeda o site, como endereço IP, tipo de
          navegador e data e hora de acesso, usados para segurança e estabilidade.
        </li>
      </ul>

      <h2>3. Para que usamos os dados e com qual base legal</h2>
      <ul>
        <li>Responder a pedidos de contato e de análise de carteira (procedimentos preliminares a um contrato, art. 7º, V).</li>
        <li>Executar os serviços de cobrança contratados (execução de contrato, art. 7º, V, e proteção do crédito, art. 7º, X).</li>
        <li>Cumprir obrigações legais e regulatórias (art. 7º, II).</li>
        <li>Exercer direitos em processos judiciais, administrativos ou arbitrais (art. 7º, VI).</li>
        <li>Manter a segurança do site e prevenir fraudes (legítimo interesse, art. 7º, IX).</li>
      </ul>
      <p>Não vendemos dados pessoais e não os usamos para publicidade.</p>

      <h2>4. Com quem compartilhamos</h2>
      <p>Os dados podem ser compartilhados apenas na medida necessária com:</p>
      <ul>
        <li>a empresa credora titular do crédito, para prestação de contas da cobrança;</li>
        <li>
          fornecedores que viabilizam a operação, como hospedagem do site, e-mail, telefonia, sistema de gestão de
          relacionamento e a plataforma do WhatsApp (Meta), todos sujeitos a deveres de confidencialidade;
        </li>
        <li>autoridades públicas, quando houver obrigação legal ou ordem judicial.</li>
      </ul>
      <p>
        Nunca informamos a existência de uma dívida a terceiros sem relação com ela, como vizinhos, colegas de trabalho ou
        familiares.
      </p>

      <h2>5. Comunicação pelo WhatsApp</h2>
      <p>
        Ao falar conosco pelo WhatsApp, as mensagens também são tratadas pela Meta, conforme a política de privacidade do
        próprio WhatsApp. Usamos esse canal apenas para atendimento e negociação, sem envio de mensagens promocionais.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <p>
        Os dados são mantidos enquanto forem necessários para a finalidade que justificou a coleta, pelo prazo do contrato
        com o credor e pelos prazos legais de guarda e de prescrição. Depois disso, são eliminados ou anonimizados.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Este site não utiliza cookies de publicidade nem ferramentas de rastreamento de terceiros. Caso isso mude, esta
        política será atualizada antes.
      </p>

      <h2>8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda ou
        alteração, com acesso restrito às pessoas que precisam deles para trabalhar.
      </p>

      <h2>9. Seus direitos</h2>
      <p>Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
        <li>portabilidade e informação sobre o compartilhamento;</li>
        <li>revogação do consentimento, quando ele for a base do tratamento.</li>
      </ul>
      <p>
        Os pedidos devem ser enviados para <a href={`mailto:${empresa.email}`}>{empresa.email}</a>. Você também pode
        apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>10. Alterações</h2>
      <p>
        Esta política pode ser atualizada a qualquer tempo. A data da última revisão aparece no topo desta página.
      </p>
    </PaginaLegal>
  );
}
