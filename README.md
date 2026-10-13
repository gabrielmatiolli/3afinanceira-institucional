# Site institucional · 3A Soluções

Next.js 16 (App Router) + Tailwind 4, exportado como site estático (`out/`) para o Cloudflare Pages.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta out/
```

## Onde mexer

- `src/lib/empresa.ts`: razão social, CNPJ, endereço, e-mail, telefone e WhatsApp. Tudo no site sai daqui.
- `src/components/secoes/`: uma seção da página inicial por arquivo, na ordem do `src/app/page.tsx`.
- `src/app/politica-de-privacidade` e `src/app/termos-de-uso`: páginas legais (a Meta exige a política).
- `src/app/globals.css`: paleta e fontes da marca (Sora, Newsreader e IBM Plex Mono).

## Formulário de contato

O formulário envia para `/api/contato`, atendido pelo Worker em `worker/index.ts`. Ele valida os dados,
descarta robôs (campo-isca) e manda o e-mail por SMTP do Zoho com a biblioteca
[worker-mailer](https://github.com/zou-yu/worker-mailer) (MIT, gratuita). O nodemailer não funciona no
Cloudflare Workers porque depende dos módulos `net`/`tls` do Node.

Configuração em `wrangler.jsonc` (`vars`): servidor, porta, conta remetente e destinatário.
A senha **não** fica no repositório; cadastre uma vez como secret:

```bash
npx wrangler secret put SMTP_PASS
```

Se a conta do Zoho tiver verificação em duas etapas, use uma senha de aplicativo
(Zoho Mail > Configurações > Segurança > Senhas específicas de aplicativo).
Contas no datacenter da Índia/Europa usam `smtp.zoho.in` / `smtp.zoho.eu`.

Para testar localmente, crie `.dev.vars` com `SMTP_PASS=...` e rode `npm run preview`
(gera o `out/` e sobe o Worker em http://localhost:8787). No `npm run dev` o formulário
não envia, porque a rota `/api` só existe no Worker.

## Deploy no Cloudflare

- Comando de build: `npm run build`
- Comando de deploy: `npx wrangler deploy` (usa o `wrangler.jsonc`)
