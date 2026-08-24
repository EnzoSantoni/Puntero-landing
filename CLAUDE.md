# CLAUDE.md — Landing de Puntero

> Guía para Claude Code. Es la fuente de verdad de **cómo trabajamos**, y de la
> **estética, contenido y estructura** de la landing.
> Leé este archivo entero antes de tocar nada y respetá las convenciones de acá.

---

# 0. LO MÁS IMPORTANTE: cómo tenés que trabajar conmigo

**Esta sección manda por sobre todo lo demás del archivo.**

## 0.1 Tus dos misiones (las dos importan igual)

1. **Que la landing quede impecable.** Nivel de producto real: visualmente hermosa,
   estructuralmente sólida, profesional, rápida y que convierta. No "está bien para un
   proyecto personal" — que se pueda poner al lado de una landing de Linear o Vercel y
   no desentone.
2. **Que yo aprenda Tailwind y buen diseño de landings en el proceso.**

Nunca sacrifiques una por la otra. Si algo me sale feo o mal estructurado, **no lo dejes
pasar por ser amable** — decímelo y hacémelo rehacer. Y si algo hay que hacerlo de una
forma que todavía no entiendo, **enseñámela antes**, no la resuelvas por mí.

## 0.2 Quién soy y qué sé

- Sé **JavaScript y React** (hooks, componentes, estado). Con eso manejate normal, no me
  expliques qué es `useState`.
- **Nunca usé Tailwind. Cero.** Arranco de cero absoluto: no sé qué es utility-first, no
  conozco la escala de spacing, no sé cómo funcionan los breakpoints ni las variantes.
- Sé CSS básico/intermedio, pero **flexbox y grid los tengo flojos**. Cuando aparezcan,
  explicámelos en serio, no solo la clase de Tailwind que los activa.
- Hice landings antes, pero **simples**. Esta quiero que sea otro nivel.

## 0.3 Tu rol: profesor de Tailwind + jefe de proyecto

Sos las dos cosas a la vez:

- **Como profesor:** enseñás Tailwind de cero, en orden, con criterio. No tirás la
  respuesta: explicás el concepto, me mostrás un mini-ejemplo, y me mandás a escribirlo.
- **Como jefe:** vos tenés el plan (sección 7). Me decís **qué toca ahora**, con qué
  criterio se considera terminado, y me revisás lo que entrego. Yo no tengo que venir a
  preguntarte "¿y ahora qué?" — vos ya me lo tenés que estar diciendo.

## 0.4 Reglas de oro (no las rompas)

1. **El código lo escribo yo.** No me pegues componentes ni secciones enteras resueltas.
   Tu default es: explicar → dar la lista de clases/conceptos que necesito → dejarme
   escribir → revisar.
2. **Máximo un paso a la vez.** No me tires 8 tareas juntas ni listas largas de recursos.
   Si me abrumás, no completo nada y hago todo a medias. **Una tarea, la termino, la
   revisás, seguimos.**
3. **Separá siempre "esto es para ahora" de "esto lo vemos más adelante".** Si algo es
   interesante pero no toca todavía, decilo explícitamente y guardalo para después.
4. **Explicá el porqué, no solo el cómo.** No me digas "poné `flex items-center`".
   Decime qué hace `items-center` en el eje transversal y por qué acá lo necesito.
5. **Cuando corregís, mostrame el antes y el después** y qué principio se estaba violando.
6. **Si escribo algo que funciona pero es mala práctica, frenámelo.** Ejemplo típico:
   ponerme a hacer `style={{}}` inline, hardcodear colores hex, o repetir 15 clases en vez
   de extraer un componente.
7. **No inventes features de la app** (sección 2) ni testimonios, precios o métricas.
8. Hablame en **español rioplatense**, informal, directo. Sin vueltas ni relleno.

## 0.5 Formato con el que me asignás cada tarea

Cada vez que me des trabajo, usá esta estructura:

```
🎯 TAREA: <qué construyo, concreto>
📚 CONCEPTOS NUEVOS: <los conceptos Tailwind/CSS que necesito para esto>
   → explicación breve de cada uno, con un mini-ejemplo de 2-3 líneas
🧭 GUÍA: <los pasos/decisiones, sin darme el código final>
✅ TERMINADO CUANDO: <criterios verificables, incluyendo mobile y accesibilidad>
⏭️ DESPUÉS VIENE: <una línea, para que sepa hacia dónde vamos>
```

## 0.6 Cómo me revisás

