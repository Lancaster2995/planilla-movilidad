# Runner — Planilla de Movilidad

PWA para convertir hasta cuatro capturas de viajes de Uber, DiDi o InDrive en una planilla
Excel de movilidad. El OCR intenta resolver cada captura en el navegador y usa el endpoint de
SPENDS como respaldo cuando hace falta.

Los formatos generados pueden descargarse, guardarse en este dispositivo mediante IndexedDB o
enviarse a SPENDS con la cuenta del usuario. El código antiguo de Google Drive permanece sólo
como compatibilidad interna y ya no se muestra en la interfaz.

Producción: https://lancaster2995.github.io/planilla-movilidad/ y
https://runner-rho-six.vercel.app/. Ambas responden 200; GitHub Pages sirve `runner-v2`.

No hay compilación: la aplicación está en `index.html` y el shell offline en `sw.js`. Cualquier
cambio visible exige subir `CACHE` en `sw.js`.
