Prompt portafolio web MVP

🎯 ROL Y OBJETIVO

Construir un sitio web portafolio que comunique:

Pensamiento de producto
Claridad estructural
Alto criterio visual
Profesionalismo alineado a estándares europeos

El sitio debe demostrar:

→ Cómo piensa
→ Cómo diseña
→ Cómo genera impacto

NO es solo visual → es argumento profesional

🧩 PRINCIPIOS UX (OBLIGATORIOS)

El sitio debe cumplir con las 10 heurísticas de Jakob Nielsen, especialmente:
1. Visibilidad del estado del sistema (feedback en interacciones)
2. Correspondencia con el mundo real (lenguaje claro)
3. Control y libertad del usuario (navegación intuitiva)
4. Consistencia y estándares
5. Prevención de errores
6. Reconocimiento sobre recuerdo
7. Flexibilidad y eficiencia
8. Diseño estético y minimalista
9. Ayuda para reconocer y recuperar errores
10. Ayuda y documentación implícita (UX que guía sin explicar)

________________________________________________________________________

🎨Design system
Estética general

Minimalismo premium inspirado en:
portfolios europeos,
producto digital moderno,
interfaces editoriales,
Apple / Linear / Notion / Stripe.

La experiencia debe sentirse:

sofisticada,
madura,
silenciosa,
intencional

🅰️ SISTEMA TIPOGRÁFICO
Tipografías
Headings
DM Serif Display Italic, solo puede usarse en:
-Nombre del hero (“Valentina Hernández”)
-Títulos principales de sección (H2)
-Frase de descanso (“Menos ruido. Más intención.”)

TODO el resto del sitio debe usar:
Open Sans.

Subtitles, Body
Open Sans

Escala
--h1: clamp(52px, 7vw, 84px);
--h2: clamp(34px, 4vw, 48px);
--h3: 22px;

--body-lg: 18px;
--body: 16px;
--body-sm: 14px;

TIPOGRAFÍAS
Serif (uso limitado)
font-family: "DM Serif Display", serif;
font-style: italic;

Uso EXCLUSIVO:

Hero name
Section titles
Quote section
Sans Serif (global)
font-family: "Open Sans", sans-serif;

Uso en:

párrafos,
navbar,
overlays,
botones,
labels,
tabs,
cards,
UI,
descripciones,
categorías,
footer,
indicadores.

🎨 COLORES
Toda la web debe vivir sobre fondo oscuro premium:

body {
  background: #0D0515;
}
Contenedores claros
background: #F7F7FD;
Texto
--text-primary: #1A1A1A;
--text-secondary: rgba(0,0,0,0.65);

--text-primary-dark: #FFFFFF;
--text-secondary-dark: rgba(255,255,255,0.75);
Gradiente de marca

Usar SOLO en:

