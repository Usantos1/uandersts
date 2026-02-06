/**
 * Bloco com conteúdo copiável e botão "Copiar". Dispara onCopy e mostra toast externo.
 */
import { Copy } from "lucide-react"

interface CopyBlockProps {
  label: string
  text: string
  onCopy: (text: string) => void
  className?: string
  /** Tema escuro = fundo e texto claros para contraste */
  isDark?: boolean
}

export function CopyBlock({ label, text, onCopy, className = "", isDark = false }: CopyBlockProps) {
  return (
    <div
      className={
        isDark
          ? `rounded-xl backdrop-blur border border-violet-500/40 bg-white/10 px-4 py-3 sm:px-5 sm:py-4 ${className}`
          : `rounded-xl bg-white/90 backdrop-blur border border-slate-200 px-4 py-3 sm:px-5 sm:py-4 ${className}`
      }
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`text-2xl sm:text-3xl font-medium ${isDark ? "text-slate-200" : "text-slate-800"}`}>{label}</span>
        <button
          type="button"
          onClick={() => onCopy(text)}
          className={
            isDark
              ? "inline-flex items-center gap-2 rounded-lg bg-violet-500/80 hover:bg-violet-500 px-5 py-3 text-xl sm:text-2xl font-medium text-white transition-colors"
              : "inline-flex items-center gap-2 rounded-lg bg-slate-700 hover:bg-slate-800 px-5 py-3 text-xl sm:text-2xl font-medium text-white transition-colors"
          }
        >
          <Copy size={16} />
          Copiar
        </button>
      </div>
    </div>
  )
}
