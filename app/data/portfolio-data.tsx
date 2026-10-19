/* Se separa el contenido de los arreglos para mantener más eficiente el código
    
    Revisión ID: CV06032026001
    Update: Added experienceData for Wavy Roadmap
    Created by: Francisco Mireles Rodriguez

*/
import { Code2, Terminal, Database, Server, Cpu, Briefcase, Smartphone } from 'lucide-react'

//*Inicio************************Arreglo de experiencia (Roadmap)************************
export const experienceData = [
  {
    id: 1,
    role: "Técnico Reparación",
    company: "Independiente",
    period: "03/2017 - Actualidad",
    icon: <Smartphone size={24} />,
    details: [
      "Reparación hardware/software",
      "Elaboración de informes técnicos",
      "Mantenimiento preventivo",
      "Manejo de itinerarios y atención"
    ],
    // Coordenadas para posicionar en la onda (x: horizontal, y: vertical relativo)
    coords: { x: "15%", y: "45%" }
  },
  {
    id: 2,
    role: "Becario TI",
    company: "Grupo CISA",
    period: "11/2022 – 10/2023",
    icon: <Terminal size={24} />,
    details: [
      "Creación y testeo de páginas web",
      "Manejo de Azure y Office 365",
      "Consultas SQL Server",
      "Documentación técnica y capacitaciones"
    ],
    coords: { x: "45%", y: "55%" }
  },
  {
    id: 3,
    role: "Practicante TI",
    company: "ARMUR",
    period: "01/2023 – 12/2025",
    icon: <Briefcase size={24} />,
    details: [
      "Seguridad de accesos físico y lógico",
      "Aplicaciones en Power Platform",
      "Manuales de procedimientos operativos",
      "Requerimientos para proyectos .NET",
      "SQL, identificaciones y control de acceso"
    ],
    coords: { x: "80%", y: "40%" }
  }
];

//*Inicio************************Arreglo de certificados************************
export const certificatesData = [
  { name: 'Optimiza tu trabajo con Microsoft 365', date: '02 Feb 2026', file: '/docs/Optimiza tu trabajo con Microsoft 365.pdf' },
  { name: 'Explora una carrera en gestion de proyectos', date: '01 Feb 2026', file: '/docs/Explora una carrera en gestion de proyectos.pdf' },
  { name: 'Fundamentos de la gestión de proyectos: Comunicación', date: '01 Feb 2026', file: '/docs/Fundamentos de la gestion de proyectos Comunicacion.pdf' },
  { name: 'Fundamentos de la gestión de proyectos: Comunicación (PMI)', date: '01 Feb 2026', file: '/docs/Fundamentos de la gestion de proyectos Comunicacion-PMI.pdf' },
  { name: 'Fundamentos de la gestión de proyectos: Presupuestos y beneficios', date: '31 Ene 2026', file: '/docs/Fundamentos de la gestion de proyectos_presupuestos.pdf' },
  { name: 'Fundamentos de la gestión de proyectos', date: '29 Ene 2026', file: '/docs/Fundamentos de la gestión de proyectos.pdf' },
  { name: 'Project Management Institute (PMI)®', date: '29 Ene 2026', file: '/docs/Project Management Institute (PMI).pdf' },
  { name: 'Aprende Gemini la IA de Google', date: '28 Jul 2025', file: '/docs/Aprende Gemini la IA de Google.pdf' },
  { name: 'Mejora tu productividad - PMI', date: '27 Ene 2025', file: '/docs/Mejora tu productividad - PMI.pdf' },
  { name: 'Scrum avanzado', date: '22 Ene 2025', file: '/docs/Scrum avanzado.pdf' },
  { name: 'Scrum avanzado - PMI', date: '22 Ene 2025', file: '/docs/Scrum avanzado - PMI.pdf' },
  { name: 'Fundamentos de ITIL La mejora de servicios', date: '17 Ene 2025', file: '/docs/Fundamentos de ITIL La mejora de servicios.pdf' },
  { name: 'Scrum esencial ', date: '19 Oct 2024', file: '/docs/Scrum esencial .pdf' },
  { name: 'Recursos humanos estrategicos', date: '23 Sep 2024', file: '/docs/Recursos humanos estrategicos.pdf' },
  { name: 'Gestion de proyectos con Microsoft 365', date: '16 Sep 2024', file: '/docs/Gestion de proyectos con Microsoft 365.pdf' },
  { name: 'Gestion de proyectos con Microsoft 365 (PMI)', date: '16 Sep 2024', file: '/docs/Gestion de proyectos con Microsoft 365 - PMI.pdf' },
  { name: 'Fundamentos de ITIL Introduccion a la gestión de SI', date: '15 Sep 2024', file: '/docs/Fundamentos de ITIL Introduccion a la gestion de sistemas de informacion.pdf' },
  { name: 'C# esencial', date: '21 Ago 2024', file: '/docs/C esencial.pdf' },
  { name: 'Introducción a Microsoft Power Platform', date: '20 Ago 2024', file: '/docs/Introduccion a Microsoft Power Platform.pdf' },
  { name: 'JavaScript de 0 a héroe', date: '09 May 2023', file: '/docs/JavaScript.pdf' },
  {name: 'Jira Administracion basica', date: '01 Feb 2026', file: '/docs/Jira Administracion basica.pdf' },
  {name: 'Aprende Jira', date: '01 Feb 2026', file: '/docs/Aprende Jira.pdf' }
]

//*Inicio************************Arreglo de proyectos y caracteristicas************************
export const projectsData = [
  { id: 1, 
    title: "OMS Corporativo", 
    category: "Arquitectura & Gestión", 
    description: "Sistema centralizado de gestión de pedidos retail con orquestación por capas.", 
    metrics: { left: "Equipo: 5 personas", right: "Tiempo: 3 meses" }, featured: true, accentColor: "from-primary/20 to-transparent", 
    layers: [ 
      { label: "Frontend UI", icon: <Code2 />, color: "rgba(16, 185, 129, 0.1)" }, 
      { label: "Business API", icon: <Terminal />, color: "rgba(16, 185, 129, 0.2)" }, 
      { label: "Data Service", icon: <Database />, color: "rgba(16, 185, 129, 0.3)" }, 
      { label: "Bare Metal", icon: <Server />, color: "rgba(16, 185, 129, 0.4)" } ] },
  { id: 2, 
    title: "Home Lab Linux", 
    category: "Infraestructura", 
    description: "Servidor local securizado Ubuntu Server con despliegue de microservicios.", 
    metrics: { left: "OS: Ubuntu", right: "Status: LAB" }, featured: false, accentColor: "from-blue-500/20 to-transparent", 
    layers: [ { label: "Apps Layer", icon: <Cpu />, color: "rgba(59, 130, 246, 0.1)" }, 
      { label: "Security Kernel", icon: <Terminal />, color: "rgba(59, 130, 246, 0.2)" }, 
      { label: "Physical Hardware", icon: <Server />, color: "rgba(59, 130, 246, 0.3)" } ] }
];