import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";
import { wedding } from "../content";

export default function PlacePage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="place section-pad">
        <div className="place-photo">
          <img src="/spao-borgo-oversikt.jpg" alt="Oversiktsbilde av SPAO Borgo San Pietro Aquaeortus" />
        </div>
        <div className="place-copy">
          <p className="kicker">Om stedet</p><h1 className="page-title">{wedding.venue}</h1>
          <p>Hele helgen er på SPAO Borgo San Pietro Aquaeortus i Umbria. Her skal vi spise, feire og bo sammen fra fredag til søndag.</p>
          <dl className="practical-info">
            <div><dt>Innsjekk</dt><dd>Fredag kl. 14.00–19.00</dd></div>
            <div><dt>Utsjekk</dt><dd>Søndag før kl. 11.00</dd></div>
            <div><dt>Overnatting</dt><dd>Alle gjestene bor på SPAO fra fredag til søndag. Vi ordner med romfordeling. Dere trenger derfor ikke kontakte SPAO for å bestille overnatting.</dd></div>
            <div><dt>Ved ankomst</dt><dd>Ta med pass eller gyldig legitimasjon. SPAO kan også be om kredittkort som garanti for eventuelle skader.</dd></div>
            <div><dt>Mat og drikke</dt><dd>Medbrakt mat og drikke er ikke tillatt på stedet.</dd></div>
            <div><dt>Kjæledyr</dt><dd>Kjæledyr er ikke tillatt.</dd></div>
            <div><dt>Basseng</dt><dd>Åpent kl. 09.00–19.00.</dd></div>
          </dl>
          <div className="place-links"><a className="outline-button" href={wedding.mapUrl} target="_blank" rel="noreferrer">Kart</a><a className="outline-button" href={wedding.venueUrl} target="_blank" rel="noreferrer">Nettside</a><a className="outline-button" href={wedding.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
