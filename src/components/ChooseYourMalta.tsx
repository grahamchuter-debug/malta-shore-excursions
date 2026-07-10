import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "valletta-mdina",
    title: "Valletta & Mdina",
    tagline:
      "Baroque bastions, cathedral squares and the silent fortified streets of Malta's former capital.",
    highlights: [
      "Grand Harbour views from the Upper Barrakka Gardens",
      "St John's Co-Cathedral and Valletta's grid streets",
      "Mdina's walled, largely car-free old city",
      "The natural first choice for a first-time call",
    ],
    cta: "Plan Valletta & Mdina",
    href: "/valletta-vs-mdina",
    imageKey: "valletta",
    wide: true,
  },
  {
    slug: "three-cities",
    title: "The Three Cities",
    tagline:
      "Vittoriosa, Senglea and Cospicua — fortifications across the water that most passengers never reach.",
    highlights: [
      "Quieter streets than central Valletta",
      "Knights-era architecture and harbour creeks",
      "A short crossing from the capital",
      "Rewards visitors who enjoy fewer crowds",
    ],
    cta: "Discover the Three Cities",
    href: "/three-cities",
    imageKey: "three-cities",
    wide: true,
  },
  {
    slug: "gozo",
    title: "Gozo",
    tagline: "A rural, slower-paced sister island with the Citadel above Victoria and dramatic coastline.",
    highlights: [
      "The Citadel and Victoria's old town",
      "Rugged cliffs and quieter countryside",
      "Needs a full, well-timed day",
      "Best on longer calls with a reliable transfer",
    ],
    cta: "Plan a Gozo day",
    href: "/gozo",
    imageKey: "gozo",
    wide: false,
  },
  {
    slug: "blue-grotto",
    title: "Blue Grotto",
    tagline: "Limestone sea caves and clear water on Malta's south coast — an optional boat trip, not a must.",
    highlights: [
      "Short boat rides, sea and weather dependent",
      "Best combined with nearby countryside stops",
      "Not essential on a short or first-time call",
      "Confirm sailing conditions on the day",
    ],
    cta: "Consider the Blue Grotto",
    href: "/blue-grotto",
    imageKey: "blue-grotto",
    wide: false,
  },
  {
    slug: "hop-on-hop-off",
    title: "Hop-On Hop-Off",
    tagline: "Flexible open-top routes around the island for passengers who want to set their own pace.",
    highlights: [
      "Useful for covering distance independently",
      "Requires careful return-stop planning",
      "Works well combined with a walking stop",
      "A lower-cost alternative to a private tour",
    ],
    cta: "Plan a hop-on hop-off day",
    href: "/your-day-ashore",
    imageKey: "harbour",
    wide: false,
  },
  {
    slug: "independent",
    title: "Independent Valletta",
    tagline: "Walk the capital's fortified streets at your own pace, from the cruise terminal to the bastions.",
    highlights: [
      "Compact, walkable historic core",
      "No coach timetable to work around",
      "Ideal for shorter or uncertain port calls",
      "Pair with our port guide for terminal timing",
    ],
    cta: "Explore independently",
    href: "/malta-without-an-excursion",
    imageKey: "walking",
    wide: false,
  },
] as const;

export function ChooseYourMalta() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Malta</p>
        <h2 className="section-title mt-2 max-w-3xl">
          How would you like to experience Malta?
        </h2>
        <p className="section-subtitle">
          From Valletta&apos;s fortified capital to Gozo&apos;s quieter countryside, choose the route that
          fits your interests, mobility and the time your ship actually gives you ashore.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages.valletta;
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
