/**
 * Apresentação interativa 9:16 - Campanhas de Leads (Extremo Plus).
 * Navegação: botões ou teclado (setas / espaço). Slide 1 = LockedSlide (intocável).
 */
import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react"
import { slidesData, TOTAL_SLIDES } from "./slidesData"
import { SLIDE_THEMES } from "./slideThemes"
import LockedSlide from "./LockedSlide"
import { Slide } from "./Slide"
import { ToastCopy } from "./ToastCopy"
import { GeneratorModal } from "./GeneratorModal"
import { FormDemoModal } from "./FormDemoModal"
import { SlideContainer } from "./SlideContainer"
import { SlideDecor } from "./SlideDecor"
import type { SlideData } from "./slidesData"
import type { NichoGenerator } from "./formularioDataset"

function getInitialSlide() {
  if (typeof window === "undefined") return 1
  const m = window.location.hash.match(/slide-(\d+)/)
  return m ? Math.max(1, Math.min(TOTAL_SLIDES, parseInt(m[1], 10))) : 1
}

export default function CampanhaDeLead() {
  const [current, setCurrent] = useState(getInitialSlide)
  const [dir, setDir] = useState(0)
  const [toastVisible, setToastVisible] = useState(false)
  const [generatorNicho, setGeneratorNicho] = useState<NichoGenerator | null>(null)
  const [formDemoVisible, setFormDemoVisible] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const go = useCallback(
    (next: number) => {
      const n = Math.max(1, Math.min(TOTAL_SLIDES, next))
      if (n === current) return
      setDir(n > current ? 1 : -1)
      setCurrent(n)
      window.location.hash = `slide-${n}`
    },
    [current]
  )

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastVisible(true)
      setTimeout(() => setToastVisible(false), 2200)
    })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        go(current + 1)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        go(current - 1)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [current, go])

  useEffect(() => {
    const hash = window.location.hash.match(/slide-(\d+)/)
    const n = hash ? parseInt(hash[1], 10) : 1
    if (n >= 1 && n <= TOTAL_SLIDES) setCurrent(n)
  }, [])

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.match(/slide-(\d+)/)
      if (hash) {
        const n = parseInt(hash[1], 10)
        if (n >= 1 && n <= TOTAL_SLIDES) setCurrent(n)
      }
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange)
  }, [])

  const slide = slidesData[current - 1] as SlideData
  const theme = SLIDE_THEMES[current - 1]
  const isLocked = slide?.isLocked === true
  const bgClass = `bg-gradient-to-b ${theme.bg}`

  return (
    <div
      className="min-h-dvh w-full flex flex-col items-center justify-center bg-slate-200"
      style={{ minHeight: "100dvh" }}
    >
      <motion.div
        className="relative w-full max-w-[100vw] overflow-hidden rounded-none shadow-2xl flex flex-col items-center justify-center"
        style={{
          aspectRatio: "9/16",
          maxHeight: "100dvh",
        }}
      >
        {/* Glow sutil (todas as telas escuras, incluindo tela 1) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(139,92,246,0.08), transparent 70%)",
          }}
        />

        <SlideContainer current={current} dir={dir} className={`absolute inset-0 flex flex-col ${bgClass}`}>
          <SlideDecor key={`decor-${current}`} isDark={theme.isDark} />

          <div
            key={`header-${current}`}
            className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10"
            style={{ paddingLeft: "max(1.25rem, env(safe-area-inset-left))" }}
          >
            <p className={`text-sm sm:text-base font-semibold uppercase tracking-widest ${isLocked ? "text-white/70" : theme.accent}`}>
              Extremo Plus
            </p>
          </div>

          {isLocked ? (
            <LockedSlide key="locked" />
          ) : (
            <Slide
              key={`slide-${current}`}
              slide={slide}
              theme={theme}
              onCopy={handleCopy}
              onOpenGenerator={setGeneratorNicho}
              onOpenFormDemo={() => setFormDemoVisible(true)}
            />
          )}
        </SlideContainer>

        {/* Navegação: botões ou teclado (setas / espaço) */}
        <div
          className="absolute bottom-4 right-4 z-20 flex items-center gap-1"
          style={{ marginRight: "env(safe-area-inset-right)", marginBottom: "env(safe-area-inset-bottom)" }}
        >
          <button
            type="button"
            onClick={() => go(current - 1)}
            disabled={current <= 1}
            className={`flex items-center justify-center w-10 h-10 rounded-lg disabled:opacity-30 disabled:pointer-events-none transition-colors ${theme.isDark ? "text-violet-300 hover:text-white hover:bg-white/10" : "text-violet-700 hover:text-violet-900 hover:bg-violet-200/80"}`}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => go(current + 1)}
            disabled={current >= TOTAL_SLIDES}
            className={`flex items-center justify-center w-10 h-10 rounded-lg disabled:opacity-30 disabled:pointer-events-none transition-colors ${theme.isDark ? "text-violet-300 hover:text-white hover:bg-white/10" : "text-violet-700 hover:text-violet-900 hover:bg-violet-200/80"}`}
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
          {!isFullscreen && (
            <button
              type="button"
              onClick={toggleFullscreen}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${theme.isDark ? "text-violet-300 hover:text-white hover:bg-white/10" : "text-violet-700 hover:text-violet-900 hover:bg-violet-200/80"}`}
              aria-label="Tela cheia"
            >
              <Maximize2 size={18} />
            </button>
          )}
        </div>
      </motion.div>

      <ToastCopy visible={toastVisible} />

      {generatorNicho && (
        <GeneratorModal nicho={generatorNicho} onClose={() => setGeneratorNicho(null)} />
      )}

      {formDemoVisible && <FormDemoModal onClose={() => setFormDemoVisible(false)} />}
    </div>
  )
}
