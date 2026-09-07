# Pendientes — Planilla de movilidad

Verificado el **2026-09-06**.

## Estado hoy

- `main` en `31bbf6a` (**2026-08-01**), árbol limpio y pusheado
  (`Lancaster2995/planilla-movilidad`). **Es el proyecto más frío del portafolio**: cinco
  semanas sin tocarse.
- Tres archivos: `index.html`, `sw.js` y el README (que sólo dice «Actualización de
  despliegue»).

## Pendiente

**Nada abierto y nada encargado.** Antes de retomarlo hay que decidir algo que no está escrito
en ninguna parte:

1. **Si sigue en uso.** No hay documento de estado, ni pruebas, ni URL de producción anotada.
   Si se retoma, lo primero es escribir de dónde se sirve y quién lo usa.
2. El `sw.js` implica una PWA cacheada: **cualquier cambio exige subir la versión de la caché**,
   como en LogisticS, o los dispositivos instalados se quedan con el shell anterior.
