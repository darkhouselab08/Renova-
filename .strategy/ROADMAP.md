# 🗺️ Roadmap Maestro - Renova-Hub

> ⚠️ **Documento histórico (pre-pivote, hasta 12-sep-2026):** describe el concepto anterior de restauración de muebles + Genie 3. Renova pivotó a servicios del hogar (power-washing, mantenimiento, limpieza, pintura) — ver ADR-0004 en `docs/decisions/`. Se conserva como referencia, no como doctrina vigente.


**Visión:** Convertirnos en la plataforma líder de restauración de muebles premium mediante simulación física real (Genie 3).

---

## 🚦 Estado Actual: Fase 1.5 - Validación

**Objetivo:** Confirmar que los clientes valoran la simulación interactiva antes de invertir en el backend pesado.

---

## 🗓️ Cronograma de Fases

### ✅ Fase 1: Cimientos Técnicos (Completado)

- [x] Estructura Next.js 15+ y Tailwind 4.
- [x] Tipado de datos para simulaciones 3D.
- [x] Visor interactivo (`WorldViewport`) funcional.
- [x] Sistema de Temas (Heritage, Classic, Dark).

### 📍 Fase 1.5: Validación & Fake Door (ACTUAL)

- [x] Implementación de Modales de captura de leads.
- [x] Sistema de Tracking (Google Analytics).
- [ ] Deploy a Vercel (Producción).
- [ ] Recolección de 10-20 leads interesados.
- [ ] Análisis de métricas (CTR en botones de simulación).

### 🔜 Fase 2: Backend & IA (Marzo 2026)

- [ ] Migración a estructura `frontend/` y `backend/`.
- [ ] Integración con Google Cloud Vertex AI.
- [ ] Implementación de streams de video 720p.
- [ ] API en Python/FastAPI para manejo de Genie 3.

### 🚀 Fase 3: Escala & Monetización (Q2 2026)

- [ ] Integración con Stripe para pagos.
- [ ] Dashboard de cliente para seguimiento de proyectos.
- [ ] Optimización de SEO internacional.

---

## 📈 Criterios de Éxito para Fase 1.5

| Métrica              | Objetivo                | Acción si no se cumple        |
| :------------------- | :---------------------- | :---------------------------- |
| **Interés (Clicks)** | > 15% de los visitantes | Pivotar el mensaje del Hero   |
| **Leads (Emails)**   | > 5% de los visitantes  | Simplificar el formulario     |
| **Feedback Directo** | 5 entrevistas positivas | Ajustar la propuesta de valor |

---

_Nota: Este roadmap es flexible y se ajusta según los datos reales del mercado._
