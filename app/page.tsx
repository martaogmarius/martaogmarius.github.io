import { SiteNav } from "./SiteNav";

export default function Home() {
  return (
    <main className="home-page">
      <SiteNav showHome={false} />

      <header id="top" className="hero">
        <div className="hero-copy">
          <img className="wine-glasses" src="/wine-glasses-transparent.png" alt="To hender som skåler med vinglass" />
          <h1 className="save-style"><span>Vi</span><em>gifter</em><span>oss</span></h1>
          <p className="couple-names">Marta og Marius</p>
          <div className="hero-details">
            <div><span>Lørdag</span><strong>26. juni 2027</strong></div>
            <div><span>SPAO Borgo San Pietro Aquaeortus</span><strong>Umbria, Italia</strong></div>
          </div>
          <a className="primary-button" href="/svar">Svar her</a>
        </div>
      </header>
    </main>
  );
}
