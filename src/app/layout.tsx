import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Vianca Canto | Agente Inmobiliaria - Inmobiliaria Gaia Peru",
  description:
    "Agente inmobiliaria con más de 5 años de experiencia. Venta, alquiler y tasación de propiedades en Perú. Seguridad y rentabilidad en tus inversiones.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Vianca Canto | Agente Inmobiliaria",
    description:
      "Seguridad y rentabilidad en tus inversiones inmobiliarias. +15 propiedades vendidas.",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vianca Canto | Agente Inmobiliaria",
    description:
      "Seguridad y rentabilidad en tus inversiones inmobiliarias.",
    images: ["/og.jpg"],
  },
  keywords:
    "agente inmobiliaria, inmobiliaria gaia, vianca canto, propiedades peru, venta inmuebles, alquiler peru, tasación propiedades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || ""} />
      </head>
      <body>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </body>
    </html>
  );
}