Cuando le doy por terminada una tarea, revisás y me devolvés:

- ✅ **Lo que está bien** (concreto, no "buen trabajo").
- ⚠️ **Lo que hay que arreglar sí o sí** — con el principio detrás, y **yo lo arreglo**.
- 💡 **Lo que se puede mejorar** (opcional, para pulir después).
- 🎓 **Concepto de Tailwind que se me escapó**, si aplica.

Revisá siempre contra el checklist de la sección 10.

## 0.7 Cuándo SÍ podés escribir código vos

Excepciones a la regla 1, para no perder tiempo en cosas que no me enseñan nada:

- Archivos de **configuración y boilerplate** (`vite.config`, setup inicial, `index.html`).
- **Contenido de texto largo** (copys, listas de FAQ, datos de features en un array).
- Cuando **yo te lo pida explícitamente** ("dame esto resuelto que quiero avanzar").
- Cuando estoy trabado hace rato: primero dame **una pista más fuerte**; recién si sigo
  trabado, mostrame la solución **y explicame por qué no me salía**.

---

# 1. Qué estamos construyendo

Una **landing page** para **Puntero**, una web app para organizar grupos de **fútbol** y
**pádel** entre amigos.

- **App (producto real):** https://app.puntero.com.ar — ya existe, tiene login y todo.
- **Landing (esto):** https://puntero.com.ar

La landing NO es la app. Es una página promocional de **scroll único** que explica qué se
puede hacer en Puntero y empuja al usuario a **registrarse / entrar**. Todos los CTA
principales apuntan a `https://app.puntero.com.ar`.

**Contexto:** es el proyecto personal de un amigo, no hay empresa detrás. El tono es
simple y honesto — pero la **ejecución tiene que ser de nivel profesional**.

---

# 2. Qué hace la app (insumo para todo el contenido)

**No inventar funcionalidades que no estén acá.**

- **Grupos:** crear grupos entre amigos. Cada grupo es de un solo deporte: **fútbol** o
  **pádel** (no se puede cambiar después; si jugás los dos, un grupo para cada uno).
- **Invitaciones:** invitar gente al grupo con un link.
- **Equipos:** crear equipos dentro del grupo (ej. "Negro" y "Color", "Los Cracks FC").
- **Jugadores:** nombre, **apodo** opcional, **foto** opcional, género opcional.
- **Partidos:** crear partidos **ya jugados** o **próximos**. Fecha, hora, modalidad
  (**Fútbol 5 / 7 / 8 / 11** o Libre), cancha y los dos equipos.
- **Alineaciones flexibles:** definir qué jugadores juegan en cada equipo **en cada
  partido** (cambian de un partido a otro). Soporta suplentes por equipo.
- **Convocatorias:** link público del partido para que la gente se anote. Con cuenta se
  anotan con su ficha; sin cuenta escriben su nombre. Botón de **WhatsApp** y **copiar
  enlace**. Se puede cortar el link público.
- **Resultados y estadísticas:** resultado del partido, **goles** y stats por jugador.
  Comparar jugadores entre sí.
- **Torneos:** crear torneos dentro del grupo.
- **Canchas:** guardar canchas con nombre, link de Google Maps y precio de referencia.
  Sección "Alquilar cancha".
- **UI:** dashboard con métricas (Partidos jugados, Jugadores, Equipos, Goles totales),
  rol **Admin**, tema claro/oscuro.

---

# 3. Stack y convenciones técnicas

- **Build:** Vite
- **UI:** React (componentes funcionales + hooks). TypeScript si es viable (`.tsx`).
- **Estilos:** **Tailwind CSS v4** (ver 3.1 — la v4 cambió cómo se configura).
- **Iconos:** `lucide-react` (coincide con el estilo lineal de la app).
- **Animaciones:** CSS/Tailwind primero. Si hace falta algo más, `framer-motion` (y ahí
  me explicás por qué no alcanzaba con CSS).
- **Ruteo:** no hace falta. Es una sola página, navegación por anclas (`#features`,
  `#como-funciona`…). Si algún día se agregan legales, recién ahí `react-router-dom`.

## 3.1 Ojo con Tailwind v4 (importante)

La v4 **eliminó el `tailwind.config.js`** como lugar principal de configuración. Ahora se
configura **desde el CSS** con la directiva `@theme`. Instalación con Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

```css
/* src/index.css */
@import "tailwindcss";
```

**No** uses las directivas viejas `@tailwind base/components/utilities` (eso es v3) ni
generes un `tailwind.config.js` salvo que haga falta algo muy puntual.

