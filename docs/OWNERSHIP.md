# OWNERSHIP — Quién responde por cada trabajo

Este documento existe para que **nadie asuma** y para que quede claro, por escrito, quién es
responsable de qué. Es la referencia cuando hay una duda de "¿esto quién lo hace / quién lo aprueba?".

Usamos un modelo simple tipo **RACI**:

- **R (Responsible)** — quien hace el trabajo con sus manos.
- **A (Accountable)** — quien responde por el resultado y da el visto bueno final. **Siempre hay uno solo.**
- **C (Consulted)** — a quien se le pregunta antes.
- **I (Informed)** — a quien se le avisa después.

---

## Los roles (quién es quién)

| Rol | Quién | Qué hace |
| :--- | :--- | :--- |
| **Fundador / Cliente 0** | **Jorge Franco** | Visión del negocio y del producto. Aprueba o rechaza specs. Entrega los datos reales (proyectos, número de WhatsApp, fotos). Único que autoriza pasar a producción y hacer merge a `main`. |
| **Desarrollador Full-Stack** | Ingeniero (persona real) | Construye y responde por el código de producción. Trabaja con su IDE + Claude Code / Antigravity. Dueño técnico del repo `renova`. |
| **Ejecutor (IA Dev)** | Claude Code | Ejecuta las órdenes técnicas (`PENDING_TASK`), scaffolding, migraciones, commits y push. No inventa alcance: sigue el spec. |
| **Estratega / Operador** | VERTEX (Claude Chat) + Cowork | Traduce ideas en specs y documentación. Diseño, orden operativo de archivos, esta documentación. **No escribe el código de producción.** |

> Nota: "Claude Code" y "el desarrollador full-stack" pueden trabajar juntos (el dev dirige, Claude Code
> ejecuta). La **cuenta la rinde la persona**, no la herramienta.

---

## Matriz de responsabilidades (RACI)

| Trabajo | Fundador | Dev Full-Stack | Claude Code | VERTEX/Cowork |
| :--- | :--: | :--: | :--: | :--: |
| Visión de producto y prioridades | **A/R** | C | I | C |
| Aprobar un spec | **A** | C | I | R |
| Escribir un spec / documentación | C | C | I | **R** |
| Diseño visual (maquetas, design system) | **A** | C | I | **R** |
| Esqueleto Next.js + estructura del código | C | **A** | **R** | I |
| Migraciones y esquema Supabase | I | **A** | **R** | C |
| Endurecer RLS (seguridad de datos) | **A** | R | R | C |
| Conectar el estimador a leads (Supabase) | C | **A** | **R** | C |
| Deploy a Vercel (producción) | **A** | **R** | R | I |
| Entregar datos reales (PRJ-001, WhatsApp, fotos) | **A/R** | I | I | C |
| Commit / push a git | **A** (merge a `main`) | R | R | I |
| Decisión de arquitectura (ADR) | **A** | R | C | R |

**Cómo leerla:** en cada fila, la **A** es la persona que responde si algo sale mal o bien.
Si una fila te toca y no está clara, se resuelve **antes** de ejecutar (regla de oro de CEREBRO OS:
"si hay duda, se pregunta; nunca asumir y ejecutar").

---

## Flujo de una tarea técnica (para que no se pierda quién responde)

1. **Idea o necesidad** → entra a `vertex-pather/INBOX.md` (nadie ejecuta desde una idea suelta).
2. **Spec** → VERTEX/Cowork lo redacta; **el Fundador lo aprueba** (aquí queda la **A**).
3. **Orden** → se deja en `PENDING_TASK*.md` con criterios de aceptación ("definición de hecho").
4. **Ejecución** → el **Dev Full-Stack (con Claude Code)** construye y hace commit/push.
5. **Verificación** → se prueba contra la "definición de hecho"; el Fundador da el visto bueno para `main`/producción.
6. **Registro** → se deja reporte en `vertex-pather/bandeja/AAAA-MM-DD.md`.

Regla simple: **ningún trabajo llega a producción sin una A humana que responda por él.**
