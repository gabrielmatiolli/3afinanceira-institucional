// Worker do site: serve os arquivos estáticos de out/ e atende POST /api/contato,
// enviando o formulário por SMTP (Zoho) com o worker-mailer. O nodemailer não
// serve aqui porque depende dos módulos net/tls do Node, que o Workers não tem.

import { WorkerMailer } from "worker-mailer";

interface Env {
  ASSETS: Fetcher;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER: string;
  SMTP_PASS: string;
  MAIL_TO?: string;
}

const LIMITES: Record<string, number> = {
  nome: 120,
  empresa: 160,
  cnpj: 20,
  email: 160,
  telefone: 30,
  tipo: 40,
  faixa: 40,
  mensagem: 4000,
};

const OBRIGATORIOS = ["nome", "empresa", "email", "telefone", "tipo", "faixa"];

const ROTULOS: Record<string, string> = {
  nome: "Nome",
  empresa: "Empresa",
  cnpj: "CNPJ",
  email: "E-mail",
  telefone: "Telefone",
  tipo: "Devedores",
  faixa: "Tamanho da carteira",
  mensagem: "Mensagem",
};

function json(status: number, corpo: object) {
  return new Response(JSON.stringify(corpo), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

function escaparHtml(texto: string) {
  return texto.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

// Cabeçalhos de e-mail não podem receber quebra de linha (injeção de cabeçalho).
function linhaUnica(texto: string) {
  return texto.replace(/[\r\n]+/g, " ").trim();
}

async function receberContato(request: Request, env: Env) {
  if (request.method !== "POST") {
    return json(405, { erro: "Método não permitido." });
  }

  // Só aceita envios do próprio site.
  const origem = request.headers.get("Origin");
  if (origem && new URL(origem).host !== new URL(request.url).host) {
    return json(403, { erro: "Origem não permitida." });
  }

  let dados: Record<string, unknown>;
  try {
    dados = await request.json();
  } catch {
    return json(400, { erro: "Dados inválidos." });
  }

  // Campo-isca: invisível para pessoas, robôs costumam preencher.
  if (typeof dados.site === "string" && dados.site.trim() !== "") {
    return json(200, { ok: true });
  }

  const campos: Record<string, string> = {};
  for (const [campo, limite] of Object.entries(LIMITES)) {
    const valor = typeof dados[campo] === "string" ? (dados[campo] as string).trim() : "";
    if (valor.length > limite) return json(400, { erro: `O campo ${ROTULOS[campo]} está longo demais.` });
    campos[campo] = valor;
  }

  const faltando = OBRIGATORIOS.filter((c) => !campos[c]);
  if (faltando.length) {
    return json(400, { erro: `Preencha: ${faltando.map((c) => ROTULOS[c]).join(", ")}.` });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)) {
    return json(400, { erro: "Informe um e-mail válido." });
  }
  if (dados.consentimento !== "sim") {
    return json(400, { erro: "É preciso autorizar o uso dos dados." });
  }

  if (!env.SMTP_USER || !env.SMTP_PASS) {
    console.error("SMTP_USER/SMTP_PASS não configurados.");
    return json(500, { erro: "Envio indisponível no momento." });
  }

  const linhas = Object.keys(LIMITES)
    .filter((c) => campos[c])
    .map((c) => [ROTULOS[c], campos[c]] as const);

  const texto = linhas.map(([r, v]) => (r === "Mensagem" ? `\n${r}:\n${v}` : `${r}: ${v}`)).join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;color:#0A2240;max-width:600px">
      <p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#1450A3;margin:0 0 8px">Site · Análise de carteira</p>
      <h1 style="font-size:20px;margin:0 0 20px">Nova solicitação de ${escaparHtml(campos.empresa)}</h1>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${linhas
          .map(
            ([r, v]) => `<tr>
              <td style="padding:8px 12px 8px 0;border-top:1px solid #E1E8F2;color:#4A5B72;vertical-align:top;white-space:nowrap">${r}</td>
              <td style="padding:8px 0;border-top:1px solid #E1E8F2;white-space:pre-wrap">${escaparHtml(v)}</td>
            </tr>`,
          )
          .join("")}
      </table>
      <p style="font-size:12px;color:#4A5B72;margin-top:24px">Responda este e-mail para falar direto com ${escaparHtml(campos.nome)}.</p>
    </div>`;

  try {
    await WorkerMailer.send(
      {
        host: env.SMTP_HOST || "smtp.zoho.com",
        port: Number(env.SMTP_PORT || 465),
        secure: Number(env.SMTP_PORT || 465) === 465,
        credentials: { username: env.SMTP_USER, password: env.SMTP_PASS },
        authType: ["plain", "login"],
      },
      {
        from: { name: "Site 3A Soluções", email: env.SMTP_USER },
        to: env.MAIL_TO || env.SMTP_USER,
        reply: { name: linhaUnica(campos.nome), email: linhaUnica(campos.email) },
        subject: linhaUnica(`Análise de carteira: ${campos.empresa}`),
        text: texto,
        html,
      },
    );
  } catch (erro) {
    console.error("Falha no envio SMTP:", erro);
    return json(502, { erro: "Não foi possível enviar agora." });
  }

  return json(200, { ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contato" || url.pathname === "/api/contato/") {
      return receberContato(request, env);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
