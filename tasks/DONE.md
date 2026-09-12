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
