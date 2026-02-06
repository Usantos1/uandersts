/**
 * Zonas de toque invisíveis: 30% esquerda = anterior, 30% direita = próximo.
 * Não renderiza botões visíveis.
 */
interface TapZonesProps {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export function TapZones({ onPrev, onNext, className = "" }: TapZonesProps) {
  return (
    <div className={`absolute inset-0 z-[5] flex pointer-events-none ${className}`}>
      <div
        className="w-[30%] min-w-0 pointer-events-auto cursor-default"
        onClick={onPrev}
        aria-hidden
      />
      <div className="flex-1 min-w-0" />
      <div
        className="w-[30%] min-w-0 pointer-events-auto cursor-default"
        onClick={onNext}
        aria-hidden
      />
    </div>
  )
}
