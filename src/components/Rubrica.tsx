// Cabeçalho de seção no estilo de relatório: número do capítulo, rótulo e filete.

export function Rubrica({
  numero,
  rotulo,
  escuro = false,
}: {
  numero: string;
  rotulo: string;
  escuro?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] ${
        escuro ? "text-gelo/70" : "text-grafite"
      }`}
    >
      <span className={escuro ? "text-celeste" : "text-azul"}>§ {numero}</span>
      <span>{rotulo}</span>
      <span aria-hidden className={`h-px flex-1 ${escuro ? "bg-linha-clara" : "bg-linha"}`} />
    </div>
  );
}
