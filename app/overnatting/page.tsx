import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";

export default function AccommodationPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="accommodation section-pad">
        <div className="section-heading">
          <h1 className="page-title">RSVP</h1>
          <p>Endelig og bindende RSVP gjelder først når betalingen for overnatting per person, er gjennomført.</p>
          <p className="rsvp-deadline">Dette må besvares før <strong>1. april 2027</strong>.</p>
        </div>

        <div className="accommodation-details">
          <section>
            <p className="day-name">Pris og betaling</p>
            <h2>3 000 NOK per person</h2>
            <p>Beløpet gjelder overnatting i to netter og betales på forhånd direkte til oss.</p>
            <p>Betales til konto:</p>
            <p className="accommodation-account">6032.54.88487</p>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
