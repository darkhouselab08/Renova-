"use client";

import { useState } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  preferredStyle: "classic" | "dark" | "hybrid" | "";
  photos: File[];
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    preferredStyle: "",
    photos: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [photoPreview, setPhotoPreview] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + formData.photos.length > 5) {
      alert("Maximum 5 photos allowed");
      return;
    }

    setFormData((prev) => ({ ...prev, photos: [...prev.photos, ...files] }));

    // Create previews
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
    setPhotoPreview((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Integrate with Resend API in Phase 2
      // For now, just simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        description: "",
        preferredStyle: "",
        photos: [],
      });
      setPhotoPreview([]);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text)",
            }}
          >
            Obtén tu{" "}
            <span style={{ color: "var(--color-primary)" }}>Estimado Gratis</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg opacity-80 md:text-xl"
            style={{ color: "var(--color-text)" }}
          >
            Contanos qué servicio necesitás y te damos un estimado detallado
            en 24 horas.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 shadow-lg"
          style={{
            backgroundColor: "var(--color-background)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {/* Name & Email */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-primary)",
                  color: "var(--color-text)",
                }}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-primary)",
                  color: "var(--color-text)",
                }}
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone & Furniture Type */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-primary)",
                  color: "var(--color-text)",
                }}
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="serviceType"
                className="mb-2 block text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                Servicio *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-primary)",
                  color: "var(--color-text)",
                }}
              >
                <option value="">Seleccioná un servicio...</option>
                <option value="power-washing">Power Washing</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="limpieza">Limpieza</option>
                <option value="pintura">Pintura</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium"
              style={{ color: "var(--color-text)" }}
            >
              Descripción del Proyecto *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-primary)",
                color: "var(--color-text)",
              }}
              placeholder="Contanos sobre tu propiedad y qué te gustaría lograr..."
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-8">
            <label
              className="mb-2 block text-sm font-medium"
              style={{ color: "var(--color-text)" }}
            >
              Subí Fotos (Opcional, máx. 5)
            </label>
            <div
              className="cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-opacity hover:opacity-80"
              style={{ borderColor: "var(--color-primary)" }}
              onClick={() => document.getElementById("photo-upload")?.click()}
            >
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <svg
                className="mx-auto mb-3 h-12 w-12 opacity-60"
                fill="none"
                stroke="var(--color-primary)"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p style={{ color: "var(--color-text)" }} className="opacity-70">
                Click to upload or drag and drop
              </p>
              <p
                style={{ color: "var(--color-text)" }}
                className="mt-1 text-sm opacity-50"
              >
                PNG, JPG up to 10MB each
              </p>
            </div>

            {/* Photo Previews */}
            {photoPreview.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-5">
                {photoPreview.map((preview, index) => (
                  <div key={index} className="group relative">
                    <Image
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      width={100}
                      height={100}
                      className="h-24 w-full rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg py-4 text-lg font-semibold shadow-lg transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-background)",
            }}
          >
            {isSubmitting ? "Enviando..." : "Obtener Estimado Gratis"}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div
              className="mt-4 rounded-lg p-4 text-center"
              style={{ backgroundColor: "#10b981", color: "white" }}
            >
              ✓ ¡Gracias! Te enviaremos tu estimado dentro de 24 horas.
            </div>
          )}
          {submitStatus === "error" && (
            <div
              className="mt-4 rounded-lg p-4 text-center"
              style={{ backgroundColor: "#ef4444", color: "white" }}
            >
              ✗ Algo salió mal. Intentá de nuevo o escribinos directamente.
            </div>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p
            className="mb-2 text-sm opacity-70"
            style={{ color: "var(--color-text)" }}
          >
            Prefer to call or email?
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ color: "var(--color-primary)" }}
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (555) 123-4567
            </a>
            <a
              href="mailto:hola@renova.house"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ color: "var(--color-primary)" }}
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hola@renova.house
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
