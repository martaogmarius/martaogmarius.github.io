import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";

export default function PricePage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="costs section-pad">
        <div className="section-heading">
          <p className="kicker">Pris og inkludert</p>
          <h1 className="page-title">Hva er inkludert?</h1>
          <p>Dette er inkludert i løpet av bryllupshelgen – og hva du eventuelt betaler for selv.</p>
        </div>
        <div className="included-grid">
          <article className="included-card"><p className="day-name">Fredag</p><ul><li>Pizza og alkoholfri drikke er inkludert.</li><li>Øl, vin eller annen alkohol denne kvelden kjøpes av den enkelte.</li></ul></article>
          <article className="included-card featured"><p className="day-name">Lørdag</p><ul><li>Frokost er inkludert.</li><li>Middag med tilhørende vin, øl og alkoholfrie alternativer er inkludert.</li><li>Mat og drikke utenom bryllupsarrangementet kan kjøpes direkte fra SPAO.</li></ul></article>
          <article className="included-card"><p className="day-name">Søndag</p><ul><li>Frokost er inkludert.</li></ul></article>
        </div>
        <p>SPAO har restaurant og bar, hvor dere kan kjøpe mat og drikke gjennom helgen dersom dere ønsker noe utenom de planlagte måltidene.</p>
        <div className="cost-summary">
          <div>
            <p className="cost-label">Praktisk om betaling</p>
            <p className="cost-price">Overnatting i to netter koster <strong>3 000 NOK per person.</strong></p>
          </div>
          <div className="payment-details">
            <p>Kontonummer og betalingsinformasjon finner dere på RSVP-siden.</p>
            <p className="binding-note">Endelig og bindende RSVP gjelder når beløpet er innbetalt.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
