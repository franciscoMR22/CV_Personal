/*  Este archivo está destinado para las animación de interacción del usuario
    
    Revisión ID: CV03032026001
    Create Date: 03-03-2026 03:16 PM
    Created by: Francisco Mireles Rodriguez

*/


'use client'

import React, { useRef, useState } from 'react'
import { getCertCategory } from '@/app/data/portfolio-data'

//*Inicio************************Efecto de tarjeta Certificaciones************************
export const CertificateCard = ({ cert, onOpen }: { cert: any, onOpen: (cert: any) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const { label, hue } = getCertCategory(cert.name);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - left; const offsetY = e.clientY - top;
    const X = (-(offsetX - (width / 2)) / 3) / 3; const Y = ((offsetY - (height / 2)) / 3) / 3;
    containerRef.current.style.setProperty('--rY', X.toFixed(2));
    containerRef.current.style.setProperty('--rX', Y.toFixed(2));
    containerRef.current.style.setProperty('--gx', ((offsetX / width) * 100).toFixed(1) + '%');
    containerRef.current.style.setProperty('--gy', ((offsetY / height) * 100).toFixed(1) + '%');
  };
  const handleMouseLeave = () => {
    setIsActive(false);
    if (containerRef.current) {
      containerRef.current.style.setProperty('--rY', '0'); containerRef.current.style.setProperty('--rX', '0');
    }
  };
  return (
    <div className="cert-wrap p-2" onMouseMove={handleMouseMove} onMouseEnter={() => setIsActive(true)} onMouseLeave={handleMouseLeave} onClick={() => onOpen(cert)}>
      <div ref={containerRef} className={`cert-container ${isActive ? 'active' : ''}`} style={{ '--hue': hue } as React.CSSProperties}>
        <span className="cert-tag">{label}</span>
        <h3>{cert.name}</h3><p>{cert.date}</p>
      </div>
    </div>
  );
};
//*Final************************Efecto de tarjeta Certificaciones************************
