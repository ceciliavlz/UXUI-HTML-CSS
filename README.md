# Portfolio — Cecilia Velzi

Portfolio personal de Cecilia Velzi, diseñadora UX/UI y front-end en Entre Ríos, Argentina. Proyecto final de Diseño UX/UI (2026), implementado como sitio estático en HTML, Tailwind CSS y JavaScript vanilla.

## Enlaces

- **Sitio publicado:** [https://ux-tp-final.netlify.app](https://ux-tp-final.netlify.app/)
- **Repositorio:** [UXUI-HTML-CSS, rama `tp-final`](https://github.com/ceciliavlz/UXUI-HTML-CSS/tree/tp-final)
- **Diseño en Figma:** [Portfolio](https://www.figma.com/design/o3OFULl5Yl5sWEs69DzzfW/Portfolio?node-id=2-50&t=nfcIwqKdHjH4AisP-1)
- **Caso de estudio:** [Casa Petunia](https://ux-tp-final.netlify.app/caso-estudio.html)
- **Proceso (10 diapositivas):** [proceso-portfolio-2026.pdf](./docs/proceso-portfolio-2026.pdf)
- **Lighthouse mobile:** [resultados y reportes](./docs/lighthouse/README.md)

## Proyecto

La hipótesis del portfolio es que una persona que visita —reclutadora, cliente o estudio— pueda entender en pocos segundos quién soy, qué hago, cómo trabajo y dónde contactarme. La propuesta visual combina una voz editorial y cálida con una interfaz funcional, accesible y responsive.

La home reúne las nueve áreas solicitadas: navegación, presentación, métricas, habilidades, proyectos, experiencia/formación, sobre mí, contacto y footer. El caso de estudio separado documenta el proceso de Casa Petunia, un e-commerce conceptual de repostería artesanal.

### Dirección visual

- **Idea:** experiencias digitales claras y cálidas, que se sienten como en casa.
- **Tipografías:** Fraunces y Outfit; sus licencias SIL Open Font License están en `assets/fonts/`.
- **Paleta:** marfil, tinta ciruela, berry, rosa, lila y dorado, con tokens específicos para tema claro y oscuro.
- **Recursos:** arcos, detalles botánicos, textura sutil, retrato y mockups SVG originales.
- **Plantillas:** no se utilizó una plantilla visual. El diseño de referencia del proyecto está en el archivo de Figma enlazado arriba.

### Estructura

| Página | Contenido |
| --- | --- |
| `index.html` | Home one-page: inicio, sobre mí, métricas, skills, proyectos, trayectoria, caso y contacto |
| `caso-estudio.html` | Contexto, research, arquitectura, sistema visual, solución, validación, resultados y aprendizajes de Casa Petunia |
| `404.html` | Página de error personalizada |

## Stack y recursos

- HTML5 semántico y CSS generado con Tailwind CSS 3.
- JavaScript vanilla para menú mobile, navegación, tema claro/oscuro y otras interacciones.
- Node.js y npm para el build; Sharp para generar imágenes sociales e íconos.
- Netlify para hosting y despliegue estático.
- Fraunces y Outfit, con sus archivos de licencia incluidos.
- Ilustraciones y mockups del proyecto en SVG; retrato y derivados optimizados en WebP.

No se usaron frameworks JavaScript ni constructores visuales. Los recursos visuales del portfolio y de Casa Petunia son propios; las tipografías conservan sus licencias.

### Referencias consultadas

Benchmark cualitativo de portfolios, consultados el 10/11/2026:

- [Brittany Chiang](https://brittanychiang.com): jerarquía escaneable entre perfil, experiencia y proyectos.
- [Josh Comeau](https://www.joshwcomeau.com): voz personal y profundidad técnica en contenido optativo.
- [Maggie Appleton](https://maggieappleton.com): identidad visual y contenido editorial como parte de la experiencia.

La síntesis aplicada fue priorizar la lectura rápida en la home y reservar el detalle para el caso de estudio. Las referencias informan decisiones; no se reutilizaron sus plantillas ni recursos gráficos.

## Desarrollo local

Requiere Node.js y npm. Para clonar la rama de entrega e instalar las dependencias fijadas:

```bash
git clone --branch tp-final --single-branch https://github.com/ceciliavlz/UXUI-HTML-CSS.git
cd UXUI-HTML-CSS
npm ci
npm run dev
```

`npm run dev` compila `src/input.css` a `dist/styles.css` y observa cambios. Para una compilación de producción:

```bash
npm run build
```

`dist/styles.css` es un archivo generado e ignorado por Git; Netlify ejecuta el build antes de publicar. Para servir el sitio localmente, usar un servidor estático desde la raíz y abrir `/` o `/caso-estudio.html`.

## Despliegue

El sitio está publicado en Netlify: **[ux-tp-final.netlify.app](https://ux-tp-final.netlify.app/)**. La última versión enviada a `tp-final` ya está visible en la URL publicada. La configuración de [netlify.toml](./netlify.toml) establece:

- Comando de build: `npm run build`
- Directorio publicado: raíz del proyecto (`.`)

El despliegue automático está configurado en Netlify para la rama `tp-final`; la versión actual está publicada en la URL indicada.

La URL pública está aplicada en los canonical, Open Graph, datos estructurados, `sitemap.xml` y `robots.txt`.

La descripción pública del repositorio GitHub todavía no incluye la URL del sitio; actualizarla requiere editar la configuración del repositorio.

## Proceso y validación

El PDF de proceso resume el usuario objetivo, un benchmark de portfolios, el concepto visual, la arquitectura y las decisiones de interfaz. El caso Casa Petunia incluye su propio research y pruebas del flujo de compra; estas no se confunden con la validación del portfolio personal.

El portfolio también fue probado con al menos tres participantes. El archivo de Figma contiene el diseño y los materiales del proceso, y se encuentra habilitado para su revisión docente.

Las capturas actuales se tomaron con Edge headless desde el build local, en los tres anchos exigidos y en mobile para el caso:

- [Home · 375 px](./docs/capturas/home-375.png)
- [Home · 768 px](./docs/capturas/home-768.png)
- [Home · 1280 px](./docs/capturas/home-1280.png)
- [Casa Petunia · 375 px](./docs/capturas/case-375.png)

Lighthouse 12.8.2 sobre el sitio publicado alcanzó el objetivo móvil de 90 puntos en las cuatro categorías: home 98/100/100/100 y caso 99/100/100/100 (performance/accesibilidad/buenas prácticas/SEO). Los reportes y su alcance están documentados en `docs/lighthouse/README.md`; conviene repetirlos tras cada cambio relevante de producción.

## Accesibilidad implementada

- Estructura semántica y jerarquía de encabezados.
- Enlace para saltar al contenido, foco visible y navegación por teclado.
- Menú mobile con `aria-expanded`, `aria-controls` y cierre con Escape.
- Respeto por `prefers-reduced-motion` y persistencia de tema.
- Texto alternativo en imágenes informativas y atributos adecuados en elementos decorativos.

## Entrega

La entrega final incluye el sitio publicado en Netlify, el repositorio en la rama `tp-final` con al menos diez commits incrementales, el proceso en PDF de diez diapositivas, las capturas responsive y los reportes Lighthouse mobile. El diseño y sus materiales están disponibles en Figma para revisión docente, y se completó la prueba de usabilidad del portfolio con al menos tres participantes.
