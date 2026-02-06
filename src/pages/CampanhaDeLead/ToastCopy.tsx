/**
 * Toast discreto: "Copiado ✅". Aparece ao copiar e some após alguns segundos.
 */
import { motion, AnimatePresence } from "framer-motion"

interface ToastCopyProps {
  visible: boolean
}

export function ToastCopy({ visible }: ToastCopyProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] px-4 py-2.5 rounded-full bg-slate-800/95 text-white text-sm font-medium shadow-lg border border-white/10 backdrop-blur"
        >
          Copiado ✅
        </motion.div>
      )}
    </AnimatePresence>
  )
}
