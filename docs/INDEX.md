# 📚 Índice de Documentación - Renova

> Guía rápida para navegar toda la documentación del proyecto

---

## 🧭 Doctrina del producto (fuente de verdad del negocio)

Antes que la documentación técnica heredada del scaffold, leé el paquete de doctrina del
producto (qué es Renova, modelo de negocio, roadmap, modelo de datos, seguridad y diseño):

1. [OWNERSHIP.md](./OWNERSHIP.md) - Quién responde por qué
2. [00-overview.md](./00-overview.md) - Qué es Renova (negocio + producto)
3. [01-architecture.md](./01-architecture.md) - Stack, estructura, flujo de datos
4. [02-roadmap.md](./02-roadmap.md) - Fases del producto
5. [03-data-model.md](./03-data-model.md) - Tablas Supabase, ENUMs, RLS
6. [04-security.md](./04-security.md) - Postura de seguridad
7. [05-design-system.md](./05-design-system.md) - Tokens, paleta, tipografía
8. [glossary.md](./glossary.md) - Lenguaje de campo ↔ lenguaje de ingeniería
9. [decisions/](./decisions/) - ADRs: el porqué de cada decisión técnica

La documentación técnica de abajo (ARCHITECTURE.md, STYLING.md, COMPONENTS.md, API.md) es la
guía **de implementación** del scaffold Next.js, ya actualizada al rumbo de servicios del hogar.

---

## 🎯 Para Empezar

Si eres nuevo en el proyecto, lee en este orden:

1. **[README.md](../README.md)** - Visión general y quick start
2. **[ARCHITECTURE.md](../ARCHITECTURE.md)** - Entender la arquitectura técnica
3. **[STYLING.md](./STYLING.md)** - Sistema de diseño
4. **[COMPONENTS.md](./COMPONENTS.md)** - Guía de componentes

---

## 📖 Documentación por Categoría

### 🏗️ Arquitectura y Estructura

| Documento                             | Descripción                                                     | Cuándo leer                                                |
| ------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------- |
| [ARCHITECTURE.md](../ARCHITECTURE.md) | Decisiones técnicas, patrones de diseño, estructura de carpetas | Al iniciar en el proyecto o antes de hacer cambios grandes |
| [README.md](../README.md)             | Visión general, comandos, roadmap                               | Siempre, es tu punto de partida                            |

### 🎨 Diseño y UI

| Documento                        | Descripción                                           | Cuándo leer                                |
| -------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| [STYLING.md](./STYLING.md)       | Paleta de colores, tipografía, espaciado, animaciones | Antes de crear cualquier componente visual |
| [COMPONENTS.md](./COMPONENTS.md) | Catálogo de componentes, props, ejemplos de uso       | Al crear o usar componentes                |

### 🔌 Backend y APIs

| Documento          | Descripción                             | Cuándo leer                |
| ------------------ | --------------------------------------- | -------------------------- |
| [API.md](./API.md) | Endpoints, convenciones, error handling | Al trabajar con API routes |

### 🤖 Workflows y Automatización

| Documento                                                          | Descripción                              | Cuándo usar                            |
| ------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------- |
| [component-creation.md](../.agent/workflows/component-creation.md) | Crear componentes siguiendo convenciones | Al crear cualquier componente nuevo    |
| [testing.md](../.agent/workflows/testing.md)                       | Testing y verificación completa          | Antes de cada Pull Request             |
| [deploy.md](../.agent/workflows/deploy.md)                         | Proceso de despliegue                    | Al hacer deploy a staging o producción |

---

## 🔍 Búsqueda Rápida

### "Quiero crear un componente nuevo"

1. Lee [COMPONENTS.md](./COMPONENTS.md) - Sección "Guía de Creación"
2. Sigue [component-creation.md](../.agent/workflows/component-creation.md)
3. Consulta [STYLING.md](./STYLING.md) para estilos

### "Quiero entender la estructura del proyecto"

1. Lee [ARCHITECTURE.md](../ARCHITECTURE.md) - Sección "Arquitectura de Carpetas"
2. Revisa [README.md](../README.md) - Sección "Estructura del Proyecto"

### "Quiero hacer deploy"

1. Sigue [deploy.md](../.agent/workflows/deploy.md)
2. Consulta [README.md](../README.md) - Sección "Despliegue"

### "Quiero agregar una API"

1. Lee [API.md](./API.md) - Sección "Estructura de APIs"
2. Revisa [ARCHITECTURE.md](../ARCHITECTURE.md) - Sección "Flujo de Datos"

### "Quiero saber qué colores usar"

1. Consulta [STYLING.md](./STYLING.md) - Sección "Paleta de Colores"

### "Quiero hacer testing antes de PR"

1. Sigue [testing.md](../.agent/workflows/testing.md)

---

## 📊 Mapa Mental de Documentación

