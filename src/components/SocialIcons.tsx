import { MessageCircle, Instagram, Youtube, Linkedin, Mail } from "lucide-react"
import { LINKS } from "../data/links"

const items = [
  { key: "whatsapp", label: "WhatsApp", icon: MessageCircle, href: LINKS.whatsapp },
  { key: "instagram", label: "Instagram", icon: Instagram, href: LINKS.instagram },
  { key: "youtube", label: "YouTube", icon: Youtube, href: LINKS.youtube },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, href: LINKS.linkedin },
  { key: "email", label: "Email", icon: Mail, href: LINKS.email },
] as const

interface SocialIconsProps {
  className?: string
  size?: number
}

export function SocialIcons({ className = "", size = 20 }: SocialIconsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary-light)] focus-visible:text-[var(--color-primary-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] rounded"
          aria-label={label}
        >
          <Icon size={size} strokeWidth={1.5} aria-hidden />
        </a>
      ))}
    </div>
  )
}
