import { type ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-card rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-[var(--color-primary)]/25 ${className}`}
    >
      {children}
    </div>
  )
}