```
Renova-Hub Docs
│
├── 📄 README.md (Inicio)
│   ├── Quick Start
│   ├── Roadmap
│   └── Comandos básicos
│
├── 🏗️ ARCHITECTURE.md (Cerebro técnico)
│   ├── Stack tecnológico
│   ├── Patrones de diseño
│   ├── Estructura de carpetas
│   └── Convenciones de código
│
├── 📂 docs/
│   │
│   ├── 🎨 STYLING.md (Sistema de diseño)
│   │   ├── Colores
│   │   ├── Tipografía
│   │   ├── Espaciado
│   │   └── Animaciones
│   │
│   ├── 🧩 COMPONENTS.md (Componentes)
│   │   ├── Layout Components
│   │   ├── Section Components
│   │   ├── UI Components
│   │   └── Guía de creación
│   │
│   ├── 🔌 API.md (Backend)
│   │   ├── Endpoints actuales
│   │   ├── Endpoints futuros
│   │   └── Convenciones
│   │
│   └── 📚 INDEX.md (Este archivo)
│
└── 🤖 .agent/
    ├── README.md (Guía de workflows)
    └── workflows/
        ├── component-creation.md
        ├── testing.md
        └── deploy.md
```

---

## 🎓 Guías por Rol

### Frontend Developer

**Lectura esencial**:

1. [ARCHITECTURE.md](../ARCHITECTURE.md) - Patrones de diseño
2. [STYLING.md](./STYLING.md) - Sistema de diseño completo
3. [COMPONENTS.md](./COMPONENTS.md) - Catálogo de componentes
4. [component-creation.md](../.agent/workflows/component-creation.md) - Workflow

**Consulta frecuente**:

- [STYLING.md](./STYLING.md) - Colores y espaciado
- [COMPONENTS.md](./COMPONENTS.md) - Props de componentes

### Backend Developer

**Lectura esencial**:

1. [ARCHITECTURE.md](../ARCHITECTURE.md) - Flujo de datos
2. [API.md](./API.md) - Convenciones de API
3. [testing.md](../.agent/workflows/testing.md) - Testing

**Consulta frecuente**:

- [API.md](./API.md) - Endpoints y error handling

### DevOps / Deploy

**Lectura esencial**:

1. [deploy.md](../.agent/workflows/deploy.md) - Proceso completo
2. [README.md](../README.md) - Configuración de ambientes
3. [testing.md](../.agent/workflows/testing.md) - Verificación pre-deploy

### Project Manager

**Lectura esencial**:

1. [README.md](../README.md) - Roadmap y fases
2. [ARCHITECTURE.md](../ARCHITECTURE.md) - Visión general técnica

---

## 🔄 Mantener Documentación Actualizada

### Cuándo actualizar cada documento

| Documento       | Actualizar cuando...                            |
| --------------- | ----------------------------------------------- |
| README.md       | Cambios en roadmap, nuevas features principales |
| ARCHITECTURE.md | Cambios en stack, patrones o estructura         |
| STYLING.md      | Nuevos colores, fuentes o estilos globales      |
| COMPONENTS.md   | Crear o modificar componentes                   |
| API.md          | Agregar o cambiar endpoints                     |
| Workflows       | Cambios en procesos de desarrollo               |

### Checklist de actualización

- [ ] ¿El cambio afecta la arquitectura? → Actualizar ARCHITECTURE.md
- [ ] ¿Creaste un componente nuevo? → Actualizar COMPONENTS.md
- [ ] ¿Agregaste colores o estilos? → Actualizar STYLING.md
- [ ] ¿Creaste un endpoint? → Actualizar API.md
- [ ] ¿Cambiaste un proceso? → Actualizar workflow correspondiente
- [ ] ¿Es una feature importante? → Actualizar README.md

---

## 📝 Template para Nuevos Documentos

Si necesitas crear documentación adicional:

```markdown
# 📌 [Título del Documento]

> [Descripción breve]

---

## 📋 Índice

1. [Sección 1](#sección-1)
2. [Sección 2](#sección-2)

---

## Sección 1

[Contenido...]

---

## Sección 2

[Contenido...]

---

**Última actualización**: [Fecha]
**Mantenido por**: Jorge Franco
```

---

## 🚀 Próximos Documentos

Documentación planeada para el futuro:

- [ ] `TESTING.md` - Guía de testing automatizado
- [ ] `DEPLOYMENT.md` - Guía detallada de deployment
- [ ] `CONTRIBUTING.md` - Guía para contribuidores
- [ ] `CHANGELOG.md` - Historial de cambios
- [ ] `SECURITY.md` - Políticas de seguridad
- [ ] `DATABASE.md` - Esquema de base de datos (Fase 2)
- [ ] `AUTHENTICATION.md` - Sistema de autenticación (Fase 2)
- [ ] `PORTAL.md` - Lógica del portal transaccional (Fase 3)

---

## 💡 Tips de Uso

1. **Usa búsqueda**: Ctrl/Cmd + F en cada documento
2. **Sigue los links**: Todos los documentos están interconectados
3. **Consulta ejemplos**: Cada guía tiene ejemplos de código
4. **Actualiza al cambiar**: Mantén la documentación sincronizada con el código
5. **Pregunta al AI**: Usa Gemini con acceso a estos documentos

---

## 📚 Recursos Externos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Última actualización**: 2026-02-05  
**Mantenido por**: Jorge Franco

---

<div align="center">

**¿Perdido? Empieza por el [README.md](../README.md)**

[Arquitectura](../ARCHITECTURE.md) • [Componentes](./COMPONENTS.md) • [Estilos](./STYLING.md) • [Workflows](../.agent/workflows/)

</div>
