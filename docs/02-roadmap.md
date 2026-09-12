# 02 — Roadmap

El camino de "maqueta bonita" a "URL viva que un cliente usa". Cada peldaño es pequeño y terminable.
La brújula del proyecto es el skill `renova-norte` (en `vertex-pather`).

```
[1] Skeleton  →  [2] Supabase  →  [3] Web + estimador  →  [4] Deploy  →  [5] Dashboard  →  [6] RLS  →  [7] Portal
     (repo)         (conexión)        (escribe leads)        (Vercel)        (interno)      (blindaje)   (cliente)
                                                            ▲ AQUÍ YA ESTÁS ONLINE
```

## Estado actual (verificar, no asumir)

- Backend Supabase: **esquema aplicado** ✓ (tablas + ENUMs). RLS presente pero **permisiva** (`USING(true)`) — pendiente endurecer.
- Frontend: el repo `Renova-` **ya tiene un scaffold Next.js + TS + Tailwind** (etapa previa "Renova-Hub", concepto de muebles) con `Header`/`Footer`/`Hero`/`Button` y sistema de temas. Se **pivota** al rumbo actual, no se arranca de cero.
- Diseño de la landing: **congelado** como referencia (`prerenova.html`, Dark Luxury).
- Pendientes de datos reales del fundador: número de WhatsApp, fotos (Maintenance/Cleaning), datos de PRJ-001.

## Los peldaños

### Peldaño 1 — Pivotar el scaffold al rumbo actual  · *(orden lista, espera luz verde)*
El scaffold Next.js ya existe. En una **rama nueva** desde `feature/refining-initial-phase`: cambiar el
contenido de "muebles/e-commerce" por **servicios del hogar**, aplicar los **tokens Dark Luxury** al `@theme`
de Tailwind (Fraunces en vez de Playfair), y montar la estructura de dominio (`lib/supabase`, `types`).
**Orden detallada:** `vertex-pather/PENDING_TASK_renova_pivot.md`. **Responsable:** Dev Full-Stack + Claude Code.
**Hecho cuando:** `npm run dev` levanta la landing con identidad Dark Luxury y sin rastros del concepto de muebles.

### Peldaño 2 — Conexión a Supabase
`lib/supabase/client.ts` funcionando + `types/database.ts` reflejando las tablas. Lectura de datos de prueba.

### Peldaño 3 — Web pública + estimador que escribe leads
Landing + páginas de servicio (replicando la maqueta) + flujo de estimado que **guarda el lead en Supabase**
antes/además de abrir WhatsApp. Ningún prospecto se pierde aunque no termine el mensaje.

### Peldaño 4 — Deploy a Vercel  → **online**
Una URL viva (objetivo: `renova.house`). Aquí Renova deja de ser maqueta.

### Peldaño 5 — Dashboard interno
Panel sobre `projects` y `finances` para el fundador.

### Peldaño 6 — Endurecer RLS  *(requisito de seguridad antes del portal)*
Cambiar las políticas `USING(true)` por políticas **por dueño**. Ver `docs/04-security.md`.

### Peldaño 7 — Portal de clientes
El cliente entra (magic-link) y ve el avance de su obra.

## Regla de oro del roadmap

Nunca reportar como "listo" algo que no está **desplegado y verificado**. El progreso se mide en
producto enviado, no en documentos. Si una tarea no mueve el producto hacia una URL viva, se dice con
franqueza y se reorienta.