botones primarios,
pequeños detalles,
underline activo navbar.
linear-gradient(90deg, #7679EE, #9B77ED)


🌕 SECCIONES CLARAS 
SOLO ESTAS SECCIONES USAN FONDO CLARO

✔ Proyectos
✔ Sobre mí

IMPORTANTE

Estas secciones NO ocupan todo el ancho.

Deben sentirse como:

grandes superficies editoriales,
tarjetas premium flotando sobre el fondo oscuro.
📐 CONTENEDOR CLARO
.section-light {
  max-width: calc(100% - 2cm);

  margin: 120px auto;

  padding: 100px 80px;

  background: #F7F7FD;

  border-radius: 40px;

  position: relative;

  overflow: hidden;
}

✨ SOMBRA / PROFUNDIDAD
.section-light {
  box-shadow:
    0 30px 80px rgba(0,0,0,0.28);
}
📱 RESPONSIVE
Mobile

Reducir márgenes laterales:

.section-light {
  max-width: calc(100% - 24px);

  border-radius: 24px;

  padding: 48px 24px;
}

✨ SISTEMA DE LUZ (AJUSTADO)
SOLO EXISTE LUZ FOCAL EN:
1. Hero
.hero::before {
  content: "";
  position: absolute;
  inset: 0;

  background: radial-gradient(
    circle at 25% 40%,
    rgba(118,121,238,0.18),
    transparent 60%
  );
}

Objetivo:
enmarcar el nombre y dirigir la mirada.

2. Frase de descanso
.quote-section::before {
  content: "";
  position: absolute;
  inset: 0;

  background: radial-gradient(
    circle at 50% 50%,
    rgba(118,121,238,0.10),
    transparent 60%
  );
}
PROHIBIDO

❌ glow en todas las secciones
❌ múltiples focos
❌ iluminación decorativa innecesaria

🟣 BOTÓN PRIMARIO
Default
.btn-primary {
  background: linear-gradient(90deg, #7679EE, #9B77ED);
  color: #FFFFFF;

  transition: all 0.25s ease;
}
Hover
.btn-primary:hover {
  transform: translateY(-1px);

  box-shadow:
    0 8px 24px rgba(118,121,238,0.28);
}
Press
.btn-primary:active {
  transform: translateY(0);

  box-shadow:
    0 4px 12px rgba(118,121,238,0.18);
}
Focus
.btn-primary:focus-visible {
  outline: 2px solid #7679EE;
  outline-offset: 3px;
}
⚪ BOTÓN SECUNDARIO
Hover
.btn-secondary:hover {
  background: rgba(255,255,255,0.95);
}
Active
.btn-secondary:active {
  transform: scale(0.98);
}

📐 CONTENEDOR PRINCIPAL
Desktop
width: fit-content;
max-width: 920px;

height: 68px;

padding:
0 20px;

border-radius: 999px;
📏 ESPACIADO INTERNO
Distribución horizontal
gap: 20px;
Padding interno vertical
padding-top: 10px;
padding-bottom: 10px;
🅰️ LOGO / NOMBRE
Área logo
min-width: 120px;
Texto logo
font-size: 15px;
font-weight: 600;
📂 ITEMS DE NAVEGACIÓN
Cada item
height: 40px;

padding:
0 14px;

border-radius: 999px;
Texto navegación
font-size: 14px;
font-weight: 500;
🌐 TOGGLE ES / EN
Contenedor
width: 72px;
height: 40px;

border-radius: 999px;
Cada idioma
width: 32px;
height: 32px;
🔘 CTA “HABLEMOS”
Dimensiones
height: 44px;

padding:
0 18px;

border-radius: 999px;
Texto
font-size: 14px;
font-weight: 600;
✨ GLASSMORPHISM
Fondo
Dark sections
background:
rgba(15,15,20,0.72);

backdrop-filter:
blur(20px);
Light sections
background:
rgba(255,255,255,0.82);

backdrop-filter:
blur(20px);
🧱 BORDE
border:
1px solid rgba(255,255,255,0.10);

Modo claro:

border:
1px solid rgba(0,0,0,0.08);
🌫️ SOMBRA
box-shadow:
0 10px 30px rgba(0,0,0,0.18);
📍 POSICIONAMIENTO
position: fixed;

top: 24px;

left: 50%;
transform: translateX(-50%);

z-index: 1000;
📱 RESPONSIVE — TABLET
height: 62px;

padding:
0 16px;

gap: 14px;

📱 MOBILE
Contenedor
width:
calc(100% - 24px);

height: 58px;

padding:
0 14px;

border-radius: 999px;
Navegación

Usar:

menú hamburguesa minimal,
o
bottom sheet.

NO intentar mantener todos los items visibles.

📏 SAFE AREA MOBILE
top:
max(12px, env(safe-area-inset-top));

[ LOGO nav bar ]     [ ☰ ]
Menú mobile
dropdown o fullscreen overlay
animación:
opacity: 0 → 1
translateY: -10px → 0
Active state en mobile

👉 mantener underline o highlight lateral

## 🌐 IDIOMA Y ACCESIBILIDAD GLOBAL

OBLIGATORIO: El sitio debe estar disponible en ESPAÑOL e INGLÉS.

- Implementar un switch de idioma (ES | EN) visible en el menú de navegación, como último elemento antes del botón "Hablemos / Let's talk".
- Por defecto cargar en el idioma del navegador del usuario (navigator.language). Si no se detecta, usar español.
- Todo el contenido textual del sitio debe estar disponible en ambos idiomas: hero, secciones, cards de proyectos, footer, botones, tooltips y metadatos.
- El switch debe ser un toggle tipo pill con las dos opciones: ES | EN, con estado activo marcado visualmente.
- Al cambiar de idioma, la transición debe ser fluida sin recargar la página (gestión de estado en JS o framework utilizado).

✔ navegación por teclado
✔ targets clickeables ≥ 44px
______________________________________________________
🦸 HERO

📐 LAYOUT
[ TEXTO ]
[ ELEMENTO VISUAL ]

Desktop:
2 columnas

Mobile:
1 columna

🧾 CONTENIDO

1.Rol
Texto: Diseñadora de producto · UX/UI /Product Designer · UX/UI
Tamaño:Body  14–16px
Peso: medium
Opacidad: 70–80%
Letter-spacing: 80px

2\. Nombre (PROTAGONISTA)

Estilo: H1
Contenido: Valentina Hernandez

Reglas:

* NO animar (solo entrada suave)
* Tamaño: 80–96px
* Line-height: 0.95
* Letter-spacing: 0px

3\. Frase 

Texto base:
Diseño productos que las personas comprenden, adoptan y quieren usar./  I design products people understand, adopt, and actually use.

🎬 ANIMACIÓN REGLA

SOLO cambia la última palabra/frase.

La estructura principal permanece fija.

IMPLEMENTACIÓN

Rotación automática cada:
2.7 segundos

Animación:

blur suave,
fade,
sin movimiento agresivo.
Ejemplo
Diseño productos que las personas:

comprenden.
adoptan.
quieren usar.
MICROINTERACCIÓN

Transición:

opacity: 0 → 1
filter: blur(4px) → blur(0)
duration: 0.35s
🔘 DOT INDICATOR

Debajo de la frase:

3 dots pequeños
el activo cambia sincronizado
sin interacción

ESTILO
.hero-dots {
  display: flex;
  gap: 6px;
}

Dot activo:

background: #FFFFFF;
opacity: 1;

Inactivos:

opacity: 0.3;


4\. CTAs

Primario:
Ver proyectos → /View projects →

Secundario:
Descargar CV / Download CV → descarga directa del archivo PDF del CV.
ICONO

Icono de download minimalista.
Ejemplo:
arrow-down-tray,
download line icon.

Mismo tamaño que el primario

Espaciado vertical:
Rol → Nombre: 16px
Nombre → frase: 32px
Frase → CTAs: 32–40px

5\. ELEMENTO DERECHO
usar recurso: grafico hero
tamaño aprox: 260–320px en desktop, manteniendo proporción responsive
ligera animación:
float sutil (2–3px)

🖱️ INDICADOR DE SCROLL

Agregar al final del hero:
Scroll↓
ICONO
NO reutilizar la flecha de CTA.
Debe ser:
más fina,
vertical,
minimal,
contemplativa.

Inspiración:
chevron-down minimal.
ESTILO
.scroll-indicator {
  position: absolute;
  bottom: 32px;

  font-size: 14px;
  font-family: "Open Sans";

  opacity: 0.5;
}
MOTION
opacity: 0.4 → 0.7
translateY: 0 → 4px
duration: 2s
loop infinito

Debe sentirse:

elegante,
sutil,
no invasivo.

🎨 VISUAL DERECHO

Usar:

gráfico hero,
o
logo animado suavemente.
🎬 MOTION

NO usar animaciones complejas.

Solo:

fade,
translateY suave,
float mínimo en gráfico.

Ejemplo:

opacity: 0 → 1
translateY: 12px → 0
duration: 500ms

______________________________________________________________
📂 PROYECTOS
# 🧾 HEADER

🏷️ JERARQUÍA TIPOGRÁFICA

Eyebrow (label pequeño superior)
Proyectos
font-family: Open Sans;
font-size: 12px;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #6B6B8A;
margin-bottom: 16px;

TÍTULO PRINCIPAL (ÚNICO CON SERIF ITALIC)
Trabajo reciente

font-family: "DM Serif Display";
font-style: italic;
font-size: 44px;
color: #0D0515;
margin-bottom: 16px;

Nota de confidencialidad
Este portafolio incluye proyectos bajo acuerdos de confidencialidad. Las pantallas mostradas son representativas del proceso y no exponen datos sensibles de los clientes./This portfolio includes projects under confidentiality agreements. The screens shown represent the design process and do not expose sensitive client information.

font-family: Open Sans;
font-size: 14px;
color: #6B6B8A;
max-width: 640px;
margin-bottom: 60px;

📐 GRID

Desktop:

[ grande ] [ mediana ]
[ mediana ] [ grande ]

Mobile:
1 columna.

🧩 CARDS

Cada card debe incluir:

categoría,
título,
descripción corta,
CTA “Ver más”.
🎨 ESTILO

Cards premium minimalistas:

border-radius: 24px;
overflow: hidden;
background: rgba(255,255,255,0.04);

Hover:
MUY suave.

📖 OVERLAY LATERAL

📐 ESTRUCTURA
[ Banner visual grande ]

[ Eyebrow ]
[ Título ]
[ Descripción corta ]

[ Grid sofisticado ]
   [ Challenge ]
   [ My role ]

[ Resultado destacado ]

[ Tags / herramientas / impacto ]

🖼️ BANNER SUPERIOR

Cada overlay debe iniciar con:

mockup grande,
visual representativo,
UI showcase,
imagen tipo case-study hero.
ESTILO
.overlay-banner {
  width: 100%;
  height: 320px;

  border-radius: 24px;

  overflow: hidden;

  margin-bottom: 32px;
}
🧩 DIAGRAMACIÓN DE CONTENIDO
GRID PRINCIPAL
[ Challenge ]     [ My Role ]

Desktop:
2 columnas.

Mobile:
1 columna.

🎨 BLOQUES EDITORIALES

Cada bloque:

fondo suavemente diferenciado,
icono minimal,
padding amplio,
composición limpia.
.overlay-card {
  background:
    rgba(118,121,238,0.05);

  border: 1px solid
    rgba(118,121,238,0.08);

  border-radius: 24px;

  padding: 28px;
}
🧠 ICONOGRAFÍA

Agregar iconos minimalistas y elegantes en:

✔ Challenge
✔ My Role
✔ Outcome
✔ Process

Estilo:

lineal,
monocromático,
fino,
moderno.

Inspiración:
Lucide / Phosphor / Linear icons.

📌 JERARQUÍA VISUAL
Eyebrow

Open Sans uppercase
12px
letter spacing alta

Título

DM Serif Display Italic

Descripción

Open Sans
16px
máximo 2–3 líneas.

✨ RESULTADO DESTACADO

El Outcome NO debe verse como párrafo plano.

Debe verse como:

bloque de impacto,
highlight visual,
conclusión del case study.
ESTILO
.overlay-outcome {
  background:
    linear-gradient(
      135deg,
      rgba(118,121,238,0.10),
      rgba(155,119,237,0.06)
    );

  border-radius: 28px;

  padding: 32px;

  margin-top: 32px;
}

📂 OVERLAY COPY:
1. SUPERAPP

Eyebrow: Fintech · Mobile
Title: Superapp
Descripción: Diseño de una app financiera para centralizar cuentas, gestionar finanzas y simplificar la toma de decisiones.


-Reto
¿Cómo construir claridad en un ecosistema financiero de alta complejidad? El desafío era diseñar una plataforma donde múltiples servicios convivieran sin fricción, algo que el mercado colombiano aún no tenía.

-Mi rol
-Conduje investigación y entrevistas con usuarios para entender el contexto real de uso.
- Definí la arquitectura de información y los flujos de interacción priorizando la reducción de fricción. 
- Diseñé el sistema visual alineado a la marca del cliente y llevé el producto de wireframes a prototipo de alta fidelidad. 
- Validé el MVP con usuarios reales e iteré a partir de los hallazgos.

-Resultado
MVP validado con usuarios que permitió centralizar múltiples servicios financieros en una sola experiencia clara y navegable, reduciendo la complejidad percibida y facilitando la gestión financiera mediante una interfaz que reduce la curva de aprendizaje.

1. SUPERAPP

Eyebrow: Fintech · Mobile
Description: Design of a financial app to centralize accounts and simplify money management.

Challenge
Designing a platform where multiple financial services coexist without friction, bringing clarity to a highly complex ecosystem.

My role
Led user research and interviews to understand real usage contexts. Defined information architecture and user flows focused on reducing friction. Designed the visual system aligned with the client’s brand and developed the product from wireframes to high-fidelity prototype. Validated the MVP with users and iterated based on insights.

Outcome
Validated MVP that centralized multiple financial services into a single experience, reducing perceived complexity and enabling easier financial management with minimal learning curve.
_________

2. E2P

Eyebrow: AI · Enterprise
Título: E2P
Descripción: Rediseño de una plataforma de inteligencia artificial para optimizar la gestión de procesos empresariales.

-Reto
Transformar un producto desarrollado sin criterios de UX en una herramienta comprensible y usable, abordando problemas estructurales de navegación, interacción y entendimiento de los procesos.

-Mi rol
- Realicé la evaluación heurística y conduje sesiones de testeo para identificar los problemas de raíz.
-A partir de los hallazgos, rediseñé la arquitectura de interacción completa y construí un nuevo sistema de diseño, más limpio, más guiado. 
-Desarrollé el copy UX, los wireframes y los prototipos.
- Documenté los lineamientos visuales y de experiencia para el equipo de desarrollo.

-Resultado
Rediseño integral que convirtió una herramienta compleja en un sistema más claro y estructurado, mejorando la comprensión de los procesos, la interacción con la inteligencia artificial y la toma de decisiones de los usuarios.


2. E2P ( Inglés)

Eyebrow: AI · Enterprise
Description
Redesign of an AI-powered platform to improve enterprise process management.

Challenge
Transforming a technically-driven product with no UX foundation into a usable and understandable tool.

My role
Conducted heuristic evaluation and usability testing to identify core issues. Led the redesign of the interaction architecture and built a new, clearer design system. Developed UX writing, wireframes, and prototypes, and documented design guidelines for development teams.

Outcome
End-to-end redesign that improved usability, clarified complex processes, and enhanced decision-making within the platform.
__________

3. CUBO

Eyebrow: Fintech · SaaS B2B
Título: CUBO
Descripción: Diseño de una plataforma B2B para centralizar y optimizar la gestión de pagos de nómina y proveedores.


-Reto
Simplificar una operación crítica y altamente operativa, integrando en una sola plataforma la gestión de pagos con trazabilidad completa y control en tiempo real.

-Mi rol
- Contribuí al diseño de la experiencia de usuario definiendo arquitectura de información y flujos. 
- Desarrollé wireframes y prototipos de alta fidelidad aplicando el sistema de diseño del cliente. 
- Participé en sesiones de testeo con usuarios e iteré la solución a partir de los hallazgos.
- Documenté la experiencia mediante historias de usuario y manuales, trabajando en colaboración con equipos multidisciplinarios.

Resultado
Experiencia optimizada que mejoró la claridad en la gestión de pagos, redujo errores operativos y aumentó el control y la trazabilidad para los equipos financieros.

3. CUBO

Eyebrow: Fintech · B2B SaaS

Description
Design of a B2B platform to centralize and optimize payroll and supplier payments.

Challenge
Simplifying a critical, operational-heavy process while ensuring full traceability and real-time control.

My role
Contributed to UX design by defining information architecture and user flows. Created wireframes and high-fidelity prototypes aligned with the existing design system. Participated in user testing and iterated based on insights. Documented the product through user stories and guides in collaboration with cross-functional teams.

Outcome
Improved clarity in payment management, reduced operational errors, and increased control and traceability for financial teams.


___________

4. DRIMTIM

Eyebrow: HRTech · Web
Título: Drimtim
Descripción: Optimización de una plataforma ERP para una empresa de outsourcing y administración de talento humano.


-Reto
Mejorar la experiencia de una herramienta interna utilizada por distintos perfiles, asegurando coherencia en un sistema de diseño existente e integrando nuevas funcionalidades sin generar fricción.

- Mi rol
- Apliqué y extendí el sistema de diseño existente, diseñando nuevas secciones y flujos. 
- Trabajé en wireframes y prototipos, colaborando estrechamente con desarrollo para asegurar viabilidad técnica y consistencia en la implementación.

- Resultado
Mejora en la navegación y estructura de la plataforma, permitiendo una ejecución más eficiente de tareas y una experiencia más consistente entre diferentes perfiles de usuario.

4. DRIMTIM (Inglés)

Eyebrow: HRTech · Web

Description
Optimization of an ERP platform to improve navigation and operational efficiency.

Challenge
Enhancing a multi-user internal tool while maintaining consistency within an existing design system.

My role
Extended the design system and designed new flows and sections. Developed wireframes and prototypes, collaborating closely with developers to ensure feasibility and consistency.

Outcome
Improved navigation and structure, enabling more efficient task execution and a more consistent experience across user roles.

🎬 MICROINTERACCIONES OVERLAY
Entrada
opacity: 0 → 1
translateX: 24px → 0

duration: 0.4s
Cards internas
opacity: 0 → 1
translateY: 12px → 0

stagger: 60ms

♿ UX OVERLAY

OBLIGATORIO:

✔ ESC cierra
✔ click afuera cierra
✔ scroll interno
✔ focus trap
✔ mantener posición del grid
____________________________________________________________________________
SECCIÓN FRASE DE DESCANSO 

🧠 CONTENIDO
Menos ruido. Más intención./Less noise. More intention. 

👉 una sola línea
👉 sin subtítulos
👉 sin elementos extra

🎨 CONTEXTO VISUAL
- fondo: #0D0515 (oscuro)
- sección full width
- sin bordes ni contenedores visibles
📐 LAYOUT
[ centrado absoluto horizontal y vertical ]
.quote-section {
  position: relative;
  width: 100%;
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #0D0515;
  overflow: hidden;
}

✍️ TIPOGRAFÍA (CLAVE)
- tipografía: DM Serif Display Italic
- tamaño: 48px – 64px (responsive)
- color: blanco
- alineación: centro
- weight: regular (no bold)
.quote-text {
  font-family: "DM Serif Display", serif;
  font-style: italic;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.2;

  color: #FFFFFF;
  text-align: center;

  max-width: 900px;
  padding: 0 24px;

  z-index: 2;
}
✨ LUZ DE FONDO (SUTIL — MUY IMPORTANTE)

👉 NO brillante
👉 NO protagonista

.quote-section::before {
  content: "";
  position: absolute;
  inset: 0;

  background: radial-gradient(
    circle at 50% 50%,
    rgba(118,121,238,0.08),
    transparent 60%
  );

  z-index: 1;
}

🎬 ANIMACIÓN (SUTIL Y PREMIUM)
ENTRADA
opacity: 0 → 1
translateY: 20px → 0
duración: 0.8s
ease-out
.quote-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

🌀 MICRO-MOTION (OPCIONAL PERO TOP)
ligero movimiento de luz (muy lento)
duración: 8s
.quote-section::before {
  animation: subtleGlow 8s ease-in-out infinite alternate;
}

@keyframes subtleGlow {
  from {
    transform: scale(1);
    opacity: 0.08;
  }
  to {
    transform: scale(1.1);
    opacity: 0.12;
  }
}

📱 RESPONSIVE
TABLET / MOBILE
.quote-section {
  height: 50vh;
}

.quote-text {
  font-size: 32px;
}

🚫 ERRORES A EVITAR

❌ dividir la frase en dos líneas forzadas
❌ usar glow fuerte o colores saturados
❌ agregar botones o CTA
❌ meter más texto
___________________________________________________________________________
👤 SOBRE MÍ
Debe incluir luz focal sutil hacia el lado izquierdo (foto)

📐 LAYOUT
[ FOTO ]
[ CONTENIDO ]

Desktop:
2 columnas.

Mobile:
1 columna.

🧾 CONTENIDO (DERECHA)
🏷️ EYEBROW
SOBRE MÍ
font-family: Open Sans;
font-size: 12px;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #6B6B8A;
margin-bottom: 16px;
🔥 TÍTULO (ÚNICO SERIF ITALIC)
Diseño con intención.
font-family: "DM Serif Display";
font-style: italic;
font-size: 40px;
line-height: 1.2;
color: #0D0515;
margin-bottom: 24px;

✍️ DESCRIPCIÓN

🧩 TABS

Mantener tabs:

Experiencia
Estudios
Habilidades
Herramientas
ESTILO
.tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}

.tab {
  font-size: 14px;
  color: #6B6B8A;
  cursor: pointer;
  position: relative;
}

.tab.active {
  color: #0D0515;
}

.tab.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #5B5FEF;
}


