import { motion } from "framer-motion"
import { SPECIALTIES } from "../data/content"
import { LINKS } from "../data/links"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Specialties() {
  return (
    <section className="px-4 py-20 sm:py-24 reveal-section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)] mb-12"
      >
        Especialidades
      </motion.h2>
      <div className="mx-auto max-w-2xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {SPECIALTIES.map((s, i) => (
            <motion.a
              key={i}
              href={LINKS[s.linkKey as keyof typeof LINKS]}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group block rounded-2xl border border-white/10 glass-card p-6 text-left transition-all duration-300 hover:border-[var(--color-primary)]/50 glow-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              <motion.span
                className="text-2xl opacity-90 inline-block"
                aria-hidden
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                {s.emoji}
              </motion.span>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {s.desc}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
