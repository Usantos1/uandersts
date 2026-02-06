/**
 * Slide genérico: smallTitle, headline, bullets, punchline.
 * Variantes: cards (slide 4), generator (slide 6), copyHeadlines (slide 8), whatsappScript (slide 9).
 */
import { motion } from "framer-motion"
import { MessageCircle, Copy, ExternalLink, FileText } from "lucide-react"

/** Logo Facebook para o botão da comunidade (animado). */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
import { CopyBlock } from "./CopyBlock"
import { FORMULARIO_NICHOS } from "./formularioDataset"
import type { SlideData } from "./slidesData"
import type { SlideTheme } from "./slideThemes"
import type { NichoGenerator } from "./formularioDataset"

const NICHOS_ORDER = [
  "ebook-infoproduto",
  "clinica-consultorio",
  "agencia-gestor",
  "imobiliaria",
  "beleza-estetica",
  "servicos-gerais",
  "oficina-automoveis",
  "escola-curso",
  "advogado-consultoria",
  "personal-academia",
] as const

const NICHOS_MAP: Record<string, NichoGenerator> = {}
FORMULARIO_NICHOS.forEach((n) => {
  NICHOS_MAP[n.id] = n
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
}

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const bulletVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
  },
}

const punchlineVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
}

interface SlideProps {
  slide: SlideData
  theme: SlideTheme
  onCopy: (text: string) => void
  onOpenGenerator: (nicho: NichoGenerator) => void
  onOpenFormDemo?: () => void
}

