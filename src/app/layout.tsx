import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso Facebook Ads para IPTV 2025 — Tráfego Pago | ADS Master Pro",
  description: "Aprenda Facebook Ads e Meta Ads para anunciar IPTV e escalar resultados com tráfego pago. 100 aulas práticas. Acesso vitalício por R$37.",
  keywords: "facebook ads, meta ads, tráfego pago, curso facebook ads, anunciar iptv, tráfego pago iptv, curso tráfego pago",
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
