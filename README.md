# Francisco Mireles Rodríguez — CV digital

Portafolio profesional de una sola página, enfocado en gestión de proyectos y gobernanza de TI.

**Sitio en vivo:** https://franciscomr22.github.io/CV_Personal/

## Qué incluye

- **Inicio:** presentación con el avatar armado a partir de partículas y fondo animado que cambia con el tema.
- **Experiencia:** recorrido con zoom, una escena por gesto de scroll. La experiencia laboral y la formación académica van en grupos separados, y cada puesto tiene un detalle desplegable con sus logros.
- **Certificados:** carrusel 3D con 33 certificados. Cada tarjeta toma el color de su categoría y se abre en un visor de PDF dentro de la página. Incluye buscador.
- **Proyectos:** OMS Corporativo, Home Lab Linux y NetStack (OSI × TCP/IP). Cada uno abre un diagrama isométrico de su arquitectura; al hacer clic en una capa se muestra su detalle.
- **Navegación y tema:** barra flotante translúcida, tema claro y oscuro, y recorrido por teclado y rueda del ratón.

## Tecnologías

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · componentes de Radix y shadcn/ui · lucide-react · next-themes.

## Estructura

```
app/
  data/portfolio-data.tsx   certificados y proyectos (con sus capas de arquitectura)
  globals.css               tokens de tema y estilos de cada sección
  icon.svg, apple-icon.png  ícono de la pestaña
  layout.tsx, page.tsx      estructura general y secciones
components/
  gradient-carousel.tsx     carrusel de certificados
  experience-deck.tsx       recorrido de experiencia y formación
  isometric-architecture.tsx, layer-info-panel.tsx   arquitectura de proyectos
  pdf-modal.tsx, theme-toggle.tsx
  time-line/                datos de experiencia y efecto de borde
  ui/                       componentes base de shadcn/ui
hooks/                      partículas del avatar y utilidades
lib/                        utilidades y ruta base del despliegue
public/
  avatar.png
  docs/                     certificados en PDF
  thumbs/                   miniatura de cada certificado
```

## Desarrollo

Requiere Node y pnpm.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # genera la exportación estática en out/
```

En desarrollo el sitio se sirve en la raíz. En producción se aplica el `basePath` `/CV_Personal`, por lo que las rutas escritas a mano deben pasar por `withBase()` de `lib/base-path.ts`.

## Despliegue

El sitio se publica en GitHub Pages desde la rama `gh-pages`:

```bash
pnpm run deploy
```

El script compila el proyecto y sube la carpeta `out/`. Se usa `pnpm run deploy` porque `pnpm deploy` es otro comando de pnpm.

## Agregar un certificado

1. Copiar el PDF a `public/docs/`.
2. Guardar la primera página como JPG de unos 720 px de ancho en `public/thumbs/`, con el mismo nombre del PDF.
3. Agregar la entrada en `certificatesData`, dentro de `app/data/portfolio-data.tsx`. La categoría y el color se deducen del nombre en `getCertCategory`.

## Autor

Francisco Mireles Rodríguez — [LinkedIn](https://www.linkedin.com/in/mireles-rodriguez-francisco-47475b272/) · [GitHub](https://github.com/franciscoMR22)
