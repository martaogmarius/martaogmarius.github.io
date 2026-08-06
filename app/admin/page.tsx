import Link from "next/link";
import { AdminRsvp } from "../AdminRsvp";

export default function AdminPage() {
  return (
    <main className="admin-page">
      <Link className="admin-back" href="/">← Til forsiden</Link>
      <section className="admin-shell">
        <p className="kicker">Kun for Marta og Marius</p>
        <h1 className="page-title">Påmeldinger</h1>
        <p className="admin-intro">Her vises e-post, allergier, mathensyn og annen informasjon som ikke er synlig for gjestene.</p>
        <AdminRsvp />
      </section>
    </main>
  );
}
