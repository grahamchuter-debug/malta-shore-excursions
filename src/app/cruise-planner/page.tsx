import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { MaltaCruisePlanner } from "@/components/MaltaCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Malta cruise plan. Enter your port times, party size, interests, mobility and budget for tailored Valletta, Mdina and Gozo recommendations.";

export const metadata = buildMetadata({
  title: "Malta Cruise Planner — Port Day Itinerary",
  description,
  path,
  keywords: ["Malta cruise planner", "Malta port day itinerary", "Valletta cruise planner", "Gozo cruise day"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Malta Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Malta Cruise Planner", description, path })]} />
      <PageHero
        title="Malta Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Valletta, Mdina, the Three Cities, Gozo and the Blue Grotto."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <MaltaCruisePlanner />
        </div>
      </section>
    </>
  );
}
