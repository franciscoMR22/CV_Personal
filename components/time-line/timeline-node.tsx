/* Revisión ID: CV06032026018
   Created by: Francisco Mireles Rodriguez 
   Update: Ajuste de espaciado, eliminación de text-balance y restricción de fuentes.
   Path: components/time-line/timeline-node.tsx */

"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { TimelineItem } from "./timeline-data"
import { BorderBeam } from "./border-beam"
import { cn } from "@/lib/utils"

interface TimelineNodeProps {
  item: TimelineItem
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function TimelineNode({ item, containerRef }: TimelineNodeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = item.icon

  // Sincronización del nodo con el scroll del panel derecho
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Animaciones de escala y opacidad para un flujo vertical suave
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div 
      style={{ scale, opacity }} 
      className="relative flex items-start gap-6 w-full flex-row mb-12 last:mb-0"
    >
      {/* Indicador de Icono (Eje de la línea de tiempo) */}
      <div className="relative flex-shrink-0 mt-1">
        <div 
          className="absolute inset-0 rounded-full blur-md opacity-20" 
          style={{ backgroundColor: item.accentColor }} 
        />
        <div className="relative w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center z-10">
          <Icon size={18} style={{ color: item.accentColor }} strokeWidth={2.5} />
        </div>
      </div>

      {/* Tarjeta de Contenido Glassmorphism (Ajustada para centrado y legibilidad) */}
      <div 
        className={cn(
          "flex-1 relative rounded-2xl p-6 border transition-all duration-500",
          "border-white/[0.08] bg-white/[0.02] backdrop-blur-xl",
          isHovered ? "border-white/20 bg-white/[0.04]" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <BorderBeam 
            size={180} 
            duration={3} 
            colorFrom={item.accentColor} 
            colorTo="transparent" 
          />
        )}

        {/* Etiqueta de Categoría - RESTRICCIÓN: font-bold */}
        <div 
          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/5"
          style={{ backgroundColor: `${item.accentColor}15`, color: item.accentColor }}
        >
          {item.tag}
        </div>

        {/* Fecha y Periodo - RESTRICCIÓN: font-normal */}
        <p className="text-[11px] font-normal tracking-[0.2em] mb-1 opacity-40 uppercase">
          {item.date}
        </p>

        {/* Título del Puesto - RESTRICCIÓN: font-bold */}
        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight leading-tight">
          {item.title}
        </h3>

        {/* Descripción - RESTRICCIÓN: Eliminado text-balance para evitar espacios injustificados */}
        <p className="text-sm text-muted-foreground leading-relaxed font-normal opacity-80">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}