🎬 MOTION

Solo:

fade,
translateY,
transición simple tabs.

Contenido:
👤 SOBRE MÍ

Eyebrow: Sobre mí
Headline: Diseño con intención

Soy diseñadora de producto con enfoque en UX/UI. Antes de diseñar, necesito entender el problema, el contexto y a quién afecta realmente.

Trabajo en la intersección entre investigación, arquitectura e interacción para construir productos con una propuesta de valor clara, funcionales y pensados para su contexto real de uso. Me interesa diseñar experiencias que reduzcan complejidad, faciliten la toma de decisiones y generen valor tanto para el usuario como para el negocio.

Tengo experiencia colaborando con equipos multidisciplinarios en productos digitales B2B y B2C, participando desde research y definición de flujos hasta prototipado, sistemas de diseño y validación con usuarios. Disfruto trabajar de forma colaborativa, iterar rápido y convertir problemas complejos en soluciones utilizables, escalables y visualmente coherentes.

Experiencia
UX/UI Designer

Digital Bank Group · Nov 2024 – Feb 2026

Definí journeys y flujos de interacción end-to-end, para productos fintech web y mobile,
priorizando claridad y eficiencia.
Conduje investigación y testeo con usuarios para validar e iterar.
Diseñé prototipos hi-fi alineados a necesidades de negocio y usuario.
Creé design systems consistentes con la identidad de marca del cliente.
Colaboré con equipos multidisciplinarios en entornos Agile.

