import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";
import { wedding } from "../content";

export default function ProgramPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="weekend section-pad">
        <div className="section-heading">
          <p className="kicker">Program</p>
          <h1 className="page-title">Bryllupshelgen</h1>
          <p>Dette er planen så langt. Klokkeslett for bryllupsdagen kommer senere.</p>
        </div>
        <div className="schedule">
          <article className="day-card pink"><p className="day-number">25</p><p className="day-name">Fredag · juni</p><h3>Pizza & bli kjent</h3><p>Vi starter kl. 18.00. Sjekk inn og kom gjerne i god tid før vi samles til pizza og en hyggelig kveld sammen.</p><span>{wedding.fridayTime}</span></article>
          <article className="day-card red"><p className="day-number">26</p><p className="day-name">Lørdag · juni</p><h3>Bryllupsdagen</h3><p>Vielse, middag og fest. Antrekk: sommerlig pent. Ved regn flyttes feiringen inn.</p><span>{wedding.saturdayTime}</span></article>
          <article className="day-card cream"><p className="day-number">27</p><p className="day-name">Søndag · juni</p><h3>Frokost & avreise</h3><p>Søndagen består av frokost og utsjekk. Morgenfugler kan ta et siste bad fra kl. 09.00 før hjemreisen.</p><span>Utsjekk før kl. 11.00</span></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
