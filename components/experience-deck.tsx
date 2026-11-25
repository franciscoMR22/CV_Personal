/*  Recorrido con zoom para experiencia laboral y formación académica.
    Un gesto de scroll avanza una escena: la actual se aleja por completo y después entra la siguiente,
    así nunca se ven dos escenas a la vez. Cada grupo abre con su propia escena de título para no mezclar
    trabajo con estudios.

    Revisión ID: CV19102026011
    Created by: Francisco Mireles Rodriguez
    Restricción: sin cursivas; títulos en font-bold y texto en font-normal.
*/

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { timelineData, type TimelineItem } from '@/components/time-line/timeline-data'
import { BorderBeam } from '@/components/time-line/border-beam'

type Scene =
  | { type: 'title'; id: string; eyebrow: string; title: string; caption: string }
  | { type: 'card'; id: string; item: TimelineItem }

const work = timelineData.filter((i) => i.kind === 'work')
const education = timelineData.filter((i) => i.kind === 'education')

const SCENES: Scene[] = [
  { type: 'title', id: 'title-work', eyebrow: 'Trayectoria profesional', title: 'Experiencia laboral', caption: `${work.length} ${work.length === 1 ? 'posición' : 'posiciones'}` },
  ...work.map((item): Scene => ({ type: 'card', id: item.id, item })),
  { type: 'title', id: 'title-edu', eyebrow: 'Trayectoria académica', title: 'Formación académica', caption: `${education.length} ${education.length === 1 ? 'programa' : 'programas'}` },
  ...education.map((item): Scene => ({ type: 'card', id: item.id, item })),
]

const PANEL_W = 384       // ancho del panel de detalle (24rem)
const PANEL_GAP = 24      // separación entre la tarjeta y el panel
const EASE = [0.22, 1, 0.36, 1] as const
const LOCK_MS = 800       // tiempo en el que se ignoran nuevos gestos tras cambiar de escena
const TAIL_MS = 150       // la inercia del touchpad prolonga el bloqueo mientras siga llegando

// Al avanzar la escena actual se acerca y desaparece; la siguiente llega desde el fondo (y al revés al retroceder)
const variants = {
  enter: (dir: number) => ({ opacity: 0, scale: dir > 0 ? 0.6 : 1.5, filter: 'blur(8px)' }),
  center: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  exit: (dir: number) => ({ opacity: 0, scale: dir > 0 ? 1.5 : 0.6, filter: 'blur(6px)', transition: { duration: 0.3, ease: 'easeIn' as const } }),
}

// Con ancho suficiente el detalle aparece a la derecha de la tarjeta; en pantallas angostas se despliega debajo
function useWide() {
  const [wide, setWide] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1100px)')
    const update = () => setWide(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return wide
}

// Resalta las cifras (porcentajes) de cada logro con el color del puesto
const emphasize = (text: string, color: string) =>
  text.split(/(\d+%)/g).map((part, i) =>
    /^\d+%$/.test(part) ? <strong key={i} className="font-bold" style={{ color }}>{part}</strong> : part
  )

//*Inicio************************LISTA DE DETALLE DEL PUESTO************************
function DetailList({ item }: { item: TimelineItem }) {
  return (
    <>
      <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: item.accentColor }}>Aspectos destacados</p>
      <ul className="mt-4 space-y-4">
        {item.details!.map((detail) => (
          <li key={detail} className="relative pl-4 text-[15px] font-normal leading-[1.65] opacity-80">
            <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full" style={{ background: item.accentColor }} />
            {emphasize(detail, item.accentColor)}
          </li>
        ))}
      </ul>
    </>
  )
}
//*Fin************************LISTA DE DETALLE DEL PUESTO************************

