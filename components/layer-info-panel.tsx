/*  Ventana flotante del modal de arquitectura.
    Al abrir el modal muestra una indicación; al elegir una capa muestra su información.
    Se renderiza fuera del modal, en la esquina superior derecha.

    Revisión ID: CV19102026006
    Created by: Francisco Mireles Rodriguez
*/

'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MousePointerClick, X } from 'lucide-react'

export interface LayerInfo {
  stack: string
  summary: string
  points: string[]
}

interface LayerInfoPanelProps {
  open: boolean
  layer: { label: string; info: LayerInfo } | null   // null = mostrar la indicación inicial
  index: number
  total: number
  accent: string
  onClose: () => void
}

export const LayerInfoPanel = ({ open, layer, index, total, accent, onClose }: LayerInfoPanelProps) => (
  <AnimatePresence>
    {open && (
      <motion.aside
        key="layer-info"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed z-[2100] bottom-4 left-4 right-4 md:bottom-auto md:left-auto md:top-4 md:right-4 md:w-[340px] max-h-[60vh] md:max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl p-5 text-white"
        style={{ scrollbarWidth: 'none', '--accent': accent } as React.CSSProperties}
        aria-live="polite"
      >
        <button onClick={onClose} className="absolute top-3 right-3 p-1 rounded-full text-white/50 hover:text-white transition-colors" aria-label="Cerrar ventana de información">
          <X size={16} />
        </button>

        <AnimatePresence mode="wait" initial={false}>
          {layer ? (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
            >
              <span className="inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: accent, borderColor: accent }}>
                Capa {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <h3 className="mt-3 pr-6 text-lg font-bold uppercase tracking-tight leading-tight">{layer.label}</h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest" style={{ color: accent }}>{layer.info.stack}</p>

              <p className="mt-4 text-sm leading-relaxed text-white/70">{layer.info.summary}</p>
              <ul className="mt-4 space-y-2.5 border-t border-white/10 pt-4">
                {layer.info.points.map((point) => (
                  <li key={point} className="relative pl-4 text-[13px] leading-relaxed text-white/60">
                    <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="flex items-start gap-3 pr-6"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border" style={{ color: accent, borderColor: accent }}>
                <MousePointerClick size={18} />
              </span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-tight">Explora la arquitectura</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-white/60">Haz clic en cualquier capa para ver su información.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>
    )}
  </AnimatePresence>
)
