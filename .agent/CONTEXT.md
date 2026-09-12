# Contexto e Investigaciones para Renova-Hub

> ⚠️ **Documento histórico (pre-pivote, hasta 12-sep-2026):** describe el concepto anterior de restauración de muebles + Genie 3. Renova pivotó a servicios del hogar (power-washing, mantenimiento, limpieza, pintura) — ver ADR-0004 en `docs/decisions/`. Se conserva como referencia, no como doctrina vigente.


> **Propósito**: Este archivo es para que Jorge pegue información de otros chats, investigaciones, videos de YouTube, artículos, o cualquier recurso que quiera que Gemini conozca para aplicar al proyecto.

---

## 🧠 CONTEXTO ACTUALIZADO DEL PROYECTO (Feb 9, 2026)

### **Perfil de Jorge Franco**

- Estudiante de Desarrollo Web Full-Stack + Administración Pública
- Idioma preferido: Español
- Estilo de trabajo: Claridad mental > Velocidad
- Necesita entender el "por qué" antes del "cómo"
- Ver perfil completo: `jorge_profile.md`

### **Stack Tecnológico Decidido**

**Frontend:**

- Next.js 15 + TypeScript + Tailwind CSS
- Hosting: Vercel (GRATIS)
- Dominio: Namecheap (~$12/año)

**Backend (Fase 2):**

- Supabase (database, auth)
- Google Cloud (Gemini API, Workspace)
- n8n (workflow automation)

**Automatización (Fase 2-3):**

- Google Stitch MCP (conecta IA con Workspace)
- GitHub MCP (ya activo)

**Razón de estas decisiones:** Ver `technology_stack_decision.md`

### **Estado Actual: La Nave Operando (2026-02-12)**

**Completado:**

- ✅ **Restauración UI**: Estética _Hamptons / Lujo Patrimonial_ activa (Playfair Display).
- ✅ **Optimización M4 Pro**: Configuración de `next.config.ts` y workflows de Warp.
- ✅ **Navegación**: Reparada la lógica de anclajes en el Header.
- ✅ Hero Section (con WorldViewport)
- ✅ Gallery Section (9 proyectos con filtros + WorldViewport)
- ✅ About Section, Process, Testimonials, Contact Form, Footer.

**En Curso / Pendiente:**

- [ ] **Sincronización Estética**: Refactorizar variantes hardcoded en `Testimonials`.
- [ ] **Fase 2 Genie 3**: Backend Python/FastAPI + API integration.
- [ ] Arreglar botones de navegación restantes.
- [ ] Deploy a Vercel para "enlace completo".
- [ ] Comprar dominio.

**Deuda Técnica:**

- Fotos AI-generated (reemplazar con reales)
- Email integration (Fase 2)
- Solicitar acceso a Genie 3 API (Google Cloud)

### **Decisiones Importantes Tomadas**

1. **Vercel vs Alternativas:**
   - Elegido por: Gratis, fácil, optimizado para Next.js
   - Rechazado: WordPress (lento), AWS (complejo), Shopify (caro)

2. **Google Stitch MCP:**
   - SÍ es funcional para automatización
   - Implementar en Fase 2 (después de MVP)
   - Ahorra 10+ horas/semana

3. **n8n como "Sistema Nervioso":**
   - Conecta todos los servicios
   - Automatiza workflows
   - Self-hosted (gratis) o Cloud ($20/mes)

4. **Filosofía del Proyecto:**
   - "Simple por Fuera, Sofisticado por Dentro"
   - MVP rápido, escalar después
   - Decisiones informadas > Velocidad ciega

5. **Nuevo Enfoque: Genie 3 (Modelos de Mundo)**
   - **Visión:** Transformar de SaaS de restauración → Plataforma de simulación 3D
   - **Diferenciador:** Clientes pueden "ver" restauraciones en 3D interactivo antes de comprar
   - **Tecnología:** Google Genie 3 (streams de video 720p @ 24fps con física real)
   - **Roadmap:** 3 fases (Preparación → Backend → Integración completa)
   - **Ventaja competitiva:** Ningún competidor en restauración tiene simulación física real
   - **Viabilidad:** Ver análisis de negocio en `business_viability_genie3.md`

