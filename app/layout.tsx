import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            /* Position: br|bl|tr|tl|cr|cl — adjust xOffset/yOffset (px) to nudge from that corner */
            Tawk_API.customStyle = {
              visibility: {
                desktop: { position: 'br', xOffset: '20px', yOffset: '20px' },
                mobile:  { position: 'br', xOffset: '16px', yOffset: '24px' }
              }
            };
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69ad19dde13b5e1c381bf243/1jj63atsm';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
