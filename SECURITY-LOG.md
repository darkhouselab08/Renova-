# SECURITY-LOG — Renova

> Registro de hallazgos de seguridad detectados en las revisiones quirúrgicas.
> Checklist base: `docs/04-security.md`.

| Fecha | Hallazgo | Severidad | Estado | Ref |
| :--- | :--- | :--- | :--- | :--- |
| 2026-09-12 | Revisión quirúrgica post-pivote (PIVOTE-01): sin `service_role` key en código/docs, `.env.local` correctamente en `.gitignore`, `.env.local.example` sin valores, sin `innerHTML`/concatenación de HTML en componentes nuevos. | — | Cerrado | tasks/DONE.md#pivote-01 |
| 2026-09-12 | Email/teléfono en texto plano en `Footer.tsx` / `ContactForm.tsx` (pre-existente, heredado del scaffold). | Baja | Abierto (punto 3 de `docs/04-security.md`) | docs/04-security.md#checklist |
| 2026-09-12 | Formulario de contacto sin anti-spam / rate-limiting (pre-existente). | Media | Abierto (punto 5 de `docs/04-security.md`) | docs/04-security.md#checklist |