---

## 📝 Cómo Usar Este Archivo

1. **Pega aquí cualquier información** que encuentres en otros chats, investigaciones, o recursos
2. **Organiza por secciones** usando los headers de abajo
3. **Gemini leerá este archivo** cada vez que lo necesite para entender el contexto
4. **No borres nada**, solo agrega - así mantenemos historial

---

## 🔬 Investigaciones Pendientes

### NotebookLM

<!-- Pega aquí información sobre cómo usar NotebookLM para investigaciones del proyecto -->

https://youtu.be/j5aiRhzV5fs?si=8OiZVi-CgbSkT6LL

https://youtu.be/QgD2q6qecOE?si=OVSmE3ZhI54c3Kkq

https://youtu.be/cwQRXHM992o?si=15kZV-uD76sw4A9W

**Ejemplo de uso**:

- Subir documentación del proyecto que sea relevante para el negocio
- Generar resúmenes automáticos
- Crear guías de estudio y aplicación de las nuevas tecnologías
- etc.

---

## 🎥 Videos de YouTube - Novedades y Aplicaciones en el Proyecto

https://youtu.be/7wa4Ey_tCCE?si=pEKbHAOfD-w30It5

https://youtu.be/0f16AGjOnV0?si=e5CC70hkwIy8GeDQ

https://youtu.be/f9hS0X5mp2o?si=26xPp-MlN_9VoppE

https://youtu.be/f6ALznUz0mY?si=_kSgg_TnIEv-lLLy

https://youtu.be/l7ll5zTLHso?si=cSSkFr7qNL3qI3MM

https://youtu.be/GwFRGA2YH7o?si=YyfYXFXyenZCWx6d

Título: "Nueva feature de CSS Grid 2024"
Link: https://youtube.com/...
Notas clave:

- Feature X permite...
- Aplicación en Renova-Hub: ...

```

---

## 💡 Ideas de Otros Chats

### Chat con Gemini sobre [Tema]

<!-- Pega conversaciones relevantes de otros chats -->

**Fecha**:
**Tema**:
**Contenido**:

```

[Pega aquí la conversación o las partes importantes]

```

---

## 📚 Recursos y Referencias

### Artículos

<!-- Links y resúmenes de artículos importantes -->

### Documentación

<!-- Links a docs oficiales que quieras que Gemini conozca -->

### Herramientas

<!-- Herramientas nuevas que quieras explorar -->

---

## 🎯 Aplicaciones al Proyecto

### Para Implementar

<!-- Lista de cosas que quieres aplicar basadas en tus investigaciones -->

- [ ] Ejemplo: Usar CSS Container Queries para componentes
- [ ] Ejemplo: Integrar NotebookLM para documentación
- [ ] etc.

---

## 📌 Notas Importantes

<!-- Cualquier nota que no encaje en las categorías anteriores -->

---

**Última actualización**: 2026-02-09

---

## 🤖 Para Gemini

Cuando Jorge actualice este archivo:

1. Lee TODO el contenido antes de responder
2. Aplica las mejores prácticas mencionadas aquí
3. Pregunta si algo no está claro
4. Sugiere cómo implementar las ideas en Renova-Hub
5. **SIEMPRE consulta `jorge_profile.md` para entender su estilo de trabajo**
6. **SIEMPRE consulta `technology_stack_decision.md` para decisiones técnicas**
```

Actualizacion: 2026-02-08

surgerencia de chat con jorge

### 🎨 Paleta de "Lujo Patrimonial" (Tailwind Config)

Basado en la arquitectura de **"Cerebro, Nervios y Memoria"**, he diseñado esta paleta que comunica seguridad y sofisticación:

| Nivel                        | Propósito                       | Clase Tailwind (Sugerida)      | Hex       |
| ---------------------------- | ------------------------------- | ------------------------------ | --------- |
| **Primario (The Void)**      | Fondo principal del ecosistema. | `bg-[#020617]` (Slate 950)     | `#020617` |
| **Secundario (The Vault)**   | Superficies de datos y cards.   | `bg-[#0f172a]` (Slate 900)     | `#0f172a` |
| **Acento 1 (Wealth Growth)** | Éxito financiero y activos.     | `text-[#10b981]` (Emerald 500) | `#10b981` |
| **Acento 2 (Neural Logic)**  | Conexiones de n8n e IA.         | `text-[#818cf8]` (Indigo 400)  | `#818cf8` |
| **Alerta (Audit Risk)**      | Críticas o deudas pendientes.   | `text-[#ef4444]` (Red 500)     | `#ef4444` |

