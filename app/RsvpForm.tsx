"use client";

import { FormEvent, useState } from "react";

type Attendance = "yes" | "no" | "unsure";

export function RsvpForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedForm = event.currentTarget;
    setStatus("sending");
    const form = new FormData(submittedForm);
    const weekend = String(form.get("weekend") || "") as Attendance;
    const body = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      friday: weekend,
      saturday: weekend,
      dietary: String(form.get("dietary") || ""),
      note: String(form.get("note") || ""),
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error("Kunne ikke sende");
      setStatus("success");
      submittedForm.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="success" role="status">
        <h3>Tusen takk!</h3>
        <p>Svaret ditt er registrert. Vi gleder oss til å feire sammen.</p>
        <button className="text-button" onClick={() => setStatus("idle")}>Endre svaret</button>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={submit}>
      <div className="field full">
        <label htmlFor="name">Navn på gjest(er)</label>
        <input id="name" name="name" autoComplete="name" required placeholder="Skriv fullt navn" />
      </div>
      <div className="field full">
        <label htmlFor="email">E-post</label>
        <input id="email" name="email" type="email" autoComplete="email" required placeholder="navn@eksempel.no" />
      </div>
      <AttendanceField name="weekend" title="Kommer du?" />
      <div className="field full">
        <label htmlFor="dietary">Allergier eller mathensyn</label>
        <input id="dietary" name="dietary" placeholder="La stå tomt hvis ingen" />
      </div>
      <div className="field full">
        <label htmlFor="note">Noe annet vi bør vite?</label>
        <textarea id="note" name="note" rows={3} placeholder="Skriv gjerne en liten hilsen" />
      </div>
      <button className="submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sender …" : "Send svar"}
      </button>
      {status === "error" && <p className="form-error" role="alert">Noe gikk galt. Prøv igjen om et øyeblikk.</p>}
    </form>
  );
}

function AttendanceField({ name, title }: { name: string; title: string }) {
  return (
    <fieldset className="attendance full">
      <legend>{title}</legend>
      <div className="choice-row">
        {[['yes', 'Kommer'], ['no', 'Kommer ikke']].map(([value, label]) => (
          <label className="choice" key={value}>
            <input type="radio" name={name} value={value} required />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
