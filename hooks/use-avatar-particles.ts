/* Contiene la animación de partículas
    Revisión ID: CV19102026002
    Create Date: 03-03-2026 03:16 PM
    Updated: Se corrige el posicionamiento (doble escala por dpr) y el rendimiento
             (arreglos tipados, dibujo por lotes de color, animación basada en tiempo)
    Created by: Francisco Mireles Rodriguez
*/

import { useEffect, useState, MutableRefObject } from 'react';

interface UseAvatarParticlesProps {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  imagePath: string;
  mounted: boolean;
  offsetX?: number; // desplazamiento horizontal (ej. -12)
  offsetY?: number;
}

const STEP = 3;          // separación del muestreo en px (mayor = menos partículas)
const SIZE = 3;          // tamaño de cada partícula en px
const DURATION = 2400;   // duración total del ensamblado en ms
const MAX_DELAY = 0.3;   // fracción de DURATION usada para escalonar las partículas

export const useAvatarParticles = ({
  canvasRef,
  containerRef,
  imagePath,
  mounted,
  offsetX = 0,
  offsetY = 0
}: UseAvatarParticlesProps) => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let cancelled = false;
    const image = new Image();

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // la escala se aplica solo aquí, no al dibujar
    };

    image.onload = () => {
      const container = containerRef.current;
      if (cancelled || !container) return;
      setShowFinal(true);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsAssembled(true);
        return;
      }

      sizeCanvas();

      // --- Muestreo de la imagen ---
      const w = container.clientWidth;
      const h = Math.round((image.height / image.width) * w);
      const temp = document.createElement('canvas');
      temp.width = w;
      temp.height = h;
      const tctx = temp.getContext('2d', { willReadFrequently: true });
      if (!tctx) return;
      tctx.drawImage(image, 0, 0, w, h);
      const data = tctx.getImageData(0, 0, w, h).data;

      const rel: number[] = [];   // posición relativa (0..1) y color cuantizado
      const keys: number[] = [];
      for (let y = 0; y < h; y += STEP) {
        for (let x = 0; x < w; x += STEP) {
          const i = (y * w + x) * 4;
          if (data[i + 3] > 128) {
            rel.push(x / w, y / w);
            keys.push(((data[i] >> 3) << 10) | ((data[i + 1] >> 3) << 5) | (data[i + 2] >> 3));
          }
        }
      }

      // Se ordenan por color para cambiar fillStyle una sola vez por grupo
      const n = keys.length;
      const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => keys[a] - keys[b]);
      const relX = new Float32Array(n), relY = new Float32Array(n);
      const startX = new Float32Array(n), startY = new Float32Array(n);
      const delay = new Float32Array(n);
      const color = new Uint16Array(n);
      order.forEach((src, i) => {
        relX[i] = rel[src * 2];
        relY[i] = rel[src * 2 + 1];
        color[i] = keys[src];
        startX[i] = Math.random() * window.innerWidth;
        startY[i] = Math.random() * window.innerHeight;
        delay[i] = Math.random() * MAX_DELAY;
      });

      const colorCss = (k: number) => `rgb(${((k >> 10) << 3) | 4},${(((k >> 5) & 31) << 3) | 4},${((k & 31) << 3) | 4})`;

      const t0 = performance.now();

      const render = (now: number) => {
        const el = containerRef.current;
        if (!el) { setIsAssembled(true); return; } // se cambió de slide a media animación

        const rect = el.getBoundingClientRect();
        const elapsed = now - t0;
        const progress = elapsed / DURATION;

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.globalAlpha = Math.min(1, elapsed / 300);

        const baseX = rect.left + offsetX;
        const baseY = rect.top + offsetY;
        let lastColor = -1;

        for (let i = 0; i < n; i++) {
          const u = Math.min(1, Math.max(0, (progress - delay[i]) / (1 - MAX_DELAY)));
          const e = 1 - Math.pow(1 - u, 3); // easeOutCubic
          const dx = baseX + relX[i] * rect.width;
          const dy = baseY + relY[i] * rect.width;
          if (color[i] !== lastColor) {
            lastColor = color[i];
            ctx.fillStyle = colorCss(lastColor);
          }
          ctx.fillRect((startX[i] + (dx - startX[i]) * e) | 0, (startY[i] + (dy - startY[i]) * e) | 0, SIZE, SIZE);
        }

        if (progress < 1) {
          rafId = requestAnimationFrame(render);
        } else {
          setIsAssembled(true);
        }
      };
      rafId = requestAnimationFrame(render);
    };

    image.onerror = () => console.error("Error cargando la imagen en:", imagePath);
    image.src = imagePath;

    window.addEventListener('resize', sizeCanvas);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', sizeCanvas);
    };
  }, [imagePath, mounted, offsetX, offsetY]);

  return { isAssembled, showFinal };
};