### 📐 Patrones de Diseño (The Master Plan)

He definido tres patrones clave para la landing page que transformarán un servicio de pintura en una **infraestructura de valor**:

1.  **Bento Grid de Trazabilidad:** En lugar de una galería de fotos común, usaremos una rejilla tipo Bento donde cada celda muestra un "Nodo de Verdad": una foto de alta resolución, un código de color HEX real usado, y un sello de "Inmutable en Blockchain/Supabase".

2.  **Typography of Authority:**

- **Titulares:** `font-sans` (Inter/Geist) con `tracking-tight` para un look moderno de Silicon Valley.
- **Datos:** `font-mono` (JetBrains Mono) para IDs de proyectos y cálculos presupuestarios. El cliente debe sentir que está viendo el "código fuente" de su casa.

3. **Micro-interacciones de "Pulso Digital":** Elementos con un sutil resplandor (`glow`) en los bordes de los botones de acción para simular el "Sistema Nervioso" activo (n8n).

### ⚙️ Acción Inmediata: El "Happy Path" Financiero

Para mover el piloto hacia la facturación real y atacar la deuda de **$6,000 USD**:

1. **En el Frontend (`/apps/web`):** Crearé un componente `ValueProp.tsx` que no venda "pintura", sino "valorización patrimonial garantizada por datos".
2. **En la Memoria (`Supabase`):** He verificado que debemos estructurar la tabla `organizations` para que cada cliente de _Water Color Painting_ vea su propio portal bajo políticas de **RLS (Row Level Security)** estrictas.

**Franco, ¿procedo a generar el código base del archivo `tailwind.config.ts` y la estructura de la landing page en tu directorio local ahora mismo?**

analiza este repositorio y dime como lo podemos usar para el proyecto de renova hub:
https://github.com/darkhouselab08/Usuario-Vertex-Partner-.git

analiza este video: https://youtu.be/wksiOesibKg?si=FEy8dz6HEIuSeV1W

https://notebooklm.google.com/notebook/2807bc4e-b946-4601-8677-b2c7cd39e270

Actulaizacion 2026-02-12

# Contexto de Entorno y Optimización - Mac Pro M4 Pro

para que jorge no tenga problemas con la memoria ram y el rendimiento del equipo.

## 🖥️ Perfil del Hardware

- **Modelo:** Mac Pro / MacBook Pro con Chip Apple M4 Pro.
- **Memoria RAM:** 24 GB (Arquitectura de memoria unificada).
- **Estado Base:** Presión de memoria nominalmente en "Verde", pero con alta carga en procesos de desarrollo (Node.js/Next.js).

## 🛠️ Stack Tecnológico

- **Terminal:** Warp (AI-enabled terminal).
- **IDE:** Antigravity (Entorno de desarrollo principal).
- **Control de Versiones:** GitHub / Git.
- **Entorno de Ejecución:** Node.js, Next.js, Chrome Headless (Puppeteer/Playwright).

## 🎯 Instrucciones para el Agente de IA

Como asistente en este entorno, debes seguir estas reglas de comportamiento para ayudar al usuario a mantener el equilibrio del sistema:

### 1. Monitoreo y Diagnóstico

- **Análisis de Node.js:** Si detectas que el servidor de desarrollo o scripts de Node superan el 100% de CPU por tiempo prolongado, sugiere una revisión de bucles infinitos o fugas de memoria, pero **no mates el proceso** sin preguntar.
- **Gestión de Memoria:** Con 24GB de RAM, el sistema es robusto. No sugieras cerrar aplicaciones a menos que la presión de memoria pase a "Amarillo" o "Rojo".

### 2. Protocolo de Acción (Seguridad Primero)

