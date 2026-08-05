export function SiteNav({ showHome = true }: { showHome?: boolean }) {
  return (
    <nav className={showHome ? "nav" : "nav nav-main"} aria-label="Hovedmeny">
      {showHome && (
        <a className="nav-home" href="/" aria-label="Til hovedsiden" title="Til hovedsiden">
          ←
        </a>
      )}
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