Grupo Fesa S.A. · Oct – Dic 2024

Definí arquitectura de información de módulos faltantes.
Diseñé flujos y prototipos aplicando y escalando el design system.
Coordiné con stakeholders y desarrollo para asegurar viabilidad técnica antes del handoff.

Banco de Bogotá · 2023 – 2024

Rediseñé flujos para mejorar la eficiencia en procesos operativos.
Optimicé interfaces existentes a partir de principios de usabilidad y feedback de usuarios.
Gestioné las comunicaciones y rediseño de la plataforma web interna.


Estudios
Diseño Industrial — Universidad Nacional de Colombia · 2025
Google UX Design Professional Certificate · 2025

Reconocimientos
Semifinalista – Premio Mario Hernández 2024
Top 15  mejores proyectos en la categoría de estrategia de marketing

Habilidades
Definición de producto e investigación UX
Arquitectura de información y flujos de usuario
Wireframes y prototipado hi-fi
Design Systems
Testeos de usabilidad
Inglés B2

Herramientas
Figma
Sketch 
Adobe XD
Photoshop 
Illustrator
Maze
Jira 
Miro
Herramientas IA: Lovable, Gemini,
ChatGPT, Antigravity, etc.


👤 ABOUT ME

Eyebrow: About me
Headline: Design with intention

