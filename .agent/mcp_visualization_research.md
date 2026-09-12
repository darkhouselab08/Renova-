# MCPs para Visualización - Investigación

> ⚠️ **Documento histórico (pre-pivote, hasta 12-sep-2026):** describe el concepto anterior de restauración de muebles + Genie 3. Renova pivotó a servicios del hogar (power-washing, mantenimiento, limpieza, pintura) — ver ADR-0004 en `docs/decisions/`. Se conserva como referencia, no como doctrina vigente.


## 🎯 Objetivo

Encontrar MCPs que se integren con Antigravity para facilitar la creación de imágenes y visualización de trabajos, superando las limitaciones de solo trabajar con texto/datos.

---

## 🔍 MCPs Potenciales para Investigar

### 1. **Screenshot/Browser MCP**

- **Función:** Capturar screenshots automáticos de páginas web
- **Uso en Renova-Hub:** Capturar estado actual del sitio para comparaciones
- **Investigar:**
  - `@modelcontextprotocol/server-puppeteer`
  - `@modelcontextprotocol/server-playwright`

### 2. **Image Generation MCP**

- **Función:** Generar imágenes desde prompts
- **Uso en Renova-Hub:** Crear mockups visuales directamente
- **Investigar:**
  - MCPs que integren DALL-E, Midjourney, Stable Diffusion
  - Replicate MCP (acceso a múltiples modelos)

### 3. **Figma MCP**

- **Función:** Interactuar con Figma API
- **Uso en Renova-Hub:** Crear/editar diseños programáticamente
- **Investigar:**
  - `figma-mcp` (si existe)
  - Figma REST API wrapper

### 4. **Canvas/Drawing MCP**

- **Función:** Crear diagramas, wireframes, flowcharts
- **Uso en Renova-Hub:** Visualizar arquitectura, flujos de usuario
- **Investigar:**
  - Mermaid MCP (para diagramas)
  - Excalidraw MCP (para wireframes)

---

## 📋 Plan de Investigación

### Fase 1: Búsqueda (Esta semana)

- [ ] Revisar MCP Registry oficial: https://github.com/modelcontextprotocol
- [ ] Buscar en npm: `npm search mcp`
- [ ] Revisar Discord/comunidad de MCPs
- [ ] Documentar MCPs encontrados

### Fase 2: Prueba (Próxima semana)

- [ ] Instalar 2-3 MCPs más prometedores
- [ ] Probar integración con Antigravity
- [ ] Evaluar facilidad de uso
- [ ] Documentar resultados

### Fase 3: Implementación (Según resultados)

- [ ] Elegir 1-2 MCPs para uso regular
- [ ] Configurar en proyecto
- [ ] Crear workflow de visualización
- [ ] Actualizar documentación

---

## 🛠️ Alternativas Mientras Tanto

### Opción A: Figma Manual

1. Crear cuenta en Figma (gratis)
2. Aprender básico (2 horas)
3. Crear mockups manualmente
4. Exportar como imágenes

**Ventaja:** Control total, calidad profesional  
**Desventaja:** Manual, no automatizado

### Opción B: Excalidraw

1. Usar excalidraw.com (gratis, no requiere cuenta)
2. Crear wireframes rápidos
3. Exportar como PNG/SVG

**Ventaja:** Rápido, simple  
**Desventaja:** Menos profesional que Figma

### Opción C: Mermaid en Markdown

1. Usar sintaxis Mermaid en archivos .md
2. Antigravity renderiza automáticamente
3. Perfecto para diagramas técnicos

**Ventaja:** Ya integrado, versionable  
**Desventaja:** Solo diagramas, no mockups UI

---

## 📊 Criterios de Evaluación para MCPs

| Criterio                     | Peso | Descripción                                           |
| ---------------------------- | ---- | ----------------------------------------------------- |
| **Facilidad de integración** | 30%  | ¿Funciona con Antigravity sin configuración compleja? |
| **Calidad de output**        | 25%  | ¿Las imágenes son profesionales/útiles?               |
| **Velocidad**                | 20%  | ¿Genera resultados en <30 segundos?                   |
| **Costo**                    | 15%  | ¿Es gratis o tiene free tier generoso?                |
| **Mantenimiento**            | 10%  | ¿Está activamente mantenido?                          |

**Mínimo aceptable:** 70/100 puntos

---

## 🎯 Resultado Esperado

**Ideal:**

- 1 MCP para generar mockups UI (Figma o Image Gen)
- 1 MCP para diagramas (Mermaid ya integrado)
- Workflow: Describir → Generar → Revisar → Exportar

**Realista:**

- Figma manual para mockups importantes
- Mermaid para diagramas técnicos
- Excalidraw para wireframes rápidos

---

## 📝 Notas de Investigación

### [Fecha] - Hallazgos

_(Espacio para documentar MCPs encontrados)_

---

**Última actualización:** 2026-02-09  
**Estado:** Investigación pendiente
