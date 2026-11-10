# Lighthouse — portfolio 2026

Reportes ejecutados el **10/11/2026** con **Lighthouse 12.8.2** y Microsoft Edge headless sobre el sitio publicado en Netlify, con emulación mobile a 375 × 812 px y throttling simulado.

| Página | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| [Home](https://ux-tp-final.netlify.app/) | 98 | 100 | 100 | 100 |
| [Caso](https://ux-tp-final.netlify.app/caso-estudio.html) | 99 | 100 | 100 | 100 |

Reportes completos:

- [Home · HTML](./index-mobile.report.html) · [JSON](./index-mobile.report.json)
- [Casa Petunia · HTML](./caso-estudio-mobile.report.html) · [JSON](./caso-estudio-mobile.report.json)
- [Captura del resumen Lighthouse mobile](./index-mobile.png)

Los scores alcanzan el objetivo de 90 puntos indicado en la consigna. Son una medición del sitio publicado en esa fecha; pueden variar por red, dispositivo y cambios posteriores. Repetir después de cambios importantes.

Comando usado para la home (para el caso, cambiar la URL y el nombre de salida):

```powershell
npx lighthouse@12.8.2 https://ux-tp-final.netlify.app/ `
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
  --chrome-path="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
  --chrome-flags="--headless=new --no-sandbox --disable-gpu"
```
