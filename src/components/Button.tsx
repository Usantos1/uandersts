import { type ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "tertiary" | "ghost"
  className?: string
  external?: boolean
  "aria-label"?: string
}

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary-light)] glow-hover",
  secondary:
    "bg-transparent text-[var(--color-primary-light)] border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
  tertiary:
    "bg-transparent text-[var(--color-text-muted)] border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/40",
  ghost:
    "bg-transparent text-[var(--color-text)] border-transparent hover:bg-white/5",
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = true,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

  const combined = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={combined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={combined} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
