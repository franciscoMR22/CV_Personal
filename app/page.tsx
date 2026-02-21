'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  Briefcase,
  CheckCircle2,
  Award,
  TrendingUp,
  Users,
  Target,
  FileText,
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react'

interface PortfolioDashboardProps {
  profile?: {
    name: string
    title: string
    about: string
    status: string
    image?: string
  }
  experience?: Array<{
    title: string
    company: string
    location: string
    dateRange: string
    achievements: string[]
  }>
  certifications?: Array<{
    title: string
    issuer: string
    date: string
    pdfUrl?: string
  }>
  projects?: Array<{
    title: string
    description: string
    status: 'healthy' | 'warning' | 'critical'
    progress: number
    methodologies: string[]
    caseStudyUrl?: string
  }>
  socialLinks?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    whatsapp?: string
  }
}

export default function PortfolioDashboard({
  profile = {
    name: 'Francisco Mireles Rodríguez',
    title: 'Gestor de proyectos y líder técnico',
    about: 'Especialista en Ciencias de la Informática por el IPN, con una trayectoria de tres años enfocada en la optimización del Ciclo de Vida de Desarrollo de Software (SDLC) y la seguridad de la información. Mi enfoque no se limita a la ejecución técnica, sino a la alineación de la infraestructura tecnológica con los objetivos de negocio a través de marcos de gobernanza robustos y buenas prácticas.',
    status: 'Disponible para proyectos',
    image: '/public/foto.png'
  },
  experience = [
    {
      title: 'Senior Technical Project Manager',
      company: 'Enterprise Solutions Corp',
      location: 'San Francisco, CA',
      dateRange: '2020 - Present',
      achievements: [
        'Led digital transformation initiative affecting 5,000+ users across 12 departments',
        'Reduced project delivery time by 35% through implementation of Agile frameworks',
        'Managed $4.5M budget across multiple concurrent enterprise projects',
        'Implemented COBIT governance framework resulting in 98% compliance rating'
      ]
    },
    {
      title: 'IT Project Manager',
      company: 'TechVision Systems',
      location: 'Seattle, WA',
      dateRange: '2017 - 2020',
      achievements: [
        'Successfully delivered 15+ projects using SCRUM methodology',
        'Built and mentored cross-functional teams of 20+ professionals',
        'Achieved 94% stakeholder satisfaction rating across all projects',
        'Implemented PMO best practices reducing project risks by 40%'
      ]
    },
    {
      title: 'Associate Project Manager',
      company: 'Digital Innovations Inc',
      location: 'Austin, TX',
      dateRange: '2014 - 2017',
      achievements: [
        'Coordinated cloud migration for 200+ applications',
        'Developed project documentation templates adopted company-wide',
        'Managed vendor relationships saving $250K annually',
        'Led change management initiatives with 85% adoption rate'
      ]
    }
  ],
  certifications = [
    {
      title: 'PMP - Project Management Professional',
      issuer: 'Project Management Institute',
      date: 'January 2019',
      pdfUrl: '#'
    },
    {
      title: 'TOGAF 9 Certified',
      issuer: 'The Open Group',
      date: 'June 2020',
      pdfUrl: '#'
    },
    {
      title: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      date: 'March 2018',
      pdfUrl: '#'
    },
    {
      title: 'COBIT 5 Foundation',
      issuer: 'ISACA',
      date: 'September 2021',
      pdfUrl: '#'
    },
    {
      title: 'SAFe 5 Program Consultant',
      issuer: 'Scaled Agile Inc',
      date: 'November 2021',
      pdfUrl: '#'
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'April 2022',
      pdfUrl: '#'
    }
  ],
  projects = [
    {
      title: 'Enterprise Cloud Migration',
      description: 'Led comprehensive cloud infrastructure modernization for Fortune 500 client, migrating 300+ applications to AWS. Coordinated teams across 4 time zones, managing technical architecture, security compliance, and change management.',
      status: 'healthy',
      progress: 92,
      methodologies: ['SCRUM', 'TOGAF', 'AWS Well-Architected'],
      caseStudyUrl: '#'
    },
    {
      title: 'Digital Customer Portal',
      description: 'Spearheaded development of customer-facing portal serving 100K+ users. Implemented Agile delivery model, managed stakeholder expectations, and ensured WCAG 2.1 compliance for accessibility.',
      status: 'healthy',
      progress: 100,
      methodologies: ['SCRUM', 'DevOps', 'WCAG'],
      caseStudyUrl: '#'
    },
    {
      title: 'IT Governance Framework',
      description: 'Designed and implemented enterprise IT governance using COBIT 5 framework. Established PMO standards, risk management protocols, and KPI dashboards for executive reporting.',
      status: 'warning',
      progress: 78,
      methodologies: ['COBIT', 'ITIL', 'Prince2'],
      caseStudyUrl: '#'
    },
    {
      title: 'ERP System Integration',
      description: 'Managing integration of SAP S/4HANA with legacy systems across 8 business units. Coordinating technical teams, managing vendor relationships, and ensuring minimal business disruption.',
      status: 'healthy',
      progress: 65,
      methodologies: ['Waterfall', 'TOGAF', 'SAP Activate'],
      caseStudyUrl: '#'
    }
  ],
  socialLinks = {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/'
  }
}: PortfolioDashboardProps) {
  
  const getStatusColor = (status: 'healthy' | 'warning' | 'critical') => {
    switch (status) {
      case 'healthy':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
      case 'warning':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
      case 'critical':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-emerald-500'
    if (progress >= 50) return 'bg-blue-500'
    return 'bg-amber-500'
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold tracking-tight text-foreground">
                {profile.name}
              </h1>
              <p className="text-xs text-muted-foreground">{profile.title}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            )}
            {socialLinks.whatsapp && (
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </a>
            )}
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            )}
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        {/* Hero Section */}
        <section className="mb-16 grid gap-8 md:grid-cols-[280px,1fr] lg:gap-12">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-border bg-muted md:h-72 md:w-72">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                <Users className="h-24 w-24 text-muted-foreground/30" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  {profile.name}
                </h2>
                <Badge 
                  variant="outline" 
                  className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
                >
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  {profile.status}
                </Badge>
              </div>
              <p className="text-xl font-medium text-muted-foreground">
                {profile.title}
              </p>
            </div>
            
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {profile.about}
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              Professional Experience
            </h3>
          </div>

          <div className="relative space-y-8 pl-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-border">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[34px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-xl text-foreground">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="flex flex-wrap items-center gap-2 text-base">
                          <span className="font-medium text-foreground/80">{exp.company}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1 font-mono text-xs">
                        <Calendar className="h-3 w-3" />
                        {exp.dateRange}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Gallery */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              Certifications & Credentials
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <CardHeader className="relative">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight text-foreground">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    <div className="font-medium text-foreground/70">{cert.issuer}</div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2 border-primary/20 bg-primary/5 hover:bg-primary/10 hover:text-primary"
                  >
                    <FileText className="h-4 w-4" />
                    View Credential
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PM Work Portfolio */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              Project Portfolio
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <CardTitle className="text-xl leading-tight text-foreground">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`shrink-0 ${getStatusColor(project.status)}`}
                    >
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Project Progress</span>
                      <span className="font-mono font-semibold text-foreground">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                      <div 
                        className={`h-full transition-all ${getProgressColor(project.progress)}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Methodologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.methodologies.map((method, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-secondary/50 font-mono text-xs"
                        >
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="w-full gap-2 bg-primary hover:bg-primary/90"
                  >
                    View Case Study
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
