"use client";

import { useEffect, useState } from "react";

type Guest = { name: string; friday: "yes" | "no" | "unsure"; saturday: "yes" | "no" | "unsure" };

const labels = { yes: "Kommer", no: "Kommer ikke", unsure: "Usikker" };

export function GuestList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rsvp").then((res) => res.json()).then((data) => setGuests(data.guests || [])).finally(() => setLoading(false));
  }, []);

  return (
    <section className="guest-list section-pad">
      <div className="section-heading">
        <p className="kicker">Gjester</p>
        <h2>Hvem kommer?</h2>
        <p>Her kan alle se hvem som har svart så langt.</p>
      </div>
      {loading ? <p className="empty-list">Henter svar …</p> : guests.length === 0 ? (
        <p className="empty-list">Ingen svar ennå. Bli den første!</p>
      ) : (
        <div className="guest-table" role="table" aria-label="Svar fra gjestene">
          <div className="guest-row guest-head" role="row"><span>Navn</span><span>Fredag</span><span>Lørdag</span></div>
          {guests.map((guest, index) => (
            <div className="guest-row" role="row" key={`${guest.name}-${index}`}>
              <strong>{guest.name}</strong>
              <span className={`answer ${guest.friday}`}>{labels[guest.friday]}</span>
              <span className={`answer ${guest.saturday}`}>{labels[guest.saturday]}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