I’m a product designer focused on UX/UI. Before designing, I take the time to understand the problem, the context, and the people affected.

I work at the intersection of research, structure, and interaction to build products with clear value, functional products designes for real-world use. I’m especially interested in reducing complexity, improving decision-making, and creating experiences that generate value for both users and businesses.

I’ve collaborated with cross-functional teams across B2B and B2C digital products, contributing from research and user flows to prototyping, design systems, and usability validation. I enjoy working collaboratively, iterating quickly, and turning complex problems into scalable and intuitive solutions.

EXPERIENCE

UX/UI Designer
Digital Bank Group · Nov 2024 – Feb 2026

Defined end-to-end interaction journeys and flows for fintech web and mobile products,
prioritising clarity and efficiency at every user decision point.
Conducted user research and testing to validate and iterate.
Designed hi-fi prototypes aligned to business and user needs.
Created consistent design systems aligned with the client's brand identity.
Collaborated with cross-functional teams in Agile environments.

UX/UI Designer
Grupo Fesa S.A. · Oct – Dec 2024

Defined the information architecture of missing modules.
Designed flows and prototypes applying and scaling the design system.
Coordinated with stakeholders and development to ensure technical feasibility before handoff.

UX/UI Designer
Banco de Bogotá · 2023 – 2024

