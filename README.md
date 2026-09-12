# Renova

> Servicio integral de cuidado del hogar para residencias de alto nivel en **The Hamptons, NY**.
> Un solo punto de contacto para cuatro oficios: power-washing, mantenimiento, limpieza y pintura.

Este repositorio es el **producto** (la web + el backend de Renova). Es un repo **separado** del
"cerebro" del negocio (`vertex-pather`), que guarda la estrategia, los specs y la doctrina.

---

## En 5 minutos (para quien llega nuevo)

| Pregunta | Respuesta corta |
| :--- | :--- |
| **¿Qué es?** | Landing + estimador + (más adelante) dashboard interno y portal de cliente para un negocio real de servicios en los Hamptons. |
| **¿Estado hoy?** | Landing en producción-lista: **réplica fiel de la maqueta `prerenova`** con identidad Dark Luxury, estimador funcional y fotos reales conectadas (Power-Washing, Painting). Estructura de dominio (`src/lib/supabase/`, `src/types/database.ts`, rutas de dashboard/portal/api) lista. Backend Supabase **por conectar** en producción (cliente tipado listo, pendiente de credenciales reales). |
| **¿Stack de producción?** | **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Supabase + Vercel.** |
| **¿Dónde está el código?** | Aquí (`renova`, remoto `darkhouselab08/Renova-`). El cerebro/estrategia está en el repo `vertex-pather`. |
| **¿Qué sigue?** | Conectar Supabase real, fotos reales de Maintenance/Cleaning, número real de WhatsApp (ver `tasks/PENDING.md`). |
| **¿Quién responde por qué?** | Ver [`docs/OWNERSHIP.md`](docs/OWNERSHIP.md). |

---

## Equipo de agentes y departamentos

El trabajo técnico se reparte entre un **Gerente de proyecto** (`CLAUDE.md`, quien lee Claude Code
al entrar al repo) y **5 departamentos** especializados como sub-agentes en `.claude/agents/`:
Frontend/Producto, Backend/Datos, Diseño/Marca, Seguridad/QA, DevOps/Deploy. Organigrama humano
completo en [`docs/departamentos/README.md`](docs/departamentos/README.md).

---

## Mapa de la documentación

```
renova/
├── README.md                     ← estás aquí
├── CONTRIBUTING.md               ← cómo se trabaja aquí (ramas, commits, convenciones)
├── docs/
│   ├── OWNERSHIP.md              ← quién responde por cada trabajo (roles y accountability)
│   ├── 00-overview.md            ← qué es Renova (negocio + producto)
│   ├── 01-architecture.md        ← stack, estructura, cómo viaja el dato
│   ├── 02-roadmap.md             ← fases, de la maqueta al portal de clientes
│   ├── 03-data-model.md          ← tablas Supabase, ENUMs, RLS
│   ├── 04-security.md            ← postura de seguridad y checklist de blindaje
│   ├── 05-design-system.md       ← tokens, paleta, tipografía, componentes
│   ├── glossary.md               ← traductor: lenguaje de campo ↔ lenguaje de ingeniería
│   ├── decisions/                ← ADRs: el porqué de cada decisión técnica
│   ├── ARCHITECTURE.md, API.md, STYLING.md, COMPONENTS.md, BUSINESS_PLAN.md
│   │   ← documentación técnica heredada del scaffold, actualizada al pivote
│   └── INDEX.md                  ← índice de navegación de toda la documentación
└── design/
    └── README.md                 ← referencia al diseño congelado (maqueta)
```

Sugerencia de lectura para un desarrollador nuevo:
`README.md` → `docs/00-overview.md` → `docs/01-architecture.md` → `docs/03-data-model.md` → `docs/OWNERSHIP.md`.

---

## Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno (copiar la plantilla y llenar valores)
cp .env.local.example .env.local
#    NEXT_PUBLIC_SUPABASE_URL=...
#    NEXT_PUBLIC_SUPABASE_ANON_KEY=...   (anon key: es pública, ok)
#    NUNCA poner la service_role key en el frontend.

# 3. Levantar en desarrollo
npm run dev        # http://localhost:3000

# 4. Build de producción
npm run build
```

---

## Convenciones no negociables

- **Repos separados:** `renova` = producto · `vertex-pather` = cerebro (doctrina/specs). No se mezclan. (ADR-0002)
- **VI.12:** el repo versiona **solo código y `.md`**. Binarios/media (fotos, PDFs) van a Google Drive. (ADR-0003)
- **Secretos:** `.env.local` está en `.gitignore`. La `service_role` key **jamás** entra al repo.
- **Nada a producción** sin testeo manual del fundador.

---

*Renova · Vertex Pather · The Hamptons, NY*
