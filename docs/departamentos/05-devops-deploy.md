# Departamento — DevOps / Deploy

**Agente (Claude Code):** `devops` (en `.claude/agents/devops.md`)
**Carpetas que cuida:** `next.config.ts, Vercel, env del hosting, CI`

## Qué hace
El que saca a producción: Vercel, dominio, variables de entorno, CI, rollback. Prepara todo; el botón final lo da Franco.

## Responsable (Ownership)
- **R (ejecuta):** Dev Full-Stack + agente `devops`.
- **A (responde por el resultado):** Fundador (Franco) + Dev Full-Stack.
- **C (consultado):** Gerente (`CLAUDE.md`) y VERTEX/Cowork.

## Reglas que aplican
- VI.12 (repo solo código + .md; media a Drive / `public/` optimizada).
- Sin secretos en el repo. Nada a producción ni merge sin aprobación del Fundador.
- Deja rastro: tareas en `tasks/`, reporte en `reports/`, seguridad en `SECURITY-LOG.md`.
