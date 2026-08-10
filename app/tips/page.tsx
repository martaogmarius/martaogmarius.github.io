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
          <p>Har dere noen ekstra dager i Italia, er disse stedene vel verdt turen.</p>
        </div>

        <div className="explore-map">
          <img src="/area-tips-map.jpg" alt="Nærkart som viser Pienza og Montepulciano i forhold til SPAO" />
        </div>
        <p className="map-credit">Omtrentlige plasseringer og kjøreavstander</p>

        <div className="explore-grid">
          <article className="explore-card pink">
            <p className="kicker">Toscana</p>
            <h2>Montepulciano</h2>
            <p className="explore-time">Ca. 50 km · omtrent 1 time fra SPAO</p>
            <p>En fin by oppe på en høyde, kjent for god vin, små gater og flott utsikt. Gå opp til Piazza Grande, spis en rolig lunsj og stikk gjerne innom en vinkjeller.</p>
            <div className="explore-actions">
              <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&destination=Montepulciano+Italy&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
              <a className="text-link" href="https://www.visittuscany.com/en/towns-and-villages/montepulciano/" target="_blank" rel="noreferrer">Les mer</a>
            </div>
          </article>

          <article className="explore-card cream">
            <p className="kicker">Val d’Orcia</p>
            <h2>Pienza</h2>
            <p className="explore-time">Ca. 60 km · omtrent 1 t 10 min fra SPAO</p>
            <p>En liten og veldig koselig by midt i Val d’Orcia. Her får dere fine gater, skikkelig god utsikt og mye pecorino – osten området er kjent for.</p>
            <div className="explore-actions">
              <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&destination=Pienza+Italy&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
              <a className="text-link" href="https://www.pienzawelcome.it/en/" target="_blank" rel="noreferrer">Les mer</a>
            </div>
          </article>

          <article className="explore-card cream">
            <p className="kicker">Umbria</p>
            <h2>Orvieto</h2>
            <p className="explore-time">Ca. 35 km · omtrent 45 min fra SPAO</p>
            <p>En skikkelig fin by å rusle rundt i, med små gater, hyggelige spisesteder og en ganske utrolig katedral. Under byen finnes det også gamle tunneler og rom som kan besøkes med guide.</p>
            <div className="explore-actions">
              <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&destination=Orvieto+Italy&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
              <a className="text-link" href="https://www.umbriatourism.it/en/orvietano" target="_blank" rel="noreferrer">Les mer</a>
            </div>
          </article>

          <article className="explore-card pink">
            <p className="kicker">Toscana</p>
            <h2>San Casciano dei Bagni</h2>
            <p className="explore-time">Ca. 15 km · omtrent 25 min fra SPAO</p>
            <p>En liten og rolig landsby som er kjent for de varme kildene sine. Her kan dere kombinere en tur gjennom byen med et bad i de gamle utendørsbassengene – ta med badetøy.</p>
            <div className="explore-actions">
              <a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&destination=San+Casciano+dei+Bagni+Italy&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a>
              <a className="text-link" href="https://www.visittuscany.com/en/towns-and-villages/san-casciano-dei-bagni/" target="_blank" rel="noreferrer">Les mer</a>
            </div>
          </article>
        </div>
        <p className="explore-note">Kjøretidene er omtrentlige. Beregn litt ekstra tid på de mindre veiene.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
