import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

const PHONE_NUMBERS = [
  { label: "+91 9665014600", href: "tel:+919665014600" },
  { label: "+91 9665014700", href: "tel:+919665014700" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 text-foreground hover:opacity-90">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm">
                CT
              </div>
              <span className="text-lg font-bold tracking-tight">Click &amp; Teach</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Digital teaching platform for STEM educators. Ready-to-use content, one click on your smartboard.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 lg:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Talk to Sales
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <ul className="mt-4 space-y-3">
              {PHONE_NUMBERS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium tabular-nums">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Click &amp; Teach. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-xs font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </footer>
  );
}
