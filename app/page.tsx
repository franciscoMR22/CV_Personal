/* Revisión ID: CV06032026005-SLIDES-FIXED2
   Created by: Francisco Mireles Rodriguez 
   Update: Fondo transparente en contenedor principal para ver partículas */

'use client'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useTheme } from 'next-themes'
import Script from 'next/script'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { 
  Github, Linkedin, Instagram, MessageCircle, Twitter, Cpu, Search, ChevronLeft, ChevronRight, X, ChevronUp, ChevronDown
} from 'lucide-react'

import { certificatesData, projectsData } from '@/app/data/portfolio-data'
import { IsometricArchitecture } from '@/components/isometric-architecture'
import { CertificateCard } from '@/components/certificate-card'
import { PdfModal } from '@/components/pdf-modal'
import { useAvatarParticles } from '@/hooks/use-avatar-particles'
import { Timeline } from '@/components/time-line/timeline'
import { withBase } from '@/lib/base-path'

declare global { interface Window { particlesJS: any; } }

const slideVariants: any = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
  }),
}

export default function FranciscoPortfolioV6() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [selectedCert, setSelectedCert] = useState<any>(null)
  const modalOpen = !!selectedProject || !!selectedCert
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const scrollThreshold = 80
  const deltaRef = useRef(0)
  const lastWheelRef = useRef(0)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { isAssembled, showFinal } = useAvatarParticles({
    canvasRef,
    containerRef,
    imagePath: withBase('/avatar.png'),
    mounted,
    offsetX: -12,   // ← mismo valor que en la clase de la imagen
    offsetY: 0,
  })

  const lightParticles = useMemo(() => {
    return [...Array(300)].map(() => {
      const theta = 2 * Math.PI * Math.random(); const u = Math.random() + Math.random();
      const r = u > 1 ? 2 - u : u; const x = r * Math.cos(theta) * 150; const y = r * Math.sin(theta) * 150;
      const c = Math.sqrt(Math.pow(r * Math.cos(theta), 2) + Math.pow(r * Math.sin(theta), 2));
      const d = Math.sin(c * Math.PI / 2); const baseHue = 60; const hueShift = -160;
      return { background: `hsla(${baseHue + d * hueShift}, 100%, ${80 - 30 * d}%, 1)`, transform: `translate3d(${x}vmin, ${y}vmin, 0) scale(${1 - d})`, animationDelay: `${-2.1 * Math.random() * 18000}ms` };
    });
  }, []);

  const initParticles = () => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        "particles": { "number": { "value": 600, "density": { "enable": false } }, "color": { "value": "#ffebb6" }, "shape": { "type": "star" }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0 } }, "size": { "value": 2, "random": true, "anim": { "enable": true, "speed": 16.67, "size_min": 0 } }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 2, "direction": "top-right", "random": true, "out_mode": "bounce" } },
        "interactivity": { "detect_on": "canvas", "events": { "resize": true } }, "retina_detect": true
      });
    }
  }

  const goToSlide = useCallback((index: number) => {
    if (isSliding) return
    if (index < 0) index = 3
    if (index > 3) index = 0
    setDirection(index > activeSlide ? 1 : -1)
    setActiveSlide(index)
    setIsSliding(true)
    setTimeout(() => setIsSliding(false), 800)
  }, [activeSlide, isSliding])

  const nextSlide = useCallback(() => goToSlide(activeSlide + 1), [activeSlide, goToSlide])
  const prevSlide = useCallback(() => goToSlide(activeSlide - 1), [activeSlide, goToSlide])

  // Un elemento interno con scroll propio (p. ej. la línea de tiempo) consume la rueda antes de cambiar de slide
  const canScrollInside = (target: EventTarget | null, dir: number) => {
    let el = target instanceof HTMLElement ? target : null
    while (el && el !== document.body) {
      const oy = getComputedStyle(el).overflowY
      if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
        if (dir > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true
        if (dir < 0 && el.scrollTop > 0) return true
      }
      el = el.parentElement
    }
    return false
  }

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isSliding || modalOpen) return
    const dir = Math.sign(e.deltaY)
    if (dir === 0) return
    const now = performance.now()
    if (now - lastWheelRef.current > 200 || Math.sign(deltaRef.current) !== dir) deltaRef.current = 0
    lastWheelRef.current = now
    if (canScrollInside(e.target, dir)) { deltaRef.current = 0; return }
    deltaRef.current += e.deltaY * (e.deltaMode === 1 ? 16 : 1)
    if (Math.abs(deltaRef.current) >= scrollThreshold) {
      deltaRef.current = 0
      dir > 0 ? nextSlide() : prevSlide()
    }
  }, [isSliding, modalOpen, nextSlide, prevSlide])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isSliding || modalOpen) return
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      nextSlide()
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      prevSlide()
    }
  }, [isSliding, modalOpen, nextSlide, prevSlide])

  useEffect(() => {
    setMounted(true)
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleWheel, handleKeyDown])

  const filteredCertificates = certificatesData.filter(cert => cert.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (!mounted) return null

  return (
    <div className="h-screen overflow-hidden bg-transparent"> {/* Fondo transparente */}
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" onLoad={initParticles} />
      <div id="particles-js" className={theme === 'dark' ? 'opacity-100' : 'opacity-0'} />
      <div className={`light-particles-container ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
        {lightParticles.map((style, i) => (<div key={i} className="particle" style={style} />))}
      </div>
      
      <canvas ref={canvasRef} className={`avatar-canvas fixed top-0 left-0 w-full h-full pointer-events-none z-[40] transition-opacity duration-1500 ${isAssembled ? 'opacity-0' : 'opacity-100'}`} />

      <nav className={`nav ${activeSlide > 0 ? 'affix' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <div className="logo"><a href="#" onClick={() => goToSlide(0)} className="text-2xl font-bold tracking-tighter">FMR.</a></div>
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
               {['Inicio', 'Experiencia', 'Certificados', 'Proyectos'].map((item, idx) => (
                 <li key={item}>
                   <button 
                    onClick={() => goToSlide(idx)} 
                    className={`uppercase text-xs tracking-widest transition-all ${activeSlide === idx ? 'nav-link-active' : 'opacity-70 hover:opacity-100'}`}
                   >
                     {item}
                   </button>
                 </li>
               ))}
            </ul>
            <div className="flex gap-4 items-center ml-4 border-l border-glass-border pl-8">
              <a href="https://github.com/franciscoMR22" target="_blank" className="opacity-60 hover:opacity-100"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/mireles-rodriguez-francisco-47475b272/" target="_blank" className="opacity-60 hover:opacity-100"><Linkedin size={20}/></a>
              <a href="https://wa.me/5560134264" target="_blank" className="opacity-60 hover:opacity-100"><MessageCircle size={20}/></a>
              <a href="https://www.instagram.com/francisco_mir_rod/" target="_blank" className="opacity-60 hover:opacity-100"><Instagram size={20}/></a>
              <a href="https://x.com/FranciscoMirRod" target="_blank" className="opacity-60 hover:opacity-100"><Twitter size={20}/></a>
              <label className="ui-switch scale-75 ml-2">
                <input type="checkbox" checked={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                <div className="slider"><div className="circle"></div></div>
              </label>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[100] flex flex-col gap-4">
        <button onClick={prevSlide} className="p-3 rounded-full bg-glass backdrop-blur-xl border border-glass-border text-foreground/70 hover:text-primary transition-colors disabled:opacity-30" disabled={isSliding} aria-label="Anterior"><ChevronUp size={24} /></button>
        <button onClick={nextSlide} className="p-3 rounded-full bg-glass backdrop-blur-xl border border-glass-border text-foreground/70 hover:text-primary transition-colors disabled:opacity-30" disabled={isSliding} aria-label="Siguiente"><ChevronDown size={24} /></button>
      </div>

      <div className="relative h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full overflow-y-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {activeSlide === 0 && (
              <section className="min-h-screen w-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-10">
                    <div className={`space-y-4 transition-all duration-1000 ${showFinal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <p className="text-xl text-primary tracking-tighter font-bold uppercase">Gestor de proyectos y líder técnico</p>
                      <h1 className="text-6xl md:text-8xl tracking-tight leading-[0.9] font-bold">
                        Soluciones de TI<br />
                        <span className="text-primary font-normal">con visión estratégica.</span>
                      </h1>
                    </div>
                    <div className={`space-y-8 transition-all duration-1000 delay-500 ${showFinal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <p className="text-xl opacity-60 max-w-lg leading-relaxed font-normal">Graduado de UPIICSA IPN. Especialista en gestión de proyectos y gobernanza de TI, enfocado en optimizar procesos mediante arquitecturas robustas.</p>
                      <button onClick={() => window.open('https://wa.me/5560134264')} className="animated-button">
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        <span className="text">Contactar</span><span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div ref={containerRef} className={`avatar-container w-full max-w-[450px] p-0 transition-all ${showFinal ? 'active-frame shadow-2xl' : ''}`}>
                      <img src={withBase('/avatar.png')} alt="Francisco" className={`w-full h-auto block rounded-[36px] transition-all duration-1000 ease-out relative -left-[12px] ${isAssembled ? 'opacity-100 blur-0' : 'opacity-0 blur-2xl'}`} />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSlide === 1 && (
              <section className="min-h-screen w-full">
                <div className="split-experience-layout h-screen">
                  <div className="experience-left-static">
                    <h2 className="text-7xl font-bold uppercase leading-[0.8] tracking-tighter">
                      Trayectoria<br />
                      <span className="text-primary font-normal">Profesional</span>
                    </h2>
                    <p className="mt-8 opacity-40 uppercase tracking-[0.4em] text-xs font-bold">Hitos y Experiencia Laboral</p>
                  </div>
                  <div className="experience-right-scroll">
                    <Timeline />
                  </div>
                </div>
              </section>
            )}

            {activeSlide === 2 && (
              <section className="min-h-screen w-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
                    <h2 className="text-4xl uppercase tracking-tighter font-bold">Certificaciones</h2>
                    <div className="relative w-full max-w-sm">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} />
                      <input type="text" placeholder="Buscar..." className="search-input pl-12 font-normal" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredCertificates.map((cert, i) => (
                      <CertificateCard key={i} cert={cert} onOpen={setSelectedCert} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeSlide === 3 && (
              <section className="min-h-screen w-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full space-y-12">
                  <h2 className="text-4xl uppercase tracking-tighter text-center font-bold">Proyectos Destacados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {projectsData.map((proj) => (
                      <div key={proj.id} onClick={() => setSelectedProject(proj)} className={`group cursor-pointer relative bg-glass backdrop-blur-xl border border-glass-border rounded-[32px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[1.02] ${proj.featured ? 'md:col-span-2' : ''}`}>
                        <div className="relative z-10">
                          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{proj.category}</p>
                          <h3 className={`font-bold leading-tight mb-4 ${proj.featured ? 'text-3xl' : 'text-2xl'}`}>{proj.title}</h3>
                          <p className="opacity-70 text-sm max-w-md leading-relaxed font-normal">{proj.description}</p>
                        </div>
                        <div className="mt-8 flex items-end justify-between relative z-10">
                          <div className="text-xs font-bold opacity-60"><p>{proj.metrics?.left}</p><p>{proj.metrics?.right}</p></div>
                          <div className="flex items-center gap-3 text-primary"><span className="text-[10px] uppercase font-bold opacity-40">Arquitectura</span><Cpu size={22} /></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <PdfModal title={selectedCert.name} file={selectedCert.file} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            <div className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center justify-center">
              <button onClick={() => setSelectedProject(null)} className="absolute top-0 right-0 p-8 text-white/50 hover:text-primary transition-colors"><X size={48}/></button>
              <div className="text-center mb-10">
                <Badge variant="outline" className="text-primary border-primary mb-6 py-1 px-4 font-bold">{selectedProject.category}</Badge>
                <h2 className="text-6xl font-bold tracking-tight text-white mb-6 uppercase">{selectedProject.title}</h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto font-normal">{selectedProject.description}</p>
              </div>
              <div className="mt-4"><IsometricArchitecture layers={selectedProject.layers} isExpanded={true} /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}