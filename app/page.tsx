import { QrCard } from "./QrCard";
import { RsvpForm } from "./RsvpForm";
import { GuestList } from "./GuestList";
import { wedding } from "./content";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Hovedmeny">
        <div className="nav-links">
          <a href="#helgen">Helgen</a>
          <a href="#stedet">Stedet</a>
          <a className="nav-rsvp" href="#rsvp">Svar her</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-copy">
          <img className="wine-glasses" src="/wine-glasses-transparent.png" alt="To hender som skåler med vinglass" />
          <h1 className="save-style"><span>Vi gifter</span><span>oss</span></h1>
          <p className="couple-names">Marta & Marius</p>
          <p className="date">{wedding.date}</p>
          <p className="venue">{wedding.venue}<br />{wedding.place}</p>
          <a className="primary-button" href="#rsvp">Gi oss svar</a>
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
