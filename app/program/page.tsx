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
          <p>Dette er foreløpig program for helgen.</p>
        </div>
        <div className="schedule">
          <article className="day-card pink">
            <p className="day-number">25</p><p className="day-name">Fredag · juni</p>
            <div className="day-card-copy"><h3>Pizza & bli kjent</h3><p>Innsjekk fra kl. 14.00. Vi anbefaler at alle ankommer senest kl. 17.00, slik at dere rekker å finne rommet og gjøre dere klare. Vi sparker i gang bryllupshelgen med pizzafest kl. 18.00.</p></div>
            <span>{wedding.fridayTime}</span>
          </article>
          <article className="day-card red">
            <p className="day-number">26</p><p className="day-name">Lørdag · juni</p>
            <div className="day-card-copy">
              <h3>Bryllupsdagen</h3>
              <p>Vielse, middag og fest.</p>
              <p className="day-card-attire"><strong>Antrekk:</strong> sommerlig pent.</p>
            </div>
            <span>{wedding.saturdayTime}</span>
          </article>
          <article className="day-card cream">
            <p className="day-number">27</p><p className="day-name">Søndag · juni</p>
            <div className="day-card-copy"><h3>Avreise</h3><p>Frokost og utsjekk kl. 11.00.</p></div>
            <span>Søndag 27. juni</span>
          </article>
        </div>
        <aside className="toastmasters-card">
          <p className="kicker">Praktisk informasjon</p>
          <h2>Toastmastere</h2>
          <p>Dersom du ønsker å si noen ord under bryllupet, kan du ta kontakt med en av våre toastmastere:</p>
          <p className="toastmasters-contacts">
            <span><strong>Petter Volden</strong> (<a href="tel:+4741562006">415 62 006</a>)</span>
            <span className="toastmasters-or">eller</span>
            <span><strong>Oda Winum Solem</strong> (<a href="tel:+4798068221">980 68 221</a>)</span>
          </p>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
