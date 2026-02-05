import { motion } from "framer-motion"
import { LayoutGrid, BarChart3, Smartphone, Settings } from "lucide-react"
import { HERO } from "../data/content"
import { LINKS } from "../data/links"

const floatingIcons = [
  { Icon: LayoutGrid, className: "top-[15%] left-[8%] sm:left-[14%] animate-float" },
  { Icon: BarChart3, className: "top-[10%] right-[6%] sm:right-[12%] animate-float animate-float-delay-1" },
  { Icon: Smartphone, className: "bottom-[25%] left-[5%] sm:left-[12%] animate-float animate-float-delay-2" },
  { Icon: Settings, className: "bottom-[20%] right-[8%] sm:right-[14%] animate-float animate-float-delay-3" },
]

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-16 pb-20 overflow-hidden reveal-section">
      <div className="pointer-events-none absolute inset-0 z-0">
        {floatingIcons.map(({ Icon, className }, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-card text-[var(--color-primary-light)] ${className}`}
            aria-hidden
          >
            <Icon size={22} strokeWidth={1.5} />
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
        {/* Foto com glow forte */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-2 rounded-full bg-gradient-to-r from-[var(--color-primary)]/50 via-[var(--color-accent)]/30 to-[var(--color-primary)]/50 blur-2xl"
          />
          <div className="relative rounded-full p-1.5 glass-card-strong glow-ring">
            <motion.img
              src={HERO.image}
              alt="Uander Santos"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-white/10"
              width={176}
              height={176}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl"
        >
          {HERO.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-[var(--color-text-muted)] text-sm sm:text-base max-w-sm mx-auto leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.45 },
            },
          }}
          className="mt-12 w-full flex flex-col gap-3 max-w-xs mx-auto"
        >
          {HERO.ctas.map((cta, i) => (
            <motion.a
              key={i}
              href={LINKS[cta.linkKey as keyof typeof LINKS]}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center rounded-xl border border-white/10 glass-card-strong py-4 px-5 text-sm font-medium text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)]/60 glow-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              aria-label={cta.label}
            >
              {cta.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
