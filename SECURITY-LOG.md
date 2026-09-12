# SECURITY-LOG — Renova

> Registro de hallazgos de seguridad detectados en las revisiones quirúrgicas.
> Checklist base: `docs/04-security.md`.

| Fecha | Hallazgo | Severidad | Estado | Ref |
| :--- | :--- | :--- | :--- | :--- |
| 2026-09-12 | Revisión quirúrgica post-pivote (PIVOTE-01): sin `service_role` key en código/docs, `.env.local` correctamente en `.gitignore`, `.env.local.example` sin valores, sin `innerHTML`/concatenación de HTML en componentes nuevos. | — | Cerrado | tasks/DONE.md#pivote-01 |
| 2026-09-12 | `ContactForm.tsx` (scaffold viejo, sin anti-spam) eliminado en PIVOTE-02 — el estimador de `prerenova` no usa formulario libre, usa chips + WhatsApp. Punto 5 de `docs/04-security.md` deja de aplicar a la landing actual. | Media | Cerrado (componente removido) | tasks/DONE.md#pivote-02 |
| 2026-09-12 | Revisión quirúrgica PIVOTE-02: Magazine Takeover implementado con JSX/datos tipados, no `innerHTML`/concatenación de strings — cierra proactivamente el punto 1 de `docs/04-security.md` para el componente que más se le parecía en `prerenova`. | — | Cerrado | src/components/landing/RenovaLanding.tsx |
| 2026-09-12 | Email/teléfono en texto plano en el footer/contacto de la landing (`hello@renova.house`, `tel:+WA_NUMBER`) — así está en el plano aprobado `prerenova`, no es un artefacto del scaffold. Sigue siendo scrapeable por bots. | Baja | Abierto (punto 3 de `docs/04-security.md`) | docs/04-security.md#checklist |
| 2026-09-12 | Sin CSP (Content-Security-Policy) definida. | Media | Abierto (punto 4 de `docs/04-security.md`) | docs/04-security.md#checklist |
| 2026-09-12 | Revisión quirúrgica PIVOTE-03 (fotos reales): imágenes servidas desde `public/images/img01-17.webp` vía rutas relativas fijas del propio dominio (sin URLs externas, sin `<a download>`, sin datos de usuario en el path) — sin superficie de XSS/SSRF nueva. Ningún componente restante referencia los binarios movidos a `_PARA_BORRAR_media/`. | — | Cerrado | tasks/DONE.md#pivote-03 |
