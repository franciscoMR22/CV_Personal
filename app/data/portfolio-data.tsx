/* Se separa el contenido de los arreglos para mantener más eficiente el código
    
    Revisión ID: CV06032026001
    Update: Added experienceData for Wavy Roadmap
    Created by: Francisco Mireles Rodriguez

*/
import { Code2, Terminal, Database, Server, Cpu, Briefcase, Smartphone, Network, Container, Globe, ShieldCheck, HardDrive, LayoutDashboard, Activity, Library, Rocket, Boxes, Cog, Shapes, Layers, Crown } from 'lucide-react'

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
// Miniatura (primera página del PDF) de cada certificado: /docs/X.pdf -> /thumbs/X.jpg
export const certThumb = (file: string) => file.replace(/^\/docs\//, '/thumbs/').replace(/\.pdf$/i, '.jpg')

export const projectsData = [
  { id: 1,
    title: "OMS Corporativo", short: "OMS", icon: <Server />,
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
    title: "Home Lab Linux", short: "Home Lab", icon: <Terminal />,
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
          points: ["LVM en el SSD: 110 GB para el sistema, tres volúmenes de 40 GB para los sistemas de desarrollo y unos 220 GB libres para crecer.", "Respaldo diario a las 03:00 con rsync hacia el disco Seagate, con un RPO de 24 horas.", "Backups y datos fríos van al HDD para reducir el desgaste del SSD."] } } ] },
  { id: 3,
    title: "NetStack OSI × TCP/IP", short: "NetStack", icon: <Network />,
    category: "Redes & Educación",
    description: "Comparación interactiva entre el modelo OSI y TCP/IP, con simulador de encapsulamiento, catálogo de más de 100 protocolos y modo práctica.",
    metrics: { left: "Catálogo: +100 protocolos", right: "Estado: en línea" }, featured: false, accent: "#D08A4E",
    links: { live: "https://franciscomr22.github.io/ModeloOSI_TCP/", repo: "https://github.com/franciscoMR22/ModeloOSI_TCP" },
    layers: [
      { label: "Interfaz", detail: "Next.js · React · Tailwind · Motion", icon: <LayoutDashboard />,
        info: { stack: "Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui · Motion",
          summary: "Sitio de una sola página que muestra una sección a la vez: capas, trazado, flujos, excepciones y práctica.",
          points: ["Español e inglés y modo básico o técnico, sin librería de i18n: cada texto lleva sus dos versiones.", "Tema claro y oscuro con superficies de vidrio y un resplandor que sigue al cursor.", "Guía rápida integrada que recorre la interfaz paso a paso."] } },
      { label: "Simulación", detail: "Encapsulamiento HTTP/2 + TLS 1.3 y handshakes con RTT", icon: <Activity />,
        info: { stack: "HTTP/2 · TLS 1.3 · TCP · IPv4 · Ethernet",
          summary: "Modela una petición HTTP/2 cifrada con TLS 1.3 y la encapsula capa por capa con tamaños reales de cabecera.",
          points: ["Calcula MSS, número de segmentos y relleno, y muestra cada cabecera byte a byte en un inspector de bits.", "Diagramas de secuencia de handshakes reales: TCP de 3 vías, TLS 1.3, HTTP/3 sobre QUIC y QUIC 0-RTT, con comparación de latencia en RTT.", "Recorrido de lo que ocurre desde que se escribe una URL hasta que se renderiza la página."] } },
      { label: "Catálogo de protocolos", detail: "Más de 100 protocolos con referencia a su RFC", icon: <Library />,
        info: { stack: "+100 fichas · búsqueda con Ctrl+K · RFC y estándares",
          summary: "Cada protocolo se define una sola vez, en el archivo de su capa principal, y las tarjetas de ambos modelos se llenan a partir de ahí.",
          points: ["Fichas con resumen, detalle técnico, seguridad y buenas prácticas, y referencia al RFC o estándar vigente.", "Se carga bajo demanda con import dinámico para no inflar el bundle inicial.", "Los protocolos multicapa, como ARP, TLS, BGP, MPLS y QUIC, llevan una nota que explica por qué no encajan en una sola capa."] } },
      { label: "Modelo de datos", detail: "OSI y TCP/IP con su mapeo y cabeceras campo por campo", icon: <Database />,
        info: { stack: "OSI (7 capas) · TCP/IP (4 capas) · TypeScript",
          summary: "Datos tipados de las capas, la correspondencia entre modelos y la anatomía de cada cabecera.",
          points: ["La correspondencia OSI ↔ TCP/IP se dibuja con conectores SVG que se recalculan al cambiar el tamaño de las tarjetas.", "Cabeceras de Ethernet II, IPv4, IPv6, TCP, UDP, TLS 1.3 y HTTP/2 con ancho en bits y explicación básica y técnica.", "Contenido verificado contra RFC 1122/1123, RFC 9113 y la ISO/IEC 7498-1."] } },
      { label: "Despliegue", detail: "Exportación estática en GitHub Pages con Actions", icon: <Rocket />,
        info: { stack: "GitHub Pages · GitHub Actions · exportación estática",
          summary: "Sitio estático publicado de forma automática.",
          points: ["Cada push a main reconstruye y republica el sitio.", "En desarrollo se sirve en la raíz; el basePath solo se activa dentro del workflow de despliegue."] } } ] },
  { id: 4,
    title: "Ajedrez 3D", short: "Ajedrez 3D", icon: <Crown />,
    category: "Juegos & 3D",
    description: "Ajedrez con tablero 2D y 3D, motor de reglas propio y piezas de mármol modeladas en OpenSCAD.",
    metrics: { left: "Pruebas: +30 con Vitest", right: "Estado: en desarrollo" }, featured: false, accent: "#A78BFA",
    layers: [
      { label: "Interfaz 2D y 3D", detail: "React · TypeScript · Vite, con tablero en DOM y en WebGL", icon: <LayoutDashboard />,
        info: { stack: "React 19 · TypeScript · Vite · CSS con unidades de contenedor",
          summary: "Pantalla completa con barra superior, historial, columnas de capturadas y un tablero que crece hasta llenar el espacio libre.",
          points: ["Vista 2D en el DOM y vista 3D con carga diferida: three queda en chunks aparte y no pesa en la carga inicial.", "Historial de jugadas con desplazamiento automático y leyenda temporal sobre el tablero para enroque, captura, promoción y jaque.", "Ventana de adicionales con los mods de apariencia y un visor para inspeccionar cada pieza."] } },
      { label: "Escena 3D", detail: "react-three-fiber y three.js: piezas arrastrables, mods y estudio de luces", icon: <Boxes />,
        info: { stack: "three.js · react-three-fiber · drei · shaders con onBeforeCompile",
          summary: "El tablero 3D tiene dos modos: ver, para girar la cámara, y jugar, con la cámara fija y las piezas clicables o arrastrables.",
          points: ["El arrastre usa raycast contra el plano del tablero y convierte la posición en casilla.", "Un mod cambia solo la apariencia (colores, estilo de tablero y de piezas, luces y fondo) y lo que no define lo hereda del clásico.", "El mármol se proyecta en triplanar con un shader, el cuero recibe UV generadas al cargar y las normales se recalculan.", "Iluminación de estudio de tres puntos con entorno de reflejos."] } },
      { label: "Estado de la partida", detail: "zustand con persistencia: la partida es la lista de jugadas", icon: <Layers />,
        info: { stack: "zustand · persist · localStorage",
          summary: "La fuente de verdad no es un objeto de partida sino la lista de jugadas; cada acción reconstruye la partida a partir de ella.",
          points: ["Solo se persisten las jugadas, la vista y el mod; la selección, la promoción pendiente y la leyenda son efímeras.", "Deshacer es quitar la última jugada de la lista.", "El estado se versiona y migra: al cambiar el formato se descarta el guardado anterior en lugar de romper la partida."] } },
      { label: "Motor de reglas", detail: "Motor propio sin dependencias, con reglas de casa y seguimiento de piezas", icon: <Cog />,
        info: { stack: "TypeScript puro · Vitest · +30 pruebas",
          summary: "Motor escrito desde cero, sin React y sin librerías de ajedrez, con una variante de reglas definida por mí.",
          points: ["El jaque solo avisa y no restringe jugadas; la partida termina al capturar al rey.", "Enroque con una única restricción de ataque: la casilla que cruza el rey no puede estar atacada.", "Tablas por material insuficiente, regla de 50 movimientos, triple repetición y falta de jugadas.", "Un seguimiento de piezas reproduce el historial y da un id estable a cada una, lo que permite animar movimientos, enroque, captura al paso y promoción."] } },
      { label: "Modelado en OpenSCAD", detail: "Piezas en modelado continuo con OpenSCAD, exportadas a STL", icon: <Shapes />,
        info: { stack: "OpenSCAD · STL · meshoptimizer · STLLoader",
          summary: "Los modelos 3D de las piezas se están diseñando de forma paramétrica en OpenSCAD, en versiones de mármol y de cuero, y se siguen refinando.",
          points: ["Un script de OpenSCAD por pieza; los modelos se exportan a STL y alimentan directamente el tablero 3D.", "Seis modelos compartidos por ambos colores, exportados en milímetros con la base en el origen.", "Reducción de malla con error relativo de 0.0004: el tablero inicial pasó de unos 3.3 millones de triángulos a cerca de 1 millón sin pérdida visible al acercar la cámara.", "Los doce archivos se precargan juntos y las geometrías se comparten entre piezas."] } } ] },
  { id: 5,
    title: "Sistema Institucional en Oracle APEX", short: "Oracle APEX", icon: <Database />,
    category: "Gestión documental & Low-Code",
    description: "Plataforma web que digitaliza un trámite administrativo con revisión y firma por etapas, accesos por rol y trazabilidad.",
    metrics: { left: "Plataforma: Oracle APEX", right: "Rol: Backend" }, featured: false, accent: "#F43F5E",
    layers: [
      { label: "Interfaz web", detail: "Páginas responsivas de Oracle APEX, con vistas distintas por perfil", icon: <LayoutDashboard />,
        info: { stack: "Oracle APEX · HTML5 · CSS · JavaScript",
          summary: "Aplicación web accesible desde escritorio y dispositivos móviles, con una vista de trabajo adaptada a cada tipo de usuario.",
          points: ["Formularios para cargar, consultar y reemplazar documentos.", "Vista dividida para revisar documentos y registrar observaciones.", "Avisos y notificaciones internas que acompañan el avance de cada trámite."] } },
      { label: "Flujo y roles", detail: "Control de acceso por perfiles y revisión por etapas con firma electrónica", icon: <ShieldCheck />,
        info: { stack: "RBAC · esquemas de autorización de APEX · firma electrónica",
          summary: "Cada usuario ve y hace solo lo que le corresponde, y el trámite avanza por etapas formales de revisión.",
          points: ["Permisos por perfil verificados en cada página y funcionalidad.", "Estados claros del trámite y devolución para corrección cuando algo no cumple.", "Historial de movimientos que permite saber quién intervino y cuándo."] } },
      { label: "Lógica de negocio", detail: "Validaciones y reglas en la base de datos con PL/SQL", icon: <Cog />,
        info: { stack: "PL/SQL · triggers · procedimientos almacenados",
          summary: "Las reglas del proceso viven junto a los datos, de modo que se aplican igual sin importar desde dónde se capture la información.",
          points: ["Validaciones automáticas al capturar y al cambiar de etapa.", "Restricciones sobre qué información se puede modificar según su estado.", "Mantenimiento centrado en revisar triggers y consultas."] } },
      { label: "Datos", detail: "Modelo relacional en Oracle con integridad referencial", icon: <Database />,
        info: { stack: "Oracle Database · SQL · modelo entidad-relación",
          summary: "Repositorio central y estandarizado para sustituir el manejo disperso de documentos.",
          points: ["Modelo entidad-relación con llaves primarias y foráneas.", "Los expedientes quedan asociados a su responsable y a su periodo.", "Respaldos programados y políticas de conservación de archivos."] } },
      { label: "Gestión y entrega", detail: "Scrum con Jira, prototipos y documentación por rol", icon: <Rocket />,
        info: { stack: "Scrum · Jira · prototipado de baja y alta fidelidad",
          summary: "Desarrollo iterativo por sprints, con equipo dividido en frontend, backend y base de datos.",
          points: ["Requerimientos levantados con los usuarios y modelados con historias y escenarios.", "Prototipos de baja y alta fidelidad antes de construir las pantallas.", "Entrega con documentación técnica y manuales según el perfil."] } } ] }
];