Redesigned flows to improve efficiency in operational processes.
Optimised existing interfaces based on usability principles and user feedback.
Managed communications and redesign of the internal web platform.


 EDUCATION

Industrial Design — National University of Colombia · 2025
Google UX Design Professional Certificate · 2025

 ACHIEVEMENTS

Semi-finalist — Mario Hernández Award 2024
Top 15 projects in Marketing Strategy category

 SKILLS

Product definition & UX research
Information architecture & user flows
Wireframing & high-fidelity prototyping
Design systems
Usability testing
English — B2

TOOLS

Figma
Sketch 
Adobe XD
Photoshop 
Illustrator
Maze
Jira 
Miro
Herramientas IA: Lovable, Gemini,
ChatGPT, Antigravity, etc.

_________________________________________________

💡 CÓMO TRABAJO
header:
🏷️ EYEBROW
Cómo trabajo/How I work
font-family: Open Sans;
font-size: 12px;
letter-spacing: 0.2em;
text-transform: uppercase;
color: #6B6B8A;
margin-bottom: 16px;
🔥 TÍTULO (ÚNICO SERIF ITALIC)
Headline: Cada proyecto empieza con preguntas. El diseño es cómo las respondo.
font-family: "DM Serif Display";
font-style: italic;
font-size: 40px;
line-height: 1.2;
color: #0D0515;
margin-bottom: 24px;


