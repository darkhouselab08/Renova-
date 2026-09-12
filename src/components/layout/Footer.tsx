import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8dcc8] bg-[#faf8f5] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="mb-6 block text-2xl font-bold tracking-tighter text-[#4a3a24]"
            >
              RENOVA
            </Link>
            <p className="max-w-sm text-[#6b5435]">
              Plataforma de servicios del hogar: power washing, mantenimiento,
              limpieza y pintura, ejecutados por socios verificados y licenciados
              con transparencia de principio a fin.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-wider text-[#4a3a24] uppercase">
              Empresa
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-[#6b5435] transition-colors hover:text-[#b89968]"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-[#6b5435] transition-colors hover:text-[#b89968]"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-[#6b5435] transition-colors hover:text-[#b89968]"
                >
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-wider text-[#4a3a24] uppercase">
              Contacto
            </h4>
            <ul className="space-y-4 text-[#6b5435]">
              <li>The Hamptons, NY</li>
              <li>hola@renova.house</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e8dcc8] pt-8 text-sm text-[#6b5435] md:flex-row">
          <p>
            © {new Date().getFullYear()} Renova. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-[#b89968]">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-[#b89968]">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
