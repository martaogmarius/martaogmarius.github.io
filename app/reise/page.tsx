import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";

export default function TravelPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="travel section-pad">
        <div className="section-heading"><p className="kicker">Reise</p><h1 className="page-title">Hvordan komme seg dit?</h1><p>Det enkleste er å fly til Roma eller Firenze og leie bil videre til SPAO. Dere ordner i utgangspunktet transport til stedet selv, og vi anbefaler gjerne samkjøring. Beregn litt ekstra tid ved mye trafikk.</p><p>Dersom mange gjester ankommer eller reiser fra samme flyplass omtrent samtidig, kan det bli aktuelt at vi organiserer felles buss eller lignende. Vi kommer tilbake med mer informasjon dersom dette blir aktuelt.</p><p>SPAO kan formidle kontakt med lokale taxiselskaper o.l. ved behov.</p></div>
        <div className="travel-map"><img src="/travel-map.jpg" alt="Kart som viser kjørerutene fra flyplassene i Roma og Firenze til SPAO i Umbria" /></div>
        <p className="map-credit">Kartdata: OpenStreetMap-bidragsytere · Ruter: OSRM</p>
        <div className="travel-routes">
          <article className="travel-card"><p className="kicker">Alternativ 1</p><h3>Roma Fiumicino</h3><p className="travel-time">Ca. 190 km · ca. 2 t 15 min</p><p>Fly til Roma Fiumicino. Herfra går turen nordover mot Orvieto og videre på landevei til SPAO.</p><a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=Rome+Fiumicino+Airport&destination=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a></article>
          <article className="travel-card"><p className="kicker">Alternativ 2</p><h3>Firenze Peretola</h3><p className="travel-time">Ca. 170 km · ca. 2 timer</p><p>Fly til Firenze Peretola. Kjør sørover gjennom Toscana mot Fabro og videre til SPAO.</p><a className="outline-button" href="https://www.google.com/maps/dir/?api=1&origin=Florence+Airport+Peretola&destination=SPAO+Borgo+San+Pietro+Aquaeortus+Allerona&travelmode=driving" target="_blank" rel="noreferrer">Åpne kjørerute</a></article>
        </div>
        <div className="travel-tip"><span>Reisetips</span><p>Har dere mulighet, kan det være ekstra fint å fly til én flyplass og hjem fra en annen. Da kan dere samtidig oppleve mer av Italia. Tur-retur via Roma vil likevel ofte være rimeligere, siden flyplassen er større og har flere avganger.</p></div>
        <div className="travel-address"><span>Adresse</span><strong>SPAO Borgo San Pietro Aquaeortus</strong><p>Strada Provinciale SP50 km 10+300, 05011 Allerona (TR), Italia</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
