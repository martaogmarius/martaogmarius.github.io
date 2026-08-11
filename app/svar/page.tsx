import { QrCard } from "../QrCard";
import { RsvpForm } from "../RsvpForm";
import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";
import { wedding } from "../content";

export default function SvarPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="rsvp section-pad">
        <div className="section-heading light">
          <p className="kicker">RSVP</p>
          <h1 className="page-title">Kommer du?</h1>
          <p>Påmeldingen gjelder hele bryllupshelgen fra fredag til søndag. Invitasjonen gjelder kun personene som er navngitt på konvolutten. Oppgi allergier eller mathensyn i skjemaet, så sørger vi for at dette blir tatt hensyn til i menyen.</p>
          <small>Svarfrist: {wedding.rsvpDeadline}</small>
        </div>
        <RsvpForm />
        <div className="rsvp-payment-card">
          <p className="kicker">Betaling</p>
          <p>Overnatting i to netter koster <strong>3 000 NOK per person.</strong></p>
          <p>Beløpet betales til vår konto:</p>
          <p className="bank-account">6032.54.88487</p>
          <p>Påmeldingen er endelig og bindende når betalingen er registrert. Romfordelingen gjøres etter at gjestene har svart og betalt.</p>
        </div>
      </section>
      <section className="qr-section section-pad"><QrCard /></section>
      <SiteFooter />
    </main>
  );
}
