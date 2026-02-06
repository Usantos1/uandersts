/**
 * Modal de formulário por nicho: etapas com campos e perguntas/opções do segmento.
 * Igual ao demo (FormDemoModal), com conteúdo dinâmico por nicho.
 */
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { NichoGenerator, MetaPergunta } from "./formularioDataset"

interface GeneratorModalProps {
  nicho: NichoGenerator
  onClose: () => void
}

type StepItem =
  | { type: "campos" }
  | { type: "pergunta"; pergunta: MetaPergunta; index: number }

function getSteps(nicho: NichoGenerator): StepItem[] {
  return [
    { type: "campos" },
    ...nicho.meta.perguntas.map((p, i) => ({ type: "pergunta" as const, pergunta: p, index: i })),
  ]
}

export function GeneratorModal({ nicho, onClose }: GeneratorModalProps) {
  const steps = getSteps(nicho)
  const [stepIndex, setStepIndex] = useState(0)
  const [form, setForm] = useState<Record<string, string>>({})

  const step = steps[stepIndex]
  const isLast = stepIndex === steps.length - 1
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
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-100">
            <div className="flex-1 text-center min-w-0">
              <h2 className="text-xl font-bold text-slate-900">Comece sua aplicação agora</h2>
              <p className="text-base text-slate-600 mt-0.5">Exemplo para {nicho.name}. Basta preencher o formulário para agendar sua consultoria.</p>
            </div>
            <button type="button" onClick={onClose} className="p-2 rounded-full text-slate-500 hover:bg-slate-100 shrink-0" aria-label="Fechar">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            <AnimatePresence mode="wait">
              {step.type === "campos" && (
                <motion.div
                  key="campos"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {lp.campos.map((label, i) => (
                    <div key={i}>
                      <label className="block text-base font-medium text-slate-700 mb-1.5">{label} *</label>
                      <input
                        type={label.toLowerCase().includes("email") ? "email" : label.toLowerCase().includes("whatsapp") || label.toLowerCase().includes("ddd") ? "tel" : "text"}
                        value={form[`campo_${i}`] ?? ""}
                        onChange={(e) => setForm((f) => ({ ...f, [`campo_${i}`]: e.target.value }))}
                        placeholder={label.includes("WhatsApp") ? "(11) 99123-4567" : label.includes("E-mail") ? "E-mail" : "Nome"}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => (steps.length > 1 ? setStepIndex(1) : onClose())}
                    className="w-full py-3 px-5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                  >
                    CONTINUAR
                  </button>
                </motion.div>
              )}

              {step.type === "pergunta" && (
                <motion.div
                  key={`pergunta-${step.index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-2">{step.pergunta.label} *</label>
                    {step.pergunta.options && step.pergunta.options.length > 0 ? (
                      <div className="space-y-2">
                        {step.pergunta.options.map((opt: string) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name={`pergunta_${step.index}`}
                              checked={form[`pergunta_${step.index}`] === opt}
                              onChange={() => setForm((f) => ({ ...f, [`pergunta_${step.index}`]: opt }))}
                              className="w-4 h-4 text-violet-600"
                            />
                            <span className="text-slate-700">{opt}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={form[`pergunta_${step.index}`] ?? ""}
                        onChange={(e) => setForm((f) => ({ ...f, [`pergunta_${step.index}`]: e.target.value }))}
                        placeholder="Digite aqui"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                      />
                    )}
                  </div>
                  <div className="flex gap-3 justify-center">
                    <button
                      type="button"
                      onClick={() => setStepIndex(stepIndex - 1)}
                      className="flex-1 max-w-[180px] py-3 px-5 rounded-full bg-slate-600 hover:bg-slate-700 text-white font-semibold transition-colors"
                    >
                      VOLTAR
                    </button>
                    {isLast ? (
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 max-w-[200px] py-3 px-5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                      >
                        CONTINUAR
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setStepIndex(stepIndex + 1)}
                        className="flex-1 max-w-[180px] py-3 px-5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                      >
                        CONTINUAR
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {step.type === "pergunta" && isLast && (
            <div className="px-5 pb-4">
              <p className="text-sm text-slate-500 italic">{lp.observacao}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
