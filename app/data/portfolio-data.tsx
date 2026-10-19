/* Se separa el contenido de los arreglos para mantener más eficiente el código
    
    Revisión ID: CV06032026001
    Update: Added experienceData for Wavy Roadmap
    Created by: Francisco Mireles Rodriguez

*/
import { Code2, Terminal, Database, Server, Cpu, Briefcase, Smartphone, Network, Container, Globe, ShieldCheck, HardDrive } from 'lucide-react'

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
  { name: 'Estadística para análisis de datos', date: '26 Abr 2026', file: '/docs/CertificadoDeFinalizacion_Estadistica para analisis de datos.pdf' },
  { name: 'Estadística para análisis de datos (PMI)', date: '26 Abr 2026', file: '/docs/CertificadoDeFinalizacion_Estadistica para analisis de datos (1).pdf' },
  { name: 'Aprende probabilidad', date: '11 Abr 2026', file: '/docs/CertificadoDeFinalizacion_Aprende probabilidad.pdf' },
  { name: 'Aprende estadística esencial', date: '10 Abr 2026', file: '/docs/CertificadoDeFinalizacion_Aprende estadistica esencial.pdf' },
  { name: 'Fundamentos de Six Sigma', date: '19 Mar 2026', file: '/docs/CertificadoDeFinalizacion_Fundamentos de Six Sigma.pdf' },
  { name: 'Fundamentos de Six Sigma (PMI)', date: '19 Mar 2026', file: '/docs/CertificadoDeFinalizacion_Fundamentos de Six Sigma PMI.pdf' },
  { name: 'Fundamentos de la excelencia operativa', date: '11 Mar 2026', file: '/docs/CertificadoDeFinalizacion_Fundamentos de la excelencia operativa.pdf' },
  { name: 'Fundamentos de la excelencia operativa (PMI)', date: '11 Mar 2026', file: '/docs/CertificadoDeFinalizacion_Fundamentos de la excelencia operativa (1).pdf' },
  { name: 'Especialízate en Jira, la herramienta líder de gestión de proyectos', date: '24 Feb 2026', file: '/docs/CertificadoDeFinalizacion_Especializate en Jira la herramienta lider de gestion de proyectos.pdf' },
  { name: 'Jira: Administración básica', date: '24 Feb 2026', file: '/docs/Jira Administracion basica.pdf' },
  { name: 'Gestión de proyectos con Jira', date: '24 Feb 2026', file: '/docs/Gestion de proyectos con Jira.pdf' },
  { name: 'Gestión de proyectos con Jira (PMI)', date: '24 Feb 2026', file: '/docs/Gestion de proyectos con Jira PMI.pdf' },
  { name: 'Aprende Jira', date: '23 Feb 2026', file: '/docs/Aprende Jira.pdf' },
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
]

// Categoría y tono (hue HSL) de cada certificado, deducidos del nombre para no repetirlos en el arreglo
export const getCertCategory = (name: string) => {
  const n = name.toLowerCase()
  if (n.includes('scrum')) return { label: 'Agile', hue: 160 }
  if (n.includes('jira')) return { label: 'Jira', hue: 215 }
  if (n.includes('itil')) return { label: 'ITIL', hue: 265 }
  if (n.includes('microsoft') || n.includes('power platform')) return { label: 'Microsoft', hue: 25 }
  if (n.includes('c#') || n.includes('javascript')) return { label: 'Desarrollo', hue: 340 }
  if (n.includes('gemini')) return { label: 'IA', hue: 45 }
  if (n.includes('estad') || n.includes('probabilidad')) return { label: 'Datos', hue: 305 }
  if (n.includes('six sigma') || n.includes('excelencia operativa')) return { label: 'Calidad', hue: 95 }
  return { label: 'Gestión', hue: 190 }
}

