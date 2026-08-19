import type { Metadata } from "next";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bluelite Concept LTD — Recycled PET Materials from Nigeria",
  description:
    "Bluelite Concept LTD supplies recycled PET bottles, PET flakes and processed PET materials through a growing Nigerian collection, aggregation and processing network — for manufacturers and recycling companies worldwide.",
  metadataBase: new URL("https://blueliteconceptltd.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
