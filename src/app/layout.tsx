import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Renova Home Services",
  description:
    "Renova — Winter-Ready para tu casa en los Hamptons: power-wash y sellado de decks, patios y piedra antes de la primera helada. Estimado al instante. Reserva por WhatsApp.",
  keywords: [
    "power washing",
    "home maintenance",
    "home cleaning",
    "painting",
    "Hamptons home services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
