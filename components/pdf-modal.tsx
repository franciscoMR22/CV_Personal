/*  Modal flotante para visualizar los certificados (PDF) dentro de la página

    Revisión ID: CV19102026001
    Created by: Francisco Mireles Rodriguez
*/

'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink, X } from 'lucide-react'
import { withBase } from '@/lib/base-path'

interface PdfModalProps {
  title: string
  file: string
  onClose: () => void
}

export const PdfModal = ({ title, file, onClose }: PdfModalProps) => {
  const url = encodeURI(withBase(file))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative flex flex-col w-full max-w-5xl h-[88vh] rounded-2xl overflow-hidden border border-glass-border bg-background shadow-2xl"
      >
        <header className="flex items-center justify-between gap-4 px-5 py-3 border-b border-glass-border">
          <h3 className="text-sm md:text-base font-bold truncate">{title}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <a href={url} download className="p-2 rounded-full opacity-70 hover:opacity-100 hover:text-primary transition-colors" aria-label="Descargar PDF"><Download size={18} /></a>
            <a href={url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full opacity-70 hover:opacity-100 hover:text-primary transition-colors" aria-label="Abrir en una pestaña nueva"><ExternalLink size={18} /></a>
            <button onClick={onClose} className="p-2 rounded-full opacity-70 hover:opacity-100 hover:text-primary transition-colors" aria-label="Cerrar"><X size={20} /></button>
          </div>
        </header>
        <object data={url} type="application/pdf" className="flex-1 w-full bg-white">
          <div className="h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="opacity-70">Tu navegador no puede mostrar el PDF aquí.</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline">Abrir el certificado</a>
          </div>
        </object>
      </motion.div>
    </motion.div>
  )
}
