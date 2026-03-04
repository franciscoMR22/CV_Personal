/* Contiene la animación de particulas
    
    Revisión ID: CV03032026006
    Create Date: 03-03-2026 03:16 PM
    Created by: Francisco Mireles Rodriguez

*/

import { useEffect, useState, MutableRefObject } from 'react';

// Se añade 'mounted' para sincronizar la carga de la imagen con el renderizado inicial
interface UseAvatarParticlesProps {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  imagePath: string;
  mounted: boolean; 
}

export const useAvatarParticles = ({ canvasRef, containerRef, imagePath, mounted }: UseAvatarParticlesProps) => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [showFinal, setShowFinal] = useState(false);


//*Inicio************************Lógica de movimiento de Partículas************************

class Particle {
    x: number; y: number; tX: number; tY: number; color: string; size: number; ease: number; opacity: number;

    constructor(tx: number, ty: number, color: string, dpr: number) { 
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (window.innerWidth > 1000 ? window.innerWidth : 1000);
      this.x = (window.innerWidth / 2) + Math.cos(angle) * radius; 
      this.y = (window.innerHeight / 2) + Math.sin(angle) * radius; 
      this.tX = tx; this.tY = ty; this.color = color; 
      this.size = 2.2 * dpr; 
      this.ease = 0.07; 
      this.opacity = 0; 
    }

    draw(ctx: CanvasRenderingContext2D, dpr: number) { 
      if (this.opacity <= 0) return; 
      ctx.globalAlpha = this.opacity; 
      ctx.fillStyle = this.color; 
      ctx.fillRect(this.x * dpr, this.y * dpr, this.size, this.size); 
    }

    update(rect: DOMRect) { 
      const destX = rect.left + this.tX;
      const destY = rect.top + this.tY;
      const dx = destX - this.x; const dy = destY - this.y; 
      this.x += dx * this.ease; this.y += dy * this.ease; 
      this.opacity = Math.min(1, (1 - Math.sqrt(dx*dx + dy*dy) / (window.innerWidth / 1.5)) * 3.5); 
    }
  }
//*Fin************************Lógica de movimiento de Partículas************************

//*Inicio************************Crea el arreglo de partículas************************

const init = (ctx: CanvasRenderingContext2D, image: HTMLImageElement, container: HTMLDivElement, dpr: number) => {
      if (!canvasRef.current) return [];
      canvasRef.current.width = window.innerWidth * dpr; 
      canvasRef.current.height = window.innerHeight * dpr; 
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      const cW = container.clientWidth; 
      const cH = (image.height / image.width) * cW;
      const tempC = document.createElement('canvas'); 
      const tempCtx = tempC.getContext('2d', { willReadFrequently: true }); if (!tempCtx) return []; 
      
      tempC.width = cW; tempC.height = cH; 
      tempCtx.drawImage(image, 0, 0, cW, cH);
      
      const data = tempCtx.getImageData(0, 0, cW, cH).data;
      const particlesArr: Particle[] = [];
      for (let y = 0; y < cH; y += 2.2) { 
        for (let x = 0; x < cW; x += 2.2) { 
          const i = (Math.floor(y) * cW + Math.floor(x)) * 4; 
          if (data[i + 3] > 128) particlesArr.push(new Particle(x, y, `rgb(${data[i]},${data[i+1]},${data[i+2]})`, dpr)); 
        } 
      }
      return particlesArr;
    };

//*Fin************************Crea el arreglo de partículas************************


//*Inicio************************Control del flujo de particulas (avatar)************************

useEffect(() => {
    // Si la página no está montada o no existen los contenedores, no hacemos nada aún
    if (!mounted || !canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true }); if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    let animationFrameId: number;
    let particles: Particle[] = [];
    const image = new Image();

    image.onload = () => {
      setShowFinal(true); // Disparador para mostrar el texto del Hero
      particles = init(ctx, image, containerRef.current!, dpr);
      
      const render = () => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        const rect = containerRef.current!.getBoundingClientRect(); 
        let settled = true;

        particles.forEach(p => { 
          p.update(rect); p.draw(ctx, dpr); 
          if (settled && Math.abs(p.x - (rect.left + p.tX)) > 2.0) settled = false; 
        });

        if (!settled) {
          animationFrameId = requestAnimationFrame(render); 
        } else {
          setIsAssembled(true); // Ensamblado completado, permite mostrar el avatar final
        }
      };
      render();
    };

    image.onerror = () => console.error("Error cargando la imagen en:", imagePath);
    image.src = imagePath;

    return () => cancelAnimationFrame(animationFrameId);
    // Sincronizamos con 'mounted' para que el hook re-intente cuando los elementos existan
  }, [imagePath, mounted]); 

  return { isAssembled, showFinal };
};
//*Fin************************Control del flujo de particulas (avatar)************************