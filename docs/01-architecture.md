# 01 — Arquitectura

## Stack de producción

| Capa | Tecnología | Rol |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | Renderizado, rutas, API routes. |
| **Lenguaje** | TypeScript (`strict`) | Tipado en todo el código. |
| **Backend / DB** | Supabase (PostgreSQL) | Base de datos, API automática, Auth, RLS. |
| **Hosting** | Vercel | Deploy y hosting del frontend. |
| **Estilos** | **Tailwind CSS v4** (`@theme` en `globals.css`) | Identidad *Dark Luxury* como tokens de tema. Ya viene en el scaffold. |
| **Tipografías** | Google Fonts (`Fraunces`, `Inter`) | Serif editorial + sans para UI. (El scaffold traía Playfair; se cambia a **Fraunces**.) |

> **Punto de partida real:** el repo ya tiene un scaffold Next.js + TS + Tailwind (etapa previa "Renova-Hub"),
> con componentes `Header`, `Footer`, `Hero`, `Button` y un **sistema de temas** (`data-theme`). No se
> arranca de cero: se **pivota** ese scaffold al rumbo actual (ver `docs/decisions/0004-pivot-*`).
>
> La **maqueta `prerenova.html`** (HTML/CSS/JS con imágenes en Base64) es la **referencia de diseño
> congelada** — el objetivo visual a replicar en React/Tailwind, no código de producción.

## Las tres capas (cómo viaja un dato)

```
┌─────────────────────────────────────────────┐
│  1. NAVEGADOR  (Next.js + React + TS)         │  Dibuja la pantalla y arma los pedidos.
└───────────────┬─────────────────────────────┘
                │  pide/recibe datos (JSON) vía @supabase/supabase-js
                ▼
┌─────────────────────────────────────────────┐
│  2. SUPABASE  (la "puerta")                    │  API automática sobre la DB.
│     Auth (login) · RLS (fila por dueño)        │  Valida quién eres y qué puedes ver.
└───────────────┬─────────────────────────────┘
                │  consulta SQL (ya filtrada por RLS)
                ▼
┌─────────────────────────────────────────────┐
│  3. POSTGRESQL  (la bodega)                    │  Guarda todo en tablas con reglas de tipo.
│     projects (central) + tablas que orbitan    │  ENUM, CHECK, NOT NULL, timestamps.
└─────────────────────────────────────────────┘
```

Detalle de las tablas en `docs/03-data-model.md`.

## Estructura del repositorio (objetivo)

Reflejo de la estructura de dominio que ordena `PENDING_TASK_frontend_skeleton.md`:

```
renova/
├── src/
│   ├── app/
│   │   ├── (marketing)/            # Landing pública + páginas de servicio
│   │   ├── (dashboard)/            # Panel interno del fundador
│   │   │   ├── projects/
│   │   │   ├── finances/
│   │   │   └── agents/
│   │   ├── (client)/portal/        # Portal privado del cliente
│   │   └── api/                    # API routes (projects, finances, agents)
│   ├── components/
│   │   ├── ui/                     # Botones, tarjetas, chips
│   │   ├── dashboard/
│   │   └── portal/
│   ├── lib/
│   │   └── supabase/               # client.ts (createClient con env vars)
│   └── types/
│       └── database.ts             # Project, Finance, LogisticsMaterial, AgentLog
├── public/                         # Assets optimizados (WebP/AVIF) — no Base64
├── docs/                           # Esta documentación
├── .env.local.example              # Plantilla de env (sin valores reales)
└── .gitignore                      # Ignora .env.local
```

## Principios de arquitectura

- **Modularidad estricta:** HTML/JSX (estructura), CSS (diseño) y lógica (TS) separados. Nada de monolitos.
- **Rendimiento:** cero Base64 masivo en el código; imágenes optimizadas servidas aparte.
- **Identidad centralizada:** paleta y tipografías como variables CSS (`:root`) — se cambian en un solo lugar.
- **Cliente seguro de Supabase:** llaves siempre por env; `service_role` nunca en el frontend.
- **El backend se protege solo:** tipos estrictos, ENUM, CHECK y NOT NULL rechazan datos basura en la puerta;
  un bug en la pantalla no corrompe los datos.

## Migración: de la maqueta a producción

La maqueta vanilla **no se migra a ojo**. Se reconstruye en React/Next.js **replicando la experiencia**,
en especial el "magazine takeover" por servicio y el estimador. Librerías recomendadas: `next/image`
(imágenes), una de lightbox para galerías, y Framer Motion para la transición tipo página.
