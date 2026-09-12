# ADR-0004 — Pivote: de "Renova-Hub" (muebles) a "Renova" (servicios del hogar)

- **Estado:** Aceptada
- **Fecha:** 2026-09
- **Responsable de la decisión (A):** Fundador · **Consultados:** VERTEX, Dev Full-Stack

## Contexto

El repo `Renova-` contiene un proyecto Next.js de febrero 2026 ("Renova-Hub") cuyo concepto documentado
era una **plataforma de restauración de muebles + e-commerce** (fases hacia pagos). El rumbo actual del
negocio es distinto: **Renova = servicio integral de cuidado del hogar** para los Hamptons, con **4 frentes**
(power-washing, mantenimiento, limpieza, pintura), estimador, dashboard interno y portal de cliente.

Comparten el nombre y la estética premium Hamptons, pero el modelo de negocio y el contenido son otros.

## Decisión

**Repurposar (pivotar) el repo existente**, no empezar de cero ni crear un repo nuevo:

- **Se reutiliza** la base técnica: Next.js 16 + React 19 + TypeScript + **Tailwind v4**, los componentes
  `Header`/`Footer`/`Hero`/`Button`, el sistema de temas (`data-theme`) y la disciplina de documentación.
- **Se cambia** el concepto: contenido de muebles/e-commerce → **servicios del hogar** (4 frentes),
  y la identidad visual pasa a **Dark Luxury** (paleta oscura + Fraunces), reemplazando la paleta clara
  de madera + Playfair del scaffold.
- El concepto viejo de muebles/e-commerce queda **en pausa** (se decide más adelante si se archiva en una
  rama/tag `legacy-furniture`). Por ahora no se borra ni se estudia.

## Por qué

- No se tira el trabajo de 7 meses; la base técnica es sólida y reutilizable.
- Menos riesgo que arrancar de cero; el dev continúa sobre algo probado.
- Mantener Tailwind evita reescribir estilos y respeta lo que el dev ya usa.

## Consecuencias

- La documentación del repo (README, ARCHITECTURE, STYLING, etc.) se **actualiza** al rumbo nuevo.
- El trabajo se hace en una **rama nueva** desde `feature/refining-initial-phase` (la más reciente).
- La orden operativa está en `vertex-pather/PENDING_TASK_renova_pivot.md`.
- El `PENDING_TASK_frontend_skeleton.md` (que asumía repo vacío) queda **obsoleto**.
