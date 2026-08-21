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
  metadataBase: new URL("https://momo-house-menu-20260821.devanshumathur22.chatgpt.site"),
  title: "MOMO.HOUSE | Fresh momos, noodles & meal boxes",
  description: "Browse the full momo menu, add food to your order, and send your completed order on WhatsApp.",
  openGraph: {
    title: "MOMO.HOUSE | Big flavour. Little parcels of joy.",
    description: "Fresh momos, noodles, rice boxes, drinks, and simple WhatsApp ordering.",
    url: "https://momo-house-menu-20260821.devanshumathur22.chatgpt.site",
    siteName: "MOMO.HOUSE",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MOMO.HOUSE — Big flavour. Little parcels of joy." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOMO.HOUSE | Big flavour. Little parcels of joy.",
    description: "Fresh momos, noodles, rice boxes, drinks, and simple WhatsApp ordering.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
