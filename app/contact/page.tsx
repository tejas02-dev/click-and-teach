import Link from "next/link";
import { Phone } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact – Click & Teach",
  description: "Get in touch with Click & Teach. Call us for demos and sales.",
};

const PHONE_NUMBERS = [
  { label: "+91 9665014600", href: "tel:+919665014600" },
  { label: "+91 9665014700", href: "tel:+919665014700" },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground hover:opacity-90"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-md sm:h-10 sm:w-10">
              CT
            </div>
            <span className="text-base font-bold tracking-tight sm:text-lg">
              Click &amp; Teach
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary sm:px-5 sm:text-sm"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Contact us
          </h1>
          <p className="mt-3 text-muted-foreground">
            Call us for a demo or to discuss how Click &amp; Teach can help your institute.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {PHONE_NUMBERS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:h-14 sm:w-14">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <span className="text-lg font-semibold text-foreground sm:text-xl">
                {label}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          We typically respond within 1 business day.
        </p>
      </main>

      <Footer />
    </div>
  );
}
