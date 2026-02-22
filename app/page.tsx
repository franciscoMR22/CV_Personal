'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Badge } from '@/components/ui/badge'
import { 
  Award, ChevronRight, Github, Linkedin, Instagram, MessageCircle, Twitter, Cpu 
} from 'lucide-react'

export default function FranciscoPortfolioV5() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAssembled, setIsAssembled] = useState(false) 
  const [showFinal, setShowFinal] = useState(false) 
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  // --- MOTOR DE PARTÍCULAS COORDINADO ---
  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return
    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const image = new Image()
    image.src = '/avatar.png'
    const dpr = window.devicePixelRatio || 1

    class Particle {
      x: number; y: number; tX: number; tY: number;
      color: string; size: number; ease: number; opacity: number;

      constructor(tx: number, ty: number, color: string) {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.tX = tx; this.tY = ty
        this.color = color
        this.size = 2.4 * dpr
        this.ease = 0.16
        this.opacity = 0
      }

      draw() {
        if (!ctx || this.opacity <= 0) return
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.size, this.size)
      }

      update(rect: DOMRect) {
        const destX = rect.left + this.tX
        const destY = rect.top + this.tY
        const dx = destX - this.x
        const dy = destY - this.y
        this.x += dx * this.ease
        this.y += dy * this.ease
        this.opacity = Math.min(1, (1 - Math.sqrt(dx*dx + dy*dy) / 500) * 3)
      }
    }

    const init = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      
      const cW = container.clientWidth
      const cH = (image.height / image.width) * cW
      const tempC = document.createElement('canvas')
      const tempCtx = tempC.getContext('2d')
      if (!tempCtx) return
      tempC.width = cW; tempC.height = cH
      tempCtx.drawImage(image, 0, 0, cW, cH)
      const data = tempCtx.getImageData(0, 0, cW, cH).data

      particles = []
      for (let y = 0; y < cH; y += 2.5) {
        for (let x = 0; x < cW; x += 2.5) {
          const i = (Math.floor(y) * cW + Math.floor(x)) * 4
          if (data[i + 3] > 128) {
            particles.push(new Particle(x, y, `rgb(${data[i]},${data[i+1]},${data[i+2]})`))
          }
        }
      }
    }

    image.onload = () => { init(); animate(); }

    const animate = () => {
      if (!ctx || !containerRef.current) return
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      const rect = containerRef.current.getBoundingClientRect()
      let settled = true
      particles.forEach(p => {
        p.update(rect); p.draw()
        if (settled && Math.abs(p.x - (rect.left + p.tX)) > 0.1) settled = false
      })

      if (!settled) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setIsAssembled(true)
        setTimeout(() => setShowFinal(true), 1000)
      }
    }

    window.addEventListener('resize', init)
    return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', init); }
  }, [mounted])

  const navItems = [
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Certificados', href: '#certificados' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Investigación', href: '#investigacion' }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen relative font-sans">
      
      <canvas 
        ref={canvasRef} 
        className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[60] transition-opacity duration-1000 ${isAssembled ? 'opacity-0' : 'opacity-100'}`}
        style={{ width: '100vw', height: '100vh' }}
      />

      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 bg-background/80 backdrop-blur-md border-b border-glass-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="https://github.com/franciscoMR22" target="_blank" className="opacity-60 hover:opacity-100 transition-all"><Github size={28}/></a>
            <a href="https://www.linkedin.com/in/mireles-rodriguez-francisco-47475b272/" target="_blank" className="opacity-60 hover:opacity-100 transition-all"><Linkedin size={28}/></a>
            <a href="https://wa.me/5560134264" target="_blank" className="opacity-60 hover:opacity-100 transition-all"><MessageCircle size={28}/></a>
            <a href="https://www.instagram.com/francisco_mir_rod/" target="_blank" className="opacity-60 hover:opacity-100 transition-all"><Instagram size={28}/></a>
            <a href="https://x.com/FranciscoMirRod" target="_blank" className="opacity-60 hover:opacity-100 transition-all"><Twitter size={28}/></a>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link relative py-1 group font-medium opacity-70 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <label className="ui-switch scale-90">
            <input type="checkbox" checked={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            <div className="slider"><div className="circle"></div></div>
          </label>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 space-y-32">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 pt-10 flex flex-col items-start">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-[0.9] dark:text-white text-slate-900">
                <span className={`block ${isAssembled ? 'tracking-in-expand' : 'opacity-0'}`}>Soluciones creativas</span>
                <span className={`block ${isAssembled ? 'tracking-in-expand delay-row-2' : 'opacity-0'}`}>que transforman.</span>
              </h1>
            </div>

            <div className={`space-y-8 transition-all ${showFinal ? 'blur-in' : 'opacity-0'}`}>
              <p className="text-2xl font-bold text-primary italic">Gestor de proyectos y Consultor</p>
              <p className="text-xl opacity-60 max-w-lg leading-relaxed font-light">
                Soy **Francisco Mireles**, egresado de UPIICSA y especializado en arquitectura de sistemas.
              </p>
              <button className="cta mt-4" onClick={() => window.open('https://wa.me/5560134264')}>
                <span className="font-bold">Contactar</span>
                <svg className="ml-2" viewBox="0 0 13 10" height="10px" width="15px"><path d="M1,5 L11,5" stroke="currentColor" strokeWidth="2" fill="none"/><polyline points="8 1 12 5 8 9" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {/* MARCO QUE APARECE CON BLUR-IN */}
            <div 
              ref={containerRef} 
              className={`avatar-container w-full max-w-[500px] p-2 relative transition-all ${showFinal ? 'blur-in active-frame' : ''}`}
              style={{ aspectRatio: '4/5' }}
            >
              <img 
                src="/avatar.png" 
                alt="Francisco Mireles"
                className={`w-full h-full object-cover rounded-[36px] transition-opacity duration-[1500ms] ${isAssembled ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
        </section>

        {/* SECCIÓN EXPERIENCIA */}
        <section id="experiencia" className="space-y-12 scroll-mt-32">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Historial Profesional</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 border-2 border-primary/20 hover:border-primary transition-all group">
              <p className="text-primary font-bold text-sm mb-2 opacity-60 italic">2023 - 2025</p>
              <h3 className="text-2xl font-bold mb-1 italic">Practicante TI</h3>
              <p className="opacity-60 mb-6 font-medium italic">ARMUR Soluciones - Grupo FEMSA</p>
              <ul className="space-y-2 text-sm opacity-80 italic">
                  <li>• Seguridad de accesos</li>
                  <li>• Power Platform</li>
                  <li>• Proyectos .NET</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECCIÓN CERTIFICADOS */}
        <section id="certificados" className="space-y-8 scroll-mt-32">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Acreditaciones</h2>
          <div className="flex flex-wrap gap-4">
            {['PMI Project Management', 'Scrum Master Cert.', 'IT Governance COBIT', 'Google Analytics'].map((cert) => (
              <div key={cert} className="glass-panel px-6 py-4 border-2 border-primary/5 font-bold italic text-sm">{cert}</div>
            ))}
          </div>
        </section>

        {/* SECCIÓN PROYECTOS */}
        <section id="proyectos" className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-32">
          <div className="glass-panel p-12 border-2 border-primary/20 lg:col-span-12 space-y-6">
            <Badge className="bg-primary/20 text-primary border-none px-4 uppercase text-[10px]">Arquitectura Microservicios</Badge>
            <h3 className="text-4xl font-black tracking-tighter uppercase italic">Repostería Core / Gestión OMS</h3>
            <p className="opacity-60 leading-relaxed font-light">Diseño integral de backend para gestión de pedidos bajo modelos de escalabilidad horizontal.</p>
          </div>
        </section>

        {/* SECCIÓN INVESTIGACIÓN */}
        <section id="investigacion" className="glass-panel p-10 border-2 border-primary/20 bg-slate-900/10 flex flex-col md:flex-row items-center justify-between gap-8 scroll-mt-32">
          <div className="flex items-center gap-8">
            <div className="p-6 rounded-3xl bg-primary/10 text-primary border border-primary/20">
              <Cpu size={48}/>
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl font-black uppercase tracking-tighter italic">Gobernanza & Hardening</h4>
              <p className="opacity-60 text-sm max-w-md italic">Investigación activa en seguridad de infraestructuras críticas y hardening de nodos Linux.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-center group"><p className="text-2xl font-black group-hover:text-primary transition-colors italic">Ubuntu</p></div>
            <div className="text-center group"><p className="text-2xl font-black group-hover:text-primary transition-colors italic">HP-G1</p></div>
          </div>
        </section>

      </main>

      <footer className="py-20 text-center opacity-20 text-[10px] font-bold uppercase tracking-[0.8em] border-t border-primary/5 mx-6">
        Francisco Mireles Rodríguez // Lead Technical Project Manager
      </footer>
    </div>
  )
}