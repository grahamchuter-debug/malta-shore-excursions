import type { Pace } from "./types";

export interface PlannerInput {
  /** Optional explicit hours ashore. If omitted, derived from arrival/departure. */
  hoursAshore?: number;
  arrivalTime?: string;
  departureTime?: string;
  visitType: "first-time" | "repeat";
  pace: Pace;
  interests: string[];
  walkingTolerance: "full" | "some" | "limited";
  travelStyle: "private" | "guided" | "diy";
  adults: number;
  children: number;
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  bestFitType: string;
  duration: string;
  principalExcursion: PlannerLink;
  alternative: PlannerLink;
  returnConsideration: string;
  independentAddOn?: PlannerLink;
  whyThisMatches: string;
}

export const INTEREST_OPTIONS = [
  { id: "history", label: "Knights, fortresses and siege history" },
  { id: "food", label: "Food and local life" },
  { id: "scenery", label: "Coastal scenery and photography" },
  { id: "water", label: "Sea caves, boats and the water" },
  { id: "families", label: "Family-friendly pacing" },
  { id: "independent", label: "Independent, self-guided exploring" },
  { id: "prehistory", label: "Ancient and prehistoric Malta" },
];

export const VISIT_TYPE_OPTIONS = [
  { id: "first-time", label: "First time in Malta" },
  { id: "repeat", label: "I've been to Malta before" },
] as const;

export const WALKING_TOLERANCE_OPTIONS = [
  { id: "full", label: "Full — slopes and steps are fine" },
  { id: "some", label: "Some — I'd rather avoid long climbs" },
  { id: "limited", label: "Limited — flatter routes and lifts preferred" },
] as const;

export const TRAVEL_STYLE_OPTIONS = [
  { id: "guided", label: "Guided shore excursion" },
  { id: "private", label: "Private driver-guide" },
  { id: "diy", label: "Independent, self-guided" },
] as const;

type PlanKey = "short-valletta" | "valletta-mdina" | "three-cities" | "coastal" | "gozo";

interface MaltaDayPlan {
  bestFitType: string;
  duration: string;
  minimumHours: number;
  principalExcursion: PlannerLink;
  alternative: PlannerLink;
  independentAddOn?: PlannerLink;
}

export const MALTA_DAY_PLANS: Record<PlanKey, MaltaDayPlan> = {
  "short-valletta": {
    bestFitType: "Valletta Only — Low-Risk Short Call",
    duration: "2–4 hours",
    minimumHours: 0,
    principalExcursion: {
      label: "Valletta from the Cruise Port",
      href: "/valletta-from-cruise-port",
      why: "Sits directly above the terminal, removing almost all transport risk on a short call.",
    },
    alternative: {
      label: "Malta on a Short Port Call",
      href: "/malta-short-port-call",
      why: "A fuller breakdown of what fits, and what to skip, on limited time.",
    },
    independentAddOn: {
      label: "Malta Food Guide",
      href: "/malta-food-guide",
      why: "A pastizzi stop near Republic Street fits easily even on a tight schedule.",
    },
  },
  "valletta-mdina": {
    bestFitType: "Valletta & Mdina — Classic First-Time Day",
    duration: "6–8 hours",
    minimumHours: 5,
    principalExcursion: {
      label: "Malta in One Day",
      href: "/malta-in-one-day",
      why: "Pairs Valletta's cathedral and harbour views with Mdina's silent, contemplative streets.",
    },
    alternative: {
      label: "Valletta versus Mdina",
      href: "/valletta-vs-mdina",
      why: "Compare the two capitals directly if you would rather focus on one.",
    },
    independentAddOn: {
      label: "Malta Walking Guide",
      href: "/malta-walking-guide",
      why: "Terrain notes so you know what to expect underfoot in both cities.",
    },
  },
  "three-cities": {
    bestFitType: "Valletta & the Three Cities — Knights and Harbour History",
    duration: "6–8 hours",
    minimumHours: 5,
    principalExcursion: {
      label: "The Three Cities",
      href: "/three-cities",
      why: "Fort St Angelo, the Great Siege of 1565 and the Malta at War Museum, a short ferry ride from Valletta.",
    },
    alternative: {
      label: "Best Malta Tours for History",
      href: "/best-malta-tours-for-history",
      why: "Widen the day to Fort St Elmo and the Lascaris War Rooms if the Knights' story appeals.",
    },
    independentAddOn: {
      label: "Malta's War History",
      href: "/malta-war-history",
      why: "Extend the theme with the Lascaris War Rooms or Fort St Elmo before or after the ferry crossing.",
    },
  },
  coastal: {
    bestFitType: "Blue Grotto & Marsaxlokk — Coastal Half-Day",
    duration: "3–5 hours",
    minimumHours: 3,
    principalExcursion: {
      label: "The Blue Grotto",
      href: "/blue-grotto",
      why: "Sea caves and clifftop views, with flat, easy terrain throughout.",
    },
    alternative: {
      label: "Marsaxlokk Fishing Village",
      href: "/marsaxlokk",
      why: "Painted boats, a harbourside market and relaxed seafood dining nearby.",
    },
    independentAddOn: {
      label: "Malta's Prehistoric Temples",
      href: "/malta-prehistoric-temples",
      why: "Ħaġar Qim and Mnajdra sit close to the Blue Grotto if ancient history interests you.",
    },
  },
  gozo: {
    bestFitType: "Gozo — Full-Day Sister Island Crossing",
    duration: "8+ hours",
    minimumHours: 8,
    principalExcursion: {
      label: "Gozo",
      href: "/gozo",
      why: "The Cittadella, Dwejra and a genuinely quieter island, worth the ferry crossing on a long call.",
    },
    alternative: {
      label: "Malta versus Gozo for Cruise Passengers",
      href: "/malta-vs-gozo-for-cruise-passengers",
      why: "Confirm honestly whether your hours ashore comfortably cover the crossing both ways.",
    },
  },
};

