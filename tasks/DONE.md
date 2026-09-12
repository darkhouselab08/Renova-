# Tareas completadas — Renova

> Historial de trabajos terminados (con fecha). Se mueven aquí desde `PENDING.md`.

## 2026-09-12 — PIVOTE-01 · Pivotar el repo al rumbo de servicios del hogar

- Orden: `vertex-pather/PENDING_TASK_renova_pivot.md`
- Clon limpio del remoto, rama `feature/pivot-home-services` desde `feature/refining-initial-phase`.
- Identidad Dark Luxury aplicada (tokens Tailwind en `globals.css`, Fraunces en `layout.tsx`).
- Contenido de muebles/e-commerce reemplazado por servicios del hogar en Hero, Header, Footer,
  About, Process, Testimonials, ContactForm, `lib/projects.ts`, `lib/theme-config.ts`.
- Estructura de dominio creada: `src/lib/supabase/client.ts`, `src/types/database.ts`,
  rutas `(dashboard)/{projects,finances,agents}`, `(client)/portal`, `api/{projects,finances,agents}`.
- `@supabase/supabase-js` instalado. `.env.local.example` sin valores. `.env.local` ya estaba en `.gitignore`.
- Documentación reconciliada: paquete de Cowork (`docs/00-05-*.md`, `decisions/`, `glossary.md`,
  `OWNERSHIP.md`, `CONTRIBUTING.md`, `SECURITY-LOG.md`) fusionado con la doc técnica existente
  (README, ARCHITECTURE, STYLING, COMPONENTS, API, BUSINESS_PLAN, INDEX) sin duplicar.
- `npm run build` verificado sin errores.
- Responsable: Dev Full-Stack + Claude Code · Aprueba: Franco

## 2026-09-12 — PIVOTE-02 · Landing = copia FIEL de `prerenova` (corrige lo visual de PIVOTE-01)

- Orden: `vertex-pather/PENDING_TASK_renova_landing_prerenova.md`
- Plano: `vertex-pather/docs/design/prerenova_STRUCTURE.html`
- Landing reconstruida en `src/components/landing/RenovaLanding.tsx` (client component) + hoja de
  estilos dedicada `src/app/landing.css` — réplica estructural fiel: nav, hero, offer band,
  estimador (chips de servicio/tamaño, cálculo de precio, link a WhatsApp), 4 tarjetas de
  servicio, Magazine Takeover (overlay a pantalla completa por servicio, con cover/spread/full/
  duo-o-collage/quote/cta), why-band, trends, folio "our work", contacto, footer.
- Magazine implementado con JSX/datos tipados (no `innerHTML`/concatenación de strings) —
  cumple proactivamente el punto 1 de `docs/04-security.md` (XSS) sin perder fidelidad visual.
- Imágenes: placeholders en gradiente Dark Luxury (VI.12 — sin base64). Pendiente sustituir por
  fotos reales optimizadas cuando Franco las entregue.
- `WA_NUMBER` se mantuvo como el mismo placeholder del plano, hasta que Franco dé el número real.
- Secciones del scaffold viejo de muebles (`Hero`, `Gallery`, `About`, `Process`, `Testimonials`,
  `ContactForm`, y sus dependencias huérfanas `WorldViewport`, `SimulationModal`, `Modal`,
  `ThemeSwitcher`, `lib/projects.ts`, `lib/analytics.tsx`, `types/simulation.ts`) eliminadas del
  árbol de código (conservadas fuera del repo, no en el historial de git, por si hace falta
  revisarlas).
- `Header`/`Footer` de la app ya no envuelven la landing (tiene su propio nav/footer, fiel al
  plano); se movieron a layouts propios de `(dashboard)` y `(client)` para las páginas internas.
- Plomería de PIVOTE-01 (Supabase, types, rutas, docs, tokens, Fraunces) intacta, sin tocar.
- `npm run build` y `npm run lint` verificados sin errores nuevos.
- Responsable: Dev Full-Stack + Claude Code · Aprueba: Franco

## 2026-09-12 — PIVOTE-03 · Conectar fotos aprobadas + limpiar + dejar oficial

- Orden: `vertex-pather/PENDING_TASK_renova_imagenes_oficial.md`
- Fotos reales (`public/images/img01–17.webp`, aprobadas por Franco) conectadas en
  `RenovaLanding.tsx`: hero, fondo de la banda de servicios, tarjetas de Power-Washing y
  Painting, folio "our work" (4 tiles, con labels Before/After en img06/img07 según el mapa de
  la orden), y los magazines de Power-Washing y Painting completos.
- **Corrección de fidelidad encontrada en la revisión:** PIVOTE-02 había invertido la lógica de
  collage/dúo del magazine respecto al original `prerenova` (Power-Washing debía usar
  `mag-collage` con una sola imagen ancha, Painting debía usar `mag-duo` con dos imágenes
  distintas — quedó al revés). Corregido: Power-Washing → collage (`img12`), Painting → dúo
  (`img16`/`img17`).
- Portada del magazine de Painting (`img13`, la obra abstracta) con `background-size:contain` en
  vez de `cover`, para no recortarla — es la pieza, no un fondo decorativo.
- Maintenance y Cleaning **sin fotos reales todavía** — se quedan con el placeholder en gradiente
  elegante, anotado en `tasks/PENDING.md`.
- Restos del scaffold viejo de muebles (`public/images/gallery/`, `public/images/hero/`,
  `public/images/workshop.jpg`) movidos — no borrados — a `renova/_PARA_BORRAR_media/`, tras
  confirmar con `grep` que ningún componente los referencia.
- Revisión de seguridad quirúrgica: sin superficie nueva de XSS/SSRF (imágenes servidas desde
  rutas relativas fijas del propio dominio). Registrado en `SECURITY-LOG.md`.
- `npm run build` y `npm run lint` verificados sin errores nuevos.
- **PR #1 actualizado, listo para oficializar** — espera solo la aprobación de merge de Franco
  tras revisar `npm run dev`.
- Responsable: Dev Full-Stack + Claude Code · Aprueba merge: Franco
