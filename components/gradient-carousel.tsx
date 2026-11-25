/*  Carrusel 3D de certificados con degradado de fondo.
    La tarjeta activa tiñe el fondo con el color de su categoría; al hacer clic en ella se abre el visor de PDF.

    Revisión ID: CV19102026008
    Created by: Francisco Mireles Rodriguez
*/

'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { certThumb, getCertCategory } from '@/app/data/portfolio-data'
import { withBase } from '@/lib/base-path'

interface Cert {
  name: string
  date: string
  file: string
}

interface GradientCarouselProps {
  items: Cert[]
  onOpen: (cert: Cert) => void
}

const VISIBLE = 3        // tarjetas montadas a cada lado de la activa
const ASPECT = 0.774     // alto / ancho de la miniatura
const TILT_DEG = 14      // giro hacia el centro por posición

// Separación, escala y opacidad por distancia a la tarjeta activa (en anchos de tarjeta)
const OFFSET = [0, 1.0, 1.86, 2.6]
const SCALE = [1, 0.86, 0.74, 0.62]
const OPACITY = [1, 0.95, 0.8, 0]

const pad = (v: number) => String(v).padStart(2, '0')

export const GradientCarousel = ({ items, onOpen }: GradientCarouselProps) => {
  const reduceMotion = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)
  const lastWheel = useRef(0)
  const [active, setActive] = useState(0)
  const [stageW, setStageW] = useState(1100)
  const n = items.length

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setStageW(entry.contentRect.width))
    ro.observe(el)
    setStageW(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const move = useCallback((delta: number) => {
    setActive((a) => Math.min(n - 1, Math.max(0, a + delta)))
  }, [n])

  if (n === 0) {
    return <p className="py-20 text-center opacity-50">No hay certificados que coincidan con la búsqueda.</p>
  }

  const w = Math.round(Math.min(380, Math.max(200, stageW * 0.26)))
  const h = Math.round(w * ASPECT)
  const P = w * 5

  const pose = (d: number) => {
    const abs = Math.min(Math.abs(d), VISIBLE)
    const dir = Math.sign(d)
    return {
      x: dir * OFFSET[abs] * w,
      rotateY: -dir * (abs === 0 ? 0 : TILT_DEG + (abs - 1) * 6),
      scale: SCALE[abs],
      opacity: OPACITY[abs],
    }
  }

  const spring = reduceMotion ? { duration: 0 } : { type: 'spring' as const, stiffness: 190, damping: 27, mass: 0.9 }
  const from = Math.max(0, active - VISIBLE)
  const to = Math.min(n - 1, active + VISIBLE)
  const current = items[active]
  const { label, hue } = getCertCategory(current.name)

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, () => void> = {
      ArrowLeft: () => move(-1),
      ArrowRight: () => move(1),
      Home: () => setActive(0),
      End: () => setActive(n - 1),
    }
    const action = keys[e.key]
    if (!action) return
    e.preventDefault()
    e.stopPropagation() // evita que la flecha cambie de slide en la página
    action()
  }

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) < 30 || Math.abs(e.deltaX) < Math.abs(e.deltaY)) return
    const now = performance.now()
    if (now - lastWheel.current < 250) return
    lastWheel.current = now
    move(e.deltaX > 0 ? 1 : -1)
  }

  return (
    <div className="gradient-wrap">
      {/* Resplandor del color de la tarjeta activa; al cambiar de categoría se funde con el anterior */}
      <AnimatePresence initial={false}>
        <motion.div
          key={hue}
          className="gradient-glow"
          style={{ background: `radial-gradient(ellipse 55% 65% at 50% 42%, hsl(${hue} 80% 50% / var(--tint-alpha)), transparent 70%)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      <motion.div
        className="gradient-fade"
        onPanEnd={(_, info) => { if (info.offset.x < -50) move(1); else if (info.offset.x > 50) move(-1) }}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          ref={stageRef}
          className="gradient-stage"
          style={{ height: Math.round(h * 1.3), perspective: P, perspectiveOrigin: '50% 45%' }}
          tabIndex={0}
          role="group"
          aria-roledescription="carrusel"
          aria-label="Certificados"
          onKeyDown={onKeyDown}
          onWheel={onWheel}
        >
          {items.slice(from, to + 1).map((cert, k) => {
            const i = from + k
            const d = i - active
            const abs = Math.abs(d)
            const { label: tag, hue: tagHue } = getCertCategory(cert.name)
            return (
              <motion.button
                key={cert.file}
                type="button"
                className="gradient-card"
                style={{
                  width: w,
                  height: h,
                  marginLeft: -w / 2,
                  zIndex: 10 - abs,
                  '--hue': tagHue,
                } as React.CSSProperties}
                initial={pose(d)}
                animate={pose(d)}
                transition={spring}
                whileHover={d === 0 && !reduceMotion ? { scale: 1.04 } : undefined}
                onClick={() => (d === 0 ? onOpen(cert) : setActive(i))}
                aria-label={d === 0 ? `Abrir certificado ${cert.name}` : `Ir al certificado ${cert.name}`}
                tabIndex={-1}
              >
                <img src={encodeURI(withBase(certThumb(cert.file)))} alt={cert.name} draggable={false} loading="lazy" decoding="async" />
                <span className="gradient-tag">{tag}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      <div className="gradient-caption" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.file}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <p className="font-bold text-base leading-tight">{current.name}</p>
            <p className="mt-1 text-sm opacity-60">{label} · {current.date}</p>
          </motion.div>
        </AnimatePresence>
        <p className="mt-3 text-xs tabular-nums"><span className="font-bold">{pad(active + 1)}</span><span className="opacity-50"> / {pad(n)}</span></p>
      </div>
    </div>
  )
}
