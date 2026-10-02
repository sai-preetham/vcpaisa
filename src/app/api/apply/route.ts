import { NextResponse } from "next/server";
import { mkdir, appendFile } from "fs/promises";
import path from "path";

type ApplyBody = {
  name?: string;
  startup?: string;
  website?: string;
  oneLiner?: string;
  email?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  try {
    const u = new URL(value.startsWith("http") ? value : `https://${value}`);
    return Boolean(u.hostname.includes("."));
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: ApplyBody;
  try {
    body = (await request.json()) as ApplyBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const name = (body.name || "").trim();
  const startup = (body.startup || "").trim();
  const website = (body.website || "").trim();
  const oneLiner = (body.oneLiner || "").trim();
  const email = (body.email || "").trim().toLowerCase();

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Name is required." },
      { status: 400 },
    );
  }
  if (startup.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Startup name is required." },
      { status: 400 },
    );
  }
  if (!isValidUrl(website)) {
    return NextResponse.json(
      { ok: false, error: "Valid website is required." },
      { status: 400 },
    );
  }
  if (oneLiner.length < 10 || oneLiner.length > 160) {
    return NextResponse.json(
      { ok: false, error: "One-liner must be 10–160 characters." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Valid email is required." },
      { status: 400 },
    );
  }

  const record = {
    name,
    startup,
    website,
    oneLiner,
    email,
    receivedAt: new Date().toISOString(),
  };

  // Local / durable-enough for v1 on persistent disk; no-op gracefully on
  // read-only serverless if write fails — still return success after log.
  console.log("[vc-paisa apply]", JSON.stringify(record));

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "applications.jsonl"),
      `${JSON.stringify(record)}\n`,
      "utf8",
    );
  } catch (err) {
    console.warn("[vc-paisa apply] could not persist locally:", err);
  }

  return NextResponse.json({
    ok: true,
    message: "Application received.",
  });
}
