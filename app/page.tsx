'use client'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useTheme } from 'next-themes'
import Script from 'next/script'
import { Badge } from '@/components/ui/badge'
import { 
  Github, Linkedin, Instagram, MessageCircle, Twitter, Cpu, Search, Briefcase, Terminal, Smartphone, ChevronLeft, ChevronRight
} from 'lucide-react'

declare global { interface Window { particlesJS: any; } }

// --- COMPONENTE TARJETA PARALLAX ---
const CertificateCard = ({ cert }: { cert: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - left; const offsetY = e.clientY - top;
    const X = (-(offsetX - (width / 2)) / 3) / 3; const Y = ((offsetY - (height / 2)) / 3) / 3;
    containerRef.current.style.setProperty('--rY', X.toFixed(2));
    containerRef.current.style.setProperty('--rX', Y.toFixed(2));
    containerRef.current.style.setProperty('--bY', (80 - (X / 4)).toFixed(2) + '%');
    containerRef.current.style.setProperty('--bX', (50 - (Y / 4)).toFixed(2) + '%');
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    if (containerRef.current) {
      containerRef.current.style.setProperty('--rY', '0'); containerRef.current.style.setProperty('--rX', '0');
      containerRef.current.style.setProperty('--bY', '80%'); containerRef.current.style.setProperty('--bX', '50%');
    }
  };

  return (
    <div className="cert-wrap p-2" onMouseMove={handleMouseMove} onMouseEnter={() => setIsActive(true)} onMouseLeave={handleMouseLeave} onClick={() => window.open(`/docs/${cert.file}`, '_blank')}>
      <div ref={containerRef} className={`cert-container ${isActive ? 'active' : ''}`}>
        <h3>{cert.name}</h3>
        <p>{cert.date}</p>
      </div>
    </div>
  );
};

