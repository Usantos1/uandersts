import { type ReactNode } from "react"

interface SectionTitleProps {
  title: string
  subtitle?: string | ReactNode
  className?: string
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)] text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
