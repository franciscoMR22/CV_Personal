/* Revisión ID: CV06032026016
   Created by: Francisco Mireles Rodriguez 
   Update: Sincronización con portfolio-data.tsx + No Italics
   Path: components/time-line/timeline-data.ts */

import { Briefcase, Terminal, Smartphone, GraduationCap } from "lucide-react"

export type TimelineItem = {
  id: string
  date: string
  title: string
  description: string
  icon: any
  accentColor: string
  tag: string
}

export const timelineData: TimelineItem[] = [
  {
    id: "01",
    date: "01/2023 – 12/2025",
    title: "Practicante TI | ARMUR",
    description: "Seguridad de accesos físico y lógico. Desarrollo de aplicaciones en Power Platform y manuales de procedimientos operativos. Definición de requerimientos para proyectos .NET y control de acceso mediante SQL.",
    icon: Briefcase,
    accentColor: "oklch(0.72 0.18 265)",
    tag: "Seguridad & Gestión",
  },
  {
    id: "02",
    date: "11/2022 – 10/2023",
    title: "Becario TI | Grupo CISA",
    description: "Creación y testeo de páginas web corporativas. Manejo de Azure, Office 365 y consultas en SQL Server. Elaboración de documentación técnica y capacitación de usuarios.",
    icon: Terminal,
    accentColor: "oklch(0.65 0.22 190)",
    tag: "Desarrollo & Cloud",
  },
  {
    id: "03",
    date: "2021 – 2025",
    title: "Ciencias de la Informática | UPIICSA IPN",
    description: "Formación profesional en arquitectura de organizaciones y gestión estratégica de TI. Especialización en el desarrollo de soluciones de software escalables y gobernanza de datos.",
    icon: GraduationCap,
    accentColor: "oklch(0.75 0.18 310)",
    tag: "Formación Académica",
  },
  {
    id: "04",
    date: "03/2017 – Actualidad",
    title: "Técnico de Reparación | Independiente",
    description: "Reparación integral de hardware y software. Mantenimiento preventivo, diagnóstico técnico y gestión de atención al cliente con manejo de itinerarios propios.",
    icon: Smartphone,
    accentColor: "oklch(0.78 0.16 140)",
    tag: "Soporte Técnico",
  }
]