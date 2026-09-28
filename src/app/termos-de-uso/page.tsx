import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLegal } from "@/components/PaginaLegal";
import { empresa, enderecoCompleto } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site da 3A Soluções.",
  alternates: { canonical: "/termos-de-uso/" },
};

export default function TermosDeUso() {
  return (
    <PaginaLegal documento="Documento 02" titulo="Termos de Uso" atualizacao="27 de setembro de 2026">
      <p className="mt-6">
        Este site pertence à {empresa.razaoSocial}, inscrita no CNPJ sob o nº {empresa.cnpj}, com sede na {enderecoCompleto}.
        Ao navegar por ele, você concorda com as condições abaixo.
      </p>

      <h2>1. Finalidade do site</h2>
      <p>
        O site apresenta os serviços de cobrança extrajudicial da 3A Soluções e oferece canais de contato para empresas
        interessadas. As informações aqui publicadas têm caráter informativo e não constituem proposta comercial, parecer
        jurídico ou garantia de resultado.
      </p>

      <h2>2. Contratação</h2>
      <p>
        O envio do formulário ou de uma mensagem não cria vínculo contratual. A prestação de serviços depende de proposta
        específica e de contrato firmado entre a 3A Soluções e a empresa credora.
      </p>

      <h2>3. Uso adequado</h2>
      <p>
        Você se compromete a fornecer informações verdadeiras nos canais de contato e a não usar o site para fins ilícitos,
        para enviar conteúdo ofensivo ou para tentar acessar áreas e sistemas sem autorização.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        A marca 3A Soluções, a logomarca, os textos, as ilustrações e o projeto gráfico deste site pertencem à 3A Soluções ou
        são usados com autorização. A reprodução sem permissão prévia e por escrito não é permitida.
      </p>

      <h2>5. Links externos</h2>
      <p>
        Alguns links levam a serviços de terceiros, como o WhatsApp. A 3A Soluções não responde pelo conteúdo nem pelas
        práticas de privacidade desses serviços.
      </p>

      <h2>6. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a nossa <Link href="/politica-de-privacidade/">Política de Privacidade</Link>.
      </p>

      <h2>7. Alterações e foro</h2>
      <p>
        Estes termos podem ser atualizados a qualquer tempo. Fica eleito o foro da comarca de {empresa.endereco.cidade}/
        {empresa.endereco.uf} para resolver questões relacionadas a este site, com renúncia a qualquer outro.
      </p>

      <h2>8. Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas para <a href={`mailto:${empresa.email}`}>{empresa.email}</a>.
      </p>
    </PaginaLegal>
  );
}