- **Prohibición de Eliminación:** Nunca sugieras comandos como `rm -rf`, `killall`, o limpieza de caché de forma automática.
- **Confirmación Doble:** Antes de cualquier optimización que afecte procesos del sistema o del `kernel_task`, explica primero la consecuencia técnica.
- **Equilibrio:** Prioriza siempre el flujo de trabajo del desarrollador sobre el ahorro extremo de energía.

### 3. Flujo de Trabajo Recomendado (Workflow)

- **Warp + GitHub:** Sugiere comandos de Git optimizados para Warp (uso de Workflows de Warp para tareas repetitivas).
- **Antigravity:** Utiliza el contexto de este archivo para entender que el usuario prefiere estabilidad y "observabilidad" antes que intervenciones agresivas.

## 📈 Recomendaciones de Rendimiento para M4 Pro

- **Compilación Nativa:** Asegúrate de que todas las dependencias se instalen para arquitectura `arm64` (Apple Silicon) para evitar el uso innecesario de Rosetta 2.
- **Chrome Headless:** Si ves procesos `chrome-headless-shell` acumulados, recuerda al usuario cerrar las instancias de testing al finalizar los scripts.

# 🚀 Estrategias de Potenciación: Stack M4 Pro + Warp + Antigravity

Este documento define las tácticas de alto rendimiento que el agente de IA debe considerar para asistir al usuario.

## 1. Sincronía Antigravity ↔️ Warp (Terminal Inteligente)

El agente debe optimizar la ejecución de comandos para aprovechar las capacidades de Warp:

- **Generación de Workflows:** En lugar de sugerir comandos aislados, el agente debe proponer "bloques de comandos" compatibles con Warp para tareas recurrentes (ej: levantar el entorno, correr tests y limpiar caché en una sola secuencia).
- **Depuración Contextual:** Si el servidor de desarrollo en Warp lanza un error, el agente de Antigravity debe analizar el log para proponer la solución directamente sobre el archivo de configuración afectado.

## 2. Optimización de Recursos para Chip M4 Pro

Dado que contamos con una arquitectura de núcleos de rendimiento (P-cores) y eficiencia (E-cores) avanzada:

- **Indexación Selectiva:** Sugerir al agente que limite la indexación de carpetas pesadas (como `build/` o `dist/`) dentro de Antigravity para mantener el uso de CPU por debajo del 10% en reposo.
- **Detección de "Zombies" de Node:** El agente debe vigilar procesos `node` que queden activos después de cerrar sesiones de terminal en Warp, avisando al usuario antes de que consuman ciclos de CPU innecesarios.
- **Aceleración Metal:** Si el proyecto involucra renderizado o computación pesada, el agente debe priorizar sugerencias de código que utilicen la GPU del M4 mediante frameworks optimizados para Apple Silicon.

## 3. Integración Continua con GitHub (Git-Flow IA)

El agente debe actuar como un revisor previo al commit:

- **Analista de Diff:** Antes de que el usuario haga `push` desde Warp, el agente en Antigravity debe resumir los cambios clave y sugerir mensajes de commit basados en la lógica modificada.
- **Control de Dependencias:** Al detectar cambios en `package.json`, el agente debe alertar sobre posibles vulnerabilidades o versiones obsoletas antes de que lleguen al repositorio de GitHub.

## 4. Gestión de Estado y Prevención de Errores

Para generar confianza y control total:

- **Modo "Check-Before-Action":** Antes de sugerir cualquier cambio en la estructura de archivos, el agente debe presentar un resumen: "Voy a modificar [X], esto afectará a [Y]. ¿Procedo?".
- **Limpieza Segura:** El agente debe tener una rutina de "Mantenimiento de Fin de Jornada" sugerida, donde proponga cerrar procesos `chrome-headless` o servidores `next-server` que ya no se utilicen.

## 5. Recomendación de "Health-Check" Semanal

El agente debe recordar al usuario realizar una revisión breve de:

- **Presión de Memoria:** Verificar que el Swap se mantenga en 0 bytes (ideal para la longevidad del SSD del M4).
- **Acumulación de Logs:** Sugerir la limpieza de archivos `.log` que puedan crecer excesivamente durante el desarrollo intensivo.
