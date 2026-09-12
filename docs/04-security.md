# 04 — Seguridad

Postura de seguridad y checklist de blindaje. Consolidado de la auditoría técnica del 2026-09-11.
Ninguno de estos es "urgente hoy" (la maqueta no está en producción), pero **todos** deben resolverse
antes de abrir Renova al público.

## Principios base

- La **`anon` key** de Supabase es pública por diseño → puede ir en el frontend vía env. Ok.
- La **`service_role` key JAMÁS** entra al frontend ni al repo. Solo en backend/entorno seguro.
- `.env.local` está en `.gitignore`. Sin secretos en el código.
- La verdad de precios y datos se valida en el **servidor**, no en el navegador.

## Checklist de blindaje (de la auditoría)

| # | Hallazgo | Severidad | Solución |
| :-- | :--- | :--- | :--- |
| 1 | **XSS por `innerHTML`** en el visor "magazine" (maqueta concatena strings). | Media | En producción usar React/JSX (escapa por defecto) o `textContent`/`createElement`. No concatenar HTML con datos externos sin sanitizar. |
| 2 | **Precios calculados en el cliente** (`SVC` en JS) → manipulables en consola. | Media | Tratar el precio del frontend como **estimación preliminar no vinculante**. Recalcular/validar en el servidor al guardar el lead. |
| 3 | **WhatsApp/email en texto plano** en el código → scraping de bots. | Baja | Ofuscar dinámicamente o canalizar por un endpoint/API route intermedia. |
| 4 | **Sin CSP** (Content-Security-Policy). | Media | Definir CSP estricta: permitir scripts/fuentes/imágenes solo de orígenes confiables (`fonts.googleapis.com`, `fonts.gstatic.com`, CDN propio). |
| 5 | **Formulario sin anti-spam / rate-limiting.** | Media | Honeypot + Cloudflare Turnstile o reCAPTCHA v3 + rate-limiting en las API routes. |
| 6 | **RLS permisiva** (`USING(true)`) → todo autenticado ve todo. | **Alta antes del portal** | Cambiar a políticas **por dueño** antes de abrir el portal de clientes (peldaño 6 del roadmap). |

## Regla de despliegue

Nada va a producción sin **testeo manual del fundador** y sin haber cerrado, como mínimo, los puntos
de severidad Media/Alta que apliquen a lo que se está desplegando.
