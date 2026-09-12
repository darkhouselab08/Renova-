# 🔌 API Documentation - Renova-Hub

> Documentación de API Routes y endpoints

---

## 📋 Índice

1. [Estructura de APIs](#-estructura-de-apis)
2. [Convenciones](#-convenciones)
3. [Endpoints Actuales](#-endpoints-actuales)
4. [Endpoints Futuros](#-endpoints-futuros)
5. [Error Handling](#-error-handling)

---

## 🏗️ Estructura de APIs

### Ubicación

```
src/app/api/
├── contact/
│   └── route.ts          # POST /api/contact
├── quotes/
│   └── route.ts          # POST /api/quotes
└── gallery/
    └── route.ts          # GET /api/gallery
```

### Formato de Route Handler

```typescript
// src/app/api/[endpoint]/route.ts

import { NextRequest, NextResponse } from "next/server";

// GET Handler
export async function GET(request: NextRequest) {
  try {
    // Lógica
    return NextResponse.json({ data: [] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error message" }, { status: 500 });
  }
}

// POST Handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Validación
    // Procesamiento
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error message" }, { status: 500 });
  }
}
```

---

## 📝 Convenciones

### Naming

- **Archivos**: `route.ts` (Next.js convention)
- **Carpetas**: Nombre del recurso en plural (`quotes`, `products`)
- **Funciones**: Métodos HTTP en mayúsculas (`GET`, `POST`, `PUT`, `DELETE`)

### Response Format

```typescript
// Success Response
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}

// Error Response
{
  "success": false,
  "error": "Error message",
  "details": { ... } // Optional
}
```

### Status Codes

```typescript
200 - OK (GET exitoso)
201 - Created (POST exitoso)
400 - Bad Request (validación falló)
401 - Unauthorized (no autenticado)
403 - Forbidden (no autorizado)
404 - Not Found (recurso no existe)
500 - Internal Server Error (error del servidor)
```

---

## 🚀 Endpoints Actuales

### Fase 1: Landing Page

Por ahora, la landing page es estática. No hay endpoints activos.

---

## 🔮 Endpoints Futuros

### Fase 2: Dashboard y Cotizaciones

#### POST /api/contact

**Propósito**: Enviar formulario de contacto

**Request**:

```typescript
{
  "name": string,
  "email": string,
  "phone": string,
  "message": string
}
```

**Response**:

```typescript
{
  "success": true,
  "message": "Mensaje enviado correctamente"
}
```

**Validaciones**:

- Email válido
- Nombre mínimo 2 caracteres
- Mensaje mínimo 10 caracteres

---

#### POST /api/quotes

**Propósito**: Solicitar estimado de servicio del hogar

**Request**:

```typescript
{
  "name": string,
  "email": string,
  "phone": string,
  "serviceType": "power_washing" | "maintenance" | "cleaning" | "painting",
  "description": string,
  "images": string[], // URLs de imágenes subidas
  "urgency": "low" | "medium" | "high"
}
```

**Response**:

```typescript
{
  "success": true,
  "quoteId": string,
  "estimatedPrice": {
    "min": number,
    "max": number
  },
  "message": "Cotización recibida. Te contactaremos pronto."
}
```

---

#### GET /api/gallery

**Propósito**: Obtener galería de proyectos

**Query Params**:

```typescript
?category=all|power_washing|maintenance|cleaning|painting
&limit=10
&offset=0
```

**Response**:

```typescript
{
  "success": true,
  "data": [
    {
      "id": string,
      "title": string,
      "category": string,
      "beforeImage": string,
      "afterImage": string,
      "description": string,
      "createdAt": string
    }
  ],
  "total": number,
  "hasMore": boolean
}
```

---

### Fase 3: Portal Transaccional

Endpoints sobre el modelo de datos de `src/types/database.ts` (`Project`, `Finance`,
`LogisticsMaterial`, `AgentLog`). Todo INSERT lleva `source` obligatorio (ver `docs/04-security.md`).

#### GET /api/projects

**Propósito**: Listar proyectos (dashboard interno / portal de cliente)

**Response**:

```typescript
{
  "success": true,
  "data": Project[]
}
```

---

#### GET /api/finances

**Propósito**: Listar movimientos financieros de un proyecto

**Response**:

```typescript
{
  "success": true,
  "data": Finance[]
}
```

---

#### GET /api/agents

**Propósito**: Consultar el registro de acciones de agentes (auditoría)

**Response**:

```typescript
{
  "success": true,
  "data": AgentLog[]
}
```

---

## ⚠️ Error Handling

### Estructura de Errores

```typescript
// src/lib/errors.ts

export class APIError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: any
  ) {
    super(message);
  }
}

// Uso
throw new APIError(400, "Email inválido", { field: "email" });
```

### Error Handler Global

```typescript
// src/lib/api-handler.ts

export function handleAPIError(error: unknown) {
  if (error instanceof APIError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: error.details,
      },
      { status: error.statusCode }
    );
  }

  // Error desconocido
  console.error("Unexpected error:", error);
  return NextResponse.json(
    {
      success: false,
      error: "Error interno del servidor",
    },
    { status: 500 }
  );
}
```

---

## 🔐 Autenticación (Futuro)

### Middleware de Autenticación

```typescript
// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Verificar token
  const token = request.headers.get("authorization");

  if (!token) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  // Validar token
  // ...

  return NextResponse.next();
}

export const config = {
  matcher: "/api/admin/:path*",
};
```

---

## 📚 Recursos

- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [HTTP Status Codes](https://httpstatuses.com/)
- [REST API Best Practices](https://restfulapi.net/)

---

**Última actualización**: 2026-02-05
