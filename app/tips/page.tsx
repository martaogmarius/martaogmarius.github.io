import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";

export default function TipsPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="explore section-pad">
        <div className="section-heading">
          <p className="kicker">Før eller etter bryllupet</p>
          <h1 className="page-title">Tips i området</h1>
          <p>Har dere noen ekstra dager i Italia, er disse to vakre småbyene vel verdt turen.</p>
        </div>

        <div className="explore-map">
          <img src="/area-tips-map.jpg" alt="Kart som viser Roma, Firenze, SPAO, Montepulciano og Pienza" />
        </div>
        <p className="map-credit">Kartdata: OpenStreetMap-bidragsytere · Ruter: OSRM</p>

        <div className="explore-grid">
          <article className="explore-card pink">
            <p className="kicker">Toscana</p>
            <h2>Montepulciano</h2>
            <p className="explore-time">Ca. 50 km · omtrent 1 time fra SPAO</p>
            <p>En vakker renessanseby på en høyde, kjent for utsikten, de historiske gatene og Vino Nobile di Montepulciano. Ta turen opp til Piazza Grande og sett av tid til en rolig lunsj eller et besøk i en vinkjeller.</p>
            <div className="explore-actions">
              <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&destination=Montepulciano+Italy&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
              <a className="text-link" href="https://www.visittuscany.com/en/towns-and-villages/montepulciano/" target="_blank" rel="noreferrer">Les mer</a>
            </div>
          </article>

          <article className="explore-card cream">
            <p className="kicker">Val d’Orcia</p>
            <h2>Pienza</h2>
            <p className="explore-time">Ca. 60 km · omtrent 1 t 10 min fra SPAO</p>
            <p>En liten og usedvanlig vakker renessanseby midt i Val d’Orcia. Pienza står på UNESCOs verdensarvliste og byr på sjarmerende gater, vid utsikt over landskapet og områdets berømte pecorino-ost.</p>
            <div className="explore-actions">
              <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&destination=Pienza+Italy&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
              <a className="text-link" href="https://www.pienzawelcome.it/en/" target="_blank" rel="noreferrer">Les mer</a>
            </div>
          </article>
        </div>
        <p className="explore-note">Kjøretidene er omtrentlige. Beregn litt ekstra tid på de mindre veiene.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
