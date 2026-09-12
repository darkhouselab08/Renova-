# Reporte — Pivote Renova-Hub → Renova (servicios del hogar)

**Fecha:** 2026-09-12
**Ejecutor:** Claude Code
**Orden:** `vertex-pather/PENDING_TASK_renova_pivot.md`

## Lo solicitado

Pivotar el scaffold existente (`Renova-Hub`, restauración de muebles + e-commerce) al rumbo
actual: Renova = servicio integral del hogar (power washing, mantenimiento, limpieza, pintura),
reutilizando la base técnica (Next.js 16 + React 19 + TypeScript + Tailwind v4) sin arrancar
de cero.

## Lo ejecutado

1. **Copia de trabajo sana:** el clon local (`darkhouselab08/renova`) estaba desincronizado
   (working tree vacío con solo docs sin trackear de Cowork). Se respaldaron esos docs, se movió
   la carpeta rota a `renova_OLD_BROKEN_260912` (no se borró), y se hizo un clon limpio del
   remoto `darkhouselab08/Renova-`.
2. **Rama:** `feature/pivot-home-services` creada desde `feature/refining-initial-phase`.
3. **Identidad Dark Luxury:** tokens Tailwind aplicados en `src/app/globals.css`; Fraunces
   reemplaza Playfair Display en `src/app/layout.tsx` y `src/lib/theme-config.ts`.
4. **Contenido:** Hero, Header, Footer, About, Process, Testimonials, ContactForm y
   `src/lib/projects.ts` reescritos para servicios del hogar; cero rastros de "muebles" /
   "restauración" / "e-commerce" en el código de producto (verificado con grep).
5. **Estructura de dominio:** `src/lib/supabase/client.ts`, `src/types/database.ts`
   (`Project`, `Finance`, `LogisticsMaterial`, `AgentLog`), rutas
   `(dashboard)/{projects,finances,agents}`, `(client)/portal`, `api/{projects,finances,agents}`.
6. **Dependencias:** `@supabase/supabase-js` instalado. `.env.local.example` creado sin valores.
   `.env.local` ya estaba en `.gitignore`.
7. **Documentación reconciliada:** paquete de doctrina de Cowork (`docs/00-05-*.md`,
   `decisions/` con los 4 ADRs, `glossary.md`, `OWNERSHIP.md`, `CONTRIBUTING.md`,
   `SECURITY-LOG.md`, `tasks/`) fusionado con la documentación técnica existente del scaffold
   (README, ARCHITECTURE, STYLING, COMPONENTS, API, BUSINESS_PLAN, INDEX) — sin duplicar,
   README raíz reescrito como fuente única.
8. **Seguridad:** revisión quirúrgica contra `docs/04-security.md`. Sin `service_role` key en
   el repo. Hallazgos preexistentes (contacto en texto plano, form sin anti-spam) registrados
   en `SECURITY-LOG.md`, no bloqueantes para este paso.
9. **Verificación:** `npm run build` compila sin errores (9 rutas generadas correctamente).
10. **Commit, push y PR:** commit en `feature/pivot-home-services`, push a origin, PR abierto
    hacia `develop` → https://github.com/darkhouselab08/Renova-/pull/1

## Qué NO se hizo (fuera de alcance de este paso, por instrucción explícita)

- No se desplegó a producción.
- No se endureció RLS (peldaño posterior, ver `docs/04-security.md` punto 6).
- La réplica completa de la maqueta `prerenova.html` (4 servicios + magazine + estimador) queda
  pendiente — el pivote de identidad/contenido es la base incremental. Anotado en
  `renova/tasks/PENDING.md` como siguiente paso.

## Pendiente de revisión humana

- `npm run dev` — revisión visual manual del fundador (no se pudo correr en este entorno).
- Merge del PR #1 a `develop` requiere aprobación del Fundador (ver `docs/OWNERSHIP.md`).
