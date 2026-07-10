import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline = "Malta Shore Excursions — Fortress Cities and 7,000 Years of History";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Malta for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a realistic Valletta, Mdina or Gozo day with a proper return buffer built in.",
    href: "/malta-cruise-port",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Malta",
    shortLabel: "First visit",
    description:
      "Compare Valletta and Mdina before choosing the experience that best fits your first day ashore.",
    href: "/valletta-vs-mdina",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Walk straight up from the Grand Harbour into Valletta's cathedral, gardens and fortress streets at your own pace.",
    href: "/malta-without-an-excursion",
    cta: "Explore independently",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Malta plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "malta-essential-highlights",
    title: "Malta's Essential Highlights",
    description: "Valletta's bastions, Mdina's silent streets and the Grand Harbour — Malta's fortress story in one day.",
    href: "/valletta",
    cta: "Explore the highlights",
    imageKey: "valletta",
  },
  {
    slug: "knights-fortresses-war-history",
    title: "Knights, Fortresses and War History",
    description: "The Great Siege of 1565, Fort St Angelo and the Three Cities where the Knights of St John first made their stand.",
    href: "/three-cities",
    cta: "Discover the Knights",
    imageKey: "three-cities",
  },
  {
    slug: "ancient-malta",
    title: "Ancient Malta",
    description: "Free-standing stone temples older than Stonehenge and the pyramids — 7,000 years of history begins here.",
    href: "/malta-prehistoric-temples",
    cta: "Step into prehistory",
    imageKey: "temples",
  },
  {
    slug: "coast-and-harbour",
    title: "Coast and Harbour",
    description: "The luminous sea caves of the Blue Grotto and Malta's undeveloped southern coastline.",
    href: "/blue-grotto",
    cta: "See the coast",
    imageKey: "blue-grotto",
  },
  {
    slug: "food-and-local-life",
    title: "Food and Local Life",
    description: "Pastizzi, fresh seafood and Marsaxlokk's painted fishing boats — Malta by the plate.",
    href: "/malta-food-guide",
    cta: "Taste Malta",
    imageKey: "food",
  },
  {
    slug: "gozo-island-adventures",
    title: "Gozo and Island Adventures",
    description: "A quieter, greener sister island across the channel — worth the crossing on a long day ashore.",
    href: "/gozo",
    cta: "Plan a Gozo day",
    imageKey: "gozo",
  },
];

export const coreSections: HomeSection[] = [
  {
    slug: "best-excursions",
    number: "01",
    title: "Best Malta Shore Excursions",
    description: "Valletta, Mdina, the Three Cities, the coast and Gozo — matched honestly to your port hours.",
    href: "/best-malta-shore-excursions",
    cta: "Browse the guide",
  },
  {
    slug: "cruise-port-guide",
    number: "02",
    title: "Malta Cruise Port Guide",
    description: "The Grand Harbour terminal, the Barrakka Lift, walking routes and sensible return-to-ship planning.",
    href: "/port-guide",
    cta: "Read the port guide",
  },
  {
    slug: "compare",
    number: "03",
    title: "Compare Your Options",
    description: "Valletta or Mdina? Malta or Gozo? Clear comparisons without overselling.",
    href: "/compare-malta-shore-excursions",
    cta: "Compare shore excursions",
  },
  {
    slug: "independent",
    number: "04",
    title: "Explore Independently",
    description: "A walkable Valletta itinerary with transport, food and return-buffer advice.",
    href: "/malta-without-an-excursion",
    cta: "Plan a DIY day",
  },
  {
    slug: "cruise-planner",
    number: "05",
    title: "Malta Cruise Planner",
    description: "Tell us your hours ashore, pace and interests for a tailored, transparent recommendation.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
  {
    slug: "faq",
    number: "06",
    title: "Malta FAQs",
    description: "Honest answers on port access, the Barrakka Lift, Gozo timing and what to see with limited time.",
    href: "/faq",
    cta: "Read the FAQs",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I walk from the Malta cruise port to Valletta?",
      answer:
        "Yes. The Grand Harbour cruise terminal sits directly beneath Valletta's bastion walls. A signed route climbs into the city, and the Barrakka Lift offers an alternative to the steepest part of the walk. Check locally on arrival for current details.",
    },
    {
      question: "Do I need an excursion to see Malta, or can I explore independently?",
      answer:
        "Valletta is easily explored independently since it sits directly above the cruise terminal. Mdina, the Three Cities and the southern coast are straightforward with local transport; Gozo is best coordinated in advance because of the ferry crossing.",
    },
    {
      question: "Should first-time visitors choose Valletta, Mdina or the Three Cities?",
      answer:
        "Valletta gives the most complete standalone day and carries the lowest transport risk. Mdina adds a quieter, contemplative contrast on a longer call, and the Three Cities extend the Knights' story across a short harbour ferry crossing.",
    },
    {
      question: "Is Gozo realistic on a cruise call?",
      answer:
        "Only on a long call with a generous return buffer. The road transfer to the ferry terminal and the sea crossing itself take up a meaningful part of the day before any sightseeing on Gozo begins.",
    },
    {
      question: "How early should I return to the ship in Malta?",
      answer:
        "Work back from your ship's all-aboard time, not its published departure, and allow extra margin on days when several ships share the harbour. Longer excursions to Gozo or the southern coast need a larger buffer than a Valletta-only day.",
    },
    {
      question: "What currency and language should I expect in Malta?",
      answer:
        "Malta uses the euro, and both Maltese and English are official languages, with English widely spoken in shops, restaurants and visitor attractions across the islands.",
    },
  ];
}
