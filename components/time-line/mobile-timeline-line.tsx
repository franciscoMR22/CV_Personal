/* Revisión ID: CV06032026021
   Created by: Francisco Mireles Rodriguez 
   Update: Alineación precisa para móviles, sin cursivas y sin bordes.
   Path: components/time-line/mobile-timeline-line.tsx */

"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface MobileTimelineLineProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

/**
 * Línea vertical animada para dispositivos móviles.
 * Alineada perfectamente con el eje de los iconos (left-11).
 */
export function MobileTimelineLine({ containerRef }: MobileTimelineLineProps) {
  // Sincronización con el progreso del scroll del contenedor de la experiencia
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Suavizado mecánico para un dibujo fluido al bajar
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  })

  // Transformación de escala vertical basada en el progreso
  const scaleY = useTransform(springProgress, [0, 1], [0, 1])

  return (
    <div
      className="absolute left-11 top-0 bottom-0 w-px md:hidden pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Línea base sutil (Guía fantasma) */}
      <div className="absolute inset-0 w-full bg-white/[0.03]" />
      
      {/* Línea de progreso animada - RESTRICCIÓN: Sin bordes, solo color primario */}
      <motion.div
        className="absolute top-0 left-0 w-full origin-top"
        style={{
          scaleY,
          background: "oklch(0.72 0.18 265)",
          boxShadow: "0 0 10px 1px oklch(0.72 0.18 265 / 0.3)"
        }}
      />
    </div>
  )
}