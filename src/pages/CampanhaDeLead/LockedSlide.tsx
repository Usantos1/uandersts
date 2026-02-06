/**
 * SLIDE 1 - Capa. Os 3 modelos: WhatsApp, Formulário instantâneo, Formulário na LP.
 */
import { motion } from "framer-motion"
import { MessageCircle, FileText, Globe } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function LockedSlide() {
  return (
    <div className="flex flex-col h-full min-h-0 pl-24 pr-6 py-5 sm:pl-28 sm:pr-8 sm:py-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4rem] font-bold leading-tight text-violet-300 drop-shadow-lg"
        >
          Campanhas de Leads (Meta Ads)
        </motion.h1>
        <ul className="flex-shrink-0 mt-4 sm:mt-5 space-y-2.5">
          <motion.li
            variants={itemVariants}
            className="flex items-start gap-2.5 text-xl sm:text-2xl md:text-[1.4rem] text-white/85 leading-snug"
          >
            <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0 bg-violet-400" />
            <span>WhatsApp direto: maior volume, menos qualificado, leads mais baratos</span>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="flex items-start gap-2.5 text-xl sm:text-2xl md:text-[1.4rem] text-white/85 leading-snug"
          >
            <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0 bg-violet-400" />
            <span>Formulário instantâneo (Meta): nos testes, lead mais caro e pior resultado</span>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="flex items-start gap-2.5 text-xl sm:text-2xl md:text-[1.4rem] text-white/85 leading-snug"
          >
            <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0 bg-violet-400" />
            <span>Formulário na LP: melhor forma de qualificar gerando valor através da LP + formulário de contato</span>
          </motion.li>
        </ul>
        <motion.div variants={itemVariants} className="mt-4 sm:mt-5 grid grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <div className="w-full rounded-lg bg-emerald-500/10 border border-emerald-400/25 p-3 sm:p-4 mb-3">
              <p className="font-semibold text-emerald-200 mb-1 flex items-center gap-1.5 text-base">
                <MessageCircle size={20} /> WhatsApp
              </p>
              <p className="text-white/85 leading-snug text-base">Maior volume, leads mais baratos. Direto pro contato.</p>
            </div>
            <div className="w-full flex-1 rounded-xl border border-emerald-500/40 bg-emerald-500/10 backdrop-blur p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-emerald-400/40">
                <MessageCircle className="text-emerald-400" size={20} />
                <span className="text-base font-semibold text-emerald-300">WhatsApp direto</span>
              </div>
              <p className="text-base text-white/85 leading-snug">Lead direto pro WhatsApp. Menor custo, melhor conversão no seguimento, porém menos qualificado.</p>
              <div className="mt-3 h-10 rounded-lg bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center text-base font-medium text-emerald-200">
                Recomendado
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full rounded-lg bg-amber-500/10 border border-amber-400/25 p-3 sm:p-4 mb-3">
              <p className="font-semibold text-amber-200 mb-1 flex items-center gap-1.5 text-base">
                <FileText size={20} /> Instantâneo
              </p>
              <p className="text-white/80 leading-snug text-base">Menos volume, lead mais caro. Pior resultado nos testes.</p>
            </div>
            <div className="w-full flex-1 rounded-xl border border-amber-500/30 bg-amber-500/5 backdrop-blur p-4 shadow-lg opacity-90">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-amber-400/30">
                <FileText className="text-amber-400" size={20} />
                <span className="text-base font-semibold text-amber-300">Formulário instantâneo (Meta)</span>
              </div>
              <p className="text-base text-white/80 leading-snug">Menos volume, menos intenção. Lead mais caro nos testes que eu já fiz.</p>
              <div className="mt-3 h-9 rounded-lg bg-white/10 border border-white/15 w-3/4" />
                <div className="h-10 rounded-lg bg-amber-500/20 border border-amber-400/20 mt-2 flex items-center justify-center text-base font-medium text-amber-200">
                Avaliar
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full rounded-lg bg-cyan-500/10 border border-cyan-400/25 p-3 sm:p-4 mb-3">
              <p className="font-semibold text-cyan-200 mb-1 flex items-center gap-1.5 text-base">
                <Globe size={20} /> LP
              </p>
              <p className="text-white/85 leading-snug text-base">Menor volume, mais intenção, ticket alto. Formulário na sua página.</p>
            </div>
            <div className="w-full flex-1 rounded-xl border border-cyan-500/40 bg-cyan-500/10 backdrop-blur p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-400/40">
                <Globe className="text-cyan-400" size={20} />
                <span className="text-base font-semibold text-cyan-300">Formulário na LP</span>
              </div>
              <p className="text-base text-white/85 leading-snug">Menor volume, mais intenção, ticket maior. Pré-venda antes do cadastro.</p>
              <div className="mt-3 space-y-2">
                <div className="h-9 rounded-lg bg-white/10 border border-white/15" />
                <div className="h-10 rounded-lg bg-cyan-500/30 border border-cyan-400/30 flex items-center justify-center text-base font-medium text-cyan-200">
                  Recomendado (Qualificação na LP)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
