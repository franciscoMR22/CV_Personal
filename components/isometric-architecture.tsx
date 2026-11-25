/*  Diagrama isométrico de capas de arquitectura.
    Cada capa aparece de abajo hacia arriba con su nombre y las tecnologías que usa.

    Revisión ID: CV19102026004
    Create Date: 03-03-2026 03:16 PM
    Created by: Francisco Mireles Rodriguez

*/

'use client'

import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface Layer {
  label: string
  detail?: string
  icon: React.ReactNode
}

interface IsometricProps {
  selected?: number | null
  onSelect?: (idx: number) => void
  layers: Layer[]        // de arriba (cercana al usuario) hacia abajo (infraestructura)
  accent?: string        // color de las capas y las etiquetas
  startDelay?: number    // segundos antes de que aparezca la primera capa
}

const STEP = 0.3         // segundos entre una capa y la siguiente

//*Inicio************************COMPONENTE ANIMACIÓN ISOMÉTRICA************************
export const IsometricArchitecture = ({ layers, selected = null, onSelect, accent = '#10B981', startDelay = 0.35 }: IsometricProps) => {
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState<number | null>(null)
  const n = layers.length

  // La capa de abajo (infraestructura) entra primero y el resto se apila encima
  const delayOf = (idx: number) => (reduceMotion ? 0 : startDelay + (n - 1 - idx) * STEP)

  return (
    <div className="iso-diagram" style={{ '--n': n, '--accent': accent } as React.CSSProperties}>
      <div className="iso-stack">
        {layers.map((layer, idx) => {
          const depth = n > 1 ? idx / (n - 1) : 0 // 0 arriba, 1 abajo: las capas profundas se ven más densas
          return (
            <motion.div
              key={layer.label}
              className="iso-layer"
              data-active={selected === idx}
              data-hover={hovered === idx}
              style={{ '--i': idx, zIndex: n - idx } as React.CSSProperties}
              initial={reduceMotion ? false : { opacity: 0, y: -28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delayOf(idx), duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div
                className="iso-plate"
                role="button"
                tabIndex={0}
                aria-label={`Ver información de la capa ${layer.label}`}
                aria-pressed={selected === idx}
                onClick={() => onSelect?.(idx)}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(idx)}
                onBlur={() => setHovered(null)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect?.(idx) } }}
                style={{ background: `color-mix(in srgb, var(--accent) ${12 + depth * 30}%, transparent)` }}
              />
              <div className="iso-icon">{layer.icon}</div>
            </motion.div>
          )
        })}
      </div>

      <div className="iso-labels">
        {layers.map((layer, idx) => (
          <div key={layer.label} className="iso-label-pos" style={{ '--i': idx } as React.CSSProperties}>
            <motion.button
              type="button"
              className="iso-label"
              data-active={selected === idx}
              onClick={() => onSelect?.(idx)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(idx)}
              onBlur={() => setHovered(null)}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delayOf(idx) + 0.2, duration: 0.4, ease: 'easeOut' }}
            >
              <span className="iso-label-name">{layer.label}</span>
              {layer.detail && <span className="iso-label-detail">{layer.detail}</span>}
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  )
}
//*Fin************************COMPONENTE ANIMACIÓN ISOMÉTRICA************************
