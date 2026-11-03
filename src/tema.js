const STORAGE_KEY = 'cubri-tema'
const TEMA_CLARO = 'claro'
const TEMA_OSCURO = 'oscuro'
const COLOR_CLARO = '#4F46E5'
const COLOR_OSCURO = '#0B1120'

/**
 * @returns {'claro'|'oscuro'}
 */
export function temaActual() {
  return document.documentElement.classList.contains('dark') ? TEMA_OSCURO : TEMA_CLARO
}

/**
 * Actualiza las etiquetas accesibles de todos los botones de tema.
 */
export function actualizarControlesTema() {
  const oscuro = temaActual() === TEMA_OSCURO
  const etiqueta = oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'

  document.querySelectorAll('[data-action="toggle-tema"]').forEach((boton) => {
    boton.setAttribute('aria-pressed', String(oscuro))
    boton.setAttribute('aria-label', etiqueta)
    boton.setAttribute('title', etiqueta)
  })
}

/**
 * @param {'claro'|'oscuro'} tema
 * @param {boolean} persistir
 */
function aplicarTema(tema, persistir) {
  const oscuro = tema === TEMA_OSCURO
  document.documentElement.classList.toggle('dark', oscuro)
  document.documentElement.dataset.tema = oscuro ? TEMA_OSCURO : TEMA_CLARO

  if (persistir) {
    try {
      localStorage.setItem(STORAGE_KEY, oscuro ? TEMA_OSCURO : TEMA_CLARO)
    } catch {
      // Si el navegador bloquea localStorage, el tema solo dura la sesión actual.
    }
  }

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', oscuro ? COLOR_OSCURO : COLOR_CLARO)

  actualizarControlesTema()
}

/**
 * @returns {'claro'|'oscuro'|null}
 */
function temaGuardado() {
  try {
    const valor = localStorage.getItem(STORAGE_KEY)
    return valor === TEMA_CLARO || valor === TEMA_OSCURO ? valor : null
  } catch {
    return null
  }
}

/**
 * Aplica el tema guardado o el preferido por el sistema operativo.
 */
export function inicializarTema() {
  const guardado = temaGuardado()
  const prefiereOscuro = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  aplicarTema(guardado ?? (prefiereOscuro ? TEMA_OSCURO : TEMA_CLARO), false)

  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change', (evento) => {
    if (temaGuardado()) return
    aplicarTema(evento.matches ? TEMA_OSCURO : TEMA_CLARO, false)
  })
}

/**
 * Alterna el tema y guarda la preferencia del usuario.
 */
export function alternarTema() {
  aplicarTema(temaActual() === TEMA_OSCURO ? TEMA_CLARO : TEMA_OSCURO, true)
}
