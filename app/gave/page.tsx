import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";

export default function GiftPage() {
  return (
    <main className="subpage">
      <SiteNav />
      <section className="gift-page section-pad">
        <div className="gift-page-inner">
          <img className="gift-illustration" src="/gift-illustration.png" alt="Illustrasjon av en gave" width="400" height="400" />
          <h1 className="page-title">Gave? Nei takk.</h1>
          <p>Det viktigste for oss er at dere kommer og feirer sammen med oss!</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
