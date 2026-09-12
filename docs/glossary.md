# Glossary — Traductor: campo ↔ ingeniería

Este documento es un **puente**. De un lado, cómo lo dices tú (lenguaje de campo/negocio). Del otro,
cómo lo dice un ingeniero. Sirve para dos cosas: que el dev entienda tu visión, y que **tú tengas las
palabras** para hablar con él de igual a igual.

## Tu lenguaje ↔ el de ingeniería

| Lo que tú dices | Lo que el ingeniero entiende / dice |
| :--- | :--- |
| "La página / el sitio" | **Frontend** (Next.js + React). |
| "Donde se guardan los datos" | **Backend / base de datos** (Supabase / PostgreSQL). |
| "El portafolio de servicios" | Catálogo renderizado desde un **modelo de datos** (componentes + datos). |
| "El estimador de precio" | **Client-side pricing estimator** que escribe un **lead** en Supabase. |
| "Que no se pierda el cliente" | **Persistencia del lead** en la DB antes del handoff a WhatsApp. |
| "La ficha del trabajo" | Un **registro (row)** en la tabla `projects`. |
| "El cuadrito / la casilla con la foto" | Un **componente de UI** con `background-size: cover`. |
| "La revista que se abre" | **Modal full-screen** ("magazine takeover"). |
| "Que cada quien vea solo lo suyo" | **RLS** (Row-Level Security) por dueño. |
| "La llave secreta" | **`service_role` key** (nunca en el frontend). |
| "La llave pública" | **`anon` key** (ok en el frontend, vía variable de entorno). |
| "Ponerlo en internet" | **Deploy** a Vercel (una URL de producción). |
| "El cerebro del negocio" | Repo `vertex-pather` (**doctrina + specs**). |
| "El producto / la web" | Repo `renova` (**código de la app**). |
| "La orden para el que programa" | **Spec** + `PENDING_TASK` con **criterios de aceptación**. |
| "Dejarlo listo/entregado" | **Definición de hecho (Definition of Done)** cumplida. |
| "El por qué de una decisión" | **ADR** (Architecture Decision Record). |

## Glosario técnico corto (para leer los docs sin trabarte)

- **Repo / repositorio** — carpeta del proyecto versionada con git.
- **Commit / push** — guardar un cambio / subirlo al repositorio remoto.
- **Branch (rama)** — línea de trabajo paralela; se integra al final.
- **Env / variable de entorno** — valor de configuración (ej. una llave) que vive fuera del código.
- **API** — la forma en que el frontend le pide datos al backend.
- **ENUM** — lista cerrada de valores válidos para un campo (ej. estado de un proyecto).
- **FK (foreign key)** — enlace de una tabla a otra (ej. un gasto que pertenece a un proyecto).
- **Base64** — texto que representa una imagen incrustada; pesado, se evita en producción.
- **CDN** — servidor que entrega imágenes/archivos rápido y cerca del usuario.

> Cuando aparezca un término nuevo en una reunión, agrégalo aquí con su traducción. Este archivo crece contigo.
