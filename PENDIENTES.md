# Pendientes — Planilla de movilidad

Verificado el **2026-09-06**.

## Estado hoy

- `main` en `871829c` (06/09), árbol limpio y pusheado (`Lancaster2995/planilla-movilidad`).
- **Ojo con lo que decía este archivo hasta hoy**: la copia de este disco estaba **dos commits
  atrás del remoto**. El proyecto no llevaba parado desde el 01/08 — el 10/08 se le
  **quitó Google Drive y se pasó a guardar los formatos en local** (`c65b466`, 270 líneas de
  `index.html` y una poda de `sw.js`), más el `.gitignore` de la metadata de Vercel. Eso ya
  bajó al disco con un `pull --rebase`.
- Cuatro archivos: `index.html`, `sw.js` (caché `runner-v2`), el README y este documento.

## Pendiente

1. **Escribir un estado de verdad.** El README dice sólo «Actualización de despliegue»: no hay
   nada que diga qué resuelve, quién lo usa ni desde qué URL se sirve. Sin eso no se puede saber
   qué falta — es lo primero si se retoma.
2. **Comprobar el cambio del 10/08 en un dispositivo real.** Guardar en local en vez de Drive
   cambia dónde viven los datos del usuario; el `sw.js` se tocó en el mismo commit.
3. Cualquier cambio **exige subir `CACHE`** (hoy `runner-v2`), o los dispositivos con la PWA
   instalada se quedan con el shell anterior.

## Antes de tocarlo

`git fetch` primero: este repo ya demostró que se trabaja desde más de un sitio.
