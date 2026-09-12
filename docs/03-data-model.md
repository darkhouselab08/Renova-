# 03 — Modelo de datos (Supabase / PostgreSQL)

El esquema **ya está aplicado** en Supabase. `projects` es la entidad central; las demás la orbitan.

## Tablas

| Tabla | Qué guarda | Relación |
| :--- | :--- | :--- |
| **`projects`** | Entidad central: el sitio de trabajo / obra física. | — |
| **`finances`** | Movimientos de dinero. | FK → `projects` · **SET NULL** |
| **`logistics_materials`** | Materiales por obra. | FK → `projects` · **CASCADE** |
| **`agents_log`** | Registro de lo que hacen los agentes de CEREBRO OS. | independiente |

## ENUMs (listas cerradas de valores válidos)

- `project_status` — ej. `"active" | "completed" | "paused" | "cancelled"`
- `source_context` — `"professional" | "personal"` (separa negocio de personal)
- `finance_type` — tipos de movimiento financiero
- `material_status` — estado de un material

En TypeScript, cada ENUM se refleja como **unión de strings** (ej.
`type ProjectStatus = "active" | "completed" | "paused" | "cancelled"`), en `src/types/database.ts`.

## Tres decisiones de diseño (bien pensadas)

1. **Borrado con criterio.** Si borras un proyecto, sus **gastos se conservan sueltos** (`SET NULL`) — el
   dinero es sagrado —, pero sus **materiales se borran con él** (`CASCADE`).
2. **Negocio + personal, un sistema.** El campo `source` marca cada fila como `professional` o `personal`.
   Una regla impide que un gasto personal quede atado a un proyecto del negocio.
3. **La base se protege sola.** `NOT NULL`, `ENUM` y `CHECK` rechazan datos basura en la puerta de entrada.
   Un bug en la pantalla no corrompe los datos.

## RLS (Row-Level Security)

RLS hace que **cada usuario vea solo sus propias filas**, aunque alguien manipule el frontend.

- **Estado actual:** las políticas son permisivas (`USING(true)`) → todo usuario autenticado ve todo.
  Está bien para desarrollo interno.
- **Requisito:** **endurecer a políticas por dueño ANTES de abrir el portal de clientes** (peldaño 6).
  Ver `docs/04-security.md`.

## Reflejo en el código (tipos)

`src/types/database.ts` define `Project`, `Finance`, `LogisticsMaterial`, `AgentLog` reflejando el esquema.
Estos tipos son la **fuente de verdad** para el frontend: si el esquema cambia, se actualizan aquí primero.
