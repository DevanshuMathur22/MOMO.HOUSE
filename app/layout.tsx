import type { Metadata } from "next";
import { CartDrawer, CartProvider } from "../components/cart-provider";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://momo-house.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MOMO.HOUSE | Fresh momos, noodles & meal boxes",
  description: "Browse the full momo menu, add food to your order, and send your completed order on WhatsApp.",
  openGraph: {
    title: "MOMO.HOUSE | Big flavour. Little parcels of joy.",
    description: "Fresh momos, noodles, rice boxes, drinks, and simple WhatsApp ordering.",
    url: siteUrl,
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
      <body className="antialiased">
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
