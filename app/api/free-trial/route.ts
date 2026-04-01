import { NextResponse } from "next/server";

type FreeTrialPayload = {
  ownerName: string;
  ownerEmail: string;
  ownerContact: string;
  instituteName: string;
  instituteAddress: string;
  instituteEmail: string;
  instituteContact: string;
  classroomsRequired: string;
  teachersRequired: string;
  boards: string[];
  standards: string[];
  subjects: string[];
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const payload = data as Partial<FreeTrialPayload>;

  const requiredStringFields: (keyof FreeTrialPayload)[] = [
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

  for (const key of requiredStringFields) {
    if (!isNonEmptyString(payload[key])) {
      return NextResponse.json(
        { ok: false, error: `Missing field: ${key}` },
        { status: 400 }
      );
    }
  }

  const boards = Array.isArray(payload.boards) ? payload.boards : [];
  const standards = Array.isArray(payload.standards) ? payload.standards : [];
  const subjects = Array.isArray(payload.subjects) ? payload.subjects : [];

  // Captured server-side (viewable in deployment logs).
  console.log("[free-trial]", {
    ...payload,
    boards,
    standards,
    subjects,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

