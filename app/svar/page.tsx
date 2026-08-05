import { QrCard } from "../QrCard";
import { RsvpForm } from "../RsvpForm";
import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";
import { wedding } from "../content";

export default function SvarPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="rsvp section-pad">
        <div className="section-heading light">
          <p className="kicker">RSVP</p>
          <h1 className="page-title">Kommer du?</h1>
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
