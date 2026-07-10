import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { YourDayAshore } from "@/components/YourDayAshore";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";

const path = "/your-day-ashore";
const description =
  "Everything cruise passengers should know before a day ashore in Malta: realistic timing, walking demands, heat, the Barrakka Lift and a safe return-to-ship buffer.";

export const metadata = buildMetadata({
  title: "Your Day Ashore in Malta",
  description,
  path,
  image: siteImages.port.src,
  imageAlt: siteImages.port.alt,
  keywords: ["Malta cruise day planning", "Malta all-aboard time", "Valletta cruise day"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Your Day Ashore", path },
];

export default function YourDayAshorePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Your Day Ashore in Malta", description, path }),
        ]}
      />
      <PageHero
        image={siteImages.port}
        title="Your Day Ashore in Malta"
        subtitle="Fortress cities, silent streets and 7,000 years of history — planned around the hours your ship actually gives you, not an ambitious wish list."
        compact
      />

      <YourDayAshore />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="prose-body space-y-6">
            <h2 className="section-title text-2xl mb-4">Planning a realistic Malta day</h2>
            <p>
              Malta rewards passengers who plan around their ship&apos;s clock rather than around an
              idealised itinerary. Valletta sits directly above the Grand Harbour cruise terminal, which
              makes it the lowest-risk anchor for almost any port call — start there, then decide how much
              further the day allows you to travel.
            </p>
            <p>
              Mdina and the Three Cities both require a short road or ferry journey, which is easy to
              absorb on a standard or long call but adds real risk on a short one. Gozo is the outlier: a
              road transfer and a ferry crossing consume a meaningful part of any day before sightseeing
              even begins, so treat it as a full-day commitment reserved for calls with a genuine, generous
              buffer.
            </p>
            <p>
              Heat, slopes and steps are the other constant across Malta&apos;s fortress cities. Valletta&apos;s
              climb from the waterfront is real; the Barrakka Lift is the most practical alternative for
              reduced mobility or tired legs. Carry water, use sun protection in the exposed middle of the
              day, and build a café or bakery stop into a hot itinerary rather than pushing through it.
            </p>
            <p>
              Above all, work backwards from your ship&apos;s all-aboard time, not its published departure.
              Malta&apos;s compact size makes everything feel close, which is exactly why it is easy to
              become casual about the final stretch back to the terminal — especially on a day when several
              ships share the harbour.
            </p>
          </div>

          <div className="mt-10 card-accent">
            <h2 className="font-display text-xl font-bold text-gray-900">Want a tailored recommendation?</h2>
            <p className="mt-2 text-sm text-gray-600">
              Tell us your port hours, party and interests and we will suggest a realistic Malta plan with
              editorial reasoning attached.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/cruise-planner" className="btn-primary text-sm">
                Use the Malta Cruise Planner
              </Link>
              <Link href="/port-guide" className="btn-secondary text-sm">
                Read the full Port Guide
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
