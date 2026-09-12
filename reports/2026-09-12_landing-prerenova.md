# Reporte — Landing = réplica fiel de `prerenova` (PIVOTE-02)

**Fecha:** 2026-09-12
**Ejecutor:** Claude Code
**Orden:** `vertex-pather/PENDING_TASK_renova_landing_prerenova.md`

## Lo solicitado

PIVOTE-01 había aplicado la identidad Dark Luxury y el contenido de servicios del hogar, pero
sobre las secciones del scaffold viejo de muebles (`Hero`, `Gallery`, `About`, `Process`,
`Testimonials`, `ContactForm`). El resultado visual no se parecía a la maqueta `prerenova` que
Franco aprobó. Esta orden pedía reconstruir la landing como réplica estructural fiel del plano
`vertex-pather/docs/design/prerenova_STRUCTURE.html`.

## Lo ejecutado

1. **Landing nueva:** `src/components/landing/RenovaLanding.tsx` (client component) +
   `src/app/landing.css`, replicando en orden: nav, hero, offer band, estimador, 4 tarjetas de
   servicio, Magazine Takeover, why-band, trends, folio "our work", contacto, footer.
2. **Estimador funcional:** chips de servicio y tamaño con la misma lógica de precio de
   `prerenova` (Power-Washing = precio instantáneo por tamaño con banda ±12%; Maintenance/
   Cleaning/Painting = "Free on-site estimate"). Botón de confirmación arma el link de WhatsApp
   con el mensaje correcto.
3. **Magazine Takeover:** overlay a pantalla completa por servicio con la misma estructura
   (`mag-bar`, `mag-cover`, `mag-intro`, `mag-spread`, `mag-full`, `mag-collage` en Painting /
   `mag-duo` en el resto, `mag-quote`, `mag-cta`). Implementado con JSX y un array de datos
   tipado (`MAG`), **no** con `innerHTML`/concatenación de strings como el original — esto
   cierra proactivamente el hallazgo de XSS (punto 1) de `docs/04-security.md` sin perder
   fidelidad visual ni de comportamiento (la CTA del magazine cierra el overlay, hace scroll al
   estimador y preselecciona el servicio, igual que el original).
4. **Imágenes:** placeholders en gradiente Dark Luxury por servicio (sin base64, VI.12). Quedan
   anotados en `tasks/PENDING.md` para sustituir por fotos reales optimizadas.
5. **Limpieza:** secciones del scaffold viejo de muebles y sus dependencias huérfanas
   (`WorldViewport`, `SimulationModal`, `Modal`, `ThemeSwitcher`, `lib/projects.ts`,
   `lib/analytics.tsx`, `types/simulation.ts`) eliminadas del árbol (siguen en el historial de
   git y en una copia local fuera del repo, no se perdió nada).
6. **Header/Footer de la app:** ya no envuelven la landing (tiene su propio nav/footer, fiel al
   plano). Se movieron a layouts propios de `(dashboard)` y `(client)` para las páginas internas
   (que siguen siendo stubs "próximamente").
7. **Plomería de PIVOTE-01 conservada intacta:** Supabase client, types, rutas de dominio, docs
   reconciliados, tokens Dark Luxury, Fraunces.
8. **Verificación:** `npm run build` y `npm run lint` sin errores ni warnings nuevos.
9. **Commit, push, PR:** commit en `feature/pivot-home-services` (mismo branch/PR #1), push,
   comentario de actualización en el PR.

## Qué NO se hizo (fuera de alcance, por instrucción explícita)

- No se fusionó el PR ni se desplegó a producción.
- No se endureció RLS.
- No se tocó `renova_OLD_BROKEN_260912` ni `prerenova.html` original.

## Pendiente de revisión humana

- `npm run dev` — revisión visual del Fundador (servidor levantado y verificado por HTTP/curl en
  este entorno, sin navegador disponible para captura visual).
- Conexión real a Supabase, fotos reales, número real de WhatsApp (ver `tasks/PENDING.md`).
- Aprobación y merge del PR #1.
