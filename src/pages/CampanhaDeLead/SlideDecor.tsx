/**
 * Elementos animados de fundo (grid, orbs, scan), visual tech/futurista.
 */
import { motion } from "framer-motion"

interface SlideDecorProps {
  /** Tema escuro = cores claras/sutis; claro = cores escuras/sutis */
  isDark: boolean
}

export function SlideDecor({ isDark }: SlideDecorProps) {
  const line = isDark ? "rgba(148,163,184,0.08)" : "rgba(100,116,139,0.06)"
  const orb = isDark ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.12)"

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Grid sutil animado */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(${line} 1px, transparent 1px),
            linear-gradient(90deg, ${line} 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(${line} 1px, transparent 1px),
            linear-gradient(90deg, ${line} 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbs com movimento lento */}
      <motion.div
        className="absolute rounded-full blur-2xl"
        style={{
          width: 180,
          height: 180,
          left: "10%",
          top: "15%",
          background: orb,
        }}
        animate={{
          x: [0, 12, 0],
          y: [0, -8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-2xl"
        style={{
          width: 140,
          height: 140,
          right: "5%",
          bottom: "25%",
          background: orb,
        }}
        animate={{
          x: [0, -10, 0],
          y: [0, 6, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-xl"
        style={{
          width: 80,
          height: 80,
          right: "20%",
          top: "40%",
          background: isDark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.1)",
        }}
        animate={{
          x: [0, 6, 0],
          y: [0, 4, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Linha de scan vertical (sutil, tech) */}
      <motion.div
        className="absolute top-0 bottom-0 w-px"
        style={{
          left: "30%",
          background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.08), transparent)",
        }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          top: "20%",
          background: "linear-gradient(to right, transparent, rgba(139,92,246,0.06), transparent)",
        }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
      />

      {/* Cantos: traços finos animados */}
      <motion.div
        className={`absolute top-6 left-6 w-10 h-px border-t ${isDark ? "border-violet-400/40" : "border-violet-400/30"}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className={`absolute top-6 left-6 w-px h-10 border-l ${isDark ? "border-violet-400/40" : "border-violet-400/30"}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        className={`absolute bottom-16 right-14 w-10 h-px border-b ${isDark ? "border-violet-400/35" : "border-violet-400/25"}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        style={{ transformOrigin: "right" }}
      />
      <motion.div
        className={`absolute bottom-16 right-14 w-px h-10 border-r ${isDark ? "border-violet-400/35" : "border-violet-400/25"}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ transformOrigin: "bottom" }}
      />
    </div>
  )
}