export default function FranciscoPortfolioV5() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAssembled, setIsAssembled] = useState(false) 
  const [showFinal, setShowFinal] = useState(false) 
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const lightParticles = useMemo(() => {
    return [...Array(600)].map(() => {
      const theta = 2 * Math.PI * Math.random(); const u = Math.random() + Math.random();
      const r = u > 1 ? 2 - u : u; const x = r * Math.cos(theta) * 150; const y = r * Math.sin(theta) * 150;
      const c = Math.sqrt(Math.pow(r * Math.cos(theta), 2) + Math.pow(r * Math.sin(theta), 2));
      const d = Math.sin(c * Math.PI / 2); const baseHue = 60; const hueShift = -160;
      return { background: `hsla(${baseHue + d * hueShift}, 100%, ${80 - 30 * d}%, 1)`, transform: `translate3d(${x}vmin, ${y}vmin, 0) scale(${1 - d})`, animationDelay: `${-2.1 * Math.random() * 18000}ms` };
    });
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const certificatesData = [
    { name: 'Optimiza tu trabajo con Microsoft 365', date: '02 Feb 2026', file: 'Optimiza tu trabajo con Microsoft 365.pdf' },
    { name: 'Explora una carrera en gestion de proyectos', date: '01 Feb 2026', file: 'Explora una carrera en gestion de proyectos.pdf' },
    { name: 'Fundamentos de la gestión de proyectos: Comunicación', date: '01 Feb 2026', file: 'Fundamentos de la gestion de proyectos Comunicacion.pdf' },
    { name: 'Fundamentos de la gestión de proyectos: Comunicación (PMI)', date: '01 Feb 2026', file: 'Fundamentos de la gestion de proyectos Comunicacion-PMI.pdf' },
    { name: 'Fundamentos de la gestión de proyectos: Presupuestos y beneficios', date: '31 Ene 2026', file: 'Fundamentos de la gestión de proyectos_presupuestos.pdf' },
    { name: 'Fundamentos de la gestión de proyectos', date: '29 Ene 2026', file: 'Fundamentos de la gestión de proyectos.pdf' },
    { name: 'Project Management Institute (PMI)®', date: '29 Ene 2026', file: 'Project Management Institute (PMI)®.pdf' },
    { name: 'Aprende Gemini la IA de Google', date: '28 Jul 2025', file: 'Aprende Gemini la IA de Google.pdf' },
    { name: 'Mejora tu productividad - PMI', date: '27 Ene 2025', file: 'Mejora tu productividad - PMI.pdf' },
    { name: 'Scrum avanzado', date: '22 Ene 2025', file: 'CertificadoDeFinalizacion_Scrum avanzado.pdf' },
    { name: 'Scrum avanzado - PMI', date: '22 Ene 2025', file: 'CertificadoDeFinalizacion_Scrum avanzado - PMI.pdf' },
    { name: 'Fundamentos de ITIL La mejora de servicios', date: '17 Ene 2025', file: 'CertificadoDeFinalizacion_Fundamentos de ITIL La mejora de servicios.pdf' },
    { name: 'Scrum esencial ', date: '19 Oct 2024', file: 'CertificadoDeFinalizacion_Scrum esencial .pdf' },
    { name: 'Recursos humanos estrategicos', date: '23 Sep 2024', file: 'CertificadoDeFinalizacion_Recursos humanos estrategicos.pdf' },
    { name: 'Gestion de proyectos con Microsoft 365', date: '16 Sep 2024', file: 'CertificadoDeFinalizacion_Gestion de proyectos con Microsoft 365.pdf' },
    { name: 'Gestion de proyectos con Microsoft 365 (PMI)', date: '16 Sep 2024', file: 'CertificadoDeFinalizacion_Gestion de proyectos con Microsoft 365 (1).pdf' },
    { name: 'Fundamentos de ITIL Introduccion a la gestion de SI', date: '15 Sep 2024', file: 'CertificadoDeFinalizacion_Fundamentos de ITIL Introduccion a la gestion de sistemas de informacion.pdf' },
    { name: 'C# esencial', date: '21 Ago 2024', file: 'CertificadoDeFinalizacion_C esencial.pdf' },
    { name: 'Introduccion a Microsoft Power Platform', date: '20 Ago 2024', file: 'CertificadoDeFinalizacion_Introduccion a Microsoft Power Platform.pdf' },
    { name: 'JavaScript de 0 a héroe', date: '09 May 2023', file: 'UC-f69e1396-9b08-4b88-814d-1be6b28c2a89.pdf' }
  ]

  const filteredCertificates = certificatesData.filter(cert => cert.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // --- LÓGICA DEL CARRUSEL ---
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= filteredCertificates.length - 4 ? 0 : prev + 1));
  }, [filteredCertificates.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, filteredCertificates.length - 4) : prev - 1));
  }, [filteredCertificates.length]);

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 5000);
    return () => clearInterval(autoScroll);
  }, [nextSlide]);

  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return
    const canvas = canvasRef.current; const container = containerRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true }); if (!ctx) return
    let animationFrameId: number; const image = new Image(); image.src = '/avatar.png';
    const dpr = window.devicePixelRatio || 1;
    class Particle {
      x: number; y: number; tX: number; tY: number; color: string; size: number; ease: number; opacity: number;
      constructor(tx: number, ty: number, color: string) { this.x = Math.random() * window.innerWidth; this.y = Math.random() * window.innerHeight; this.tX = tx; this.tY = ty; this.color = color; this.size = 2.4 * dpr; this.ease = 0.22; this.opacity = 0; }
      draw() { if (!ctx || this.opacity <= 0) return; ctx.globalAlpha = this.opacity; ctx.fillStyle = this.color; ctx.fillRect(this.x * dpr, this.y * dpr, this.size, this.size); }
      update(rect: DOMRect) { const destX = rect.left + this.tX; const destY = rect.top + this.tY; const dx = destX - this.x; const dy = destY - this.y; this.x += dx * this.ease; this.y += dy * this.ease; this.opacity = Math.min(1, (1 - Math.sqrt(dx*dx + dy*dy) / 400) * 4); }
    }
    let particles: Particle[] = [];
    const init = () => {
      canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cW = container.clientWidth; const cH = (image.height / image.width) * cW;
      const tempC = document.createElement('canvas'); const tempCtx = tempC.getContext('2d'); if (!tempCtx) return; tempC.width = cW; tempC.height = cH; tempCtx.drawImage(image, 0, 0, cW, cH);
      const data = tempCtx.getImageData(0, 0, cW, cH).data; particles = [];
      for (let y = 0; y < cH; y += 2.2) { for (let x = 0; x < cW; x += 2.2) { const i = (Math.floor(y) * cW + Math.floor(x)) * 4; if (data[i + 3] > 128) particles.push(new Particle(x, y, `rgb(${data[i]},${data[i+1]},${data[i+2]})`)); } }
    };
    image.onload = () => { init(); animate(); };
    const animate = () => {
      if (!ctx || !containerRef.current) return; ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const rect = containerRef.current.getBoundingClientRect(); let settled = true;
      particles.forEach(p => { p.update(rect); p.draw(); if (settled && Math.abs(p.x - (rect.left + p.tX)) > 0.5) settled = false; });
      if (!settled) animationFrameId = requestAnimationFrame(animate); else { setIsAssembled(true); setTimeout(() => setShowFinal(true), 1500); }
    };
    window.addEventListener('resize', init); return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', init); };
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" onLoad={initParticles} />
      <div id="particles-js" className={theme === 'dark' ? 'opacity-100' : 'opacity-0'} />
      <div className={`light-particles-container ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>{lightParticles.map((style, i) => (<div key={i} className="particle" style={style} />))}</div>
      <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[10] transition-opacity duration-300 ${isAssembled ? 'opacity-0' : 'opacity-100'}`} />

      <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <div className="logo"><a href="#" className="text-2xl font-bold tracking-tighter">FMR.</a></div>
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
               {['Experiencia', 'Certificados', 'Proyectos', 'Investigación'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="opacity-70 hover:opacity-100 uppercase text-xs tracking-widest">{item}</a></li>
              ))}
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

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 pt-10">
            <div className="space-y-4">
              <p className={`text-xl text-primary tracking-tighter font-bold italic transition-all duration-1000 ${showFinal ? 'blur-in' : 'opacity-0'}`}>Gestor de proyectos y diseñador multimedia</p>
              <h1 className="text-6xl md:text-8xl tracking-tight leading-[0.9]"><span className={`block ${isAssembled ? 'tracking-in-expand' : 'opacity-0'}`}>Soluciones creativas</span><span className={`block ${isAssembled ? 'tracking-in-expand' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>que transforman.</span></h1>
            </div>
            <div className={`space-y-8 transition-all duration-1000 ${showFinal ? 'blur-in' : 'opacity-0'}`}>
              <p className="text-xl opacity-60 max-w-lg leading-relaxed font-light">Bienvenido a mi espacio creativo. Soy Francisco Mireles, gestor de proyectos y diseñador multimedia con 3 años de experiencia en desarrollo web, mapeo de procesos y diseño de interfaces.</p>
              <button onClick={() => window.open('https://wa.me/5560134264')} className="animated-button">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                <span className="text">Contactar</span><span className="circle"></span>
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div ref={containerRef} className={`avatar-container w-full max-w-[500px] p-2 transition-all duration-300 ${showFinal ? 'active-frame' : ''}`} style={{ aspectRatio: '4/5' }}>
              <img src="/avatar.png" alt="Francisco" className={`w-full h-full object-cover rounded-[36px] transition-opacity duration-200 ${isAssembled ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </div>
        </section>

        <section id="experiencia" className="space-y-6 scroll-mt-32">
          <h2 className="text-4xl uppercase tracking-tighter text-center">Experiencia Profesional</h2>
          <div className="node-container overflow-x-auto lg:overflow-x-visible pb-10">
            <svg className="connection-svg-h hidden lg:block" viewBox="0 0 1200 100"><path className="line-path-h" d="M380 50 L 410 50 M 790 50 L 820 50" /></svg>
            <div className="node group shrink-0">
              <div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><Briefcase size={24} /></div>
              <div><h3 className="text-lg font-bold text-primary leading-tight">Practicante TI</h3><p className="text-[12px] opacity-50 uppercase tracking-widest">ARMUR | 01/2023 – 12/2025</p></div></div>
              <ul className="space-y-2 text-x opacity-80 pl-4 border-l-2 border-primary/30"><li>• Seguridad de accesos físico y lógico.</li><li>• Aplicaciones en Power Platform.</li><li>• Manuales de procedimientos operativos.</li><li>• Requerimientos para proyectos .NET.</li></ul>
            </div>
            <div className="node group shrink-0">
              <div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><Terminal size={24} /></div>
              <div><h3 className="text-lg font-bold text-primary leading-tight">Becario TI</h3><p className="text-[12px] opacity-50 uppercase tracking-widest">Grupo CISA | 11/2022 – 10/2023</p></div></div>
              <ul className="space-y-2 text-x opacity-80 pl-4 border-l-2 border-primary/30"><li>• Creación y testeo de páginas web.</li><li>• Manejo de Azure y Office 365.</li><li>• Documentación y consultas SQL Server.</li></ul>
            </div>
            <div className="node group shrink-0">
              <div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><Smartphone size={24} /></div>
              <div><h3 className="text-lg font-bold text-primary leading-tight">Técnico Reparación</h3><p className="text-[12px] opacity-50 uppercase tracking-widest">03/2017 - Actualidad</p></div></div>
              <ul className="space-y-2 text-x opacity-80 pl-4 border-l-2 border-primary/30"><li>• Reparación de hardware y software.</li><li>• Elaboración de informes técnicos.</li><li>• Mantenimiento preventivo de equipos.</li></ul>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN DE CERTIFICADOS CON EL CARRUSEL --- */}
        <section id="certificados" className="space-y-6 scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
            <h2 className="text-4xl uppercase tracking-tighter">Certificaciones</h2>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} />
              <input type="text" placeholder="Buscar certificación..." className="search-input pl-12" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentIndex(0); }} />
            </div>
          </div>

          <div className="relative group">
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / Math.min(4, filteredCertificates.length))}%)` }}>
                {filteredCertificates.map((cert, i) => (
                  <div key={i} className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2">
                    <CertificateCard cert={cert} />
                  </div>
                ))}
              </div>

              {/* Botones de Navegación del Carrusel */}
              {filteredCertificates.length > 4 && (
                <>
                  <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-glass/80 backdrop-blur-md hover:bg-primary hover:text-white p-3 rounded-full shadow-xl z-50 transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-glass/80 backdrop-blur-md hover:bg-primary hover:text-white p-3 rounded-full shadow-xl z-50 transition-all">
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Puntos de Navegación (Dots) */}
            {filteredCertificates.length > 4 && (
              <div className="flex justify-center mt-8 space-x-2">
                {[...Array(filteredCertificates.length - 3)].map((_, index) => (
                  <button key={index} onClick={() => setCurrentIndex(index)} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-primary/50"}`} 
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}