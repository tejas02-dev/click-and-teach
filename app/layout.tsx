import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Click & Teach – Digital Teaching Platform for STEM (8th–12th)",
  description:
    "Click & Teach is a complete digital teaching platform for STEM educators (8th–12th) with ready-to-use presentations, diagrams, animations, simulations, and assessments — all organized chapter-wise and accessible in one click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
