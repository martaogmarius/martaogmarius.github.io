export function SiteNav() {
  return (
    <nav className="nav" aria-label="Hovedmeny">
      <a className="nav-home" href="/">Marta & Marius</a>
      <div className="nav-links">
        <a href="/program">Program</a>
        <a href="/om-stedet">Om stedet</a>
        <a href="/reise">Hvordan komme seg dit?</a>
        <a href="/pris">Hva koster det?</a>
        <a href="/gjester">Hvem kommer?</a>
      </div>
    </nav>
  );
}
