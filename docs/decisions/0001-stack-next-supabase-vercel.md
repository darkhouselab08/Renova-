# ADR-0001 — Stack: Next.js + TypeScript + Supabase + Vercel

- **Estado:** Aceptada
- **Fecha:** 2026-09 (consolidada)
- **Responsable de la decisión (A):** Fundador · **Consultados:** Dev Full-Stack, VERTEX

## Contexto

Renova necesita una web pública, un panel interno y (más adelante) un portal de clientes, con datos
reales (proyectos, finanzas, leads) y autenticación. El equipo es pequeño y usa asistentes de IA
(Claude Code, Antigravity). El fundador está estudiando full-stack, así que el stack también debe ser
**aprendible** y estándar.

## Decisión

Usar **Next.js (App Router) + TypeScript + Tailwind CSS v4** para el frontend, **Supabase (PostgreSQL)**
como backend/DB/Auth, y **Vercel** para el deploy. (Tailwind ya venía en el scaffold del repo y se mantiene;
la identidad *Dark Luxury* se centraliza en el `@theme` de Tailwind — ver `../05-design-system.md`.)

## Por qué

- **Next.js + Vercel:** integración directa, deploy simple, estándar de la industria, `next/image` para media.
- **TypeScript:** tipos que reflejan el esquema de la DB → menos errores, mejor para aprender y para que la IA asista.
- **Supabase:** PostgreSQL real + API automática + Auth (magic-link) + RLS, sin montar backend a mano.
- **Aprendible:** es uno de los stacks más documentados; sirve como terreno de práctica del fundador.

## Consecuencias

- Hay que respetar la separación de llaves (`anon` pública, `service_role` secreta).
- La seguridad de datos depende de **RLS bien configurada** (ver `docs/04-security.md`).
- La maqueta vanilla se **reconstruye** en React, no se migra a ojo.

## Alternativas descartadas

- **Seguir en HTML/CSS/JS vanilla:** no escala a dashboard/portal con datos y auth.
- **Backend propio a mano:** más trabajo y más superficie de error que Supabase para este tamaño de equipo.
