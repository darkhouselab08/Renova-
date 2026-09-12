import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-hamptons-gradient relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Contenedor principal */}
      <div className="relative z-10 container mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge con animación de entrada */}
          <div className="animate-fade-in border-wood-200 mb-8 inline-flex items-center gap-2 rounded-full border bg-white/60 px-6 py-2 shadow-sm backdrop-blur-md">
            <span className="text-xl">✨</span>
            <span className="text-accent text-[10px] font-semibold tracking-[0.2em] uppercase sm:text-xs">
              Servicio Integral del Hogar
            </span>
          </div>

          {/* Título principal con refinamiento tipográfico */}
          <h1 className="animate-slide-up text-accent mb-8 text-5xl leading-[1.1] font-bold tracking-tight transition-all sm:text-7xl lg:text-8xl">
            Cuidamos tu hogar con{" "}
            <span className="text-primary font-serif italic">precisión</span>
          </h1>

          {/* Subtítulo */}
          <p className="animate-slide-up text-accent/80 mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-light [animation-delay:200ms] sm:text-xl">
            Power washing, mantenimiento, limpieza y pintura, ejecutados por socios
            verificados. Un estimador instantáneo y seguimiento transparente de tu
            proyecto, de principio a fin.
          </p>

          {/* CTAs con hover effects mejorados */}
          <div className="animate-slide-up flex flex-col items-center justify-center gap-6 [animation-delay:400ms] sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              className="group min-w-[200px] shadow-xl transition-all hover:scale-105"
            >
              Obtener Estimado
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] transition-all hover:bg-white/50"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Stats refinados con micro-animaciones */}
          <div className="border-wood-200/50 mx-auto mt-24 grid max-w-2xl grid-cols-3 gap-8 border-t pt-12">
            {[
              { value: "4", label: "Servicios del hogar" },
              { value: "100%", label: "Socios verificados" },
              { value: "24h", label: "Respuesta al estimado" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group animate-fade-in text-center"
                style={{ animationDelay: `${600 + i * 100}ms` }}
              >
                <div className="text-accent text-2xl font-light transition-transform group-hover:scale-110 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="text-primary mt-2 text-[9px] tracking-widest uppercase sm:text-[10px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decoración de fondo sutil (Luces de ambiente) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-wood-50 absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full opacity-60 blur-[120px]"></div>
        <div className="bg-wood-200 absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"></div>
      </div>
    </section>
  );
}
