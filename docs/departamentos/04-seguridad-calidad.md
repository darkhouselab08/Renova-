# Departamento — Seguridad / Calidad

**Agente (Claude Code):** `seguridad-qa` (en `.claude/agents/seguridad-qa.md`)
**Carpetas que cuida:** `SECURITY-LOG.md, docs/04-security.md, tests`

## Qué hace
El inspector: revisión quirúrgica de seguridad, testing, edge cases y build sano ANTES de cada merge. Reporta; no arregla ni aprueba merges.

## Responsable (Ownership)
- **R (ejecuta):** Dev Full-Stack + agente `seguridad-qa`.
- **A (responde por el resultado):** Fundador (Franco) + Dev Full-Stack.
- **C (consultado):** Gerente (`CLAUDE.md`) y VERTEX/Cowork.

## Reglas que aplican
- VI.12 (repo solo código + .md; media a Drive / `public/` optimizada).
- Sin secretos en el repo. Nada a producción ni merge sin aprobación del Fundador.
- Deja rastro: tareas en `tasks/`, reporte en `reports/`, seguridad en `SECURITY-LOG.md`.
