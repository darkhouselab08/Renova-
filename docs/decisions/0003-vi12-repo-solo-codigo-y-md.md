# ADR-0003 — Regla VI.12: el repo versiona solo código y `.md`

- **Estado:** Aceptada (regla de la constitución del repo, `RULES.md`)
- **Responsable de la decisión (A):** Fundador

## Contexto

Las maquetas actuales incrustan las fotos como **Base64** dentro del HTML, lo que hace archivos de
varios MB. Versionar media pesada en git infla el repositorio, hace lentos los clones y ensucia los diffs.

## Decisión

El repositorio versiona **solo código y archivos `.md`**. Los binarios y media (fotos, PDFs, videos,
imágenes Base64) **no** entran al repo: van a **Google Drive** y, en producción, se sirven optimizados
(WebP/AVIF) desde `public/` o un CDN.

## Por qué

- Repos livianos: clones rápidos, historial limpio, diffs legibles.
- Rendimiento web: imágenes optimizadas y cacheadas por CDN, no incrustadas en el código.
- Separación clara entre **código** (versionado) y **assets** (gestionados aparte).

## Consecuencias

- La maqueta con Base64 se guarda como **referencia** (en Drive / `vertex-pather/docs/design`), no en `renova`.
- Al reconstruir en producción, hay que **extraer** las imágenes de Base64, comprimirlas y alojarlas en `public/`.
- Cualquier PR que intente meter media pesada al repo se rechaza.
