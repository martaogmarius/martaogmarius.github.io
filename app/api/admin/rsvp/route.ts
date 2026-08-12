import { env } from "cloudflare:workers";

const schemaSql = `CREATE TABLE IF NOT EXISTS rsvps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  friday TEXT NOT NULL,
  saturday TEXT NOT NULL,
  dietary TEXT NOT NULL DEFAULT '',
  note TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)`;

export async function GET(request: Request) {
  const runtime = env as unknown as { DB: D1Database; ADMIN_PASSWORD?: string };
  const password = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || "";

  if (!runtime.ADMIN_PASSWORD || password !== runtime.ADMIN_PASSWORD) {
    return Response.json({ error: "Ingen tilgang" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  await runtime.DB.prepare(schemaSql).run();
  const result = await runtime.DB.prepare(`SELECT name, email, friday, saturday, dietary, note, updated_at
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

  await runtime.DB.prepare(schemaSql).run();
  const placeholders = names.map(() => "?").join(", ");
  const result = await runtime.DB.prepare(`DELETE FROM rsvps WHERE name IN (${placeholders})`).bind(...names).run();

  return Response.json({ ok: true, deleted: result.meta.changes }, { headers: { "Cache-Control": "no-store" } });
}
