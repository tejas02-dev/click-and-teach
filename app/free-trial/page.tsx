"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, CheckCircle2, ClipboardList, Mail, Phone, User } from "lucide-react";
import { Footer } from "@/components/Footer";

const BOARDS = ["CBSE", "HSC"] as const;
const STANDARDS = ["8th", "9th", "10th", "11th", "12th"] as const;
const SUBJECTS = [
  "Science",
  "Maths",
  "Geography",
  "Physics",
  "Chemistry",
  "Biology",
] as const;

type Board = (typeof BOARDS)[number];
type Standard = (typeof STANDARDS)[number];
type Subject = (typeof SUBJECTS)[number];

type FormState = {
  ownerName: string;
  ownerEmail: string;
  ownerContact: string;
  instituteName: string;
  instituteAddress: string;
  instituteEmail: string;
  instituteContact: string;
  classroomsRequired: string;
  teachersRequired: string;
  boards: Board[];
  standards: Standard[];
  subjects: Subject[];
};

const INITIAL: FormState = {
  ownerName: "",
  ownerEmail: "",
  ownerContact: "",
  instituteName: "",
  instituteAddress: "",
  instituteEmail: "",
  instituteContact: "",
  classroomsRequired: "",
  teachersRequired: "",
  boards: [],
  standards: [],
  subjects: [],
};

function toggleInArray<T extends string>(arr: T[], value: T) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon: React.ReactNode;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
        {label}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-primary/30">
        <span className="text-muted-foreground">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
        />
      </div>
    </label>
  );
}

function CheckboxPills<T extends string>({
  label,
  options,
  values,
  onToggle,
}: {
  label: string;
  options: readonly T[];
  values: T[];
  onToggle: (v: T) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = values.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                active
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground hover:bg-secondary",
              ].join(" ")}
              aria-pressed={active}
            >
              {active ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function FreeTrialPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const missing = useMemo(() => {
    const required: (keyof FormState)[] = [
      "ownerName",
      "ownerEmail",
      "ownerContact",
      "instituteName",
      "instituteAddress",
      "instituteEmail",
      "instituteContact",
      "classroomsRequired",
      "teachersRequired",
    ];
    return required.filter((k) => String(form[k]).trim().length === 0);
  }, [form]);

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }
      setSubmitted(true);
      setForm(INITIAL);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-foreground hover:opacity-90"
          >
            <div className="relative h-[80px] w-[180px] ">
              <Image
                src="/click-and-teach-logo.png"
                alt="Click & Teach logo"
                fill
                className="object-contain p-1.5"
                sizes="40px"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary sm:px-5 sm:text-sm"
            >
              Talk to Sales
            </Link>
            <Link
              href="/"
              className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="text-center">
          <p className="mx-auto inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
            101 Days Free Trial
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Completely white-labeled teaching software
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground sm:text-base">
            Fully loaded with 9 types of content for 8th–12th State Board &amp; CBSE. Designed
            exclusively for teachers to improve engagement, clarity &amp; results.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl">
          <div className="border-b border-border/60 px-6 py-5 sm:px-10 sm:py-7">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ClipboardList className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Institute details</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill this once. Our team will activate your trial and contact you.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900">
                <p className="font-semibold">Submitted successfully.</p>
                <p className="mt-1 text-sm text-emerald-800/90">
                  We’ll reach out shortly to set up your 101-day trial.
                </p>
              </div>
            ) : null}

            {error ? (
              <div className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-rose-900">
                <p className="font-semibold">Couldn’t submit</p>
                <p className="mt-1 text-sm text-rose-800/90">{error}</p>
              </div>
            ) : null}

            <form
              className="grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (!submitting && missing.length === 0) submit();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Institute Owner’s Name"
                  value={form.ownerName}
                  onChange={(v) => setForm((s) => ({ ...s, ownerName: v }))}
                  placeholder="Full name"
                  icon={<User className="h-4 w-4" />}
                />
                <Field
                  label="Owner’s Email ID"
                  value={form.ownerEmail}
                  onChange={(v) => setForm((s) => ({ ...s, ownerEmail: v }))}
                  placeholder="name@institute.com"
                  type="email"
                  icon={<Mail className="h-4 w-4" />}
                />
                <Field
                  label="Owner’s Contact Number"
                  value={form.ownerContact}
                  onChange={(v) => setForm((s) => ({ ...s, ownerContact: v }))}
                  placeholder="+91 ..."
                  icon={<Phone className="h-4 w-4" />}
                />
                <Field
                  label="Institute’s Name"
                  value={form.instituteName}
                  onChange={(v) => setForm((s) => ({ ...s, instituteName: v }))}
                  placeholder="Institute name"
                  icon={<Building2 className="h-4 w-4" />}
                />
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                  Institute’s Address
                </span>
                <textarea
                  value={form.instituteAddress}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, instituteAddress: e.target.value }))
                  }
                  placeholder="Full address"
                  className="min-h-[96px] w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-sm shadow-sm outline-none placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Institute Email ID"
                  value={form.instituteEmail}
                  onChange={(v) => setForm((s) => ({ ...s, instituteEmail: v }))}
                  placeholder="contact@institute.com"
                  type="email"
                  icon={<Mail className="h-4 w-4" />}
                />
                <Field
                  label="Institute Contact Number"
                  value={form.instituteContact}
                  onChange={(v) =>
                    setForm((s) => ({ ...s, instituteContact: v }))
                  }
                  placeholder="+91 ..."
                  icon={<Phone className="h-4 w-4" />}
                />
                <Field
                  label="Number of Classrooms Required"
                  value={form.classroomsRequired}
                  onChange={(v) =>
                    setForm((s) => ({ ...s, classroomsRequired: v }))
                  }
                  placeholder="e.g. 10"
                  type="number"
                  icon={<ClipboardList className="h-4 w-4" />}
                />
                <Field
                  label="Number of Teachers Required"
                  value={form.teachersRequired}
                  onChange={(v) =>
                    setForm((s) => ({ ...s, teachersRequired: v }))
                  }
                  placeholder="e.g. 25"
                  type="number"
                  icon={<ClipboardList className="h-4 w-4" />}
                />
              </div>

              <div className="grid gap-6 rounded-2xl border border-border bg-background p-5 sm:p-6">
                <CheckboxPills<Board>
                  label="Boards (tick)"
                  options={BOARDS}
                  values={form.boards}
                  onToggle={(v) =>
                    setForm((s) => ({ ...s, boards: toggleInArray(s.boards, v) }))
                  }
                />
                <CheckboxPills<Standard>
                  label="Standards (tick)"
                  options={STANDARDS}
                  values={form.standards}
                  onToggle={(v) =>
                    setForm((s) => ({
                      ...s,
                      standards: toggleInArray(s.standards, v),
                    }))
                  }
                />
                <CheckboxPills<Subject>
                  label="Subjects (tick)"
                  options={SUBJECTS}
                  values={form.subjects}
                  onToggle={(v) =>
                    setForm((s) => ({
                      ...s,
                      subjects: toggleInArray(s.subjects, v),
                    }))
                  }
                />
              </div>

              <div className="flex flex-col items-stretch justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  {missing.length > 0
                    ? "Please fill all required fields before submitting."
                    : "By submitting, you agree to be contacted for trial activation."}
                </p>
                <button
                  type="submit"
                  disabled={submitting || missing.length > 0}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Get 101 Days Free Trial"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

