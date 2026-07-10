import Link from "next/link";

const MALTA_LINKS = [
  {
    title: "Valletta & Mdina",
    description:
      "The capital's bastions and the silent fortified streets of Malta's former capital — a strong first-time pairing.",
    href: "/valletta-vs-mdina",
  },
  {
    title: "Gozo day trips",
    description:
      "What a Gozo crossing actually needs in port time, and when it is worth the full day.",
    href: "/gozo",
  },
  {
    title: "Blue Grotto — worth it?",
    description:
      "Honest guidance on the sea-cave boat trip, weather cancellations and whether to build a day around it.",
    href: "/blue-grotto",
  },
  {
    title: "Malta Port Guide",
    description:
      "Terminal walking times, taxis, hop-on hop-off pickup points and return-to-ship planning.",
    href: "/port-guide",
  },
  {
    title: "Your Day Ashore",
    description:
      "The essentials cruise passengers should know before exploring Malta — timing, walking and heat.",
    href: "/your-day-ashore",
  },
  {
    title: "Malta Cruise Planner",
    description:
      "Tell us your port hours, party and interests for a tailored Malta plan with editorial reasoning.",
    href: "/cruise-planner",
  },
];

export function MaltaLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Malta planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy and
          curiosity — whether you stay within Valletta&apos;s walls or travel further across the islands.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MALTA_LINKS.map((link) => (
            <Link key={link.title} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/shore-excursions" className="btn-secondary text-sm">
            All Malta shore excursions
          </Link>
        </div>
      </div>
    </section>
  );
}
