import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { Cabecalho } from "@/components/Cabecalho";
import { Faixa } from "@/components/Faixa";
import { Revelacoes } from "@/components/Revelacoes";
import { Rodape } from "@/components/Rodape";
import { Contato } from "@/components/secoes/Contato";
import { Duvidas } from "@/components/secoes/Duvidas";
import { Heroi } from "@/components/secoes/Heroi";
import { Metodo } from "@/components/secoes/Metodo";
import { Preambulo } from "@/components/secoes/Preambulo";
import { Principios } from "@/components/secoes/Principios";
import { Servicos } from "@/components/secoes/Servicos";
import { Setores } from "@/components/secoes/Setores";

export default function Inicio() {
  return (
    <>
      <Faixa />
      <Cabecalho />
      <main>
        <Heroi />
        <Preambulo />
        <Servicos />
        <Metodo />
        <Principios />
        <Setores />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
      <BotaoWhatsApp />
      <Revelacoes />
    </>
  );
}
