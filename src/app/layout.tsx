import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso Facebook Ads 2026 — Tráfego Pago | ADS Master Pro",
  description: "Aprenda Facebook Ads e Meta Ads para escalar resultados com tráfego pago. 100 aulas práticas do zero ao avançado. Acesso vitalício por R$37.",
  keywords: "facebook ads, meta ads, tráfego pago, curso facebook ads, curso tráfego pago, anunciar no facebook, curso meta ads 2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='28' font-size='28'>🎯</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