export function Slide({ slide, theme, onCopy, onOpenGenerator, onOpenFormDemo }: SlideProps) {
  if (slide.isLocked) return null

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full min-h-0 overflow-y-auto"
      style={{ paddingLeft: "max(1.25rem, env(safe-area-inset-left))", paddingRight: "max(1.25rem, env(safe-area-inset-right))" }}
    >
      <div className="flex flex-col justify-center h-full pl-20 pr-6 py-5 sm:pl-24 sm:pr-8 sm:py-6 gap-5 sm:gap-6">
        {slide.smallTitle && (
          <motion.p
            variants={itemVariants}
            className={`text-xl sm:text-2xl tracking-widest uppercase ${theme.muted}`}
          >
            {slide.smallTitle}
          </motion.p>
        )}
        <motion.h2
          variants={headlineVariants}
          className={`text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold leading-tight ${theme.title} w-full`}
        >
          {slide.headline}
        </motion.h2>

        {slide.cards && (
          <>
            <motion.p variants={itemVariants} className={`text-2xl sm:text-3xl ${theme.muted} italic`}>
              Não é gosto. É estratégia.
            </motion.p>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className={`rounded-xl backdrop-blur border ${theme.card} ${theme.isDark ? "bg-white/10" : "bg-white/60"} px-4 py-4`}>
                <p className={`text-xl sm:text-2xl font-semibold ${theme.body} mb-2`}>{slide.cards.instantaneo.title}</p>
                <ul className={`space-y-2 text-2xl sm:text-3xl ${theme.body}`}>
                  {slide.cards.instantaneo.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 pl-1">
                      <span className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${theme.bullet}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-xl backdrop-blur border ${theme.card} ${theme.isDark ? "bg-white/5" : "bg-white/50"} px-4 py-4`}>
                <p className={`text-xl sm:text-2xl font-semibold ${theme.body} mb-2`}>{slide.cards.externo.title}</p>
                <ul className={`space-y-2 text-2xl sm:text-3xl ${theme.body}`}>
                  {slide.cards.externo.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 pl-1">
                      <span className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${theme.bullet}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}

        {slide.isGenerator && (
          <motion.div variants={itemVariants} className="space-y-4">
            {slide.communityLink && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={slide.communityLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-colors ${theme.isDark ? "bg-violet-500 hover:bg-violet-600 text-white" : "bg-violet-600 hover:bg-violet-700 text-white"}`}
                >
                  <FacebookIcon className="animate-pulse" /> Acessar comunidade Extremo Plus
                </a>
                {slide.showFormDemo && onOpenFormDemo && (
                  <button
                    type="button"
                    onClick={onOpenFormDemo}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-colors border-2 ${theme.isDark ? "border-violet-400 text-violet-300 hover:bg-white/10" : "border-violet-600 text-violet-700 hover:bg-violet-50"}`}
                  >
                    <FileText size={18} /> Ver formulário demo
                  </button>
                )}
              </div>
            )}
            <p className={`text-2xl sm:text-3xl ${theme.body} mb-3`}>
              Escolha o nicho e veja ideia de formulário.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {NICHOS_ORDER.map((id) => {
                const n = NICHOS_MAP[id]
                if (!n) return null
                return (
                  <motion.button
                    key={n.id}
                    type="button"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenGenerator(n)}
                    className={`text-left rounded-xl backdrop-blur border ${theme.card} ${theme.isDark ? "bg-white/10 hover:bg-white/20" : "bg-white/70 hover:bg-white/90"} px-4 py-3 sm:px-5 sm:py-4 text-xl sm:text-2xl font-medium ${theme.body} transition-colors`}
                  >
                    {n.name}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}

        {slide.bullets.length > 0 && (
          <ul className="space-y-3 sm:space-y-4">
            {slide.bullets.map((b, i) => (
              <motion.li
                key={i}
                variants={bulletVariants}
                className={`flex items-start gap-3 text-2xl sm:text-3xl md:text-[2rem] ${theme.body} leading-snug pl-1`}
              >
                <span className={`mt-2.5 h-3 w-3 rounded-full flex-shrink-0 ${theme.bullet}`} />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {slide.copyHeadlines && slide.copyHeadlines.length > 0 && (
          <motion.div variants={itemVariants}>
            <CopyBlock
              label="Copiar 4 headlines"
              text={slide.copyHeadlines.map((h, i) => `${i + 1}) ${h}`).join("\n")}
              onCopy={onCopy}
              isDark={theme.isDark}
            />
          </motion.div>
        )}

        {slide.creativeHooks && slide.creativeHooks.length > 0 && (
          <motion.div variants={itemVariants} className="space-y-2">
            <p className={`text-lg sm:text-xl font-semibold ${theme.body}`}>Exemplos de ganchos</p>
            <div className="space-y-2 select-none">
              {slide.creativeHooks.map((hook, i) => (
                <div
                  key={i}
                  className={`rounded-lg border ${theme.card} ${theme.isDark ? "bg-white/10" : "bg-white/90"} shadow-sm px-3 py-2.5 outline-none ring-0`}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <p className={`flex items-center gap-2 text-base font-semibold ${theme.body} mb-1`}>
                    <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${theme.bullet}`} />
                    {hook.topic}
                  </p>
                  <p className={`text-base sm:text-lg ${theme.muted} leading-snug pl-4 select-text`}>{hook.example}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {slide.whatsappScript && (
          <motion.div variants={itemVariants}>
            <div className={`rounded-xl border ${theme.card} overflow-hidden ${theme.isDark ? "bg-white/10" : "bg-slate-800"}`}>
              <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${theme.isDark ? "border-white/20 bg-white/5" : "bg-slate-700/80 border-slate-600"}`}>
                <MessageCircle className={theme.isDark ? "text-violet-400" : "text-sky-400"} size={20} />
                <span className={`text-xl font-semibold ${theme.isDark ? theme.body : "text-white/95"}`}>Script primeira mensagem</span>
              </div>
              <div className="p-4">
                <p className={`text-2xl sm:text-3xl leading-snug whitespace-pre-line ${theme.isDark ? theme.body : "text-white/95"}`}>{slide.whatsappScript}</p>
              </div>
              <div className={`px-4 py-3 border-t ${theme.isDark ? "border-white/20" : "border-slate-600"}`}>
                <button
                  type="button"
                  onClick={() => onCopy(slide.whatsappScript!)}
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-xl font-medium ${theme.isDark ? "bg-violet-500/80 hover:bg-violet-500 text-white" : "bg-slate-600 hover:bg-slate-500 text-white"}`}
                >
                  <Copy size={14} /> Copiar script
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {slide.punchline && (
          <motion.blockquote
            variants={punchlineVariants}
            className={`text-2xl sm:text-3xl md:text-[2rem] ${theme.body} font-semibold italic mt-6 sm:mt-8 pl-4 border-l-4 ${theme.isDark ? "border-violet-400/50" : "border-slate-400"}`}
          >
            "{slide.punchline}"
          </motion.blockquote>
        )}
      </div>
    </motion.div>
  )
}
