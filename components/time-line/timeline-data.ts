/* Revisión ID: CV19102026009
   Created by: Francisco Mireles Rodriguez
   Update: Se agrega el puesto de PMO en ION Financiera y los aspectos destacados de cada puesto (campo details)
   Path: components/time-line/timeline-data.ts */

import { Briefcase, Terminal, Smartphone, GraduationCap, KanbanSquare } from "lucide-react"

export type TimelineItem = {
  id: string
  kind: "work" | "education"
  date: string
  title: string
  description: string
  icon: any
  accentColor: string
  tag: string
  details?: string[]   // aspectos destacados del puesto, se muestran al abrir "Ver más"
}

export const timelineData: TimelineItem[] = [
  // --- Experiencia laboral (de la más reciente a la más antigua) ---
  {
    id: "05",
    kind: "work",
    date: "03/2026 – Presente",
    title: "Especialista de PMO | ION Financiera",
    description: "Seguimiento de proyectos de punta a punta con tableros de KPIs, automatización con IA alineada a PMBOK y acompañamiento del ciclo de vida de proyectos de tecnología.",
    icon: KanbanSquare,
    accentColor: "oklch(0.78 0.15 65)",
    tag: "PMO & Gobernanza",
    details: [
      "Diseño e implementación de un sistema para el seguimiento de proyectos de punta a punta con tableros de KPIs, logrando mayor visibilidad de posibles brechas en un 20% y una mejora de comunicación en la PMO de un 30%.",
      "Integración de herramientas de IA para la automatización de flujos de trabajo, generación de reportes y optimización documental alineada a PMBOK.",
      "Acompañamiento y monitoreo en el ciclo de vida de proyectos de implementación de nuevas tecnologías, reingeniería de sistemas, nuevos desarrollos y actualizaciones de infraestructura.",
    ],
  },
  {
    id: "01",
    kind: "work",
    date: "01/2023 – 12/2025",
    title: "Practicante TI | ARMUR",
    description: "Seguridad de accesos físico y lógico. Desarrollo de aplicaciones en Power Platform y manuales de procedimientos operativos. Definición de requerimientos para proyectos .NET y control de acceso mediante SQL.",
    icon: Briefcase,
    accentColor: "oklch(0.72 0.18 265)",
    tag: "Seguridad & Gestión",
    details: [
      "Implementación de una app de gestión de tickets (Power Platform), incrementando la eficiencia de comunicación entre equipos en un 50%.",
      "Diseño de dashboard en Power BI, logrando mapear el 30% de incidencias y reduciendo los tiempos de respuesta al cliente en un 40%.",
      "Gestión del levantamiento de requerimientos y aplicación de ingeniería inversa para documentar procesos y asegurar el cumplimiento en auditorías internas alineado con la familia ISO 27000.",
      "Optimización de extracción de reportes estructurados en bases de datos SQL Server.",
    ],
  },
  {
    id: "02",
    kind: "work",
    date: "11/2022 – 10/2023",
    title: "Becario TI | Grupo CISA",
    description: "Creación y testeo de páginas web corporativas. Manejo de Azure, Office 365 y consultas en SQL Server. Elaboración de documentación técnica y capacitación de usuarios.",
    icon: Terminal,
    accentColor: "oklch(0.65 0.22 190)",
    tag: "Desarrollo & Cloud",
    details: [
      "Monitoreo de ejecución de pruebas en cada fase del desarrollo web, garantizando la calidad de SLA.",
      "Creación y gestión de documentación técnica y funcional para proyectos y capacitaciones operativas (SharePoint).",
    ],
  },
  {
    id: "04",
    kind: "work",
    date: "03/2017 – Actualidad",
    title: "Técnico en Soporte y Mantenimiento | Freelance",
    description: "Reparación integral de hardware y software. Mantenimiento preventivo, diagnóstico técnico y gestión de atención al cliente con manejo de itinerarios propios.",
    icon: Smartphone,
    accentColor: "oklch(0.78 0.16 140)",
    tag: "Soporte Técnico",
    details: [
      "Administración del ciclo de resolución de incidencias, atención directa al usuario final para garantizar el cumplimiento de requerimientos.",
      "Gestión de inventario, la relación comercial con proveedores y la generación de bitácoras técnicas para la toma de decisiones en el área.",
    ],
  },
  // --- Formación académica ---
  {
    id: "03",
    kind: "education",
    date: "2021 – 2025",
    title: "Ciencias de la Informática | UPIICSA IPN",
    description: "Formación profesional en arquitectura de organizaciones y gestión estratégica de TI. Especialización en el desarrollo de soluciones de software escalables y gobernanza de datos.",
    icon: GraduationCap,
    accentColor: "oklch(0.75 0.18 310)",
    tag: "Formación Académica",
  },
]
