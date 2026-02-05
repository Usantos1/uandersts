import { type ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-0.5 text-xs font-medium text-[var(--color-primary-light)] ${className}`}
    >
      {children}
    </span>
  )
}
