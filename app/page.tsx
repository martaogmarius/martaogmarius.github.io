import { QrCard } from "./QrCard";
import { RsvpForm } from "./RsvpForm";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { wedding } from "./content";

export default function Home() {
  return (
    <main>
      <SiteNav />

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

      <section id="rsvp" className="rsvp section-pad">
        <div className="section-heading light">
          <p className="kicker">RSVP</p>
          <h2>Kommer du?</h2>
          <p>Gi oss svar for både fredag og lørdag. Du kan sende inn på nytt senere dersom planene endrer seg.</p>
          <small>Svarfrist: {wedding.rsvpDeadline}</small>
        </div>
        <RsvpForm />
      </section>

      <section className="qr-section section-pad"><QrCard /></section>
      <SiteFooter />
    </main>
  );
}