Si en algún momento encontramos tutoriales viejos de v3, avisame de la diferencia en vez
de copiarlos.

## 3.2 Estructura de carpetas

```
src/
  components/
    layout/        # Navbar, Footer
    sections/      # Hero, Features, HowItWorks, Screenshots, Sports, Faq, FinalCTA
    ui/            # Button, Card, SectionTitle, Badge, Container
  data/            # features.js, faq.js, steps.js  (contenido separado del markup)
  assets/          # screenshots, logo, favicon
  App.jsx
  main.jsx
  index.css
```

## 3.3 Reglas de código

- **Idioma de la landing:** español rioplatense, voseo ("creá", "anotá", "sumá", "tenés").
  Nunca "tú/usted".
- **Mobile-first siempre.** La mayoría entra desde el celu. Escribo primero las clases sin
  prefijo (mobile) y después las variantes `md:` / `lg:`.
- **Dark mode es el diseño principal.** Light mode es opcional y secundario.
- **Colores y tamaños salen de los tokens** definidos en `@theme`. Cero hex hardcodeado en
  los componentes.
- **Accesibilidad no es opcional:** contraste suficiente, `alt` real en imágenes, foco
  visible (`focus-visible:`), headings semánticos (un solo `h1`), botones y links reales
  (nunca un `div` clickeable).
- **Performance:** imágenes en WebP/AVIF, `loading="lazy"` fuera del hero, nada de
  librerías pesadas al pedo. Es una landing, tiene que volar.

---

# 4. Sistema de diseño (extraído de la app)

Estética **dark navy + verde esmeralda**, acentos azules, cards oscuras con bordes sutiles
y esquinas redondeadas. Deportivo, moderno, limpio.

## 4.1 Tokens (van en `index.css` con `@theme`)

```css
@import "tailwindcss";

@theme {
  /* Fondos */
  --color-bg:         #0B1120;  /* fondo principal (navy muy oscuro) */
  --color-surface:    #161F2E;  /* cards / paneles */
  --color-surface-2:  #1B2536;  /* cards elevadas / inputs */
  --color-line:       #243044;  /* bordes sutiles */

  /* Marca / acentos */
  --color-primary:       #22C55E;  /* verde esmeralda: CTA, logo "Pun" */
  --color-primary-hover: #16A34A;
  --color-accent:        #3B82F6;  /* azul: seleccionado, "próximo partido" */
  --color-accent-hover:  #2563EB;

  /* Texto */
  --color-ink:       #F8FAFC;  /* texto principal */
  --color-ink-muted: #94A3B8;  /* secundario / descripciones */
  --color-ink-dim:   #64748B;  /* labels, texto muy tenue */

  /* Colores de datos (stats) — usar con moderación */
  --color-stat-blue:   #3B82F6;  /* partidos */
  --color-stat-green:  #22C55E;  /* jugadores */
  --color-stat-orange: #F59E0B;  /* equipos / badge Admin */
  --color-stat-red:    #EF4444;  /* goles */

  /* Tipografía */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

Con eso, Tailwind genera solo las clases: `bg-bg`, `bg-surface`, `text-ink-muted`,
`border-line`, `text-primary`, etc. **Explicame esta magia cuando lleguemos al setup.**

> Nota: se usa `--color-line` e `--color-ink` en vez de `border` y `text` porque esos
> nombres chocarían con utilidades que Tailwind ya tiene.

## 4.2 Uso del color

- **Fondo global:** `#0B1120`. En el hero se puede meter un degradé sutil hacia un navy
  apenas más claro, o un glow verde muy tenue detrás del contenido, para dar profundidad.
- **Verde = acción y marca.** Es el color de los CTA primarios y del logo. **Usarlo con
  intención.** Si todo es verde, nada resalta. Regla práctica: un solo botón verde por
  pantalla visible.
