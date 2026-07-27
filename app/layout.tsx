import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Автоэлектрик и компьютерная диагностика в Петропавловске",
    description:
      "Автоэлектрик-диагност в Петропавловске: ремонт автоэлектрики, компьютерная диагностика легковых авто, прошивка ЭБУ и выезд по городу.",
    keywords: [
      "автоэлектрик Петропавловск",
      "компьютерная диагностика Петропавловск",
      "автоэлектрик на выезд Петропавловск",
      "ремонт автоэлектрики СКО",
      "диагностика легковых авто Петропавловск",
    ],
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Автоэлектрик Петропавловск",
      description: "Диагностика, ремонт автоэлектрики, прошивка ЭБУ и выезд по городу.",
      locale: "ru_KZ",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Автоэлектрик Петропавловск: диагностика, ремонт, выезд",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Автоэлектрик Петропавловск",
      description: "Диагностика легковых авто, ремонт автоэлектрики и выезд.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
