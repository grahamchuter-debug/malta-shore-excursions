export const cruisePositioning = {
  enabled: true,
  eyebrow: "Malta for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  showDayAshoreSection: true,
  activeVariant: "A" as "A" | "B",
};

export function getCruiseTrustMessage() {
  return cruisePositioning.message;
}

export type DayAshoreIcon =
  | "clock"
  | "route"
  | "walk"
  | "sunrise"
  | "viewpoint"
  | "food";

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  icon: DayAshoreIcon;
}

export const dayAshoreIntro =
  "The essentials cruise passengers should know before exploring Malta.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "time-in-port",
    title: "Typical time in port",
    body: "Many Malta calls provide a full day ashore, but always confirm your ship’s published arrival and all-aboard times.",
    icon: "clock",
  },
  {
    id: "excursion-length",
    title: "Ideal excursion length",
    body: "A four-to-six-hour itinerary offers a good balance for Valletta, Mdina or the Three Cities while preserving sensible return time.",
    icon: "route",
  },
  {
    id: "walking-level",
    title: "Walking level",
    body: "Moderate. Valletta is compact but includes slopes, steps and uneven historic streets. Mdina is largely explored on foot.",
    icon: "walk",
  },
  {
    id: "best-early-stop",
    title: "Best early stop",
    body: "Begin with Valletta or Mdina before the busiest sightseeing period and the strongest afternoon heat.",
    icon: "sunrise",
  },
  {
    id: "do-not-miss",
    title: "Do not miss",
    body: "The panoramic view across Grand Harbour from the Upper Barrakka Gardens.",
    icon: "viewpoint",
  },
  {
    id: "local-flavour",
    title: "Local flavour",
    body: "Try pastizzi, ftira, imqaret or a Maltese platter if your itinerary allows time.",
    icon: "food",
  },
];
