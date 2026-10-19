/* Revisión ID: CV06032026020
   Created by: Francisco Mireles Rodriguez 
   Update: Trazo vertical rectificado para alineación con iconos y panel derecho.
   Path: components/time-line/timeline-svg-path.tsx */

"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

// Trazo rectificado: Una línea vertical con una curvatura orgánica mínima 
// para seguir el flujo de los iconos en el panel de scroll derecho.
export const ORGANIC_PATH = "M 20 0 L 20 4200"

interface TimelineSvgPathProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function TimelineSvgPath({ containerRef }: TimelineSvgPathProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)

  // Sincronización con el progreso del scroll del contenedor derecho
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Suavizado del trazo para una sensación mecánica y fluida
  const drawProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
    }
  }, [])

  return (
    <svg
      viewBox="0 0 100 4200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-6 w-full h-full pointer-events-none z-0"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradiente basado en oklch para mantener la estética profesional */}
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.72 0.18 265)" stopOpacity="0" />
          <stop offset="5%" stopColor="oklch(0.72 0.18 265)" stopOpacity="0.8" />
          <stop offset="95%" stopColor="oklch(0.72 0.18 265)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="oklch(0.72 0.18 265)" stopOpacity="0" />
        </linearGradient>

        <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Línea base sutil (Guía fantasma) */}
      <path
        d={ORGANIC_PATH}
        stroke="white"
        strokeWidth="1"
        strokeOpacity="0.03"
        strokeDasharray="4 8"
      />

      {/* Trazo animado que sigue el scroll - RESTRICCIÓN: Estilo normal */}
      {pathLength > 0 && (
        <motion.path
          ref={pathRef}
          d={ORGANIC_PATH}
          stroke="url(#pathGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          style={{
            pathLength: drawProgress,
          }}
        />
      )}
    </svg>
  )
}