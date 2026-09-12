"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-2xl shadow-2xl"
              style={{ border: "2px solid var(--color-primary)" }}
            >
              <Image
                src="/images/workshop.jpg"
                alt="Equipo Renova en obra"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -right-6 -bottom-6 rounded-xl px-6 py-4 shadow-lg"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-background)",
              }}
            >
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text)",
              }}
            >
              Cuidado del Hogar con{" "}
              <span style={{ color: "var(--color-primary)" }}>Transparencia</span>
            </h2>

            <div
              className="mb-8 space-y-4 text-lg opacity-90"
              style={{ color: "var(--color-text)" }}
            >
              <p>
                Renova conecta a clientes de los Hamptons con compañías socias
                licenciadas e independientes para power washing, mantenimiento,
                limpieza y pintura. Cada socio carga su licencia, seguro y
                permisos antes de trabajar en tu propiedad.
              </p>

              <p>
                Nuestra plataforma agrega la oferta y da visibilidad total del
                proyecto: estimador instantáneo, credenciales verificadas y
                seguimiento en tiempo real, sin sorpresas.
              </p>

              <p>
                Lo que nos distingue es la transparencia. El sello
                &quot;Verificado por Renova&quot; certifica que cada socio
                cumple con lo que promete, antes de que entre a tu propiedad.
              </p>
            </div>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className="mb-1 text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  500+
                </div>
                <div
                  className="text-sm opacity-70"
                  style={{ color: "var(--color-text)" }}
                >
                  Proyectos Completados
                </div>
              </div>

              <div className="text-center">
                <div
                  className="mb-1 text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  98%
                </div>
                <div
                  className="text-sm opacity-70"
                  style={{ color: "var(--color-text)" }}
                >
                  Satisfacción del Cliente
                </div>
              </div>

              <div className="text-center">
                <div
                  className="mb-1 text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  4
                </div>
                <div
                  className="text-sm opacity-70"
                  style={{ color: "var(--color-text)" }}
                >
                  Servicios del Hogar
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#quote"
              className="inline-block rounded-lg px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-background)",
              }}
            >
              Solicitar tu Estimado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
