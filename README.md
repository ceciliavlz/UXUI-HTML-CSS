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

Para reproducir el despliegue automático, conectar el repositorio de GitHub en Netlify, seleccionar la rama `tp-final` y mantener esos valores de build. Aunque la última versión está visible en producción, falta confirmar en el panel de Netlify que `tp-final` siga configurada como rama de producción y que el deploy automático esté activo.

La URL pública está aplicada en los canonical, Open Graph, datos estructurados, `sitemap.xml` y `robots.txt`.

## Proceso y validación

El PDF de proceso resume el usuario objetivo, un benchmark de portfolios, el concepto visual, la arquitectura, decisiones de interfaz y los hallazgos documentados del caso Casa Petunia. El caso registra entrevistas y pruebas de su prototipo. Estas pruebas son del flujo de compra de Petunia; **no se presentan como una prueba de usabilidad del portfolio personal**.

La consigna también solicita probar el portfolio/prototipo con al menos tres personas. Para no inventar resultados, esa validación específica sigue pendiente. El [protocolo de prueba](./docs/test-usabilidad-portfolio.md) contiene tareas y una hoja de registro para realizarla.

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

## Estado de entrega

- [x] Sitio estático publicado por HTTPS.
- [x] Estructura de información y caso de estudio.
- [x] README con links públicos, stack y recursos.
- [x] Rama de entrega con al menos 10 commits incrementales.
- [x] Metadatos de producción, sitemap y robots apuntando a Netlify.
- [x] Resumen del proceso en PDF (máximo 10 diapositivas).
- [x] Capturas responsive del build local y Lighthouse mobile del sitio publicado.
- [x] Última versión del repo visible en producción después del push a `tp-final`.
- [ ] Actualizar la descripción del repositorio GitHub con la URL pública.
- [ ] Confirmar que el archivo Figma permita acceso de lectura al docente e incluya research, wireframes, design system y prototipo navegable.
- [ ] Completar una prueba de usabilidad del portfolio con al menos tres participantes y registrar hallazgos/cambios.
- [ ] Confirmar en el panel de Netlify que `tp-final` sea la rama de producción y que el deploy automático esté activo.