//*Inicio************************CUERPO DE CADA ESCENA************************
function SceneBody({ scene, interactive }: { scene: Scene; interactive: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const wide = useWide()

  if (scene.type === 'title') {
    return (
      <div className="px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-text">{scene.eyebrow}</p>
        <h2 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-balance">{scene.title}</h2>
        <p className="mt-5 text-lg font-normal opacity-60">{scene.caption}</p>
      </div>
    )
  }

  const { item } = scene
  const Icon = item.icon
  const hasDetails = !!item.details?.length
  const panelId = `detalle-${item.id}`
  // Al abrir el detalle la tarjeta se desplaza a la izquierda la mitad de lo que ocupa el panel, y el conjunto sigue centrado
  const shift = expanded && wide ? -(PANEL_W + PANEL_GAP) / 2 : 0

  return (
    <motion.div className="relative" animate={{ x: shift }} transition={{ duration: 0.55, ease: EASE }}>
      <div
        className="deck-card relative w-[min(92vw,40rem)] rounded-2xl p-7 md:p-9"
        style={{ boxShadow: `0 30px 80px -34px ${item.accentColor}` }}
        onMouseEnter={() => interactive && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && <BorderBeam size={180} duration={3} colorFrom={item.accentColor} colorTo="transparent" />}

        <div className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border" style={{ borderColor: 'var(--glass-border)' }}>
            <Icon size={18} strokeWidth={2.5} style={{ color: item.accentColor }} />
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
            style={{ backgroundColor: `color-mix(in oklch, ${item.accentColor} 14%, transparent)`, color: item.accentColor }}
          >
            {item.tag}
          </span>
        </div>

        <p className="mt-6 text-xs font-normal uppercase tracking-[0.2em] opacity-50">{item.date}</p>
        <h3 className="mt-2 text-[clamp(1.35rem,2.4vw,2rem)] font-bold leading-tight tracking-tight">{item.title}</h3>
        <p className="mt-4 text-base font-normal leading-[1.7] opacity-75 md:text-[17px]">{item.description}</p>

        {hasDetails && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="deck-more mt-6"
            style={{ '--accent': item.accentColor } as React.CSSProperties}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
            {expanded ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
      </div>

      {/* Pantalla ancha: el detalle entra por la derecha de la tarjeta */}
      <AnimatePresence>
        {hasDetails && expanded && wide && (
          <motion.div
            id={panelId}
            key="panel-side"
            className="deck-card absolute top-1/2 rounded-2xl p-7"
            style={{ left: `calc(100% + ${PANEL_GAP}px)`, width: PANEL_W, y: '-50%', borderLeft: `2px solid ${item.accentColor}` }}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE, delay: 0.12 } }}
            exit={{ opacity: 0, x: 32, transition: { duration: 0.25, ease: 'easeIn' } }}
          >
            <DetailList item={item} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pantalla angosta: el detalle se despliega debajo */}
      <AnimatePresence initial={false}>
        {hasDetails && expanded && !wide && (
          <motion.div
            id={panelId}
            key="panel-below"
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.45, ease: EASE } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
          >
            <div className="deck-card mt-4 rounded-2xl p-6" style={{ borderLeft: `2px solid ${item.accentColor}` }}>
              <DetailList item={item} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
//*Fin************************CUERPO DE CADA ESCENA************************

export function ExperienceDeck() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const lockUntil = useRef(0)
  const touchStartY = useRef<number | null>(null)
  const total = SCENES.length

  const go = (to: number) => {
    if (to < 0 || to >= total || to === index) return
    setDirection(to > index ? 1 : -1)
    setIndex(to)
    lockUntil.current = performance.now() + LOCK_MS
  }

  // Devuelve true si el gesto lo atendió el recorrido; en los extremos lo deja pasar para que la página cambie de sección
  const handleStep = (dir: number) => {
    const now = performance.now()
    if (now < lockUntil.current) {
      lockUntil.current = Math.max(lockUntil.current, now + TAIL_MS)
      return true
    }
    const target = index + dir
    if (target < 0 || target >= total) return false
    go(target)
    return true
  }

  const onWheel = (e: React.WheelEvent) => {
    const dir = Math.sign(e.deltaY)
    if (!dir || Math.abs(e.deltaY) < 8) return
    if (handleStep(dir)) e.stopPropagation()
  }

  const onTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return
    const dy = touchStartY.current - e.changedTouches[0].clientY
    touchStartY.current = null
    if (Math.abs(dy) > 50) handleStep(Math.sign(dy))
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const dir = e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : e.key === 'ArrowUp' || e.key === 'PageUp' ? -1 : 0
    if (!dir) return
    if (handleStep(dir)) { e.preventDefault(); e.stopPropagation() }
  }

  // Con "reducir movimiento" se muestra una lista simple, sin zoom
  if (reduceMotion) {
    return (
      <div className="h-full overflow-y-auto px-6 pb-16 pt-28" style={{ scrollbarWidth: 'none' }}>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-10">
          {SCENES.map((scene) => <SceneBody key={scene.id} scene={scene} interactive={false} />)}
        </div>
      </div>
    )
  }

  const scene = SCENES[index]

  return (
    <div
      className="relative h-full w-full overflow-hidden pt-16"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
    >
      <div className="flex h-full items-center justify-center">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={scene.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ willChange: 'transform, opacity' }}
          >
            <SceneBody scene={scene} interactive />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicador de escenas: izquierda, para no chocar con las flechas de navegación de la página */}
      <div className="absolute left-5 top-1/2 flex -translate-y-1/2 flex-col gap-3">
        {SCENES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            aria-label={s.type === 'title' ? s.title : s.item.title}
            aria-current={i === index}
            className="deck-dot"
            data-kind={s.type}
            data-active={i === index}
          />
        ))}
      </div>

      <AnimatePresence>
        {index === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute bottom-8 left-0 right-0 text-center text-xs font-normal uppercase tracking-[0.3em]"
          >
            Desliza para recorrer
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
