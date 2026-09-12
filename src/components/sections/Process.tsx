"use client";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Pide tu Estimado",
      description:
        "Contanos qué servicio necesitás (power washing, mantenimiento, limpieza o pintura). Te damos un estimado detallado en 24 horas.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Socio Verificado Ejecuta",
      description:
        "Un socio licenciado y asegurado, con el sello Verificado por Renova, hace el trabajo. Seguimiento del proyecto en tiempo real.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Proyecto Cerrado con Transparencia",
      description:
        "Recibís confirmación de entrega y evidencia del trabajo terminado, todo desde el mismo portal.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
            }}
          >
            How It <span style={{ color: "var(--color-primary)" }}>Works</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg opacity-80 md:text-xl"
            style={{ color: "var(--color-text)" }}
          >
            From consultation to delivery, we make furniture refinishing simple
            and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connection Lines (hidden on mobile) */}
          <div
            className="absolute top-24 right-0 left-0 hidden h-0.5 opacity-20 md:block"
            style={{ backgroundColor: "var(--color-primary)" }}
          />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div
                className="rounded-2xl p-8 text-center transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: "var(--color-background)",
                  border: "2px solid var(--color-primary)",
                }}
              >
                {/* Number Badge */}
                <div
                  className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-background)",
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="mb-6 flex justify-center"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className="mb-4 text-2xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="opacity-80"
                  style={{ color: "var(--color-text)" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p
            className="mb-6 text-lg opacity-70"
            style={{ color: "var(--color-text)" }}
          >
            Ready to transform your furniture?
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-background)",
            }}
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
