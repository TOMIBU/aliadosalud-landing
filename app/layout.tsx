import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AliadoSalud — Tecnología que ordena la salud",
  description:
    "Ecosistema de soluciones digitales diseñadas para modernizar la gestión médica, quirúrgica y administrativa. AliadoClinico, AliadoQx, AliadoAdmin, AliadoForms.",
  keywords: ["salud", "gestión médica", "quirófano", "tecnología médica", "software médico"],
  openGraph: {
    title: "AliadoSalud — Tecnología que ordena la salud",
    description: "Un ecosistema de soluciones digitales para el sector salud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
