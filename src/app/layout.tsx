import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "2Guys Digital | Enterprise-Grade AI Development Agency",
    template: "%s | 2Guys Digital",
  },
  description:
    "2Guys Digital — Fully AI-driven digital agency of experts. Enterprise AI development, web systems, mobile platforms, and UI/UX.",
  keywords: ["AI development", "enterprise AI", "web agency", "mobile apps", "UI UX design"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://2guysdigital.com",
    siteName: "2Guys Digital",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} font-[family-name:var(--font-space-grotesk)] text-slate-100 antialiased overflow-x-hidden bg-black`}>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
