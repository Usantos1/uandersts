/**
 * Modal de exemplo de formulário LP por nicho.
 * Formato igual ao demo: campos + perguntas qualificatórias. Sem copiar.
 */
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { NichoGenerator } from "./formularioDataset"

interface GeneratorModalProps {
  nicho: NichoGenerator
  onClose: () => void
}

export function GeneratorModal({ nicho, onClose }: GeneratorModalProps) {
  const lp = nicho.lp

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Comece sua aplicação agora</h2>
              <p className="text-base text-slate-600 mt-0.5">Exemplo para {nicho.name}. Basta preencher o formulário para agendar sua consultoria.</p>
            </div>
            <button type="button" onClick={onClose} className="p-2 rounded-full text-slate-500 hover:bg-slate-100" aria-label="Fechar">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            <div className="space-y-4">
              {lp.campos.map((c, i) => (
                <div key={i}>
                  <label className="block text-base font-medium text-slate-700 mb-1.5">{c} *</label>
                  <div className="h-11 rounded-2xl border border-slate-300 bg-white" />
                </div>
              ))}
              {lp.perguntasQualificatorias.map((q, i) => (
                <div key={i}>
                  <label className="block text-base font-medium text-slate-700 mb-2">{q} *</label>
                  <div className="space-y-2">
                    <div className="h-4 w-4 rounded-full border-2 border-slate-300" />
                    <div className="h-4 w-4 rounded-full border-2 border-slate-300 mt-1" />
                    <div className="h-4 w-4 rounded-full border-2 border-slate-300 mt-1" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base text-slate-500 italic">{lp.observacao}</p>
            <div className="h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-base font-semibold text-white border-2 border-emerald-500/50">
              CONTINUAR
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
