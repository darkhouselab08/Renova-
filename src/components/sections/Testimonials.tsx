"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Southampton, NY",
      rating: 5,
      text: "Renova coordinó el power washing y la pintura de mi fachada antes de la temporada. El socio que enviaron fue puntual y el resultado impecable.",
      image: "/images/testimonials/client-1.jpg",
      project: "Power Washing + Pintura",
      style: "classic",
    },
    {
      name: "Michael Chen",
      location: "East Hampton, NY",
      rating: 5,
      text: "Pedí el estimado un lunes y el martes ya tenía el equipo de mantenimiento en casa. Transparencia total en cada paso del proyecto.",
      image: "/images/testimonials/client-2.jpg",
      project: "Mantenimiento pre-temporada",
      style: "dark",
    },
    {
      name: "Emily Rodriguez",
      location: "Bridgehampton, NY",
      rating: 5,
      text: "La limpieza profunda antes de nuestra apertura de temporada fue impecable. Profesionales, puntuales y con excelente comunicación.",
      image: "/images/testimonials/client-3.jpg",
      project: "Limpieza de apertura",
      style: "heritage",
    },
  ];

  // Variantes de estilo alineadas con el ADN de Renova-Hub
  const styleVariants = {
    classic: {
      container:
        "border-2 border-[var(--color-primary)]/30 bg-[var(--color-surface)] shadow-xl",
      text: "text-[var(--color-text)] opacity-90",
      name: "text-[var(--color-accent)] font-bold",
      location: "text-[var(--color-accent)]/60",
      project: "text-[var(--color-primary)] font-medium",
      star: "text-[var(--color-primary)]",
      avatar: "bg-[var(--color-primary)]",
    },
    dark: {
      container:
        "border border-[var(--color-secondary)]/20 bg-[#1a1a1a] shadow-inner",
      text: "text-white/90",
      name: "text-[var(--color-secondary)] font-bold",
      location: "text-white/40",
      project: "text-[var(--color-secondary)]/80",
      star: "text-[var(--color-secondary)]",
      avatar: "bg-[var(--color-secondary)]",
    },
    heritage: {
      container:
        "border-4 border-double border-[var(--color-primary)]/50 bg-[var(--color-background)] shadow-lg",
      text: "text-[var(--color-accent)]",
      name: "text-[var(--color-accent)] font-bold",
      location: "text-[var(--color-accent)]/70",
      project: "text-[var(--color-primary)] italic",
      star: "text-[var(--color-primary)]",
      avatar: "bg-[var(--color-accent)]",
    },
  };

  return (
    <section
      id="testimonials"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-background)" }}
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
            What Our Clients{" "}
            <span style={{ color: "var(--color-primary)" }}>Say</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg opacity-80 md:text-xl"
            style={{ color: "var(--color-text)" }}
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const variant =
              styleVariants[testimonial.style as keyof typeof styleVariants];

            return (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-2xl ${variant.container}`}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${variant.star}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className={`mb-6 text-lg italic opacity-90 ${variant.text}`}>
                  {'"'}
                  {testimonial.text}
                  {'"'}
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ${variant.avatar}`}
                  >
                    <div className="flex h-full w-full items-center justify-center text-xl font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className={variant.name}>{testimonial.name}</div>
                    <div className={`text-sm ${variant.location}`}>
                      {testimonial.location}
                    </div>
                    <div className={`mt-1 text-xs ${variant.project}`}>
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-8 rounded-xl px-8 py-4"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                500+
              </div>
              <div
                className="text-sm opacity-70"
                style={{ color: "var(--color-text)" }}
              >
                Happy Clients
              </div>
            </div>

            <div
              className="h-12 w-px opacity-20"
              style={{ backgroundColor: "var(--color-text)" }}
            />

            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                4.9/5
              </div>
              <div
                className="text-sm opacity-70"
                style={{ color: "var(--color-text)" }}
              >
                Average Rating
              </div>
            </div>

            <div
              className="h-12 w-px opacity-20"
              style={{ backgroundColor: "var(--color-text)" }}
            />

            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                10+
              </div>
              <div
                className="text-sm opacity-70"
                style={{ color: "var(--color-text)" }}
              >
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