function usableHours(input: PlannerInput): number {
  if (typeof input.hoursAshore === "number") return input.hoursAshore;
  if (!input.arrivalTime || !input.departureTime) return 6.5;
  const [arrivalHour, arrivalMinute] = input.arrivalTime.split(":").map(Number);
  const [departureHour, departureMinute] = input.departureTime.split(":").map(Number);
  const elapsed = departureHour * 60 + departureMinute - arrivalHour * 60 - arrivalMinute;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;

  if (hours < 4 || input.walkingTolerance === "limited") {
    return "short-valletta";
  }

  if (hours >= 8 && (interests.includes("scenery") || interests.includes("water") || input.visitType === "repeat")) {
    return "gozo";
  }

  if (interests.includes("water") || interests.includes("scenery")) {
    if (hours < 8) return "coastal";
  }

  if (interests.includes("history") && hours >= 5) {
    return "three-cities";
  }

  if (hours >= 5) {
    return "valletta-mdina";
  }

  return "short-valletta";
}

export function generateMaltaPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = MALTA_DAY_PLANS[key];
  const partySize = input.adults + input.children;

  const returnConsideration =
    key === "gozo"
      ? "Gozo requires a road transfer to the ferry terminal and a sea crossing each way. Build in a generous buffer beyond the usual return margin, and reconfirm the last practical crossing time before committing to the full day."
      : key === "three-cities"
        ? "The harbour ferry back to Valletta is short, but allow extra time on multi-ship days when the ferry and waterfront can be busier than usual."
        : key === "coastal"
          ? "The southern coast is a road journey from the cruise terminal. Allow the usual return buffer and check locally whether Blue Grotto boat trips are running before relying on them."
          : "Valletta sits directly above the cruise terminal, so return risk is low. Still, allow extra time on multi-ship days and if you use the Barrakka Lift, which can queue when several ships are in port.";

  const walkingNote =
    input.walkingTolerance === "limited"
      ? " Given your preference for flatter routes, this plan avoids Valletta's steepest climb and leans on level or lift-assisted terrain."
      : input.walkingTolerance === "some"
        ? " With some walking tolerance in mind, this plan avoids the most demanding climbs while still reaching the main sights."
        : " With full walking tolerance, this plan makes the most of everything each destination offers, including any climbs or slopes.";

  const familyNote = input.children > 0 ? " Family pacing has been factored in, favouring easier terrain and shorter museum stops where possible." : "";

  const travelStyleNote =
    input.travelStyle === "private"
      ? " A private driver-guide can adapt this plan's stops and pacing on the day, which suits your preference for flexible, personally paced touring."
      : input.travelStyle === "diy"
        ? " This plan is realistic to attempt independently, though the alternative and add-on links above are worth reading in full before you set out."
        : " A guided shore excursion will run this itinerary, or a close variation of it, with a coordinated return to the ship.";

  const whyThisMatches =
    `Based on roughly ${hours.toFixed(1)} usable hours ashore for ${partySize} guest${partySize === 1 ? "" : "s"}, ` +
    `a ${input.pace.toLowerCase()} pace, and your stated interests, we recommend ${plan.bestFitType.toLowerCase()}.` +
    `${walkingNote}${familyNote}${travelStyleNote}` +
    (hours < plan.minimumHours
      ? ` Note that this is shorter than the ${plan.minimumHours}-hour minimum we would normally recommend for this plan, so consider the short-call alternative if your hours ashore are firm.`
      : "");

  return {
    bestFitType: plan.bestFitType,
    duration: plan.duration,
    principalExcursion: plan.principalExcursion,
    alternative: plan.alternative,
    returnConsideration,
    independentAddOn: plan.independentAddOn,
    whyThisMatches,
  };
}
