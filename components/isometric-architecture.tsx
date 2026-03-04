/*  Se separa la lógica 3D a un único archivo, garantizando la continuidad.
    
    Revisión ID: CV03032026001
    Create Date: 03-03-2026 03:16 PM
    Created by: Francisco Mireles Rodriguez

*/

'use client'

import React from 'react'

interface Layer {
  label: string;
  icon: React.ReactNode;
  color?: string;
}

interface IsometricProps {
  layers: Layer[];
  isExpanded: boolean;
}

//*Inicio************************COMPONENTE ANIMACIÓN ISOMÉTRICA************************
export const IsometricArchitecture = ({ layers, isExpanded }: { layers: any[], isExpanded: boolean }) => {
  return (
    <div className="isometric-view">
      <div className="stack-container">
        {layers.map((layer, idx) => ( //Iteración de capas en la arquitectura, idx representa la iteración actual
          <div 
            key={idx} 
            className="stack-layer"
            style={{ 
              transform: isExpanded ? `translateZ(${idx * 80}px)` : `translateZ(${idx * 5}px)`,
              zIndex: layers.length - idx,
              backgroundColor: layer.color || 'rgba(16, 185, 129, 0.1)'
            }}
          >
            <div style={{ transform: 'rotateZ(45deg) rotateX(-60deg)' }} className="flex flex-col items-center">
               <div className="text-primary">{layer.icon}</div>
               {isExpanded && (
                 <div className="absolute left-[-190px] w-[170px] text-right border-r-2 border-primary pr-6 animate-in fade-in slide-in-from-right duration-700">
                    <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-primary">{layer.label}</span>
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
//*Fin************************COMPONENTE ANIMACIÓN ISOMÉTRICA************************
