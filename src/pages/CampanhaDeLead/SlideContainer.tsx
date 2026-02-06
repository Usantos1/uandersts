/**
 * Container do slide: troca direta de conteúdo, sem AnimatePresence.
 * Evita tela branca/preta e travamento ao avançar.
 */
interface SlideContainerProps {
  current: number
  dir: number
  className?: string
  children: React.ReactNode
}

export function SlideContainer({ className = "", children }: SlideContainerProps) {
  return (
    <div className={`absolute inset-0 flex flex-col overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
