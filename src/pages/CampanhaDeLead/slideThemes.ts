/**
 * Temas por slide (7). Slide 1 = escuro. Alternância para perceber a mudança.
 */
export interface SlideTheme {
  name: string
  isDark: boolean
  bg: string
  title: string
  bullet: string
  card: string
  /** Classe para texto secundário (smallTitle, body) */
  muted: string
  /** Classe para texto de corpo e bullets */
  body: string
  /** Classe para badge e botões de nav */
  accent: string
}

export const SLIDE_THEMES: SlideTheme[] = [
  {
    name: "violet",
    isDark: true,
    bg: "from-violet-950/80 via-slate-900 to-slate-900",
    title: "text-violet-300",
    bullet: "bg-violet-400",
    card: "border-violet-400/20",
    muted: "text-white/60",
    body: "text-white/90",
    accent: "text-white/70",
  },
  {
    name: "light",
    isDark: false,
    bg: "from-violet-50/98 via-indigo-50/95 to-slate-100",
    title: "text-violet-800",
    bullet: "bg-violet-500",
    card: "border-violet-300",
    muted: "text-slate-500",
    body: "text-slate-800",
    accent: "text-violet-700",
  },
  {
    name: "dark",
    isDark: true,
    bg: "from-violet-950/80 via-slate-900 to-slate-900",
    title: "text-violet-200",
    bullet: "bg-violet-400",
    card: "border-violet-500/40",
    muted: "text-slate-400",
    body: "text-slate-200",
    accent: "text-violet-300",
  },
  {
    name: "light",
    isDark: false,
    bg: "from-violet-50/98 via-indigo-50/95 to-slate-100",
    title: "text-violet-800",
    bullet: "bg-violet-500",
    card: "border-violet-300",
    muted: "text-slate-500",
    body: "text-slate-800",
    accent: "text-violet-700",
  },
  {
    name: "dark",
    isDark: true,
    bg: "from-violet-950/80 via-slate-900 to-slate-900",
    title: "text-violet-200",
    bullet: "bg-violet-400",
    card: "border-violet-500/40",
    muted: "text-slate-400",
    body: "text-slate-200",
    accent: "text-violet-300",
  },
  {
    name: "light",
    isDark: false,
    bg: "from-violet-50/98 via-indigo-50/95 to-slate-100",
    title: "text-violet-800",
    bullet: "bg-violet-500",
    card: "border-violet-300",
    muted: "text-slate-500",
    body: "text-slate-800",
    accent: "text-violet-700",
  },
  {
    name: "dark",
    isDark: true,
    bg: "from-violet-950/80 via-slate-900 to-slate-900",
    title: "text-violet-200",
    bullet: "bg-violet-400",
    card: "border-violet-500/40",
    muted: "text-slate-400",
    body: "text-slate-200",
    accent: "text-violet-300",
  },
]
