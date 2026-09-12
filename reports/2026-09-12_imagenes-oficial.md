# Reporte — Conectar fotos reales aprobadas + limpiar + dejar oficial (PIVOTE-03)

**Fecha:** 2026-09-12
**Ejecutor:** Claude Code
**Orden:** `vertex-pather/PENDING_TASK_renova_imagenes_oficial.md`

## Lo solicitado

PIVOTE-02 dejó la landing con placeholders de gradiente. Franco ya aprobó las 17 fotos reales
(extraídas de `prerenova.html`, optimizadas a WebP por el Operador) en
`renova/public/images/img01.webp … img17.webp`. La orden pedía conectarlas en sus lugares
exactos, limpiar los restos del scaffold de muebles (sin borrar), y dejar el PR #1 listo para
que Franco apruebe el merge oficial.

## Lo ejecutado

1. **Fotos conectadas** en `src/components/landing/RenovaLanding.tsx` siguiendo el mapa exacto
   de la orden:
   - `img01` → hero (fondo, `background-position:center 42%`).
   - `img02` → fondo de la banda de servicios (con el degradado oscuro encima).
   - `img03` → tarjeta Power-Washing · `img04` → tarjeta Painting.
   - `img05–08` → los 4 tiles del folio "Our work" (labels "Before"/"After" en `img06`/`img07`,
     según el mapa exacto de la orden).
   - `img09–12` → Magazine Power-Washing (cover, spread, full, **collage**).
   - `img13–17` → Magazine Painting (cover = la obra abstracta con `contain` para no
     recortarla, spread, full, **dúo** izquierda/derecha).
   - Maintenance y Cleaning: sin fotos reales todavía, se quedan con el placeholder en gradiente
     — anotado en `tasks/PENDING.md`.
2. **Corrección de fidelidad encontrada en la revisión:** al conectar las fotos reales, noté que
   PIVOTE-02 había invertido la lógica collage/dúo respecto al `prerenova` original (verificado
   releyendo el array `M` de `prerenova_STRUCTURE.html`): Power-Washing debía usar `mag-collage`
   (una imagen ancha `contain`) y Painting debía usar `mag-duo` (dos imágenes lado a lado) — en
   PIVOTE-02 había quedado al revés. Corregido en este paso; ahora coincide exactamente con el
   comportamiento del plano aprobado.
3. **Limpieza (Tarea 2):** verifiqué con `grep` que ningún componente referenciaba
   `public/images/gallery/`, `public/images/hero/` ni `public/images/workshop.jpg` (las
   secciones que los usaban ya se habían eliminado en PIVOTE-02). Los moví — no los borré — a
   `renova/_PARA_BORRAR_media/` para que los revises antes de un borrado definitivo.
4. **Verificación:** `npm run build` y `npm run lint` sin errores ni warnings nuevos.
5. **Revisión de seguridad quirúrgica:** las imágenes se sirven desde rutas relativas fijas del
   propio dominio (`/images/imgNN.webp`), sin URLs externas ni datos de usuario en el path — sin
   superficie nueva de XSS/SSRF. Registrado en `SECURITY-LOG.md`.
6. **Commit, push, PR:** commit en `feature/pivot-home-services` (PR #1), push, comentario de
   actualización en el PR.

## Qué NO se hizo (por instrucción explícita)

- **No se fusionó el PR.** Queda esperando solo la aprobación de merge de Franco.
- No se tocó `renova_OLD_BROKEN_260912` ni `prerenova.html` original.

## Para oficializar (cuando Franco dé luz verde)

1. Revisar `npm run dev` en el navegador.
2. Mergear:
   ```bash
   gh pr merge 1 --merge
   ```

## Pendiente después del merge

- Fotos reales de Maintenance y Cleaning.
- Número real de WhatsApp (`WA_NUMBER` en `RenovaLanding.tsx`, hoy placeholder).
- Conexión real a Supabase (leer/escribir leads del estimador).
