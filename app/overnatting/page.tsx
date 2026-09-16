import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";

export default function AccommodationPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="accommodation section-pad">
        <div className="section-heading">
          <h1 className="page-title">Overnatting og RSVP</h1>
          <p>Overnattingen betales av hver gjest. Endelig og bindende RSVP gjelder først når betalingen er gjennomført.</p>
          <p className="gift-note">Vi ønsker oss ingen gaver. Det viktigste for oss er at dere kommer og feirer sammen med oss.</p>
        </div>

        <div className="accommodation-details">
          <section>
            <p className="day-name">Overnatting</p>
            <h2>Alle gjestene bor sammen med oss på SPAO</h2>
            <p>Overnattingen fra fredag til søndag er fordelt på ulike leiligheter med separate soverom, bad og felles oppholdsrom.</p>
            <p>Vi fordeler rommene på forhånd og setter sammen familie og venner der det passer naturlig. Dere trenger derfor ikke kontakte SPAO for å bestille overnatting.</p>
          </section>

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
