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

## Formulário

Sem configuração, o formulário abre o e-mail do visitante já preenchido para `adelino@3asolucoesfinanceiras.com.br`.
Para receber os envios direto, crie um formulário no Formspree (ou serviço compatível que aceite JSON) e defina
no build do Cloudflare Pages:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Deploy no Cloudflare Pages

- Comando de build: `npm run build`
- Diretório de saída: `out`
