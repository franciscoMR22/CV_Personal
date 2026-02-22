'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Briefcase, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Mail, 
  Terminal,
  Layers
} from 'lucide-react'

// Componente para iconos sociales (Horizontal con 5 plataformas)
const SocialIcon = ({ href, containerClass, iconPath, viewBox = "0 0 16 16" }: { href: string, containerClass: string, iconPath: React.ReactNode, viewBox?: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`socialContainer ${containerClass}`}>
    <svg className="socialSvg" viewBox={viewBox}>
      {iconPath}
    </svg>
  </a>
)

// Componente de Tarjeta de Certificación con borde animado y botón 3D
const CertificationCard = ({ title, issuer, pdfUrl }: { title: string, issuer: string, pdfUrl: string }) => (
  <div className="cert-card">
    <div className="cert-content">
      <p className="text-xl font-bold leading-tight mb-2">
        {title}
      </p>
      <p className="text-sm opacity-80 mb-6">
        {issuer}
      </p>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="uiverse-btn">
        <span className="button_top">Ver Certificado</span>
      </a>
    </div>
  </div>
)

export default function PortfolioDashboard() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const profile = {
    name: 'Francisco Mireles Rodríguez',
    title: 'Gestor de Proyectos & Líder Técnico',
    about: 'Especialista en Ciencias de la Informática por el IPN enfocado en la optimización del SDLC y seguridad de la información. Mi gestión alinea la infraestructura tecnológica con los objetivos de negocio mediante marcos de gobernanza robustos.',
    status: 'Disponible para proyectos',
    image: '/foto.png',
    email: 'contacto@franciscomireles.com',
    location: 'Ciudad de México, México'
  }

  const socialLinks = {
    instagram: 'https://www.instagram.com/francisco_mir_rod/',
    twitter: 'https://x.com/FranciscoMirRod',
    linkedin: 'https://www.linkedin.com/in/mireles-rodriguez-francisco-47475b272/',
    whatsapp: 'https://wa.me/5560134264',
    github: 'https://github.com/franciscoMR22'
  }

  const experience = [
    {
      title: 'Practicante TI',
      company: 'ARMUR Soluciones - Grupo FEMSA',
      dateRange: '2023 - 2025',
      type: 'timeline__event--type1',
      icon: Layers,
      achievements: [
        'Seguimiento y control en seguridad de accesos',
        'Desarrollo e implementación en Power Platform',
        'Captura de requerimientos para proyectos .NET'
      ]
    },
    {
      title: 'Becario TI',
      company: 'Grupo CISA',
      dateRange: '2022 - 2023',
      type: 'timeline__event--type2',
      icon: Terminal,
      achievements: [
        'Mantenimiento y testeo de páginas web',
        'Manejo de Azure y Office 365',
        'Documentación de proyectos y reingeniería'
      ]
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* BARRA SUPERIOR */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          
          {/* 5 ICONOS SOCIALES RESTAURADOS (Horizontal) */}
          <div className="social-group">
            <SocialIcon href={socialLinks.instagram} containerClass="containerOne" iconPath={<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>} />
            <SocialIcon href={socialLinks.twitter} containerClass="containerTwo" iconPath={<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>} />
            <SocialIcon href={socialLinks.linkedin} containerClass="containerThree" viewBox="0 0 448 512" iconPath={<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>} />
            <SocialIcon href={socialLinks.whatsapp} containerClass="containerFour" iconPath={<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>} />
            <SocialIcon href={socialLinks.github} containerClass="containerFive" iconPath={<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>} />
          </div>

          {/* SWITCH SOL/LUNA */}
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="darkmode-toggle" 
              className="input-toggle-dark hidden" 
              checked={theme === 'dark'}
              onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <label htmlFor="darkmode-toggle" className="darkmode-label">
              <svg version="1.1" className="sun" viewBox="0 0 496 496">
                <path d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z" />
                <rect x="240" width="16" height="72" /><rect y="240" width="72" height="16" /><rect x="240" y="424" width="16" height="72" /><rect x="424" y="240" width="72" height="16" />
              </svg>
              <svg version="1.1" className="moon" viewBox="0 0 49.739 49.739">
                <path d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822C32.639,48.039,28.825,48.888,25.068,48.889z" />
              </svg>
            </label>
          </div>
        </div>
      </nav>

      <div className="lg:flex">
        {/* SIDEBAR */}
        <aside className="bg-card lg:w-[400px] lg:fixed lg:h-[calc(100vh-4rem)] lg:border-r border-border/40 p-8 flex flex-col overflow-y-auto">
          <div className="flex-1 space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <div className="relative mx-auto lg:mx-0 w-44 h-44">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-background shadow-xl">
                  <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" />
                </div>
                <Badge className="absolute bottom-2 right-2 bg-emerald-500 text-white border-2 border-background">{profile.status}</Badge>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground leading-tight">{profile.name}</h1>
                <p className="text-lg text-primary font-medium mt-1">{profile.title}</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground border-y border-border/40 py-4 text-left font-medium transition-colors">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> {profile.location}</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> {profile.email}</div>
              </div>
            </div>

            {/* RESUMEN EJECUTIVO (Texto blanco en Dark Mode) */}
            <div className="space-y-3 bg-muted/40 dark:bg-muted/10 p-5 rounded-2xl border border-border/50 transition-colors">
              <h2 className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-secondary"></span> Perfil Profesional
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground dark:text-white">
                {profile.about}
              </p>
            </div>

            {/* BOTÓN CV 3D (Voxybuns) */}
            <div className="flex justify-center lg:justify-start">
              <a href="/docs/Project Management Institute (PMI)®.pdf" target="_blank" rel="noopener noreferrer" className="uiverse-btn w-full text-center">
                <span className="button_top block w-full">Descargar CV en PDF</span>
              </a>
            </div>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 lg:ml-[400px] p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto space-y-20">
            
            {/* LÍNEA DE TIEMPO ANIMADA */}
            <section>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 transition-colors">
                <Briefcase className="text-primary h-8 w-8" /> Trayectoria Profesional
              </h3>
              <div className="timeline">
                {experience.map((exp, i) => (
                  <div key={i} className={`timeline__event animated fadeInUp ${exp.type}`}>
                    <div className="timeline__event__icon transition-colors"><exp.icon className="h-8 w-8" /></div>
                    <div className="timeline__event__date transition-colors">{exp.dateRange}</div>
                    <div className="timeline__event__content transition-colors">
                      <div className="timeline__event__title">{exp.title}</div>
                      <div className="timeline__event__description text-muted-foreground mt-2 dark:text-gray-300">
                        <p className="font-semibold mb-2">{exp.company}</p>
                        <ul className="space-y-1 text-sm">
                          {exp.achievements.map((ach, j) => (<li key={j}>• {ach}</li>))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="opacity-40" />

            {/* CERTIFICACIONES (Borde Animado restaurado) */}
            <section>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 transition-colors">
                <Award className="text-primary h-8 w-8" /> Certificaciones Destacadas
              </h3>
              <div className="grid gap-8 sm:grid-cols-2">
                <CertificationCard 
                  title="Gestión de Proyectos (PMI)®" 
                  issuer="LinkedIn Learning" 
                  pdfUrl="/docs/Project Management Institute (PMI)®.pdf"
                />
                <CertificationCard 
                  title="Scrum Avanzado" 
                  issuer="PMI" 
                  pdfUrl="/docs/CertificadoDeFinalizacion_Scrum avanzado - PMI.pdf"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}