import { wedding } from "./content";

export function SiteFooter() {
  return (
    <footer>
      <p className="footer-mark">Marius & Marta</p>
      <p>Har du spørsmål? Bare ring eller send oss en melding.</p>
      <div className="footer-contacts">
        <a href={`tel:${wedding.contacts.marius}`}>Marius · {wedding.contacts.marius}</a>
        <a href={`tel:${wedding.contacts.marta}`}>Marta · {wedding.contacts.marta}</a>
      </div>
      <div className="footer-links">
        <a href={wedding.instagramUrl} target="_blank" rel="noreferrer">SPAO på Instagram</a>
        <a href={wedding.venueUrl} target="_blank" rel="noreferrer">spao.it</a>
      </div>
    </footer>
  );
}
