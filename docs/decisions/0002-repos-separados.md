# ADR-0002 — Repos separados: `vertex-pather` (cerebro) vs `renova` (producto)

- **Estado:** Aceptada
- **Responsable de la decisión (A):** Fundador · **Consultados:** VERTEX, Dev Full-Stack

## Contexto

El proyecto tiene dos naturalezas distintas: (1) la **estrategia/doctrina/specs** del negocio y del
sistema CEREBRO OS, y (2) el **código del producto** (la web de Renova). Mezclarlos en un solo repo
confunde a un desarrollador que llega, y ensucia el historial de git.

## Decisión

Mantener **dos repositorios separados**:

- **`vertex-pather`** = el **cerebro**: doctrina, `RULES.md`, `INBOX.md`, `specs/`, `docs/` de estrategia,
  maquetas de diseño, y las órdenes (`PENDING_TASK*.md`).
- **`renova`** = el **producto**: el código de la app (Next.js/TS) y su documentación técnica propia (este repo).

## Por qué

- Un dev abre `renova` y encuentra **solo lo del producto** — se orienta rápido, sin ruido estratégico.
- El historial de git de cada repo cuenta una sola historia (código vs doctrina).
- La documentación de producto vive **con** el producto.

## Consecuencias

- La documentación técnica del producto vive en `renova/docs/` (no en `vertex-pather`).
- `vertex-pather` **referencia** a `renova`, no lo duplica.
- Las órdenes para construir siguen naciendo en `vertex-pather` (`PENDING_TASK*.md`) y se ejecutan en `renova`.
