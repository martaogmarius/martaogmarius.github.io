import { QrCard } from "./QrCard";
import { RsvpForm } from "./RsvpForm";
import { GuestList } from "./GuestList";
import { wedding } from "./content";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Hovedmeny">
        <div className="nav-links">
          <a href="#helgen">Program</a>
          <a href="#stedet">Om stedet</a>
          <a href="#reise">Hvordan komme seg dit?</a>
          <a href="#pris">Hva koster det?</a>
          <a href="#gjester">Hvem kommer?</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-copy">
          <img className="wine-glasses" src="/wine-glasses-transparent.png" alt="To hender som skåler med vinglass" />
          <h1 className="save-style"><span>Vi</span><em>gifter</em><span>oss</span></h1>
          <p className="couple-names">Marta og Marius</p>
          <div className="hero-details">
            <div><span>Lørdag</span><strong>26. juni 2027</strong></div>
            <div><span>SPAO Borgo San Pietro Aquaeortus</span><strong>Umbria, Italia</strong></div>
          </div>
          <a className="primary-button" href="#rsvp">Svar her</a>
        </div>
      </header>

      <section className="welcome section-pad">
        <p className="kicker">25.–27. juni</p>
        <h2>Velkommen til Umbria</h2>
        <p className="lead">{wedding.intro}</p>
        <div className="stay-row">
          <div><span>Innsjekk fra</span><strong>{wedding.checkIn}</strong></div>
          <div><span>Utsjekk</span><strong>{wedding.checkOut}</strong></div>
        </div>
      </section>

      <section id="helgen" className="weekend section-pad">
        <div className="section-heading">
          <p className="kicker">Program</p>
          <h2>Bryllupshelgen</h2>
          <p>Dette er planen så langt. Vi fyller inn klokkeslett senere.</p>
        </div>
        <div className="schedule">
          <article className="day-card pink">
            <p className="day-number">25</p><p className="day-name">Fredag · juni</p>
            <h3>Pizza & bli kjent</h3>
            <p>Pizza, vin og en hyggelig kveld sammen før bryllupet.</p>
            <span>{wedding.fridayTime}</span>
          </article>
          <article className="day-card red">
            <p className="day-number">26</p><p className="day-name">Lørdag · juni</p>
            <h3>Bryllupsdagen</h3>
            <p>Vielse, middag og fest.</p>
            <span>{wedding.saturdayTime}</span>
          </article>
          <article className="day-card cream">
            <p className="day-number">27</p><p className="day-name">Søndag · juni</p>
            <h3>Frokost & avreise</h3>
            <p>Frokost og en rolig morgen før utsjekk.</p>
            <span>Utsjekk kl. 12.00</span>
          </article>
        </div>
      </section>

      <section id="stedet" className="place section-pad">
        <div className="place-art" aria-hidden="true"><strong>SPAO<br /><span>Umbria, Italia</span></strong></div>
        <div className="place-copy">
          <p className="kicker">Stedet</p>
          <h2>{wedding.venue}</h2>
          <p>Hele helgen er på SPAO Borgo San Pietro Aquaeortus i Umbria. Her skal vi spise, feire og bo sammen fra fredag til søndag.</p>
          <dl>
            <div><dt>Område</dt><dd>{wedding.place}</dd></div>
            <div><dt>Overnatting</dt><dd>Praktisk informasjon kommer</dd></div>
            <div><dt>Reise</dt><dd>Nærmeste flyplasser og transport kommer</dd></div>
          </dl>
          <div className="place-links">
            <a className="outline-button" href={wedding.mapUrl} target="_blank" rel="noreferrer">Kart</a>
            <a className="outline-button" href={wedding.venueUrl} target="_blank" rel="noreferrer">Nettside</a>
            <a className="outline-button" href={wedding.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      <section id="reise" className="travel section-pad">
        <div className="section-heading">
          <p className="kicker">Reise</p>
          <h2>Hvordan komme seg dit?</h2>
          <p>Det enkleste er å fly til Roma eller Firenze og leie bil videre til SPAO. Beregn litt ekstra tid ved mye trafikk.</p>
        </div>

        <div className="travel-map">
          <img src="/travel-map.jpg" alt="Kart som viser kjørerutene fra flyplassene i Roma og Firenze til SPAO i Umbria" />
        </div>

        <div className="travel-routes">
          <article className="travel-card">
            <p className="kicker">Alternativ 1</p>
            <h3>Roma Fiumicino</h3>
            <p className="travel-time">Ca. 190 km · ca. 2 t 15 min</p>
            <p>Fly til Leonardo da Vinci–Fiumicino. Herfra går turen nordover mot Orvieto og videre på landevei til SPAO.</p>
            <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=Rome+Fiumicino+Airport&destination=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
          </article>
          <article className="travel-card">
            <p className="kicker">Alternativ 2</p>
            <h3>Firenze Peretola</h3>
            <p className="travel-time">Ca. 170 km · ca. 2 timer</p>
            <p>Fly til Amerigo Vespucci–Peretola. Kjør sørover gjennom Toscana mot Fabro og videre til SPAO.</p>
            <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=Florence+Airport+Peretola&destination=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
          </article>
        </div>

        <div className="travel-address">
          <span>Adresse</span>
          <strong>SPAO Borgo San Pietro Aquaeortus</strong>
          <p>Strada Provinciale SP50 km 10+300, 05011 Allerona (TR), Italia</p>
        </div>
      </section>

      <section id="pris" className="costs section-pad">
        <div className="section-heading">
          <p className="kicker">Pris og inkludert</p>
          <h2>Hva koster det?</h2>
        </div>

        <div className="cost-summary">
          <p className="cost-label">Overnatting · 2 netter</p>
          <p className="cost-price">3 000 NOK <span>per person</span></p>
          <p>Beløpet betales til vår konto:</p>
          <p className="bank-account">6032.54.88487</p>
          <p className="binding-note">Endelig og bindende RSVP gjelder når beløpet er innbetalt.</p>
        </div>

        <div className="included-heading">
          <h3>Hva er inkludert?</h3>
          <p>Dette er inkludert i løpet av bryllupshelgen – og hva du eventuelt betaler for selv.</p>
        </div>

        <div className="included-grid">
          <article className="included-card">
            <p className="day-name">Fredag</p>
            <ul>
              <li>Pizza og alkoholfri drikke er inkludert.</li>
              <li>Øl, vin eller annen alkohol denne kvelden kjøpes av den enkelte.</li>
            </ul>
          </article>
          <article className="included-card featured">
            <p className="day-name">Lørdag</p>
            <ul>
              <li>Frokost er inkludert.</li>
              <li>Middag med tilhørende vin, øl og alkoholfrie alternativer er inkludert.</li>
              <li>Mat og drikke utenom bryllupsarrangementet kan kjøpes direkte fra SPAO.</li>
            </ul>
          </article>
          <article className="included-card">
            <p className="day-name">Søndag</p>
            <ul>
              <li>Frokost er inkludert.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="rsvp" className="rsvp section-pad">
        <div className="section-heading light">
          <p className="kicker">RSVP</p>
          <h2>Kommer du?</h2>
          <p>Gi oss svar for både fredag og lørdag. Du kan sende inn på nytt senere dersom planene endrer seg.</p>
          <small>Svarfrist: {wedding.rsvpDeadline}</small>
        </div>
        <RsvpForm />
      </section>

      <GuestList />

      <section className="qr-section section-pad"><QrCard /></section>

      <footer>
        <p className="footer-mark">Marius & Marta</p>
        <p>Har du spørsmål? Bare ring eller send oss en melding.</p>
        <div className="footer-contacts">
          <a href={`tel:${wedding.contacts.marius}`}>Marius · {wedding.contacts.marius}</a>
          <a href={`tel:${wedding.contacts.marta}`}>Marta · {wedding.contacts.marta}</a>
        </div>
        <div className="footer-links">
          <a href={wedding.instagramUrl} target="_blank" rel="noreferrer">SPAO på Instagram</a>
          <a href={wedding.venueUrl} target="_blank" rel="noreferrer">spao.it</a>
        </div>
      </footer>
    </main>
  );
}
