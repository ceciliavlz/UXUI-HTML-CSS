const stroke = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'

/**
 * Devuelve un SVG inline para los iconos de la interfaz.
 * @param {string} name
 * @param {string} [className]
 * @returns {string}
 */
export function icon(name, className = 'size-5') {
  const icons = {
    phone: `<rect x="5.75" y="2.75" width="12.5" height="18.5" rx="2.5" ${stroke}/><path d="M10.25 18h3.5" ${stroke}/>`,
    home: `<path fill="currentColor" d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75" />`,
    bike: `<path d="M6.25 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m11.5 0a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7" ${stroke}/><path d="m6.25 16l4.25-7l2 7h5.25M10.5 9l-.75-2.5m-1.5 0h3m6.5 9.5L15.5 8.5H18" ${stroke}/>`,
    plane: `<path d="M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32986 13.5005C8.91282 13.6948 9.2043 13.792 9.44793 13.9551C9.68404 14.1131 9.88687 14.316 10.0449 14.5521C10.208 14.7957 10.3052 15.0872 10.4995 15.6701C11.7097 19.3008 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z" ${stroke}/><path d="M10.1353 13.8027L15.6842 8.31497" ${stroke}/>`,
    arrowLeft: `<path d="m15 18-6-6 6-6" ${stroke}/>`,
    arrowRight: `<path d="m9 18 6-6-6-6" ${stroke}/>`,
    check: `<path d="m5 12 4 4L19 6" ${stroke}/>`,
    checkCircle: `<circle cx="12" cy="12" r="9" ${stroke}/><path d="m8 12 2.5 2.5L16 9" ${stroke}/>`,
    x: `<path d="M6 6l12 12M18 6 6 18" ${stroke}/>`,
    alert: `<circle cx="12" cy="12" r="9" ${stroke}/><path d="M12 7.5v5M12 16.5h.01" ${stroke}/>`,
    shield: `<path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"`,
    card: `<rect x="2.5" y="5" width="19" height="14" rx="2.5" ${stroke}/><path d="M2.5 10h19M6 15h4" ${stroke}/>`,
    lock: `<rect x="4.5" y="10" width="15" height="10.5" rx="2" ${stroke}/><path d="M8 10V7a4 4 0 0 1 8 0v3" ${stroke}/>`,
    download: `<path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19.5h16" ${stroke}/>`,
    user: `<circle cx="12" cy="8" r="4" ${stroke}/><path d="M4.5 21a7.5 7.5 0 0 1 15 0" ${stroke}/>`,
    clock: `<circle cx="12" cy="12" r="9" ${stroke}/><path d="M12 7v5l3 2" ${stroke}/>`,
    spark: `<path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Z" ${stroke}/>`,
    edit: `<path d="M4 20h4l10-10-4-4L4 16v4Z" ${stroke}/><path d="m13.5 6.5 4 4" ${stroke}/>`,
    moon: `<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" ${stroke}/>`,
    sun: `<circle cx="12" cy="12" r="4" ${stroke}/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" ${stroke}/>`,
  }

  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] ?? icons.phone}</svg>`
}

/**
 * Botón para alternar entre modo claro y oscuro.
 * @param {string} [className]
 * @returns {string}
 */
export function themeToggle(className = '') {
  return `
    <button type="button" data-action="toggle-tema" class="btn btn-ghost ${className}" aria-label="Cambiar a modo oscuro" aria-pressed="false" title="Cambiar a modo oscuro">
      ${icon('moon', 'size-5 dark:hidden')}
      ${icon('sun', 'hidden size-5 dark:block')}
    </button>
  `
}

export const logoMark = `
  <span class="inline-flex size-7 items-center justify-center rounded-lg bg-brand-solid text-white shadow-sm shadow-brand/30">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  </span>
`