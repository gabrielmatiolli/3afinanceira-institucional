"use client";

import Link from "next/link";
import { useState } from "react";
import { empresa } from "@/lib/empresa";
import { IconeSeta, IconeWhatsApp } from "./Icones";

// Se houver um endpoint (Formspree ou similar) configurado no build, o envio é
// feito por ele. Sem endpoint, o formulário abre o e-mail já preenchido.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Estado = "ocioso" | "enviando" | "enviado" | "erro";

const faixas = ["Até 10 títulos", "De 11 a 50", "De 51 a 200", "Mais de 200", "Ainda não sei"];
const tipos = ["Pessoas físicas", "Empresas", "Ambos"];

function montarTexto(d: Record<string, string>) {
  return [
    `Nome: ${d.nome}`,
    `Empresa: ${d.empresa}`,
    d.cnpj && `CNPJ: ${d.cnpj}`,
    `E-mail: ${d.email}`,
    `Telefone: ${d.telefone}`,
    `Devedores: ${d.tipo}`,
    `Tamanho da carteira: ${d.faixa}`,
    d.mensagem && `\nMensagem:\n${d.mensagem}`,
  ]
    .filter(Boolean)
    .join("\n");
}

const campo =
  "mt-1.5 block h-12 w-full border-0 border-b border-marinho/30 bg-transparent px-0 text-[1rem] text-marinho placeholder:text-grafite/50 focus:border-azul focus:outline-none focus:ring-0";
const rotulo = "font-mono text-[0.66rem] uppercase tracking-[0.14em] text-grafite";

export function FormularioContato() {
  const [estado, setEstado] = useState<Estado>("ocioso");

  function dados(form: HTMLFormElement) {
    return Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v).trim()]),
    ) as Record<string, string>;
  }

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = dados(e.currentTarget);

    if (!ENDPOINT) {
      const assunto = `Análise de carteira: ${d.empresa}`;
      window.location.href = `mailto:${empresa.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(montarTexto(d))}`;
      setEstado("enviado");
      return;
    }

    setEstado("enviando");
    try {
      const resposta = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...d, _subject: `Análise de carteira: ${d.empresa}` }),
      });
      setEstado(resposta.ok ? "enviado" : "erro");
    } catch {
      setEstado("erro");
    }
  }

  function enviarPorWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form || !form.reportValidity()) return;
    const texto = `Olá! Gostaria de uma análise da carteira da minha empresa.\n\n${montarTexto(dados(form))}`;
    window.open(empresa.whatsapp.href(texto), "_blank", "noopener,noreferrer");
  }

  if (estado === "enviado") {
    return (
      <div className="flex min-h-[28rem] flex-col justify-center bg-white p-6 text-marinho sm:p-10" role="status">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-azul">Solicitação registrada</p>
        <p className="mt-4 text-[2rem] font-light leading-tight tracking-[-0.03em]">
          Obrigado. <span className="font-semibold">Sua solicitação está com a gente.</span>
        </p>
        <p className="mt-4 font-serif text-[1.1rem] leading-relaxed text-grafite">
          {ENDPOINT
            ? "Recebemos os seus dados e vamos entrar em contato pelo telefone ou e-mail informado."
            : `Se o seu programa de e-mail não abriu, escreva para ${empresa.email} ou fale conosco pelo WhatsApp.`}
        </p>
        <button
          type="button"
          onClick={() => setEstado("ocioso")}
          className="mt-8 self-start border-b border-marinho/40 pb-1 text-[0.9rem] hover:border-azul hover:text-azul"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="bg-white text-marinho">
      <div className="flex items-center justify-between border-b border-marinho/80 px-5 py-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-grafite sm:px-8">
        <span>Formulário 3A · 01</span>
        <span>Análise de carteira</span>
      </div>

      <div className="grid gap-x-8 gap-y-6 p-5 sm:grid-cols-2 sm:p-8">
        <label className="block">
          <span className={rotulo}>Seu nome</span>
          <input name="nome" required autoComplete="name" className={campo} />
        </label>
        <label className="block">
          <span className={rotulo}>Empresa</span>
          <input name="empresa" required autoComplete="organization" className={campo} />
        </label>
        <label className="block">
          <span className={rotulo}>E-mail</span>
          <input name="email" type="email" required autoComplete="email" className={campo} />
        </label>
        <label className="block">
          <span className={rotulo}>Telefone / WhatsApp</span>
          <input name="telefone" type="tel" required autoComplete="tel" inputMode="tel" className={campo} />
        </label>
        <label className="block sm:col-span-2">
          <span className={rotulo}>
            CNPJ <span className="normal-case tracking-normal text-grafite/60">(opcional)</span>
          </span>
          <input name="cnpj" inputMode="numeric" className={campo} />
        </label>

        <fieldset className="sm:col-span-2">
          <legend className={rotulo}>Quem está devendo</legend>
          <div className="mt-3 grid grid-cols-3 border border-marinho/30">
            {tipos.map((t, i) => (
              <label key={t} className={`relative cursor-pointer ${i > 0 ? "border-l border-marinho/30" : ""}`}>
                <input type="radio" name="tipo" value={t} required defaultChecked={i === 2} className="peer sr-only" />
                <span className="flex h-12 items-center justify-center px-2 text-center text-[0.85rem] leading-tight transition-colors peer-checked:bg-marinho peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-celeste">
                  {t}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block sm:col-span-2">
          <span className={rotulo}>Tamanho aproximado da carteira</span>
          <select name="faixa" required defaultValue="" className={`${campo} cursor-pointer appearance-none`}>
            <option value="" disabled>
              Selecione
            </option>
            {faixas.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={rotulo}>
            Conte um pouco sobre os valores em aberto <span className="normal-case tracking-normal text-grafite/60">(opcional)</span>
          </span>
          <textarea
            name="mensagem"
            rows={3}
            className="mt-1.5 block w-full resize-y border-0 border-b border-marinho/30 bg-transparent px-0 py-3 text-[1rem] text-marinho focus:border-azul focus:outline-none focus:ring-0"
          />
        </label>

        <label className="flex items-start gap-3 text-[0.85rem] leading-snug text-grafite sm:col-span-2">
          <input type="checkbox" name="consentimento" value="sim" required className="mt-0.5 h-5 w-5 shrink-0 accent-marinho" />
          <span>
            Autorizo a 3A Soluções a usar estes dados para responder a esta solicitação, conforme a{" "}
            <Link href="/politica-de-privacidade/" className="text-azul underline underline-offset-2">
              Política de Privacidade
            </Link>
            .
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-3 border-t border-linha p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="group inline-flex h-14 items-center justify-between gap-6 bg-marinho px-6 text-[0.95rem] font-medium text-white transition-colors hover:bg-azul disabled:opacity-60"
        >
          {estado === "enviando" ? "Enviando..." : "Solicitar análise"}
          <IconeSeta className="h-5 w-5 text-celeste transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
        </button>
        <button
          type="button"
          onClick={enviarPorWhatsApp}
          className="inline-flex h-12 items-center justify-center gap-2 text-[0.9rem] text-marinho underline-offset-4 hover:text-azul hover:underline"
        >
          <IconeWhatsApp className="h-5 w-5 text-azul" />
          ou enviar pelo WhatsApp
        </button>
      </div>
      {estado === "erro" && (
        <p role="alert" className="border-t border-linha px-5 py-4 text-[0.9rem] text-red-700 sm:px-8">
          Não foi possível enviar agora. Tente pelo WhatsApp ou escreva para {empresa.email}.
        </p>
      )}
    </form>
  );
}
