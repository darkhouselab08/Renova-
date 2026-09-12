# Renova: Servicios del Hogar en los Hamptons

## Descripción del Proyecto para Usuarios

---

## 🎯 ¿Qué es Renova?

**Renova** es una plataforma de **servicios integrales del hogar** para residencias de alto nivel
en los Hamptons, NY: power-washing, mantenimiento, limpieza y pintura, bajo un solo punto de
contacto.

**En pocas palabras:** conectamos al cliente con compañías socias licenciadas e independientes
para cada oficio. El cliente pide un estimado, un socio verificado hace el trabajo, y Renova da
la transparencia (credenciales verificadas, seguimiento del proyecto) de principio a fin.

---

## 💡 ¿Cómo Funciona?

### **Para el Cliente (Súper Simple):**

1. **💬 Elige un servicio** → Power-Washing, Mantenimiento, Limpieza o Pintura en el estimador
2. **📏 Indica el tamaño** (solo Power-Washing tiene precio instantáneo por tamaño)
3. **💰 Ve el estimado** → Precio al instante, o "estimado gratis in situ" según el servicio
4. **📲 Confirma por WhatsApp** → Un mensaje con los datos ya armado, un clic
5. **✅ El socio verificado ejecuta** → Licenciado, asegurado, con seguimiento transparente

---

## 👥 ¿Para Quién es?

- Propietarios de casas de temporada en los Hamptons (Southampton, Sag Harbor, Sagaponack,
  Bridgehampton, Water Mill, East Hampton, Amagansett, Montauk)
- Quienes necesitan cerrar la propiedad antes del invierno ("Winter-Ready")
- Quienes quieren un solo punto de contacto para varios oficios del hogar

**Por qué nos eligen:**

- ✅ Estimado claro en segundos, sin sorpresas
- ✅ Socios licenciados y asegurados, verificados por Renova
- ✅ Un solo mensaje coordina más de un servicio
- ✅ Respuesta en menos de un día hábil

---

## 🌐 La Tecnología (Simple)

**Lo que ves:** Landing con estimador interactivo y un "magazine" a pantalla completa por cada
servicio (fotos reales, qué incluye, y una cita).

**Lo que hace:** Calcula el estimado, arma el mensaje de WhatsApp con los datos correctos, y
deja al socio o al cliente un canal directo de contacto.

**El futuro (Fase 2+):** el estimador escribe el lead en Supabase (hoy solo abre WhatsApp);
dashboard interno para proyectos/finanzas/agentes; portal de cliente con magic link.

---

## 📊 Estado Actual (12-sep-2026)

### **✅ Completado:**

- Pivote del scaffold heredado ("Renova-Hub", concepto de muebles) al rumbo actual
- Identidad visual **Dark Luxury** (Fraunces, paleta obsidiana/oro/salvia)
- Landing réplica fiel de la maqueta aprobada `prerenova`: hero, estimador, 4 servicios con
  magazine takeover, trends, folio de trabajos, contacto
- Fotos reales conectadas (Power-Washing, Painting, hero, folio) — Maintenance y Cleaning con
  placeholder elegante por ahora
- Estructura de dominio lista: cliente de Supabase, tipos (`Project`, `Finance`,
  `LogisticsMaterial`, `AgentLog`), rutas de dashboard/portal/api
- Equipo de agentes (Gerente + 5 departamentos) para repartir el trabajo técnico

### **🔄 En progreso / próximo:**

- Aprobación de merge del PR #1 (Fundador)
- Fotos reales de Maintenance y Cleaning
- Número real de WhatsApp del negocio
- Conexión real a Supabase (el estimador escribe el lead, no solo abre WhatsApp)
- Deploy a `renova.house` (Vercel)

---

## 🎨 Identidad visual

**Dark Luxury** — obsidiana (`#0C0B0A`), oro (`#C6A96A`), salvia (`#8FA98C`), tipografía Fraunces
(serif) + Inter (sans). Ver `docs/05-design-system.md` para los tokens completos.

---

## 👨‍💼 El Equipo

**Jorge Franco** — Fundador.
**Equipo de agentes IA** — Gerente de proyecto + 5 departamentos (Frontend, Backend/Datos,
Diseño, Seguridad/QA, DevOps). Ver `CLAUDE.md` y `docs/departamentos/`.

---

## 📞 Contacto

**Email:** hello@renova.house
**Ubicación:** The Hamptons, NY

---

**Última actualización:** 12-sep-2026
**Ver también:** `README.md` (mapa técnico), `docs/00-overview.md` (doctrina del negocio).
