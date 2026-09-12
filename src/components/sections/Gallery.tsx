"use client";

import { useState } from "react";
import { sampleProjects } from "@/lib/projects";
import WorldViewport from "@/components/ui/WorldViewport";
import SimulationModal from "./SimulationModal";

type ThemeFilter = "all" | "classic" | "dark" | "hybrid";

export default function Gallery() {
  const [themeFilter, setThemeFilter] = useState<ThemeFilter>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    themeFilter === "all"
      ? sampleProjects
      : sampleProjects.filter((p) => p.theme === themeFilter);

  return (
    <section
      id="gallery"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
            }}
          >
            Nuestros{" "}
            <span style={{ color: "var(--color-primary)" }}>
              Proyectos
            </span>
          </h2>
          <p
            className="mx-auto mb-8 max-w-2xl text-lg opacity-80 md:text-xl"
            style={{ color: "var(--color-text)" }}
          >
            Cada propiedad tiene una historia. Mirá cómo nuestros socios
            transforman fachadas, jardines e interiores.
          </p>

          {/* Theme Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: "all", label: "All Styles" },
              { value: "classic", label: "Classic Luxury" },
              { value: "dark", label: "Dark Luxury" },
              { value: "hybrid", label: "Heritage Innovation" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setThemeFilter(filter.value as ThemeFilter)}
                className={`rounded-full px-6 py-2 font-medium transition-all ${themeFilter === filter.value ? "scale-105 shadow-lg" : "opacity-60 hover:opacity-100"} `}
                style={{
                  backgroundColor:
                    themeFilter === filter.value
                      ? "var(--color-primary)"
                      : "var(--color-surface)",
                  color:
                    themeFilter === filter.value
                      ? "var(--color-background)"
                      : "var(--color-text)",
                  border: `1px solid ${themeFilter === filter.value ? "transparent" : "var(--color-primary)"}`,
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${project.featured ? "md:col-span-2 md:row-span-2" : ""} `}
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              {/* Before/After using WorldViewport (Genie 3 ready) */}
              <WorldViewport
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                alt={project.title}
                onPointerInteraction={(coords) => {
                  console.log(
                    `[Gallery] Interaction on ${project.id}:`,
                    coords
                  );
                  if (coords.action === "click") {
                    setIsModalOpen(true);
                  }
                }}
                showLabels={true}
              />

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-2 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-background)",
                    }}
                  >
                    {project.type}
                  </span>

                  {/* Color Badge */}
                  <span
                    className="rounded-full border px-2 py-1 text-xs font-medium"
                    style={{
                      borderColor: "var(--color-accent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {project.color}
                  </span>

                  <span
                    className="text-xs opacity-60"
                    style={{ color: "var(--color-text)" }}
                  >
                    {project.duration}
                  </span>
                </div>

                <h3
                  className="mb-2 text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-text)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="mb-3 text-sm opacity-70"
                  style={{ color: "var(--color-text)" }}
                >
                  {project.description}
                </p>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {project.technique}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p
              className="text-xl opacity-60"
              style={{ color: "var(--color-text)" }}
            >
              No projects found for this style. Check back soon!
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-background)",
            }}
          >
            Start Your Transformation
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      <SimulationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
