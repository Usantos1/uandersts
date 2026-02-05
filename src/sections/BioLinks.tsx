import { motion } from "framer-motion"
import { MessageCircle, Instagram, Youtube, LayoutGrid, Cloud } from "lucide-react"
import { BIO_LINKS } from "../data/content"
import { LINKS } from "../data/links"

const icons: Record<string, typeof MessageCircle> = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  youtube: Youtube,
  crm: LayoutGrid,
  assistencia: LayoutGrid,
  gestao: Cloud,
}

export function BioLinks() {
  return (
    <section id="links" className="px-4 py-20 sm:py-24 reveal-section">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)] mb-12"
      >
        Links rápidos
      </motion.h2>
      <div className="mx-auto max-w-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
          className="flex flex-col gap-4"
        >
          {BIO_LINKS.map((link, i) => {
            const Icon = icons[link.linkKey]
            return (
              <motion.a
                key={i}
                href={LINKS[link.linkKey as keyof typeof LINKS]}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-4 rounded-xl border border-white/10 glass-card-strong py-4 px-5 text-[var(--color-text)] font-medium transition-all duration-300 hover:border-[var(--color-primary)]/50 glow-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                aria-label={link.label}
              >
                {Icon && (
                  <motion.span
                    className="text-[var(--color-primary-light)]"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <Icon size={24} strokeWidth={1.5} aria-hidden />
                  </motion.span>
                )}
                <span className="flex-1 text-center">{link.label}</span>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
