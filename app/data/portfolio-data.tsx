/*  Se separa el contenido de los arreglos para mantener más eficiente el código
    
    Revisión ID: CV03032026002
    Create Date: 03-03-2026 03:16 PM
    Created by: Francisco Mireles Rodriguez

*/
import { Code2, Terminal, Database, Server, Cpu } from 'lucide-react'

//*Inicio************************Arreglo de certificados************************
  export const certificatesData = [
    { name: 'Optimiza tu trabajo con Microsoft 365', date: '02 Feb 2026', file: '/Optimiza tu trabajo con Microsoft 365.pdf' },
    { name: 'Explora una carrera en gestion de proyectos', date: '01 Feb 2026', file: '/Explora una carrera en gestion de proyectos.pdf' },
    { name: 'Fundamentos de la gestión de proyectos: Comunicación', date: '01 Feb 2026', file: '/Fundamentos de la gestion de proyectos Comunicacion.pdf' },
    { name: 'Fundamentos de la gestión de proyectos: Comunicación (PMI)', date: '01 Feb 2026', file: '/Fundamentos de la gestion de proyectos Comunicacion-PMI.pdf' },
    { name: 'Fundamentos de la gestión de proyectos: Presupuestos y beneficios', date: '31 Ene 2026', file: '/Fundamentos de la gestión de proyectos_presupuestos.pdf' },
    { name: 'Fundamentos de la gestión de proyectos', date: '29 Ene 2026', file: '/Certificado de LinkedIn Learning.pdf' },
    { name: 'Project Management Institute (PMI)®', date: '29 Ene 2026', file: '/Project Management Institute (PMI)®.pdf' },
    { name: 'Aprende Gemini la IA de Google', date: '28 Jul 2025', file: '/Aprende Gemini la IA de Google.pdf' },
    { name: 'Mejora tu productividad - PMI', date: '27 Ene 2025', file: '/Mejora tu productividad - PMI.pdf' },
    { name: 'Scrum avanzado', date: '22 Ene 2025', file: '/Scrum avanzado.pdf' },
    { name: 'Scrum avanzado - PMI', date: '22 Ene 2025', file: '/Scrum avanzado - PMI.pdf' },
    { name: 'Fundamentos de ITIL La mejora de servicios', date: '17 Ene 2025', file: '/Fundamentos de ITIL La mejora de servicios.pdf' },
    { name: 'Scrum esencial ', date: '19 Oct 2024', file: '/Scrum esencial .pdf' },
    { name: 'Recursos humanos estrategicos', date: '23 Sep 2024', file: '/Recursos humanos estrategicos.pdf' },
    { name: 'Gestion de proyectos con Microsoft 365', date: '16 Sep 2024', file: '/Gestion de proyectos con Microsoft 365.pdf' },
    { name: 'Gestion de proyectos con Microsoft 365 (PMI)', date: '16 Sep 2024', file: '/Gestion de proyectos con Microsoft 365 (1).pdf' },
    { name: 'Fundamentos de ITIL Introduccion a la gestión de SI', date: '15 Sep 2024', file: '/Fundamentos de ITIL Introduccion a la gestion de sistemas de informacion.pdf' },
    { name: 'C# esencial', date: '21 Ago 2024', file: '/C esencial.pdf' },
    { name: 'Introducción a Microsoft Power Platform', date: '20 Ago 2024', file: '/Introduccion a Microsoft Power Platform.pdf' },
    { name: 'JavaScript de 0 a héroe', date: '09 May 2023', file: '/UC-f69e1396-9b08-4b88-814d-1be6b28c2a89.pdf' },
    {name: 'Jira Administracion basica', date: '01 Feb 2026', file: '/Jira Administracion basica.pdf' },
    {name: 'Aprende Jira', date: '01 Feb 2026', file: '/Aprende Jira.pdf' }
  ]
//*Fin************************Arreglo de certificados************************

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
//*Fin************************Arreglo de proyectos y caracteristicas************************
