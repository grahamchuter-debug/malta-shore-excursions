import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourMalta } from "@/components/ChooseYourMalta";
import { SpiritOfMalta } from "@/components/SpiritOfMalta";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { CruisePassengerRatings } from "@/components/CruisePassengerRatings";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, travelGuideSchema, faqSchema } from "@/lib/schema";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { MaltaLinks } from "@/components/MaltaLinks";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { YourDayAshore } from "@/components/YourDayAshore";
import { PlanningLinks } from "@/components/PlanningLinks";
import { SITE } from "@/lib/site";
import { getFeaturedExcursions, getExcursionBySlug } from "@/data/excursions";
import { getComparisonBySlug } from "@/data/comparisons";
import { getHomepageFaqs } from "@/data/homepage";

export const metadata = buildMetadata({
  title: "Malta Shore Excursions | Cruise Port Tours & Planning Guide",
  description:
    "Step ashore into honey-coloured fortresses, ancient cities and remarkable harbour views. Compare Malta shore excursions designed around the time available during your port call.",
  path: "/",
  keywords: [
    "Malta shore excursions",
    "Valletta cruise port",
    "Mdina from Valletta",
    "Gozo day trip",
    "Blue Grotto Malta",
    "Malta cruise planner",
  ],
});

export default function HomePage() {
  const featuredExcursions = getFeaturedExcursions();
  const spotlight = getExcursionBySlug("exclusive-snapshot-of-malta");
  const otherFeatured = featuredExcursions.filter((e) => e.slug !== "exclusive-snapshot-of-malta");
  const comparisonTeaser = getComparisonBySlug("compare-malta-shore-excursions");
  const homepageFaqs = getHomepageFaqs();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          travelGuideSchema({
            title: "Malta Shore Excursions — Islands of Knights and Fortresses",
            description: SITE.description,
            path: "/",
          }),
          faqSchema(homepageFaqs),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      {/* Hero */}
      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100 animate-fade-up">Malta for Cruise Passengers</p>
          <h1 className="home-hero-heading animate-fade-up-delay">Malta Shore Excursions</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Fortress cities, silent streets and 7,000 years of history.
          </p>
          <CruiseHeroTrust showEyebrow={false} />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base animate-fade-up-delay">
            Step ashore into a landscape of honey-coloured fortresses, ancient cities and remarkable harbour
            views. Compare Malta shore excursions designed around the time available during your port call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Malta Excursions
            </Link>
            <Link
              href="/your-day-ashore"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Plan Your Day Ashore
            </Link>
          </div>
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-white/65 sm:text-sm animate-fade-up-delay-2">
            Cruise ships normally dock beside Valletta, placing one of Europe&apos;s most distinctive capitals
            close to the port. Exact berths can vary — check your ship&apos;s published arrangements.
          </p>
        </div>
      </section>

      <YourDayAshore />
      <ChooseYourMalta />
      <SpiritOfMalta />
      <EditorsCollection />
      <HonestAdvice />

      {/* Featured excursions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Carefully selected</p>
          <h2 className="section-title mt-2">Featured Malta shore excursions</h2>
          <p className="section-subtitle">
            Our Editor&apos;s Choice and a small set of other standout excursions, chosen against the criteria
            in our methodology — not the highest commission.
          </p>

          {spotlight && (
            <div className="mt-10 grid gap-0 overflow-hidden rounded-2xl border border-coastal-100 shadow-lg lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <ResponsiveImage
                  image={getExcursionImage(spotlight.slug)}
                  role="card"
                  imgClassName="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 badge-editors-choice">{spotlight.editorialBadge}</span>
              </div>
              <div className="flex flex-col justify-center bg-coastal-50 p-8 sm:p-10">
                <h3 className="font-display text-2xl font-bold text-gray-900">{spotlight.title}</h3>
                <p className="mt-2 text-gray-700">{spotlight.tagline}</p>
                {spotlight.whyRecommend && (
                  <p className="mt-4 text-sm italic text-gray-600">{spotlight.whyRecommend}</p>
                )}
                <p className="mt-4 text-xs font-medium text-coastal-700">
                  {spotlight.duration} · {spotlight.pace}
                </p>
                <Link href={`/shore-excursions/${spotlight.slug}`} className="btn-primary mt-6 self-start">
                  View Excursion Details
                </Link>
              </div>
            </div>
          )}

          {otherFeatured.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherFeatured.map((e) => (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group flex overflow-hidden">
                  <div className="relative aspect-[4/3] w-2/5 shrink-0 overflow-hidden">
                    <ResponsiveImage
                      image={getExcursionImage(e.slug)}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    {e.editorialBadge && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-maple-600">{e.editorialBadge}</span>
                    )}
                    <h3 className="mt-1 font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
                      {e.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{e.tagline}</p>
                    <span className="mt-3 text-sm font-semibold text-maple-600">View Excursion Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-secondary text-sm">
              See all Malta shore excursions
            </Link>
          </div>
        </div>
      </section>

      <CruisePassengerRatings />

      {/* Comparison teaser */}
      {comparisonTeaser && (
        <section className="section-padding bg-white border-t border-coastal-100">
          <div className="container-wide max-w-4xl text-center">
            <p className="section-eyebrow">Not sure which to choose?</p>
            <h2 className="section-title mt-2">{comparisonTeaser.title}</h2>
            <p className="section-subtitle mx-auto">{comparisonTeaser.summary}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href={`/${comparisonTeaser.slug}`} className="btn-primary text-sm">
                Compare Malta shore excursions
              </Link>
              <Link href="/compare" className="btn-secondary text-sm">
                See all comparisons
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Planning hub */}
      <section className="section-padding bg-coastal-50/60">
        <div className="container-wide">
          <p className="section-eyebrow">Plan your day ashore</p>
          <h2 className="section-title mt-2">Everything you need to choose the right Malta experience</h2>
          <p className="section-subtitle">
            Not just an excursion catalogue — comparisons, guides and honest cruise-day planning advice,
            because the best bookings start with genuine understanding.
          </p>
          <div className="mt-10">
            <PlanningLinks />
          </div>
        </div>
      </section>

      <MaltaLinks />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <p className="section-eyebrow mb-6">Before you go</p>
          <FAQSection faqs={homepageFaqs} title="Malta cruise passenger FAQs" />
          <div className="mt-8">
            <Link href="/faq" className="btn-secondary text-sm">
              Read all Malta FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
