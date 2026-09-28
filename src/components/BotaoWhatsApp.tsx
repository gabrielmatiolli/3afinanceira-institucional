import { empresa, mensagemWhatsApp } from "@/lib/empresa";
import { IconeWhatsApp } from "./Icones";

// Atalho fixo para o WhatsApp, discreto e sempre ao alcance do polegar.
export function BotaoWhatsApp() {
  return (
    <a
      href={empresa.whatsapp.href(mensagemWhatsApp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a 3A Soluções pelo WhatsApp"
      className="group fixed bottom-4 right-4 z-30 flex h-14 items-center gap-0 bg-celeste text-marinho shadow-[0_10px_30px_-10px_rgb(10_34_64/0.6)] transition-all hover:bg-white sm:bottom-6 sm:right-6"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <IconeWhatsApp className="h-6 w-6" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[0.9rem] font-medium transition-[max-width,padding] duration-300 group-hover:max-w-[10rem] group-hover:pr-5 md:block">
        Falar agora
      </span>
    </a>
  );
}
