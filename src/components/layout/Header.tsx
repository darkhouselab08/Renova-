"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 py-4 shadow-sm backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-accent text-2xl font-bold tracking-tighter">
            RENOVA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#inicio"
            className="text-accent hover:text-primary text-sm font-medium transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#gallery"
            className="text-accent hover:text-primary text-sm font-medium transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#about"
            className="text-accent hover:text-primary text-sm font-medium transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="#contact"
            className="text-accent hover:text-primary text-sm font-medium transition-colors"
          >
            Contacto
          </Link>
          <Button variant="primary" size="sm">
            Obtener Estimado
          </Button>
        </nav>

        {/* Mobile Toggle (Placeholder for now) */}
        <button className="text-accent p-2 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
