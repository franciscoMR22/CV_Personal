/*  Este archivo está destinado para las animación de interacción del usuario
    
    Revisión ID: CV03032026001
    Create Date: 03-03-2026 03:16 PM
    Created by: Francisco Mireles Rodriguez

*/


'use client'

import React, { useRef, useState } from 'react'

//*Inicio************************Efecto de tarjeta Certificaciones************************
export const CertificateCard = ({ cert }: { cert: any }) => {
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
        <h3>{cert.name}</h3><p>{cert.date}</p>
      </div>
    </div>
  );
};
//*Final************************Efecto de tarjeta Certificaciones************************
