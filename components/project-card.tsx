/*  Tarjeta de la sección Proyectos.
    Los estilos están en globals.css (clases .pca-*) y toman el color de acento de cada proyecto, con paleta para tema claro y oscuro.
    En reposo muestra categoría, título y métricas; al pasar el cursor (o enfocarla con el teclado) revela
    el nombre corto, la descripción y la invitación a ver la arquitectura.

    From Uiverse.io by Smit-Prajapati - https://uiverse.io/Smit-Prajapati/spicy-rat-83
    MIT License, Copyright (c) Smit-Prajapati (Smit Prajapati)

    Created by: Francisco Mireles Rodriguez
*/

'use client'

import React from 'react'

export interface ProjectCardData {
  title: string
  short: string          // nombre corto: es el que aparece junto al ícono al pasar el cursor
  category: string
  description: string
  metrics?: { left: string; right: string }
  accent: string
  icon: React.ReactNode
}

interface ProjectCardProps {
  project: ProjectCardData
  onOpen: () => void
}

//*Inicio************************TARJETA DE PROYECTO************************
export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => (
  <div
    className="pca"
    role="button"
    tabIndex={0}
    aria-label={`Ver arquitectura de ${project.title}`}
    onClick={onOpen}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen() } }}
    style={{ '--accent': project.accent } as React.CSSProperties}
  >
    <div className="pca-border" />
    <div className="pca-info">
      <p className="pca-cat">{project.category}</p>
      <h3 className="pca-title">{project.title}</h3>
      {project.metrics && <p className="pca-metrics">{project.metrics.left}<br />{project.metrics.right}</p>}
    </div>
    <div className="pca-content">
      <div className="pca-logo">
        <div className="pca-logo1">{project.icon}</div>
        <div className="pca-logo2">{project.short}</div>
        <span className="pca-trail" />
      </div>
    </div>
    <span className="pca-desc">{project.description}</span>
    <span className="pca-bottom">Ver arquitectura</span>
  </div>
)
//*Fin************************TARJETA DE PROYECTO************************
