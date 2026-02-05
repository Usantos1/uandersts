import { motion } from "framer-motion"
import { SITE } from "../data/content"

export function Footer() {
  return (
    <footer className="relative z-10 px-4 py-14 text-center reveal-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-[var(--color-text-muted)]"
      >
        <span className="font-semibold text-[var(--color-text)]">{SITE.name}</span>
        <br />
        <span className="text-xs">{SITE.tagline}</span>
      </motion.div>
    </footer>
  )
}
