import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import SmoothScroller from "@/components/animations/SmoothScroller";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ShopendswithP | Authenticated Luxury Curation",
  description: "Handpicked, verified authentic luxury products. Shop designer bags, accessories, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
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
