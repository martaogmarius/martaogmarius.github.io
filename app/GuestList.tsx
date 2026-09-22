"use client";

import { useEffect, useState } from "react";

type Guest = { name: string; friday: "yes" | "no" | "unsure"; saturday: "yes" | "no" | "unsure" };

export function GuestList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rsvp").then((res) => res.json()).then((data) => setGuests(data.guests || [])).finally(() => setLoading(false));
  }, []);

  return (
    <section id="gjester" className="guest-list section-pad">
      <div className="section-heading">
        <p className="kicker">Gjester</p>
        <h2 className="page-title">Hvem kommer?</h2>
        <p>Svar her om du kommer eller ikke. Navnet ditt blir synlig for andre gjester, men ikke resterende informasjon (kontaktinformasjon, allergier osv). Her kan gjestene få innblikk i hvem andre som kommer.</p>
        <p className="guest-rsvp-note">Obs: Dette er ikke RSVP/bindende påmelding</p>
        <a className="primary-button guest-rsvp-button" href="/svar">Svar her</a>
      </div>
      {loading ? <p className="empty-list">Henter svar …</p> : guests.filter((guest) => guest.friday === "yes" || guest.saturday === "yes").length === 0 ? null : (
        <div className="guest-table" role="table" aria-label="Svar fra gjestene">
          <div className="guest-row guest-head" role="row"><span>Navn</span><span>Status</span></div>
          {guests.filter((guest) => guest.friday === "yes" || guest.saturday === "yes").map((guest, index) => (
            <div className="guest-row" role="row" key={`${guest.name}-${index}`}>
              <strong>{guest.name}</strong>
              <span className="answer yes">Kommer</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
