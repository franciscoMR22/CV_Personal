/* Revisión ID: CV06032026012
   Created by: Francisco Mireles Rodriguez 
   Update: Border beam effect for time-line cards + No Italics
   Path: components/time-line/border-beam.tsx */

"use client"

import { useId, useRef } from "react"
import { motion } from "framer-motion"

interface BorderBeamProps {
  size?: number
  duration?: number
  colorFrom?: string
  colorTo?: string
  className?: string
}

/**
 * Border Beam: Segmento brillante que recorre el borde del contenedor.
 * Refuerza la estética de Glassmorphism sin usar cursivas en su estructura.
 */
export function BorderBeam({
  size = 200,
  duration = 4,
  colorFrom = "oklch(0.72 0.18 265)",
  colorTo = "transparent",
  className,
}: BorderBeamProps) {
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-[-1px] rounded-2xl"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 30%, ${colorFrom} 60%, ${colorTo} 80%, transparent 100%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  )
}