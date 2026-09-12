// Sample projects data for Gallery
// In production, this will come from Supabase (Fase 2 — ver src/types/database.ts)

export interface Project {
  id: string;
  title: string;
  type: string; // Power Washing, Mantenimiento, Limpieza, Pintura
  description: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  duration: string;
  theme: "classic" | "dark" | "hybrid"; // Theme coherence
  color: string; // Acabado / resultado
  featured?: boolean;
}

export const sampleProjects: Project[] = [
  // POWER WASHING
  {
    id: "powerwash-1",
    title: "Fachada Restaurada — Southampton",
    type: "Power Washing",
    description:
      "Limpieza a presión de fachada y entrada, eliminando moho y sedimento acumulado.",
    beforeImage: "/images/gallery/dresser-1-before.jpg",
    afterImage: "/images/gallery/dresser-1-after.jpg",
    technique: "Presión controlada + detergente biodegradable",
    duration: "1 día",
    theme: "dark",
    color: "Fachada clara",
    featured: true,
  },
  {
    id: "powerwash-2",
    title: "Deck y Patio — East Hampton",
    type: "Power Washing",
    description: "Recuperación de madera de deck exterior antes de temporada.",
    beforeImage: "/images/gallery/dresser-1-before.jpg",
    afterImage: "/images/gallery/nightstand-white-after.jpg",
    technique: "Lavado a presión + sellador",
    duration: "1 día",
    theme: "dark",
    color: "Madera natural",
  },

  // MANTENIMIENTO
  {
    id: "mantenimiento-1",
    title: "Revisión Pre-Temporada — Bridgehampton",
    type: "Mantenimiento",
    description: "Chequeo integral de sistemas exteriores antes del verano.",
    beforeImage: "/images/gallery/table-1-before.jpg",
    afterImage: "/images/gallery/desk-natural-after.jpg",
    technique: "Checklist de 20 puntos",
    duration: "Medio día",
    theme: "dark",
    color: "N/A",
  },

  // LIMPIEZA
  {
    id: "limpieza-1",
    title: "Limpieza Profunda de Apertura — Sag Harbor",
    type: "Limpieza",
    description: "Limpieza integral de interior previa a la llegada del cliente.",
    beforeImage: "/images/gallery/dresser-1-before.jpg",
    afterImage: "/images/gallery/nightstand-charcoal-after.jpg",
    technique: "Protocolo de limpieza profunda",
    duration: "1 día",
    theme: "dark",
    color: "N/A",
  },

  // PINTURA
  {
    id: "pintura-1",
    title: "Pintura Exterior — Westhampton",
    type: "Pintura",
    description: "Renovación de pintura exterior con acabado satinado.",
    beforeImage: "/images/gallery/table-1-before.jpg",
    afterImage: "/images/gallery/desk-green-after.jpg",
    technique: "Acabado satinado, 2 manos",
    duration: "3 días",
    theme: "dark",
    color: "Gris paloma",
    featured: true,
  },
];
