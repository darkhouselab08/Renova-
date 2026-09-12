# Departamentos de Renova — Organigrama de ingeniería

Renova se organiza como una **empresa de ingeniería**. El código vive en la estructura estándar de
Next.js (un ingeniero la reconoce al instante); los "departamentos" son el **organigrama encima**:
quién responde por cada carpeta. Cada departamento tiene un **agente** en `.claude/agents/` (para Claude
Code) y una ficha aquí (para personas).

## Gerente (líder)
`CLAUDE.md` en la raíz. Planea, reparte y vigila el norte. No programa de entrada: delega.

## Mapa departamento → carpetas reales → agente

| # | Departamento | Carpetas que cuida | Agente | Ficha |
| :- | :--- | :--- | :--- | :--- |
| 1 | Frontend / Producto | `src/app/`, `src/components/`, `*.css` | `frontend` | `frontend.md` |
| 2 | Backend / Datos | `src/lib/supabase/`, `src/types/`, `src/app/api/` | `backend-datos` | `backend-datos.md` |
| 3 | Diseño / Marca | `docs/05-design-system.md`, `public/images/`, ref. `prerenova` | `diseno` | `diseno.md` |
| 4 | Seguridad / Calidad | `SECURITY-LOG.md`, `docs/04-security.md`, tests, build | `seguridad-qa` | `seguridad-qa.md` |
| 5 | DevOps / Deploy | `next.config.ts`, Vercel, env del hosting, CI | `devops` | `devops.md` |

## Estructura del repo (referencia rápida para un ingeniero)

```
renova/
├── CLAUDE.md              # Gerente (agente líder)
├── .claude/agents/        # los 5 jefes de departamento (sub-agentes)
├── .agent/                # setup del Tech Lead para Antigravity/Gemini (engineer externo)
├── src/
│   ├── app/               # rutas Next.js (App Router) + landing  → Frontend
│   ├── components/        # componentes React                     → Frontend
│   ├── lib/supabase/      # cliente Supabase                       → Backend/Datos
│   ├── types/             # tipos del modelo de datos             → Backend/Datos
│   └── app/api/           # API routes                            → Backend/Datos
├── public/images/         # media optimizada (WebP/AVIF)          → Diseño
├── docs/                  # doctrina, arquitectura, ADRs, este organigrama
├── tasks/                 # PENDING.md / DONE.md                  → Gerente
├── reports/               # reportes de actividad
└── SECURITY-LOG.md        # hallazgos de seguridad               → Seguridad/Calidad
```

> Nota: `.agent/` (Gemini/Antigravity) y `.claude/` (Claude Code) son los dos asistentes del proyecto;
> conviven. El organigrama y las reglas son los mismos para ambos.
