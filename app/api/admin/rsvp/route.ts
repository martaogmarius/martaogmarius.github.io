import { env } from "cloudflare:workers";

const schemaSql = `CREATE TABLE IF NOT EXISTS rsvps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL DEFAULT '',
  friday TEXT NOT NULL,
  saturday TEXT NOT NULL,
  dietary TEXT NOT NULL DEFAULT '',
  note TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)`;

async function ensureTable(runtime: { DB: D1Database }) {
  await runtime.DB.prepare(schemaSql).run();
  const columns = await runtime.DB.prepare("PRAGMA table_info(rsvps)").all<{ name: string }>();
  if (!columns.results.some((column) => column.name === "phone")) {
    await runtime.DB.prepare("ALTER TABLE rsvps ADD COLUMN phone TEXT NOT NULL DEFAULT ''").run();
  }
}

export async function GET(request: Request) {
  const runtime = env as unknown as { DB: D1Database; ADMIN_PASSWORD?: string };
  const password = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || "";

  if (!runtime.ADMIN_PASSWORD || password !== runtime.ADMIN_PASSWORD) {
    return Response.json({ error: "Ingen tilgang" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  await ensureTable(runtime);
  const result = await runtime.DB.prepare(`SELECT name, email, phone, friday, saturday, dietary, note, updated_at
    FROM rsvps ORDER BY updated_at DESC`).all();

  return Response.json({ guests: result.results }, { headers: { "Cache-Control": "no-store" } });
}

export async function DELETE(request: Request) {
  const runtime = env as unknown as { DB: D1Database; ADMIN_PASSWORD?: string };
  const password = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || "";

  if (!runtime.ADMIN_PASSWORD || password !== runtime.ADMIN_PASSWORD) {
    return Response.json({ error: "Ingen tilgang" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  const body = await request.json() as { names?: string[] };
  const names = Array.isArray(body.names) ? body.names.map((name) => String(name).trim()).filter(Boolean) : [];
  if (names.length === 0) return Response.json({ error: "Ingen navn oppgitt" }, { status: 400 });

  await ensureTable(runtime);
  const placeholders = names.map(() => "?").join(", ");
  const result = await runtime.DB.prepare(`DELETE FROM rsvps WHERE name IN (${placeholders})`).bind(...names).run();

  return Response.json({ ok: true, deleted: result.meta.changes }, { headers: { "Cache-Control": "no-store" } });
}
