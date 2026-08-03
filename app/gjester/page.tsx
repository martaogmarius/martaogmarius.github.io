import { GuestList } from "../GuestList";
import { SiteFooter } from "../SiteFooter";
import { SiteNav } from "../SiteNav";

export default function GuestsPage() {
  return <main className="subpage"><SiteNav /><GuestList /><SiteFooter /></main>;
}
