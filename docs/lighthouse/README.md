# Lighthouse — portfolio 2026

Reportes ejecutados con **Lighthouse 12.8.2**, Microsoft Edge headless, sobre el build local servido en `http://127.0.0.1:4173`, con emulación mobile a 375 × 812 px y throttling simulado.

| Página | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Home (`index.html`) | 94 | 100 | 100 | 100 |
| Caso (`caso-estudio.html`) | 95 | 100 | 100 | 100 |

Reportes completos:

- [Home · HTML](./index-mobile.report.html) · [JSON](./index-mobile.report.json)
- [Casa Petunia · HTML](./caso-estudio-mobile.report.html) · [JSON](./caso-estudio-mobile.report.json)
- [Captura del resumen Lighthouse mobile](./index-mobile.png)

Los scores alcanzan el objetivo de 90 puntos indicado en la consigna. Son una medición local de esta versión: el rendimiento real puede variar por red, dispositivo y cambios de producción. Repetir después de cambios importantes.

Comando usado:

```powershell
npx lighthouse@12.8.2 http://127.0.0.1:4173/ `
  --only-categories=performance,accessibility,best-practices,seo `
  --form-factor=mobile `
  --screenEmulation.mobile=true `
  --screenEmulation.width=375 `
  --screenEmulation.height=812 `
  --screenEmulation.deviceScaleFactor=1 `
  --throttling-method=simulate `
  --output=html `
  --output=json `
  --output-path=docs/lighthouse/index-mobile `
  --chrome-flags="--headless=new --no-sandbox --disable-gpu"
```

Para medir el caso, reemplazar la URL por `http://127.0.0.1:4173/caso-estudio.html` y `--output-path` por `docs/lighthouse/caso-estudio-mobile`.
