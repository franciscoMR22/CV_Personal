/* Revisión ID: CV03032026004
   Created by: Francisco Mireles Rodriguez 
   Debug Version: 03-03-2026 08:50 PM */

'use client'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useTheme } from 'next-themes'
import Script from 'next/script'
import { Badge } from '@/components/ui/badge'
import { 
  Github, Linkedin, Instagram, MessageCircle, Twitter, Cpu, Search, Briefcase, Terminal, Smartphone, ChevronLeft, ChevronRight, X 
} from 'lucide-react'

// SEGMENTACIÓN: Importamos datos, componentes y hooks
import { certificatesData, projectsData } from '@/app/data/portfolio-data'
import { IsometricArchitecture } from '@/components/isometric-architecture'
import { CertificateCard } from '@/components/certificate-card'
import { useAvatarParticles } from '@/hooks/use-avatar-particles'

declare global { interface Window { particlesJS: any; } }

export default function FranciscoPortfolioV5() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // LLAMADA AL HOOK (Sincronizada con el estado mounted)
  const { isAssembled, showFinal } = useAvatarParticles({
    canvasRef,
    containerRef,
    imagePath: '/avatar.png',
    mounted // <-- Se pasa el estado para activar la carga en el momento correcto
  })

  // --- LOGS DE DEPURACIÓN ---
  useEffect(() => {
    if (mounted) {
      console.log("ESTADO: Componente montado correctamente.");
      console.log("ESTADO AVATAR: showFinal =", showFinal, "| isAssembled =", isAssembled);
    }
  }, [mounted, showFinal, isAssembled]);

  const lightParticles = useMemo(() => {
    return [...Array(600)].map(() => {
      const theta = 2 * Math.PI * Math.random(); const u = Math.random() + Math.random();
      const r = u > 1 ? 2 - u : u; const x = r * Math.cos(theta) * 150; const y = r * Math.sin(theta) * 150;
      const c = Math.sqrt(Math.pow(r * Math.cos(theta), 2) + Math.pow(r * Math.sin(theta), 2));
      const d = Math.sin(c * Math.PI / 2); const baseHue = 60; const hueShift = -160;
      return { background: `hsla(${baseHue + d * hueShift}, 100%, ${80 - 30 * d}%, 1)`, transform: `translate3d(${x}vmin, ${y}vmin, 0) scale(${1 - d})`, animationDelay: `${-2.1 * Math.random() * 18000}ms` };
    });
  }, []);

  useEffect(() => { 
    setMounted(true) 
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const initParticles = () => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        "particles": { "number": { "value": 600, "density": { "enable": false } }, "color": { "value": "#ffebb6" }, "shape": { "type": "star" }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0 } }, "size": { "value": 2, "random": true, "anim": { "enable": true, "speed": 16.67, "size_min": 0 } }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 2, "direction": "top-right", "random": true, "out_mode": "bounce" } },
        "interactivity": { "detect_on": "canvas", "events": { "resize": true } }, "retina_detect": true
      });
    }
  }

  const filteredCertificates = certificatesData.filter(cert => cert.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const nextSlide = useCallback(() => { setCurrentIndex((prev) => (prev >= filteredCertificates.length - 4 ? 0 : prev + 1)); }, [filteredCertificates.length]);
  const prevSlide = useCallback(() => { setCurrentIndex((prev) => (prev === 0 ? Math.max(0, filteredCertificates.length - 4) : prev - 1)); }, [filteredCertificates.length]);
  useEffect(() => { const autoScroll = setInterval(nextSlide, 5000); return () => clearInterval(autoScroll); }, [nextSlide]);
  
  if (!mounted) return null

  //********************************Estructura de la página */
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" onLoad={initParticles} />
      <div id="particles-js" className={theme === 'dark' ? 'opacity-100' : 'opacity-0'} />
      <div className={`light-particles-container ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>{lightParticles.map((style, i) => (<div key={i} className="particle" style={style} />))}</div>
      
      {/* Canvas de Partículas */}
      <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[40] transition-opacity duration-1500 ${isAssembled ? 'opacity-0' : 'opacity-100'}`} />

      <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <div className="logo"><a href="#" className="text-2xl font-bold tracking-tighter">FMR.</a></div>
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
               {['Experiencia', 'Certificados', 'Proyectos', 'Investigación'].map((item) => (<li key={item}><a href={`#${item.toLowerCase()}`} className="opacity-70 hover:opacity-100 uppercase text-xs tracking-widest">{item}</a></li>))}
            </ul>
            <div className="flex gap-4 items-center ml-4 border-l border-glass-border pl-8">
              <a href="https://github.com/franciscoMR22" target="_blank" className="opacity-60 hover:opacity-100"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/mireles-rodriguez-francisco-47475b272/" target="_blank" className="opacity-60 hover:opacity-100"><Linkedin size={20}/></a>
              <a href="https://wa.me/5560134264" target="_blank" className="opacity-60 hover:opacity-100"><MessageCircle size={20}/></a>
              <a href="https://www.instagram.com/francisco_mir_rod/" target="_blank" className="opacity-60 hover:opacity-100"><Instagram size={20}/></a>
              <a href="https://x.com/FranciscoMirRod" target="_blank" className="opacity-60 hover:opacity-100"><Twitter size={20}/></a>
              <label className="ui-switch scale-75 ml-2"><input type="checkbox" checked={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><div className="slider"><div className="circle"></div></div></label>
            </div>
          </div>
        </div>
      </nav>

     <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 space-y-16 relative z-50">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          <div className="space-y-10 pt-10">
            <div className={`space-y-4 transition-all duration-1000 ${showFinal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-xl text-primary tracking-tighter font-bold italic">Gestor de proyectos y diseñador multimedia</p>
              <h1 className="text-6xl md:text-8xl tracking-tight leading-[0.9]"><span className="block tracking-in-expand">Soluciones creativas</span><span className="block tracking-in-expand" style={{ animationDelay: '0.6s' }}>que transforman.</span></h1>
            </div>
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${showFinal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-xl opacity-60 max-w-lg leading-relaxed font-light">Bienvenido a mi espacio creativo. Soy Francisco Mireles, gestor de proyectos y diseñador multimedia con 3 años de experiencia en desarrollo web, mapeo de procesos y diseño de interfaces.</p>
              <button onClick={() => window.open('https://wa.me/5560134264')} className="animated-button"><svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg><span className="text">Contactar</span><span className="circle"></span><svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div ref={containerRef} className={`avatar-container w-full max-w-[450px] p-0 transition-all ${showFinal ? 'active-frame shadow-2xl' : ''}`}>
              <img src="/avatar.png" alt="Francisco" className={`w-full h-auto block rounded-[36px] transition-all duration-1000 ease-out relative -left-[12px] ${isAssembled ? 'opacity-100 blur-0' : 'opacity-0 blur-2xl'}`} />
            </div>
          </div>
        </section>

        {/* --- SECCIÓN EXPERIENCIA --- */}
        <section id="experiencia" className="space-y-6 scroll-mt-32">
          <h2 className="text-4xl uppercase tracking-tighter text-center">Experiencia Profesional</h2>
          <div className="node-container overflow-x-auto lg:overflow-x-visible pb-10">
            <svg className="connection-svg-h hidden lg:block" viewBox="0 0 1200 100"><path className="line-path-h" d="M380 50 L 410 50 M 790 50 L 820 50" /></svg>
            <div className="node group shrink-0"><div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><Briefcase size={24} /></div><div><h3 className="text-xl font-bold text-primary leading-tight">Practicante TI</h3><p className="text-[12px] opacity-50 uppercase tracking-widest">ARMUR | 01/2023 – 12/2025</p></div></div><ul className="space-y-2 text-lg opacity-80 pl-4 border-l-2 border-primary/30"><li>• Seguridad de accesos físico y lógico.</li><li>• Aplicaciones en Power Platform.</li><li>• Manuales de procedimientos operativos.</li><li>• Requerimientos para proyectos .NET.</li><li>• SQL, identificaciones y control de acceso.</li></ul></div>
            <div className="node group shrink-0"><div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><Terminal size={24} /></div><div><h3 className="text-xl font-bold text-primary leading-tight">Becario TI</h3><p className="text-[12px] opacity-50 uppercase tracking-widest">Grupo CISA | 11/2022 – 10/2023</p></div></div><ul className="space-y-2 text-lg opacity-80 pl-4 border-l-2 border-primary/30"><li>• Creación y testeo de páginas web.</li><li>• Manejo de Azure y Office 365.</li><li>• Consultas SQL Server.</li><li>• Documentación técnica y capacitaciones.</li></ul></div>
            <div className="node group shrink-0"><div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><Smartphone size={24} /></div><div><h3 className="text-xl font-bold text-primary removable text-primary leading-tight">Técnico Reparación</h3><p className="text-[12px] opacity-50 uppercase tracking-widest">03/2017 - Actualidad</p></div></div><ul className="space-y-2 text-lg opacity-80 pl-4 border-l-2 border-primary/30"><li>• Reparación hardware/software.</li><li>• Elaboración de informes técnicos.</li><li>• Mantenimiento preventivo.</li><li>• Manejo de itinerarios y atención.</li></ul></div>
          </div>
        </section>

        <section id="certificados" className="space-y-6 scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
            <h2 className="text-4xl uppercase tracking-tighter">Certificaciones</h2>
            <div className="relative w-full max-w-sm"><Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} /><input type="text" placeholder="Buscar certificación..." className="search-input pl-12" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentIndex(0); }} /></div>
          </div>
          <div className="relative group overflow-hidden"><div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / Math.min(4, filteredCertificates.length))}%)`, transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)' }}>{filteredCertificates.map((cert, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2"><CertificateCard cert={cert} /></div>
          ))}</div>{filteredCertificates.length > 4 && (<><button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-glass/80 backdrop-blur-md hover:bg-primary hover:text-white p-3 rounded-full shadow-xl z-50 transition-all"><ChevronLeft size={24} /></button><button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-glass/80 backdrop-blur-md hover:bg-primary hover:text-white p-3 rounded-full shadow-xl z-50 transition-all"><ChevronRight size={24} /></button></>)}</div>
        </section>

        <section id="proyectos" className="space-y-12 scroll-mt-32">
          <h2 className="text-4xl uppercase tracking-tighter text-center">Proyectos Seleccionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {projectsData.map((proj) => (
              <div key={proj.id} onClick={() => setSelectedProject(proj)} className={`group cursor-pointer relative bg-glass backdrop-blur-xl border border-glass-border rounded-[32px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-primary ${proj.featured ? 'md:col-span-2' : ''}`}>
                {proj.layers && <div className="hover-preview opacity-0 group-hover:opacity-20 transition-all duration-700"><IsometricArchitecture layers={proj.layers} isExpanded={false} /></div>}
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
                <div className="relative z-10"><p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{proj.category}</p><h3 className={`font-bold leading-tight mb-4 ${proj.featured ? 'text-3xl' : 'text-2xl'}`}>{proj.title}</h3><p className="opacity-70 text-sm max-w-md leading-relaxed">{proj.description}</p></div>
                <div className="mt-8 flex items-end justify-between relative z-10"><div className="text-xs font-medium opacity-60"><p>{proj.metrics?.left}</p><p>{proj.metrics?.right}</p></div><div className="flex items-center gap-3 text-primary"><span className="text-[10px] uppercase font-bold tracking-tighter opacity-40">Ver Arquitectura</span><Cpu size={22} /></div></div>
              </div>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-in fade-in duration-500">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            <div className="relative w-full max-w-5xl h-[85vh] flex flex-col items-center justify-center overflow-hidden">
              <button onClick={() => setSelectedProject(null)} className="absolute top-0 right-0 p-8 text-white/50 hover:text-primary transition-colors z-[2001]"><X size={48}/></button>
              <div className="text-center mb-10 animate-in slide-in-from-top duration-700"><Badge variant="outline" className="text-primary border-primary mb-6 py-1 px-4">{selectedProject.category}</Badge><h2 className="text-6xl font-bold tracking-tight text-white mb-6 uppercase italic">{selectedProject.title}</h2><p className="text-xl text-white/60 max-w-2xl mx-auto font-light">{selectedProject.description}</p></div>
              <div className="mt-4"><IsometricArchitecture layers={selectedProject.layers} isExpanded={true} /></div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}