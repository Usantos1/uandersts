import { motion } from "framer-motion"
import { WHAT_I_DO } from "../data/content"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const line = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function WhatIDo() {
  return (
    <section className="px-4 py-20 sm:py-24 reveal-section">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)] mb-12"
      >
        O que eu faço na prática
      </motion.h2>
      <div className="mx-auto max-w-md">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {WHAT_I_DO.map((text, i) => (
            <motion.li
              key={i}
              variants={line}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 rounded-xl border border-white/10 glass-card px-5 py-4 text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
            >
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shrink-0 shadow-[0_0_12px_var(--color-primary)]"
                whileHover={{ scale: 1.3, boxShadow: "0 0 20px var(--color-primary)" }}
              />
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
