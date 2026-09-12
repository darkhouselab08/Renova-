/**
 * Theme Configuration for Renova
 *
 * Identidad Dark Luxury (fuente de verdad: vertex-pather/docs/design/prerenova.html)
 * es el default. Classic/Hybrid se conservan como variantes del selector.
 */

export type ThemeType = "classic" | "dark" | "hybrid";

export interface ThemeConfig {
  name: string;
  description: string;
  colors: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export const themes: Record<ThemeType, ThemeConfig> = {
  classic: {
    name: "Classic Luxury",
    description: "Traditional elegance with warm, inviting tones",
    colors: {
      background: "#fef3c7", // Warm cream
      surface: "#ffffff", // Pure white
      primary: "#d4af37", // Warm gold
      secondary: "#5c4033", // Rich walnut
      text: "#0f172a", // Deep navy
      accent: "#059669", // Forest green
    },
    fonts: {
      heading: "Playfair Display",
      body: "Inter",
    },
  },

  dark: {
    name: "Dark Luxury",
    description: "Identidad Renova: obsidiana, oro y salvia sobre fondo oscuro",
    colors: {
      background: "#0C0B0A",
      surface: "#151310",
      primary: "#C6A96A", // gold
      secondary: "#8FA98C", // sage
      text: "#ECE6DA",
      accent: "#C6A96A",
    },
    fonts: {
      heading: "Fraunces",
      body: "Inter",
    },
  },

  hybrid: {
    name: "Heritage Innovation",
    description: "Timeless craftsmanship meets contemporary design",
    colors: {
      background: "#f8f9fa", // Soft light gray
      surface: "#ffffff", // White
      primary: "#b89968", // Sophisticated gold/wood
      secondary: "#d4c3a3", // Light wood
      text: "#1a1a1a", // Deep slate/black
      accent: "#4a3a24", // Dark wood
    },
    fonts: {
      heading: "Playfair Display",
      body: "Inter",
    },
  },
};

export const DEFAULT_THEME: ThemeType = "dark";
