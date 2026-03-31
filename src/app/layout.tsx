import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import SmoothScroller from "@/components/animations/SmoothScroller";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

/* Display — Cormorant Garamond · Primary Headline */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

/* Structural — Cinzel · Subheadings & Labels */
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
});

/* Body — Jost · Body & Supporting Copy */
const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "ShoP. | Luxury Shopping Concierge",
  description: "Global luxury shopping concierge. Authentic products sourced from boutiques worldwide, accompanied by real store receipts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${cormorant.variable} ${cinzel.variable} ${jost.variable}`}>
      <body className="min-h-full flex flex-col bg-[#FAF5EC]" suppressHydrationWarning>
        <SmoothScroller />
        <ScrollProgress />
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
