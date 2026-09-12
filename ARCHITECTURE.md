# 🏗️ Arquitectura Técnica - Renova

> **Versión**: 2.0.0  
> **Última actualización**: 2026-02-10  
> **Autor**: Jorge Franco

> ⚠️ **Nota de vigencia (12-sep-2026):** la sección "Visión General" y "Arquitectura de Carpetas"
> están al día con el pivote a servicios del hogar. Las secciones más técnicas de abajo
> (Integraciones "Genie 3", `WorldViewport`, `simulation.ts`, y ejemplos de `Hero`/`Gallery` con
> el folder tree viejo) describen el **concepto anterior de restauración de muebles** y quedaron
> desactualizadas — esos componentes ya no existen en el código (ver `tasks/DONE.md#pivote-01`,
> `#pivote-02`). Se conservan como referencia histórica hasta una limpieza completa; para la
> arquitectura real y vigente, ver el folder tree de esta misma sección y `docs/01-architecture.md`.

---

## 📋 Índice

1. [Visión General](#-visión-general)
2. [Stack Tecnológico](#-stack-tecnológico)
3. [Arquitectura de Carpetas](#-arquitectura-de-carpetas)
4. [Patrones de Diseño](#-patrones-de-diseño)
5. [Sistema de Componentes](#-sistema-de-componentes)
6. [Flujo de Datos](#-flujo-de-datos)
7. [Convenciones de Código](#-convenciones-de-código)
8. [Estrategia de Branches](#-estrategia-de-branches)
9. [Protocolo de Inicio (Agente)](#-protocolo-de-inicio-agente)

---

## 🎯 Visión General

**Renova** es una plataforma de servicios integrales del hogar (power washing, mantenimiento,
limpieza y pintura) para residencias de alto nivel en The Hamptons, NY. Conecta clientes con
compañías socias licenciadas e independientes (modelo plataforma/referidos, ver ADR-0004). El
proyecto está diseñado para ser:

- **Escalable**: Arquitectura modular que crece con el negocio
- **Mantenible**: Código limpio y bien documentado
- **Performante**: Optimizado para SEO y velocidad
- **Transparente**: Credenciales de socios verificadas, seguimiento de proyecto en tiempo real
- **Profesional**: Diseño premium y experiencia de usuario excepcional

### Objetivos del Proyecto

1. **Fase 1 - Pivote de Scaffold** ✅ (pivote de identidad y contenido completado)
   - Identidad Dark Luxury (tokens Tailwind, Fraunces)
   - Contenido de servicios del hogar (Hero, Header, Footer, secciones)
   - Estructura de dominio: `src/lib/supabase/`, `src/types/database.ts`, rutas dashboard/portal/api

2. **Fase 1.5 - Landing y Estimador** (en progreso)
   - Deploy a Vercel (`renova.house`)
   - Réplica de la maqueta congelada `prerenova.html` (4 servicios + magazine + estimador)
   - Validación de propuesta de valor con clientes reales

3. **Fase 2 - Backend Conectado**
   - Conexión real a Supabase (proyectos, finanzas, materiales, agents_log)
   - RLS y autenticación de socios/clientes

4. **Fase 3 - Portal Transaccional**
   - Dashboard interno (proyectos, finanzas, agentes)
   - Portal de cliente con magic link
   - Verificación de socios (licencia, seguro, COI)

---

## 🛠️ Stack Tecnológico

### Core Framework

```typescript
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5.x
```

**¿Por qué Next.js?**

- ✅ SSR (Server-Side Rendering) para mejor SEO
- ✅ App Router para routing moderno
- ✅ Image Optimization automática
- ✅ API Routes integradas
- ✅ Excelente DX (Developer Experience)

### Styling

```typescript
- Tailwind CSS 4.x
- PostCSS
```

**¿Por qué Tailwind?**

- ✅ Utility-first para desarrollo rápido
- ✅ Diseño consistente con design tokens
- ✅ Tree-shaking automático (CSS mínimo)
- ✅ Responsive design simplificado

### Integraciones Actuales

- **Animaciones**: Framer Motion (planificado)
- **Temas**: next-themes (dark/light mode)
- **Contextos**: React Context API

### Integraciones Futuras (Fase 2+)

#### Backend & IA

- **Backend**: Python/FastAPI (para Genie 3)
- **IA**: Google Cloud Vertex AI + Genie 3
- **Node Backend**: Next.js API Routes (lógica de negocio)

#### Base de Datos & Auth

- **Base de datos**: Supabase (PostgreSQL)
- **Autenticación**: NextAuth.js / Supabase Auth
- **Storage**: Supabase Storage / Cloudinary

#### Pagos & Comunicación

- **Pagos**: Stripe
- **Email**: Resend / SendGrid
- **Automatización**: n8n (workflows)

### Arquitectura "Cerebro, Nervios y Memoria"

```
┌─────────────────────────────────────────────────────┐
│  CEREBRO (IA)                                       │
│  - Gemini (chat, análisis)                          │
│  - Genie 3 (simulación 3D)                          │
│  - Decisiones inteligentes                          │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  NERVIOS (Automatización)                           │
│  - n8n (workflows)                                  │
│  - Conecta servicios                                │
│  - Triggers y acciones                              │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  MEMORIA (Datos)                                    │
│  - Supabase (PostgreSQL)                            │
│  - Row Level Security (RLS)                         │
│  - Contexto persistente                             │
└─────────────────────────────────────────────────────┘
```

---

## 📁 Arquitectura de Carpetas

```
renova-hub/
├── .agent/                    # Workflows y documentación de proyecto
│   ├── workflows/            # Procesos documentados
│   │   ├── deploy.md
│   │   ├── testing.md
│   │   └── component-creation.md
│   ├── CONTEXT.md            # Contexto del proyecto
│   ├── README.md             # Guía de .agent
│   ├── jorge_profile.md      # Perfil del desarrollador
│   ├── business_viability_genie3.md  # Análisis de negocio
│   ├── mcp_visualization_research.md # Investigación MCPs
│   └── visual_generation_prompts.md  # Prompts para mockups
│
├── docs/                      # Documentación técnica
│   ├── INDEX.md              # Índice de documentación
│   ├── COMPONENTS.md         # Guía de componentes
│   ├── STYLING.md            # Sistema de diseño
│   ├── API.md                # Documentación de APIs
│   └── BUSINESS_PLAN.md      # Plan de negocio
│
├── public/                    # Assets estáticos
│   ├── images/               # Imágenes optimizadas
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── products/
│   │   └── mockups/          # Mockups visuales (Fase 1.5)
│   └── fonts/                # Fuentes personalizadas
│
├── src/
│   ├── app/                  # App Router (Next.js)
│   │   ├── (marketing)/     # Grupo de rutas públicas
│   │   │   ├── page.tsx     # Landing page
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/     # Grupo de rutas admin (futuro)
│   │   ├── api/             # API Routes
│   │   │   └── genie/       # Endpoints Genie 3 (Fase 2)
│   │   ├── globals.css
│   │   └── layout.tsx       # Root layout
│   │
│   ├── components/
│   │   ├── layout/          # Componentes de estructura
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/        # Secciones de página
│   │   │   ├── Hero.tsx              # ✅ Con WorldViewport
│   │   │   ├── Gallery.tsx           # ✅ Con WorldViewport
│   │   │   ├── About.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── ui/              # Componentes reutilizables
│   │       ├── ThemeSwitcher.tsx
│   │       └── WorldViewport.tsx     # ✅ Wrapper para Genie 3
│   │
│   ├── contexts/            # React Contexts
│   │   └── ThemeContext.tsx
│   │
│   ├── lib/                 # Utilidades y helpers
│   │   ├── projects.ts      # Data de proyectos
│   │   └── utils.ts         # Funciones helper
│   │
│   ├── types/               # ✅ TypeScript types (Fase 1)
│   │   └── simulation.ts    # Tipos para Genie 3
│   │
│   ├── hooks/               # Custom React hooks (futuro)
│   │   ├── useMediaQuery.ts
│   │   └── useScrollPosition.ts
│   │
│   └── styles/              # Estilos globales
│       └── animations.css
│
├── ARCHITECTURE.md           # Este archivo
├── README.md                # Documentación de usuario
└── package.json
```

### Principios de Organización

1. **Separación por función**: `layout/`, `sections/`, `ui/`
2. **Colocation**: Archivos relacionados juntos
3. **Route Groups**: Organización lógica de rutas con `(nombre)`
4. **Barrel Exports**: `index.ts` para exportaciones limpias (futuro)
5. **Documentación centralizada**: `.agent/` para contexto de proyecto

### Cambios Recientes (Fase 1)

#### Nuevos Directorios

- ✅ `src/types/` - Tipos TypeScript para simulaciones
- ✅ `.agent/` - Documentación y workflows del proyecto

#### Nuevos Archivos

- ✅ `src/types/simulation.ts` - Tipos para Genie 3
- ✅ `src/components/ui/WorldViewport.tsx` - Wrapper para 3D
- ✅ `.agent/business_viability_genie3.md` - Análisis de negocio
- ✅ `.agent/jorge_profile.md` - Perfil y plan de aprendizaje

#### Archivos Modificados

- ✅ `src/components/sections/Hero.tsx` - Usa WorldViewport
- ✅ `src/components/sections/Gallery.tsx` - Usa WorldViewport

---

## 🎨 Patrones de Diseño

### 1. Component Composition Pattern

```typescript
// ✅ Bueno: Componentes pequeños y componibles
<Hero>
  <Hero.Title>Cuidamos tu hogar con precisión</Hero.Title>
  <Hero.Subtitle>Socios verificados, transparencia total</Hero.Subtitle>
  <Hero.CTA>Ver galería</Hero.CTA>
</Hero>

// ❌ Malo: Componente monolítico
<Hero
  title="..."
  subtitle="..."
  ctaText="..."
  ctaLink="..."
/>
```

### 2. Server Components First

```typescript
// Por defecto, todos los componentes son Server Components
// Solo usa 'use client' cuando necesites:
// - Event handlers (onClick, onChange)
// - React hooks (useState, useEffect)
// - Browser APIs (window, localStorage)

// ✅ Server Component (por defecto)
export default function Gallery() {
  const images = await fetchImages(); // Fetch en servidor
  return <GalleryGrid images={images} />;
}

// ✅ Client Component (cuando sea necesario)
'use client';
export default function InteractiveGallery() {
  const [selected, setSelected] = useState(null);
  return <div onClick={() => setSelected(id)}>...</div>;
}
```

### 3. Atomic Design Methodology

```
Atoms      → ui/Button, ui/Input
Molecules  → ui/SearchBar (Input + Button)
Organisms  → sections/Hero (múltiples molecules)
Templates  → layout/MainLayout
Pages      → app/page.tsx
```

---

## 🧩 Sistema de Componentes

### Categorías de Componentes

#### 1. Layout Components (`components/layout/`)

**Propósito**: Estructura global de la aplicación

- `Header.tsx` - Navegación principal
- `Footer.tsx` - Pie de página con links

**Características**:

- Server Components por defecto
- Sticky/Fixed positioning
- Responsive design

#### 2. Section Components (`components/sections/`)

**Propósito**: Bloques de contenido de página completa

- `Hero.tsx` - Sección principal con CTA ✅ **Usa WorldViewport**
- `Gallery.tsx` - Galería de transformaciones ✅ **Usa WorldViewport**
- `About.tsx` - Información de la empresa
- `Process.tsx` - Proceso de solicitud y ejecución del servicio
- `Testimonials.tsx` - Reseñas de clientes
- `ContactForm.tsx` - Formulario de contacto

**Características**:

- Full-width sections
- Spacing consistente (py-16, py-24)
- Background variants
- **Preparados para simulación 3D** (Hero, Gallery)

#### 3. UI Components (`components/ui/`)

**Propósito**: Componentes reutilizables y genéricos

- `ThemeSwitcher.tsx` - Cambio de tema dark/light
- `WorldViewport.tsx` - **Wrapper para Genie 3** ✅ **Nuevo en Fase 1**

**Características**:

- Props tipadas con TypeScript
- Variantes con Tailwind
- Accesibilidad (a11y)

##### WorldViewport Component (Fase 1)

**Propósito**: Wrapper que abstrae la complejidad de manejar imágenes estáticas y futuros streams 3D de Genie 3.

**Características**:

```typescript
interface WorldViewportProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  streamState?: WorldStreamState; // Fase 2
  onPointerInteraction?: (coords: PointerCoordinates) => void;
  showLabels?: boolean;
}
```

**Funcionalidad actual**:

- ✅ Renderiza imágenes before/after
- ✅ Captura coordenadas de click/hover
- ✅ Muestra badge "Click to Interact"
- ✅ Preparado para streams de Genie 3

**Funcionalidad futura (Fase 2)**:

- Renderizar streams de video 720p @ 24fps
- Manejar estados de carga
- Fallback automático a imágenes
- Integración con backend Python/FastAPI

---

## 🔄 Flujo de Datos

### Fase 1: Estático (Actual) ✅

```
Componentes → Props → Render
```

**Ejemplo**:

```typescript
// Gallery.tsx
const projects = getProjects(); // Data estática
<WorldViewport beforeImage={project.before} afterImage={project.after} />
```

### Fase 1.5: Validación (En planificación)

```
Usuario → "Fake Door" → Analytics → Decisión
```

**Objetivo**: Validar interés antes de construir backend.

### Fase 2: Con Genie 3 (Futuro)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────┐
│   Cliente    │────▶│ WorldViewport│────▶│   Backend    │────▶│ Genie 3  │
│  (Browser)   │     │  Component   │     │ Python/      │     │   API    │
│              │     │              │     │ FastAPI      │     │          │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────┘
      ▲                     │                     │                  │
      │                     │                     │                  │
      │              Coordenadas            Simulación          Stream
      │              X, Y, Action           Request             720p@24fps
      │                     │                     │                  │
      └─────────────────────┴─────────────────────┴──────────────────┘
                        Video Stream Response
```

**Flujo detallado**:

1. Usuario hace click en WorldViewport
2. Component captura coordenadas (X, Y)
3. Frontend envía request a `/api/genie/interact`
4. Backend Python llama Genie 3 API
5. Genie 3 genera stream de video
6. Backend retorna stream URL
7. WorldViewport renderiza video

### Fase 3: Con Estado Global

```
Zustand Store ← API ← Backend Python ← Genie 3
     ↓                      ↓
Client Components    Supabase (persistencia)
```

**Gestión de estado**:

- Simulaciones activas
- Historial de interacciones
- Preferencias de usuario
- Cache de streams

---

## 📝 Convenciones de Código

### Nomenclatura

```typescript
// Componentes: PascalCase
export default function HeroSection() {}

// Funciones: camelCase
export function formatPrice(amount: number) {}

// Constantes: UPPER_SNAKE_CASE
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;

// Tipos/Interfaces: PascalCase con prefijo
export interface IProduct {}
export type TProductStatus = "active" | "inactive";
```

### Estructura de Archivos

```typescript
// 1. Imports externos
import { useState } from 'react';
import Image from 'next/image';

// 2. Imports internos
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

// 3. Types/Interfaces
interface HeroProps {
  title: string;
  subtitle?: string;
}

// 4. Componente principal
export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="...">
      {/* JSX */}
    </section>
  );
}

// 5. Componentes auxiliares (si son pequeños)
function HeroBackground() {
  return <div className="..." />;
}
```

### Tailwind CSS

```typescript
// ✅ Orden recomendado de clases
className="
  // Layout
  flex items-center justify-between
  // Spacing
  px-4 py-2 gap-4
  // Sizing
  w-full h-auto
  // Typography
  text-lg font-bold
  // Colors
  bg-blue-600 text-white
  // Effects
  rounded-lg shadow-md
  // States
  hover:bg-blue-700
  // Responsive
  md:px-8 lg:text-xl
"

// ✅ Usar @apply para patrones repetidos
// globals.css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
  }
}
```

---

## 🌿 Estrategia de Branches

### Branch Principal: `main`

- **Propósito**: Código en producción
- **Protección**: Solo merges aprobados
- **Deploy**: Automático a producción

### Branch de Desarrollo: `develop`

- **Propósito**: Integración de features
- **Flujo**: Feature branches → develop → main
- **Testing**: Ambiente de staging

### Feature Branches

```bash
# Nomenclatura
feature/hero-section
feature/gallery-component
fix/navbar-mobile
refactor/button-variants

# Flujo de trabajo
git checkout develop
git checkout -b feature/hero-section
# ... trabajo ...
git push origin feature/hero-section
# Pull Request → develop
```

### Hotfix Branches

```bash
# Para bugs críticos en producción
hotfix/critical-bug-name
# Merge directo a main y develop
```

---

## 🚀 Próximos Pasos

### Fase 1 - Completada ✅ (2026-02-09)

1. ✅ Crear estructura de documentación
2. ✅ Definir workflows de automatización
3. ✅ Implementar Hero Section con WorldViewport
4. ✅ Implementar Gallery con WorldViewport
5. ✅ Crear tipos TypeScript para simulaciones
6. ✅ Documentar arquitectura Genie 3

### Fase 1.5 - Validación Visual y Despliegue (EN CURSO) 🟢

**Objetivo**: Consolidar la identidad de lujo y validar la propuesta de valor.

1. [x] Refinar Dirección de Arte (Estilo Louis Vuitton)
2. [x] Refactorizar Testimonials (Consistencia de temas)
3. [ ] Generar Assets AAA (4K Video & Imagen 3)
4. [ ] Deploy a Vercel
   - Configurar dominio
   - Setup Google Analytics
5. [ ] Implementar "Fake Door"
   - Modal de simulación 3D
   - Captura de emails interesados

### Fase 2 - Backend + API (3 meses, si Fase 1.5 exitosa)

**Prerequisito**: Acceso a Genie 3 API aprobado

1. [ ] Backend Python/FastAPI
   - Setup Google Cloud Vertex AI
   - Implementar `/api/genie/interact`
   - Manejo de streams

2. [ ] Integración Frontend
   - Actualizar WorldViewport para streams
   - Estados de carga/error
   - Fallback a imágenes

3. [ ] Beta Testing
   - 3-5 clientes beta
   - Recolectar feedback
   - Iterar UX

### Fase 3 - Producción (3 meses)

1. [ ] Pricing Tiers UI
   - Landing page actualizada
   - Dashboard premium
   - Sistema de suscripciones

2. [ ] Integración Supabase
   - Autenticación
   - Base de datos
   - Row Level Security

3. [ ] Integración Stripe
   - Checkout flow
   - Webhooks
   - Manejo de suscripciones

4. [ ] Marketing & Escala
   - Content marketing
   - SEO optimization
   - Analytics dashboard

### Largo Plazo (6-12 meses)

1. [ ] Features Premium
   - AR visualization (móvil)
   - API para diseñadores
   - White-label solution

2. [ ] Optimizaciones
   - Cache de simulaciones
   - CDN para streams
   - Performance monitoring

3. [ ] Expansión
   - Tier Enterprise
   - Partnerships con tiendas
   - Mercado internacional

---

## 🤖 Protocolo de Inicio (Agente)

Este protocolo asegura que el agente (Gemini) esté alineado con el estado del proyecto antes de realizar cambios.

### Disparador: "ingeniero, iniciamos"

Al recibir esta frase, el agente DEBE:

1.  **Validar Rama**: Verificar que la rama activa NO sea `main`. Si es `main`, cambiar a `develop`.
2.  **Sintonizar Contexto**: Leer `ARCHITECTURE.md` y `task.md`.
3.  **Chequear Novedades**: Leer `.agent/CONTEXT.md` para capturar instrucciones externas recientes.
4.  **Confirmar Status**: Reportar rama activa y tarea siguiente antes de ejecutar.

---

## 📚 Referencias

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Mantenido por**: Jorge Franco  
**Repositorio**: [darkhouselab08/renova-hub](https://github.com/darkhouselab08/renova-hub)