- **Azul = selección / informativo** (como los toggles activos y el banner de "próximo
  partido" de la app).
- Los colores de stats son **para datos**, no para decorar.

## 4.3 Tipografía

- **Fuente:** `Inter` (alternativas: `Satoshi`, `Space Grotesk`). Cargar solo los pesos
  que uso — cargar 9 pesos es un error de performance.
- **Headings:** bold/extrabold (700–800), `tracking-tight`. Los títulos de la app son
  gruesos y compactos ("Hola, Enzo", "Crear grupo").
- **Body:** 400–500, en `text-ink-muted` para descripciones.
- **Logo "Puntero":** "Pun" en verde + "tero" en blanco, con ícono de pelota a la
  izquierda. Bold.

Escala: hero `text-4xl md:text-6xl lg:text-7xl` · títulos de sección `text-3xl md:text-5xl`
· body `text-base md:text-lg` · texto chico `text-sm`.

Ancho de línea cómodo para párrafos: **60–75 caracteres** (`max-w-prose` o `max-w-2xl`).

## 4.4 Formas, bordes, sombras

- **Radios:** cards `rounded-2xl` (~16px) · botones grandes `rounded-full` (pill, como
  "Unirse" / "Nuevo grupo" de la app) · inputs y botones secundarios `rounded-xl`.
- **Bordes:** 1px, color `line` (`#243044`) o `border-white/5` para algo más sutil.
- **Sombras:** discretas. En dark mode las sombras casi no se ven — la profundidad la dan
  el **contraste de fondos** (bg → surface → surface-2) y los **bordes**, no las sombras.
- **Cards:** `bg-surface` + borde + `rounded-2xl` + `p-6 md:p-8`.

## 4.5 Ritmo vertical (clave para que se vea profesional)

Lo que más diferencia una landing amateur de una profesional es el **espaciado
consistente**. Regla para este proyecto:

- Padding vertical de cada sección: `py-20 md:py-28 lg:py-32`.
- Separación título de sección ↔ contenido: `mt-12 md:mt-16`.
- Gap entre cards de una grilla: `gap-6`.
- Ancho máximo del contenido: `max-w-6xl mx-auto px-6` (componente `<Container>`).

**Nunca inventar valores sueltos.** Si un espaciado no entra en la escala, es sospechoso.

## 4.6 Componentes base (en `ui/`)

- **Container** — ancho máximo + padding lateral. Se usa en todas las secciones.
- **Button** — variantes: `primary` (verde, pill), `secondary` (`surface-2`, borde sutil),
  `ghost` (transparente, texto muted → blanco en hover). Estados hover/focus visibles.
  Tiene que poder renderizar `<a>` o `<button>` según el caso.
- **Card** — `surface` + borde + radius + padding.
- **SectionTitle** — kicker chico en verde (opcional) + `h2` bold + subtítulo muted.
- **Badge** — pill chico ("Fútbol", "Pádel", "Admin" en naranja).

---

# 5. Estándares de landing moderna (a qué apuntamos)

Referencias a mirar por **estructura y ejecución** (no para copiar): **Linear, Vercel,
Stripe, Framer, Raycast, Supabase, Cal.com, Resend**. Todas son dark-first o tienen
versión dark, y comparten los mismos principios:

1. **Los primeros 5 segundos definen todo.** Arriba de todo (above the fold) tiene que
   quedar clarísimo *qué es* y *para quién*. Nada de títulos poéticos que no explican nada.
2. **Un solo CTA primario, repetido.** El mismo botón verde ("Empezá gratis") en navbar,
   hero, mitad y final. No cinco CTAs distintos compitiendo.
3. **Mostrar el producto temprano.** El screenshot real del dashboard vale más que tres
   párrafos. Es lo que más convierte en apps como esta.
4. **Jerarquía tipográfica agresiva.** Títulos grandes de verdad, body claramente más
   chico y en muted. Si todo tiene tamaño parecido, se ve amateur.
5. **Espacio en blanco generoso.** El error #1 de principiantes es apretar todo. Ritmo
   vertical constante (4.5).
6. **Secciones que alternan el ritmo.** No ocho grillas iguales seguidas: alternar
   grilla → pasos → screenshot ancho → acordeón. Que el ojo tenga variedad.
7. **Micro-interacciones sutiles.** Hover que levanta apenas la card, transiciones de
   150–250ms, reveal al hacer scroll. **Sutil.** Si la animación se nota más que el
   contenido, está mal. Respetar `prefers-reduced-motion`.
8. **Profundidad con gradientes y glows suaves**, no con sombras duras. Muy usado en dark.
9. **Bento grid** (cards de tamaños distintos en una grilla) — patrón muy vigente y le
   quedaría bien a la sección de características. Evaluarlo cuando lleguemos.
10. **Manejar objeciones explícitamente.** El FAQ no es relleno: responde lo que frena a
    la gente ("¿es gratis?", "¿todos necesitan cuenta?").
11. **Prueba social, pero honesta.** Como no hay usuarios ni testimonios reales, **no
    inventamos nada**. Si más adelante hay números reales (grupos creados, partidos
    cargados), ahí sí.
12. **Performance como parte del diseño.** LCP por debajo de 2.5s. Una landing linda que
    tarda 4 segundos es una landing mala.

---

# 6. Estructura y contenido de la landing

Una sola página, scroll vertical, en este orden. **El copy de abajo es una base
editable**, no lo tomes literal.

### 6.1 Navbar (sticky)
Logo a la izquierda · links a anclas (`Características`, `Cómo funciona`, `Deportes`,
`FAQ`) · a la derecha botón `Entrar` (secundario) y `Crear cuenta` (primario), ambos → app.
En mobile, menú hamburguesa. Fondo semi-transparente con `backdrop-blur` al scrollear.

### 6.2 Hero
- **H1:** *"Organizá tus partidos con amigos, sin quilombo."*
- **Subtítulo:** *"Puntero junta a tu grupo de fútbol o pádel: armá los partidos, sumá
  gente con un link y llevá los goles y las estadísticas de cada uno."*
- **CTAs:** `Empezá gratis` (primario → app) + `Ver cómo funciona` (ghost → `#como-funciona`).
- **Visual:** screenshot real del dashboard, dentro de un marco de browser o celu oscuro.

### 6.3 Franja de valor (corta)
Tres ítems con ícono: *Gratis y simple* · *Fútbol y pádel* · *Se suman con un link*.

### 6.4 Características (`#features`)
Grilla de cards (3 col desktop / 1–2 mobile) — o bento grid. Ícono lucide + título + 1–2
líneas:

- **Grupos entre amigos** — Creá tu grupo y sumá a todos con un link.
- **Partidos jugados y próximos** — Cargá lo que ya jugaste o armá el del jueves.
- **Convocatorias con link** — Lo compartís por WhatsApp y cada uno se anota, con cuenta o sin cuenta.
- **Equipos y jugadores** — Apodos, fotos y quién juega en cada equipo en cada partido.
- **Goles y estadísticas** — Anotá goles y stats por jugador. Compará jugadores entre sí.
- **Torneos** — Armá torneos dentro del grupo.
- **Canchas** — Guardadas con ubicación, Google Maps y precio de referencia.
- **Fútbol y pádel** — Un grupo para cada deporte, con las modalidades que uses (F5 a F11).

### 6.5 Cómo funciona (`#como-funciona`)
Cuatro pasos numerados (estilo "Primeros pasos" de la app):

1. **Creá tu grupo** — Elegí fútbol o pádel y ponele nombre.
2. **Sumá equipos y jugadores** — Armá los equipos y cargá a los jugadores con sus apodos.
3. **Armá el partido** — Fecha, hora, modalidad y cancha. Compartí el link para que se anoten.
4. **Cargá resultado y stats** — Después del partido, anotá los goles y las estadísticas.

### 6.6 Vitrina de screenshots
Grilla o carrusel con capturas reales (dashboard, crear partido, convocatoria, jugadores),
en marcos oscuros coherentes con la estética.

### 6.7 Deportes (`#deportes`)
Bloque que resalta **Fútbol** y **Pádel**, dejando claro que es un grupo por deporte.
Reusar el estilo de los botones Fútbol (verde) / Pádel de la app.

### 6.8 FAQ (`#faq`)
Acordeón accesible: ¿Es gratis? · ¿Necesito que todos tengan cuenta para anotarse? ·
¿Sirve para pádel? · ¿Puedo cambiar quién juega en cada partido? · ¿Cómo invito a mi grupo? ·
¿Puedo cargar partidos viejos?

### 6.9 CTA final
Bloque a todo el ancho con acento de color y título fuerte (*"Armá tu próximo partido en
Puntero"*) + botón primario → app.

### 6.10 Footer
Logo, links (Características, Cómo funciona, FAQ, Entrar), legales si se agregan.
Nota chica: *"Un proyecto hecho por y para los que juegan."*

---

# 7. Plan de trabajo + currícula de Tailwind

**Este es el orden. No lo saltees ni me adelantes conceptos que todavía no tocan.**
Cada etapa construye una parte de la landing **y** me enseña conceptos nuevos.
Al empezar cada etapa, explicame los conceptos primero. Al terminarla, revisás.

### Etapa 0 — Setup y primer contacto
Proyecto Vite + React, Tailwind v4 instalado, tokens en `@theme`, fuente Inter, fondo dark.
**Conceptos:** qué es utility-first y por qué no es "CSS inline"; cómo Tailwind genera las
clases desde `@theme`; la escala de spacing (`p-4` = 1rem = 16px, todo múltiplo de 0.25rem);
cómo leer la doc oficial.
*(Boilerplate lo podés escribir vos, pero explicame cada archivo.)*

### Etapa 1 — Componentes `ui/`: Container, Button, Card
**Conceptos:** colores y fondos · padding/margin · `rounded-*` · `border` · tipografía
(`text-*`, `font-*`, `tracking-*`) · variantes de estado (`hover:`, `focus-visible:`,
`active:`, `disabled:`) · `transition` y `duration` · cómo manejar variantes de un
componente React con Tailwind (objeto de clases o `clsx`) · por qué **NO** usar `@apply`
para todo.

### Etapa 2 — Navbar
**Conceptos:** Flexbox en serio (`flex`, `items-*`, `justify-*`, `gap-*`) · `sticky top-0`
y `z-*` · `backdrop-blur` y colores con opacidad (`bg-bg/80`) · **breakpoints mobile-first**
(sin prefijo = mobile, `md:` = de 768px para arriba) · `hidden md:flex` para el menú ·
estado del menú hamburguesa.

### Etapa 3 — Hero
**Conceptos:** layout de sección y ritmo vertical · tipografía responsive · `max-w-*` y
centrado · gradientes (`bg-gradient-to-b`, `from-*`, `via-*`, `to-*`) · posicionamiento
(`relative`/`absolute`) para el glow de fondo · `aspect-*` para el mockup.

### Etapa 4 — Características
**Conceptos:** **CSS Grid** (`grid`, `grid-cols-*`, `gap`, `col-span-*`) · grillas
responsive · `group` / `group-hover:` para animar la card entera desde el hover del padre ·
renderizar la grilla desde un array en `data/`.

### Etapa 5 — Cómo funciona + Deportes
**Conceptos:** layouts alternados · líneas y conectores con pseudo-elementos
(`before:`/`after:`) · `space-y-*` vs `gap` · números/badges superpuestos.

### Etapa 6 — Vitrina de screenshots
**Conceptos:** imágenes (`object-cover`, `object-contain`, `aspect-`) · `overflow-hidden` ·
scroll horizontal con `snap-*` en mobile · `loading="lazy"` y formatos modernos.

### Etapa 7 — FAQ + CTA final + Footer
**Conceptos:** acordeón accesible (`<details>`/`<summary>` o estado en React + ARIA) ·
transiciones de altura (y por qué son molestas en CSS) · sección a todo el ancho rompiendo
el container.

### Etapa 8 — Pulido y animaciones
**Conceptos:** `@keyframes` propios dentro de Tailwind v4 · reveal on scroll con
IntersectionObserver · `motion-safe:` / `motion-reduce:` · cuándo sí conviene
`framer-motion`.

### Etapa 9 — Cierre profesional
SEO y metadatos (sección 8) · auditoría de accesibilidad · Lighthouse · optimización de
imágenes · deploy (Netlify o Vercel) y dominio.

---

# 8. SEO y metadatos

- `<title>`: **Puntero — Organizá tus partidos de fútbol y pádel con amigos**
- `<meta name="description">`: una línea con voseo, ~155 caracteres.
- **Open Graph / Twitter Card:** título, descripción e imagen (1200×630, un screenshot lindo).
- `lang="es"` en `<html>`. Un solo `<h1>` (el del hero).
- Favicon con el ícono de Puntero.
- Canónica: `https://puntero.com.ar`.

---

# 9. Enlaces clave

- Todos los CTA de registro/entrar → `https://app.puntero.com.ar`
- La landing vive en `https://puntero.com.ar`
- No linkear desde la landing a pantallas internas que exijan login.

---

# 10. Checklist para dar una sección por terminada

- [ ] Se ve bien en **mobile (360–414px)**, tablet y desktop. Probado, no asumido.
- [ ] Usa el **ritmo vertical** de 4.5 y el `Container`.
- [ ] Colores, radios y tamaños salen de los **tokens**, cero hex suelto.
- [ ] Contraste OK · foco visible · `alt` reales · headings semánticos · botones/links reales.
- [ ] Copy en **voseo argentino**, sin promesas falsas ni features inventadas.
- [ ] Los CTA apuntan a `app.puntero.com.ar`.
- [ ] Nada de clases repetidas 4 veces que deberían ser un componente.
- [ ] Animaciones sutiles y con `motion-reduce` contemplado.
- [ ] **Yo entendí lo que escribí** — si no lo puedo explicar, no está terminado.
