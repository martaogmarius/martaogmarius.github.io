import { env } from "cloudflare:workers";

const allowed = new Set(["yes", "no", "unsure"]);

async function ensureTable() {
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS rsvps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL DEFAULT '',
    friday TEXT NOT NULL,
    saturday TEXT NOT NULL,
    dietary TEXT NOT NULL DEFAULT '',
    note TEXT NOT NULL DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`).run();
  const columns = await env.DB.prepare("PRAGMA table_info(rsvps)").all<{ name: string }>();
  if (!columns.results.some((column) => column.name === "phone")) {
    await env.DB.prepare("ALTER TABLE rsvps ADD COLUMN phone TEXT NOT NULL DEFAULT ''").run();
  }
}

export async function GET() {
  await ensureTable();
  const result = await env.DB.prepare("SELECT name, friday, saturday FROM rsvps ORDER BY name COLLATE NOCASE").all();
  return Response.json({ guests: result.results });
}

export async function POST(request: Request) {
  const body = await request.json() as Record<string, unknown>;
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();
  const friday = String(body.friday || "");
  const saturday = String(body.saturday || "");

  if (!name || !email.includes("@") || !phone || !allowed.has(friday) || !allowed.has(saturday)) {
    return Response.json({ error: "Ugyldig svar" }, { status: 400 });
  }

  await ensureTable();

  await env.DB.prepare(`INSERT INTO rsvps (name, email, phone, friday, saturday, dietary, note, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(email) DO UPDATE SET
      name = excluded.name,
      phone = excluded.phone,
      friday = excluded.friday,
      saturday = excluded.saturday,
      dietary = excluded.dietary,
      note = excluded.note,
      updated_at = CURRENT_TIMESTAMP`)
    .bind(name, email, phone, friday, saturday, String(body.dietary || "").trim(), String(body.note || "").trim())
    .run();

  return Response.json({ ok: true });
}
