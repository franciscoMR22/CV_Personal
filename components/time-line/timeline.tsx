/* Revisión ID: CV06032026019
   Created by: Francisco Mireles Rodriguez 
   Update: Alineación vertical fija, eliminación de alternancia y limpieza de espacios.
   Path: components/time-line/timeline.tsx */

"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { timelineData } from "./timeline-data"
import { TimelineSvgPath } from "./timeline-svg-path"
import { TimelineNode } from "./timeline-node"
import { MobileTimelineLine } from "./mobile-timeline-line"

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-full overflow-visible"
    >
      {/* Línea SVG orgánica (Escritorio) - Sincronizada con el scroll vertical */}
      <div className="hidden md:block">
        <TimelineSvgPath containerRef={containerRef} />
      </div>

      {/* Línea Vertical (Móvil) */}
      <div className="md:hidden">
        <MobileTimelineLine containerRef={containerRef} />
      </div>

      {/* Marcador de inicio del Timeline (Minimalista) */}
      <div className="relative z-10 flex flex-col items-center pt-4 pb-12">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_oklch(0.72_0.18_265)]"
        />
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent mt-2 opacity-20" />
      </div>

      {/* Nodos de la línea de tiempo - Alineación consistente a la izquierda del scroll */}
      <div className="relative z-10 w-full flex flex-col items-start gap-4">
        {timelineData.map((item) => (
          <TimelineNode
            key={item.id}
            item={item}
            containerRef={containerRef}
          />
        ))}
      </div>

      {/* Marcador final: "Presente" - RESTRICCIÓN: font-bold (no cursiva) */}
      <motion.div
        className="relative z-10 flex flex-col items-center pt-8 pb-12 gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
          Presente
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      </motion.div>
    </div>
  )
}