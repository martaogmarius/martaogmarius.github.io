import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";
import { wedding } from "../content";

export default function PlacePage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="place section-pad">
        <div className="place-photo">
          <img src="/spao-borgo.jpg" alt="Borggården ved SPAO Borgo San Pietro Aquaeortus" />
        </div>
        <div className="place-copy">
          <p className="kicker">Om stedet</p><h1 className="page-title">{wedding.venue}</h1>
          <p>Hele helgen er på SPAO Borgo San Pietro Aquaeortus i Umbria. Her skal vi spise, feire og bo sammen fra fredag til søndag.</p>
          <dl><div><dt>Område</dt><dd>{wedding.place}</dd></div><div><dt>Overnatting</dt><dd>Praktisk informasjon kommer</dd></div><div><dt>Reise</dt><dd>Se egen side for flyplasser og kjøreruter</dd></div></dl>
          <div className="place-links"><a className="outline-button" href={wedding.mapUrl} target="_blank" rel="noreferrer">Kart</a><a className="outline-button" href={wedding.venueUrl} target="_blank" rel="noreferrer">Nettside</a><a className="outline-button" href={wedding.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
