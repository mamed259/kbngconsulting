import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandSymbolDefs } from "@/components/layout/BrandSymbolDefs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KB&G · Industrial Innovation Studio",
    template: "%s | KB&G",
  },
  description:
    "KB&G is an industrial innovation studio building AI solutions for mining, quarrying, and heavy industry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BrandSymbolDefs />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
