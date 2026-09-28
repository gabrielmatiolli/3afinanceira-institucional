"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { empresa, mensagemWhatsApp } from "@/lib/empresa";
import { secoes } from "@/lib/navegacao";
import { IconeWhatsApp } from "./Icones";
import { Isotipo3A } from "./Logo";

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color] duration-300 ${
        // Com o menu aberto o fundo fica sólido: backdrop-filter faria do cabeçalho
        // o bloco de referência do painel fixed, e ele sumiria.
        aberto
          ? "border-b border-linha bg-papel"
          : rolou
            ? "border-b border-linha bg-papel/92 backdrop-blur-md"
            : "border-b border-transparent bg-papel"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[84rem] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[4.5rem] lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="3A Soluções, página inicial" onClick={() => setAberto(false)}>
          <Isotipo3A id="mascara-cabecalho" className="h-7 w-auto lg:h-8" />
          <span className="border-l border-linha pl-3 text-[0.62rem] font-semibold uppercase leading-[1.25] tracking-[0.28em] text-azul">
            Soluções
            <br />
            Financeiras
          </span>
        </Link>

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.88rem] text-grafite">
            {secoes.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="group relative py-2 transition-colors hover:text-marinho">
                  {s.rotulo}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-azul transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={empresa.whatsapp.href(mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-marinho px-4 py-2.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-azul sm:inline-flex"
          >
            <IconeWhatsApp className="h-4 w-4" />
            Falar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-movel"
            className="flex h-11 items-center gap-2 px-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] lg:hidden"
          >
            {aberto ? "Fechar" : "Índice"}
            <span className="relative block h-3 w-5" aria-hidden>
              <span className={`absolute left-0 h-px w-5 bg-marinho transition-transform duration-300 ${aberto ? "top-1.5 rotate-[26.57deg]" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-5 bg-marinho transition-transform duration-300 ${aberto ? "top-1.5 -rotate-[26.57deg]" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Menu do celular: um índice de relatório, com os números das seções. */}
      <div
        id="menu-movel"
        hidden={!aberto}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-linha bg-papel lg:hidden"
      >
        <nav aria-label="Índice" className="px-4 pb-10 pt-6 sm:px-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-grafite">Índice</p>
          <ul className="mt-4 border-t border-linha">
            {secoes.map((s) => (
              <li key={s.href} className="border-b border-linha">
                <a
                  href={s.href}
                  onClick={() => setAberto(false)}
                  className="flex min-h-16 items-baseline gap-4 py-4 text-[1.6rem] font-light tracking-[-0.02em]"
                >
                  <span className="w-8 font-mono text-[0.75rem] text-azul">{s.numero}</span>
                  {s.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={empresa.whatsapp.href(mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex h-14 items-center justify-center gap-2 bg-marinho font-medium text-white"
          >
            <IconeWhatsApp className="h-5 w-5" />
            Falar no WhatsApp
          </a>
          <p className="mt-6 font-mono text-[0.7rem] leading-relaxed text-grafite">
            {empresa.razaoSocial}
            <br />
            CNPJ {empresa.cnpj}
          </p>
        </nav>
      </div>
    </header>
  );
}
