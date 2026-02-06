/**
 * Modal de formulário de qualificação demo, igual às imagens de referência.
 */
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { MessageCircle } from "lucide-react"

type Step = 1 | 2 | 3

export function FormDemoModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    investeMarketing: "",
    objetivo: "",
    pessoasAtendem: "",
    faixaInvestimento: "",
  })

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
          className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Comece sua aplicação agora</h2>
              <p className="text-base text-slate-600 mt-0.5">Basta preencher o formulário abaixo para agendar sua consultoria.</p>
            </div>
            <button type="button" onClick={onClose} className="p-2 rounded-lg text-slate-500 hover:bg-slate-100" aria-label="Fechar">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {step === 1 && (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-1.5">Nome completo *</label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                      placeholder="Seu nome"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-1.5">Seu melhor email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="email@exemplo.com"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-1.5">WhatsApp com DDD *</label>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                      placeholder="11999999999"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors border-2 border-emerald-500/50"
                >
                  CONTINUAR
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-2">Você já investe em marketing digital hoje? *</label>
                    <div className="space-y-2">
                      {["Ainda não comecei", "Já testei algumas campanhas", "Sim, tenho campanhas ativas", "Tenho equipe ou agência cuidando"].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="investeMarketing"
                            checked={form.investeMarketing === opt}
                            onChange={() => setForm((f) => ({ ...f, investeMarketing: opt }))}
                            className="w-4 h-4 text-violet-600"
                          />
                          <span className="text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-2">Qual é o seu principal objetivo agora? *</label>
                    <div className="space-y-2">
                      {["Gerar mais leads qualificados", "Aumentar vendas", "Estruturar o atendimento", "Escalar campanhas que já funcionam", "Posicionar melhor minha marca"].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="objetivo"
                            checked={form.objetivo === opt}
                            onChange={() => setForm((f) => ({ ...f, objetivo: opt }))}
                            className="w-4 h-4 text-violet-600"
                          />
                          <span className="text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 px-5 rounded-xl bg-slate-600 hover:bg-slate-700 text-white font-semibold transition-colors">
                    VOLTAR
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="flex-1 py-3 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors border-2 border-emerald-500/50">
                    CONTINUAR
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-2">Quantas pessoas atendem seus clientes hoje? *</label>
                    <div className="space-y-2">
                      {["Apenas eu", "Eu + 1 pessoa", "Equipe pequena (2 a 5 pessoas)", "Equipe estruturada (mais de 5)"].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="pessoasAtendem"
                            checked={form.pessoasAtendem === opt}
                            onChange={() => setForm((f) => ({ ...f, pessoasAtendem: opt }))}
                            className="w-4 h-4 text-violet-600"
                          />
                          <span className="text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-2">Qual faixa de investimento mensal você considera para marketing? *</label>
                    <div className="space-y-2">
                      {["Até R$1.000", "R$1.000 a R$3.000", "R$3.000 a R$10.000", "Acima de R$10.000"].map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="faixaInvestimento"
                            checked={form.faixaInvestimento === opt}
                            onChange={() => setForm((f) => ({ ...f, faixaInvestimento: opt }))}
                            className="w-4 h-4 text-violet-600"
                          />
                          <span className="text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 px-5 rounded-xl bg-slate-600 hover:bg-slate-700 text-white font-semibold transition-colors">
                    VOLTAR
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-3 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors border-2 border-emerald-500/50 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} /> Agendar Consultoria
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
