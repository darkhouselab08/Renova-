# 🎨 Sistema de Diseño - Renova

> Guía completa del sistema de diseño visual

---

## 📋 Índice

1. [Filosofía de Diseño](#-filosofía-de-diseño)
2. [Paleta de Colores](#-paleta-de-colores)
3. [Tipografía](#-tipografía)
4. [Espaciado](#-espaciado)
5. [Componentes Visuales](#-componentes-visuales)
6. [Animaciones](#-animaciones)
7. [Responsive Design](#-responsive-design)

---

## 🎯 Filosofía de Diseño

### Principios Visuales

1. **Premium & Profesional**: Diseño que transmite confianza y calidad
2. **Minimalista**: Menos es más, enfoque en el contenido
3. **Consistente**: Patrones visuales repetibles
4. **Accesible**: Contraste adecuado (WCAG AA)
5. **Responsive**: Mobile-first approach

### Inspiración

- **Estilo**: Moderno, limpio, elegante
- **Referencias**: Apple, Stripe, Linear
- **Mood**: Artesanal + Tecnológico

---

## 🎨 Paleta de Colores

### Colores de Marca (Earthy & Premium)

El sistema de color se basa en la calidez de la madera y la sofisticación de los tonos tierra, contrastando con un blanco puro para un look premium.

```css
/* Primario: Gold/Wood - Usado para acentos de lujo y CTAs */
--color-primary: #b89968;

/* Secundario: Cream/Off-white - Fondos suaves y superficies */
--color-secondary: #f5f1e8;

/* Acento: Deep Wood/Coffee - Textos principales y branding */
--color-accent: #4a3a24;

/* Fondos y Superficies */
--color-background: #ffffff;
--color-foreground: #4a3a24;
```

### Escala de Madera (Wood Scale)

```css
--wood-50: #faf8f5; /* Fondos ultra-light */
--wood-100: #f5f1e8; /* Secondary / Hover backgrounds */
--wood-200: #e8dcc8; /* Bordes decorativos */
--wood-300: #d4c0a0; /* Acentos suaves */
--wood-400: #b89968; /* Primary / Gold accent */
--wood-500: #8b6f47; /* Texto secundario */
--wood-600: #6b5435; /* Texto cuerpo / Terciario */
--wood-700: #4a3a24; /* Accent / Headlines */
```

### Uso de Tokens

En el proyecto utilizamos los tokens integrados en el `@theme` de Tailwind 4.0:

```css
/* src/app/globals.css */
@theme {
  --color-primary: #b89968;
  --color-secondary: #f5f1e8;
  --color-accent: #4a3a24;
  --color-background: #ffffff;
  --color-foreground: #4a3a24;
}
```

---

## ✍️ Tipografía

### Fuentes

```css
/* Fuente Principal: Inter */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

/* Fuente Display: Playfair Display (para títulos especiales) */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&display=swap");

:root {
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: "Playfair Display", Georgia, serif;
}
```

### Escala Tipográfica

```css
/* Headings */
.text-h1 {
  font-size: 3.75rem; /* 60px */
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.text-h2 {
  font-size: 3rem; /* 48px */
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.text-h3 {
  font-size: 2.25rem; /* 36px */
  line-height: 1.3;
  font-weight: 700;
}

.text-h4 {
  font-size: 1.875rem; /* 30px */
  line-height: 1.4;
  font-weight: 600;
}

.text-h5 {
  font-size: 1.5rem; /* 24px */
  line-height: 1.5;
  font-weight: 600;
}

.text-h6 {
  font-size: 1.25rem; /* 20px */
  line-height: 1.5;
  font-weight: 600;
}

/* Body Text */
.text-body-lg {
  font-size: 1.125rem; /* 18px */
  line-height: 1.75;
}

.text-body {
  font-size: 1rem; /* 16px */
  line-height: 1.625;
}

.text-body-sm {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
}

/* Utility */
.text-caption {
  font-size: 0.75rem; /* 12px */
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Uso en Tailwind

```typescript
// Headings
<h1 className="text-5xl md:text-6xl font-bold">
<h2 className="text-4xl md:text-5xl font-bold">
<h3 className="text-3xl md:text-4xl font-semibold">

// Body
<p className="text-base md:text-lg text-gray-600">

// Caption
<span className="text-xs uppercase tracking-wider text-gray-500">
```

---

## 📏 Espaciado

### Sistema de Espaciado

Basado en múltiplos de **4px** (0.25rem):

```css
/* Tailwind spacing scale */
0   = 0px
1   = 4px
2   = 8px
3   = 12px
4   = 16px
5   = 20px
6   = 24px
8   = 32px
10  = 40px
12  = 48px
16  = 64px
20  = 80px
24  = 96px
32  = 128px
```

### Patrones de Espaciado

```typescript
// Secciones de página
<section className="py-16 md:py-24 lg:py-32">

// Contenedores
<div className="px-4 md:px-6 lg:px-8">

// Cards
<div className="p-6 md:p-8">

// Gaps en grids
<div className="grid gap-6 md:gap-8 lg:gap-12">

// Stacks verticales
<div className="space-y-4 md:space-y-6">
```

### Max Width

```typescript
// Contenedores
max-w-7xl   // 1280px - Ancho máximo general
max-w-6xl   // 1152px - Contenido principal
max-w-4xl   // 896px  - Texto largo
max-w-2xl   // 672px  - Formularios
max-w-prose // ~65ch  - Artículos
```

---

## 🎭 Componentes Visuales

### Sombras

```css
/* Tailwind shadows */
shadow-sm    /* Sutil */
shadow       /* Default */
shadow-md    /* Elevado */
shadow-lg    /* Flotante */
shadow-xl    /* Modal */
shadow-2xl   /* Hero */

/* Custom shadows */
.shadow-soft {
  box-shadow:
    0 2px 15px -3px rgba(0, 0, 0, 0.07),
    0 10px 20px -2px rgba(0, 0, 0, 0.04);
}
```

### Bordes

```css
/* Radius */
rounded-none   /* 0px */
rounded-sm     /* 2px */
rounded        /* 4px */
rounded-md     /* 6px */
rounded-lg     /* 8px */
rounded-xl     /* 12px */
rounded-2xl    /* 16px */
rounded-3xl    /* 24px */
rounded-full   /* 9999px */

/* Patrones comunes */
.card {
  @apply rounded-xl border border-gray-200;
}

.button {
  @apply rounded-lg;
}

.input {
  @apply rounded-md border border-gray-300;
}
```

### Efectos de Hover

```typescript
// Botones
<button className="
  transition-all duration-200
  hover:scale-105
  hover:shadow-lg
  active:scale-95
">

// Cards
<div className="
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-xl
">

// Links
<a className="
  transition-colors duration-200
  hover:text-primary-600
  underline-offset-4
  hover:underline
">
```

---

## 🎬 Animaciones

### Transiciones Base

```css
/* globals.css */
@layer utilities {
  .transition-base {
    @apply transition-all duration-200 ease-in-out;
  }

  .transition-slow {
    @apply transition-all duration-500 ease-in-out;
  }
}
```

### Animaciones Comunes

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

/* Pulse */
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Scroll Animations (Futuro)

```typescript
// Con Framer Motion
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Contenido...
</motion.div>
```

---

## 📱 Responsive Design

### Breakpoints

```javascript
// Tailwind breakpoints
sm: '640px'   // Tablets pequeñas
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Pantallas grandes
```

### Mobile-First Approach

```typescript
// ✅ Correcto: Mobile primero
<div className="
  text-base      // Mobile
  md:text-lg     // Tablet
  lg:text-xl     // Desktop
">

// ❌ Incorrecto: Desktop primero
<div className="text-xl md:text-base">
```

### Patrones Responsive

```typescript
// Grid responsive
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6
">

// Flex responsive
<div className="
  flex
  flex-col
  md:flex-row
  items-center
  gap-4
">

// Ocultar/mostrar
<div className="
  hidden
  md:block
">

// Padding responsive
<section className="
  px-4
  md:px-6
  lg:px-8
  py-12
  md:py-16
  lg:py-24
">
```

---

## 🎨 Ejemplos Completos

### Hero Section

```typescript
<section className="
  relative
  min-h-screen
  flex items-center justify-center
  bg-gradient-to-br from-primary-50 to-wood-50
  px-4 md:px-6 lg:px-8
  py-20 md:py-24
">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <h1 className="
      text-4xl md:text-5xl lg:text-6xl
      font-bold
      text-gray-900
      leading-tight
    ">
      Cuidamos tu hogar con precisión
    </h1>

    <p className="
      text-lg md:text-xl
      text-gray-600
      max-w-2xl mx-auto
    ">
      Con pasión y profesionalismo
    </p>

    <button className="
      px-8 py-4
      bg-primary-600
      text-white
      rounded-lg
      font-semibold
      shadow-lg
      transition-all duration-200
      hover:bg-primary-700
      hover:scale-105
      hover:shadow-xl
    ">
      Ver galería
    </button>
  </div>
</section>
```

### Card Component

```typescript
<div className="
  group
  bg-white
  rounded-xl
  border border-gray-200
  p-6
  shadow-sm
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-xl
">
  <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
    <Image
      src="/image.jpg"
      alt="..."
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-110"
    />
  </div>

  <h3 className="text-xl font-semibold text-gray-900 mb-2">
    Título
  </h3>

  <p className="text-gray-600 mb-4">
    Descripción...
  </p>

  <button className="
    text-primary-600
    font-medium
    transition-colors
    hover:text-primary-700
  ">
    Ver más →
  </button>
</div>
```

---

## 📚 Recursos

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Color Palette Generator](https://coolors.co/)
- [Google Fonts](https://fonts.google.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Última actualización**: 2026-02-05