📐 ESTRUCTURA

3 bloques:

Entender antes de diseñar
Diseñar para generar valor
Construir para escalar
🎨 ESTILO

Cards simples:

fondo claro,
icono minimal,
texto corto.
🎬 MOTION

Hover sutil únicamente.

Contenido:
Eyebrow: Cómo trabajo
Headline: Cada proyecto empieza con preguntas. El diseño es cómo las respondo.

1.Entender antes de diseñar
Me involucro en el proyecto desde su raíz: escucho a los usuarios, comprendo los objetivos del negocio y mapeo el contexto completo para tomar decisiones de diseño. 

2.Diseñar para generar valor
Cada decisión de diseño responde a un objetivo claro. Diseño experiencias accesibles, funcionales y pensadas para contextos reales de uso.

3.Construir para escalar
Pienso en sistemas, no en pantallas aisladas. Diseño soluciones coherentes y escalables, cuidando los detalles visuales y de interacción para mantener consistencia a medida que el producto evoluciona.


💡 HOW I WORK

Eyebrow: How I work
Headline: Every project starts with questions. Design is how I answer them.

Understand before designing
I start by understanding users, business goals, and context to make informed design decisions.

2. Design for impact
Every design decision serves a clear purpose. I design accessible, functional experiences that balance user needs, business goals, and technical feasibility.

3.Build to scale
I design systems, not isolated screens, creating scalable and consistent experiences while paying attention to the details that matter.


______________________________________
🧱 FOOTER
Contenido

¿Tienes un proyecto en mente?
Hablemos.

Vahernandezb.es@gmail.com · LinkedIn · +34 641 11 44 81

📱 RESPONSIVE

OBLIGATORIO:

mobile-first,
tipografía legible,
spacing consistente,
targets ≥ 44px.
♿ ACCESIBILIDAD

✔ contraste WCAG
✔ focus visible
✔ navegación teclado
✔ alt text imágenes
✔ overlays accesibles

🎯 RESULTADO ESPERADO

Un portafolio que se perciba:

claro,
elegante,
maduro,
estratégico,
premium,
profesional,
fácil de navegar,
alineado con estándares europeos de producto.

NO debe sentirse:

experimental,
sobre diseñado,
pesado,
lento,
excesivamente visual.
