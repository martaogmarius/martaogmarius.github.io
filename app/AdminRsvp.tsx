"use client";

import { FormEvent, useState } from "react";

type Guest = {
  name: string;
  email: string;
  friday: "yes" | "no" | "unsure";
  saturday: "yes" | "no" | "unsure";
  dietary: string;
  note: string;
  updated_at: string;
};

export function AdminRsvp() {
  const [password, setPassword] = useState("");
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function unlock(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/rsvp", {
        headers: { Authorization: `Bearer ${password}` },
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Feil tilgangskode");
      const data = await response.json();
      setGuests(data.guests || []);
      setPassword("");
    } catch {
      setError("Tilgangskoden stemmer ikke.");
    } finally {
      setLoading(false);
    }
  }

  if (guests === null) {
    return (
      <form className="admin-login" onSubmit={unlock}>
        <label htmlFor="admin-password">Privat tilgangskode</label>
        <input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
        <button className="primary-button" disabled={loading}>{loading ? "Åpner …" : "Se svarene"}</button>
        {error && <p className="form-error">{error}</p>}
      </form>
    );
  }

  return (
    <div className="admin-results">
      <div className="admin-summary"><strong>{guests.length}</strong><span>registrerte svar</span></div>
      {guests.length === 0 ? <p className="empty-list">Ingen svar ennå.</p> : guests.map((guest, index) => {
        const attending = guest.friday === "yes" || guest.saturday === "yes";
        return (
          <article className="admin-guest" key={`${guest.email}-${index}`}>
            <div className="admin-guest-head"><h2>{guest.name}</h2><span className={`answer ${attending ? "yes" : "no"}`}>{attending ? "Kommer" : "Kommer ikke"}</span></div>
            <dl>
              <div><dt>E-post</dt><dd>{guest.email}</dd></div>
              <div><dt>Allergier / mathensyn</dt><dd>{guest.dietary || "Ikke oppgitt"}</dd></div>
              <div><dt>Annen informasjon</dt><dd>{guest.note || "Ikke oppgitt"}</dd></div>
            </dl>
          </article>
        );
      })}
      <button className="text-button" onClick={() => setGuests(null)}>Lås oversikten</button>
    </div>
  );
}
