# 05 — Design System

Identidad visual de Renova: **Dark Luxury Hamptons**. Sobrio, editorial, premium, sin descuentos.
La fuente de verdad del diseño es la maqueta congelada (ver `design/README.md`); esto la documenta
para reconstruirla en producción.

## Tokens (variables CSS `:root`)

```css
:root {
  /* Fondo y superficies */
  --bg:        #0C0B0A;   /* fondo principal */
  --surface:   #151310;   /* tarjetas / paneles */
  --surface-2: #1A1815;

  /* Texto */
  --text:      #ECE6DA;   /* texto principal (crema) */
  --text-soft: #A79E92;
  --text-mute: #6E6862;

  /* Acentos */
  --gold:      #C6A96A;   /* dorado — llamados, detalles */
  --gold-soft: rgba(198,169,106,.12);
  --gold-line: rgba(198,169,106,.35);
  --sage:      #8FA98C;   /* verde apagado (secundario) */

  /* Líneas */
  --line:      rgba(233,222,201,.08);
  --line-2:    rgba(233,222,201,.15);

  /* Forma y tipografía */
  --radius:    14px;
  --radius-sm: 10px;
  --serif: 'Fraunces', Georgia, serif;
  --sans:  'Inter', system-ui, sans-serif;
}
```

### Los mismos tokens en Tailwind v4 (lo que va en `src/app/globals.css`)

El repo usa Tailwind v4 con `@theme`. Estos tokens **reemplazan** la paleta clara de madera que traía
el scaffold "Renova-Hub". Tailwind genera utilidades a partir de ellos (`bg-bg`, `text-gold`, `font-serif`…):

```css
@import "tailwindcss";

@theme {
  /* Dark Luxury Hamptons — Renova */
  --color-bg:        #0C0B0A;
  --color-surface:   #151310;
  --color-surface-2: #1A1815;
  --color-text:      #ECE6DA;
  --color-text-soft: #A79E92;
  --color-text-mute: #6E6862;
  --color-gold:      #C6A96A;
  --color-sage:      #8FA98C;
  --color-line:      rgba(233,222,201,.08);
  --color-line-2:    rgba(233,222,201,.15);

  --font-serif: "Fraunces", Georgia, serif;   /* reemplaza Playfair Display */
  --font-sans:  "Inter", system-ui, sans-serif;

  --radius: 14px;
}
```

> **Nota:** el scaffold traía **Playfair Display** + una paleta **clara** (crema/madera). El rumbo
> actual es **Dark Luxury** con **Fraunces**. Se aprovecha el sistema de temas (`data-theme`) que ya
> existe; Dark Luxury pasa a ser el tema por defecto.

## Tipografía

- **Fraunces** (serif display, pesos ligeros 300–500, eje óptico variable) → titulares, logotipo, piezas editoriales.
- **Inter** (sans, 300–500) → UI, párrafos, lectura.
- Carga optimizada con `<link rel="preconnect">` a `fonts.googleapis.com` / `fonts.gstatic.com`.

## Tono

Premium y sobrio. **Sin descuentos** (`% off`). El único llamado a la acción es **"Free estimate"** —
nunca precio bajo ni sensación de urgencia barata.

## Componente estrella: "Magazine Takeover"

Al hacer clic en un servicio, se abre una **experiencia editorial a pantalla completa** (como entrar a
otra página de una revista de diseño de interiores). Estructura por servicio:

- **Portada** full-bleed (en Painting, la portada es una obra abstracta original del fundador).
- **Spread** (foto grande + "What's included").
- **Full-bleed** (foto dramática, ancho completo).
- **Casillas (dúo)** — dos fotos de trabajos reales.
- Botón **"← Back to site"** (o Esc) y CTA final al estimador.

**Nota técnica aprendida (bug real):** las imágenes de la galería deben llevar
`background-size: cover; background-position: center`. Sin eso se muestran a tamaño natural desde la
esquina superior-izquierda y se ven "en pedazos". En React esto se resuelve con `next/image` (`fill` + `object-cover`).

## Estimador — comportamiento por servicio

- **Power-Washing:** cálculo **instantáneo** por superficie / metraje ($/sq ft) con rango y redondeo comercial.
- **Maintenance, Cleaning, Painting:** modalidad **"Free on-site estimate"** (agenda visita presencial; no cotiza a ciegas).
- En ambos, el resultado y el lead deben **guardarse en Supabase** (no solo abrir WhatsApp).

## Migración

Reconstruir en React/Next.js replicando la experiencia — no a ojo. Imágenes con `next/image`,
galería con lightbox, transición de entrada con Framer Motion.