//*Inicio************************Arreglo de proyectos y caracteristicas************************
export const projectsData = [
  { id: 1,
    title: "OMS Corporativo",
    category: "Arquitectura & Gestión",
    description: "Sistema centralizado de gestión de pedidos retail con orquestación por capas.",
    metrics: { left: "Equipo: 5 personas", right: "Tiempo: 3 meses" }, featured: true, accent: "#10B981",
    layers: [
      { label: "Frontend UI", detail: "Next.js · React · TypeScript", icon: <Code2 />,
        info: { stack: "Next.js 16 · React 19 · TypeScript · Tailwind",
          summary: "Interfaz de la operación diaria. Cada módulo es una vista que consume directamente las APIs de los servicios.",
          points: ["Vistas de dashboard, nuevo pedido, inventario, clientes, logística y reportes.", "Módulo de postres artesanales con editor de recetas e historial de cambios.", "Costo PEPS visible en inventario y en la entrada de mercancía."] } },
      { label: "Microservicios", detail: "API REST en .NET 8: Catálogo, Ventas, Órdenes, Logística y Reportes", icon: <Server />,
        info: { stack: ".NET 8 · ASP.NET Core · Swagger",
          summary: "Cinco servicios independientes, cada uno con su responsabilidad y su propio contexto de datos.",
          points: ["Catálogo: inventario por lotes con salida PEPS por caducidad, recetas y reabastecimiento.", "Ventas: registro de ventas y KPIs del dashboard.", "Órdenes: pedidos, clientes CRM, niveles de cliente y configuración del sistema.", "Logística y Reportes: no exponen negocio propio, reaccionan a eventos."] } },
      { label: "Mensajería de eventos", detail: "MassTransit sobre RabbitMQ: una orden confirmada mueve inventario, envío y comprobante", icon: <Network />,
        info: { stack: "MassTransit 8 · RabbitMQ 3",
          summary: "Para cerrar una venta los servicios no se llaman entre sí: uno publica el evento y cada quien reacciona por su cuenta.",
          points: ["OrdenConfirmada: Catálogo descuenta stock, Órdenes actualiza el CRM del cliente, Logística genera la guía de envío y Reportes arma el ticket.", "OrdenRecibida: Catálogo suma el stock y actualiza el costo del lote.", "Los contratos de los eventos viven en la librería compartida OMS.Shared.", "Los consumidores se registran solos al arrancar cada servicio."] } },
      { label: "Persistencia", detail: "SQL Server 2022 con EF Core y Dapper", icon: <Database />,
        info: { stack: "SQL Server 2022 · EF Core 8 · Dapper",
          summary: "Acceso a datos con EF Core y migraciones; Dapper en las consultas de los dashboards.",
          points: ["Catálogo: lotes de inventario y recetas (maestro, ingredientes, pasos e historial).", "Órdenes: clientes CRM, niveles, órdenes de reabastecimiento con su detalle y configuración.", "Ventas: ventas maestro y detalle."] } },
      { label: "Infraestructura", detail: "Contenedores con Docker Compose", icon: <Container />,
        info: { stack: "Docker Compose · SQL Server · RabbitMQ",
          summary: "Un solo docker-compose levanta las dependencias del sistema.",
          points: ["SQL Server 2022 y RabbitMQ con su panel de administración, con reinicio automático.", "Los servicios .NET y el frontend se ejecutan aparte durante el desarrollo."] } } ] },
  { id: 2,
    title: "Home Lab Linux",
    category: "Infraestructura",
    description: "Servidor local securizado Ubuntu Server con despliegue de microservicios.",
    metrics: { left: "OS: Ubuntu", right: "Status: LAB" }, featured: false, accent: "#3B82F6",
    layers: [
      { label: "Acceso y certificados", detail: "Tailscale Funnel y Nginx Proxy Manager con SSL de Let's Encrypt", icon: <Globe />,
        info: { stack: "Tailscale Funnel · Nginx Proxy Manager · Let's Encrypt",
          summary: "Punto de entrada único. El proveedor de internet usa CGNAT, así que el tráfico externo entra por un túnel de Tailscale Funnel en lugar de abrir puertos en el router.",
          points: ["Nginx Proxy Manager dirige cada petición al contenedor de la aplicación.", "Certificados TLS de Let's Encrypt ligados al nombre MagicDNS del nodo.", "Enfoque Zero Trust alineado con NIST SP 800-207."] } },
      { label: "Aplicaciones", detail: "Docker y Portainer, con redes aisladas por servicio", icon: <Container />,
        info: { stack: "Docker · Portainer CE · redes bridge",
          summary: "Cada sistema corre en contenedores y queda aislado en su propia red.",
          points: ["Portainer CE centraliza la administración y el monitoreo de recursos.", "Redes bridge separadas, por ejemplo net_frontend para el tráfico web.", "Los datos viven en volúmenes persistentes fuera del ciclo de vida del contenedor.", "Usuario sin root dentro del grupo docker, por mínimo privilegio."] } },
      { label: "Seguridad perimetral", detail: "UFW, Fail2ban y Tailscale: SSH solo por red privada", icon: <ShieldCheck />,
        info: { stack: "UFW · Fail2ban · Tailscale (WireGuard)",
          summary: "Defensa en profundidad: firewall cerrado por defecto, bloqueo de intrusos y administración por red privada.",
          points: ["UFW con denegación por defecto y apertura solo de los servicios necesarios.", "Fail2ban en SSH: 3 intentos fallidos en 10 minutos bloquean la IP por 1 hora.", "Red de malla con Tailscale para administrar; el puerto 22 se cierra al tráfico público.", "Controles alineados con ISO/IEC 27001 A.13.1.2."] } },
      { label: "Sistema base", detail: "Ubuntu Server 24.04 LTS, SSH con llaves Ed25519 y Cockpit", icon: <Terminal />,
        info: { stack: "Ubuntu Server 24.04.3 LTS · SSH Ed25519 · Cockpit",
          summary: "Instalación mínima y endurecida: cada servicio se agrega a mano para controlar la línea base de seguridad.",
          points: ["SSH solo con llaves Ed25519, con la autenticación por contraseña desactivada.", "Cockpit para supervisar hardware, CPU y LVM, accesible solo por la VPN.", "Arranque UEFI con contraseña de supervisor en el firmware."] } },
      { label: "Hardware y respaldos", detail: "Volúmenes LVM y disco externo Seagate con rsync + cron", icon: <HardDrive />,
        info: { stack: "Intel Pentium N3700 · 4 GB RAM · SSD 480 GB · HDD 500 GB",
          summary: "Equipo modesto aprovechado con almacenamiento segmentado y respaldos automáticos.",
          points: ["LVM en el SSD: 110 GB para el sistema, tres volúmenes de 40 GB para los sistemas de desarrollo y unos 220 GB libres para crecer.", "Respaldo diario a las 03:00 con rsync hacia el disco Seagate, con un RPO de 24 horas.", "Backups y datos fríos van al HDD para reducir el desgaste del SSD."] } } ] }
];
