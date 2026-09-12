# CONTRIBUTING — Cómo se trabaja en `renova`

Convenciones para que cualquiera (humano o agente) trabaje aquí sin romper el orden.
Si vienes de otro repo: esto es lo mínimo que hay que respetar.

---

## 1. Ramas (branches)

- `main` — solo código probado y aprobado por el Fundador. **No se hace push directo a `main`.**
- `develop` — integración del trabajo en curso.
- `feature/<spec-id>-<descripcion>` — una rama por feature (ej. `feature/03-estimator-leads`).
- `fix/<descripcion>` — correcciones.

Flujo: `feature/*` → PR/merge a `develop` → cuando el Fundador aprueba, `develop` → `main`.

## 2. Commits (Conventional Commits)

```
<tipo>(<área>): <descripción corta en presente>

tipos: feat, fix, docs, refactor, style, test, chore
ejemplos:
  feat(estimator): calcular precio por sq ft para power-washing
  docs(architecture): agregar diagrama de flujo de datos
  chore(skeleton): inicializar Next.js + TypeScript
```

- El **Fundador** (o Claude Code por orden suya) hace commit/push. Ver `docs/OWNERSHIP.md`.
- Un commit = un cambio con sentido. Nada de "varios arreglos" en uno solo.

## 3. Qué SÍ y qué NO entra al repo (regla VI.12)

- **SÍ:** código (`.ts`, `.tsx`, `.css`, config) y documentación (`.md`).
- **NO:** binarios ni media pesada (fotos, PDFs, videos, imágenes en Base64). Eso va a **Google Drive**.
  - En producción, las imágenes se sirven optimizadas (WebP/AVIF) desde `public/` o un CDN, **no** embebidas en el código.

## 4. Secretos y variables de entorno

- `.env.local` **está en `.gitignore`**. Nunca se commitea.
- Se versiona `.env.local.example` (plantilla **sin valores reales**).
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` es pública por diseño → ok en el frontend vía env.
- La **`service_role` key JAMÁS** entra a ningún archivo del frontend ni al repo.

## 5. Estilo de código

- **TypeScript estricto** (`strict: true`). Nada de `any` sin justificación.
- ESLint + Prettier con la config del proyecto. Correr antes de commitear.
- Componentes en `src/components/`, lógica de datos en `src/lib/`, tipos en `src/types/`.
- Nombres en inglés en el código; comentarios pueden ir en español si aclaran.

## 6. Definición de "hecho"

Una tarea no está "hecha" hasta que cumple sus **criterios de aceptación** (los del spec / `PENDING_TASK`).
Trabajo a medias o sin criterios cumplidos **no se reporta como listo**.

## 7. Antes de ejecutar cualquier tarea técnica

- [ ] ¿Existe un spec o una orden en `PENDING_TASK*.md`?
- [ ] ¿La rama sigue la convención?
- [ ] ¿Los secretos están fuera del repo?
- [ ] ¿Quién es la **A** (accountable) de esta tarea? (ver `docs/OWNERSHIP.md`)

Si algo de esto no está claro: se resuelve **antes** de escribir código.

---

## Protocolo permanente del Ejecutor (Claude Code)

Además de la orden puntual de cada sesión, Claude Code (y el dev) cumplen **SIEMPRE** estas tres cosas en Renova:

### 1. Lista de tareas pendientes — carpeta `tasks/`
- `tasks/PENDING.md` = lista viva de los trabajos asignados (checkbox, prioridad, criterio de aceptación).
- Al terminar una tarea, se **mueve** a `tasks/DONE.md` con la fecha. Así, al final del proceso, el orden es claro.

### 2. Reporte de actividades — carpeta `reports/`
- Al cerrar cada sesión/tarea: `reports/AAAA-MM-DD_<tema>.md` que documente:
  **(a)** lo solicitado (requerimientos), **(b)** lo ejecutado (acciones, archivos, comandos clave),
  **(c)** resultado vs. definición de hecho, **(d)** pendientes / siguiente paso.
- Dejar además una línea-resumen en `vertex-pather/bandeja/AAAA-MM-DD.md` (el canal del sistema).

### 3. Revisión rigurosa de seguridad
- Antes de cada commit/PR de consecuencia: pasada de seguridad **quirúrgica** contra `docs/04-security.md`
  (XSS, validación en cliente, secretos/keys, CSP, anti-spam, RLS).
- Registrar hallazgos en el reporte; si hay vulnerabilidad, anotarla en `SECURITY-LOG.md` (severidad + estado).
- Reglas duras: `service_role` **jamás** en el frontend · `.env.local` fuera del repo · **nada a producción con hallazgos Media/Alta abiertos**.

**Responsable:** Claude Code + Dev Full-Stack. **Verifica:** Franco. (Ver `docs/OWNERSHIP.md`.)
