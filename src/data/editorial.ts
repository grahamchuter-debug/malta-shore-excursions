import type { EditorialCategory } from "./types";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall pick for a well-timed Malta cruise day." },
  { id: "best-first-time", label: "Best for First-Time Visitors", shortLabel: "First Time", description: "Valletta and Mdina — the clearest introduction to Malta's fortress history." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "The Knights of St John, the Great Siege and Malta's two great sieges." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Independent", description: "A realistic self-guided Malta day within easy reach of the ship." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "The Blue Grotto, Marsaxlokk and Malta's undeveloped southern coastline." },
  { id: "best-full-day", label: "Best Full-Day Adventure", shortLabel: "Full Day", description: "Gozo — a genuinely rewarding day for a long port call." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Colourful harbours and easy walking for mixed-age groups." },
  { id: "best-food", label: "Best for Food Lovers", shortLabel: "Food", description: "Pastizzi, fresh seafood and Malta's distinctive local flavours." },
  { id: "best-private", label: "Best Private Option", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Valletta, for calls without enough usable time to travel far." },
  { id: "best-harbour-views", label: "Best Harbour Views", shortLabel: "Harbour Views", description: "Upper Barrakka Gardens and the Grand Harbour from every angle." },
  { id: "best-got", label: "Best for Game of Thrones Fans", shortLabel: "Filming Locations", description: "Mdina's silent streets, used as King's Landing in Game of Thrones." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "The Three Cities and Malta's quieter corners beyond the main coach routes." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Valletta & Mdina — Malta's two capitals, four centuries apart, on one carefully timed cruise day.",
    href: "/valletta",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "🏰",
    label: "Best First-Time Tour",
    description: "Valletta and Mdina for first-time visitors who want the clearest introduction to Malta's fortress history.",
    href: "/malta-for-first-time-visitors",
    cta: "See first-time picks",
  },
  {
    id: "knights-history",
    emoji: "⚔️",
    label: "Best for History",
    description: "The Three Cities — where the Knights of St John held out during the Great Siege of 1565.",
    href: "/three-cities",
    cta: "Discover the Knights' story",
  },
  {
    id: "got-fans",
    emoji: "🐉",
    label: "Best for Game of Thrones Fans",
    description: "Mdina's silent, fortified streets — filmed as King's Landing in Game of Thrones' first season.",
    href: "/mdina",
    cta: "Walk the Silent City",
  },
  {
    id: "coastal",
    emoji: "🌊",
    label: "Best Coastal Experience",
    description: "The Blue Grotto's luminous sea caves and Marsaxlokk's painted fishing boats on Malta's southern coast.",
    href: "/blue-grotto",
    cta: "Explore the coast",
  },
  {
    id: "food",
    emoji: "🥟",
    label: "Best for Food Lovers",
    description: "Pastizzi in Valletta and fresh seafood in Marsaxlokk — Malta's food story in one easy day.",
    href: "/malta-food-guide",
    cta: "Taste Malta",
  },
  {
    id: "full-day",
    emoji: "⛴️",
    label: "Best Full-Day Adventure",
    description: "Gozo — a quieter, greener sister island, genuinely worth the ferry crossing on a long call.",
    href: "/gozo",
    cta: "Plan a Gozo day",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Best Independent Day",
    description: "Valletta rises straight from the quay — explore it without a tour and still see everything that matters.",
    href: "/malta-without-an-excursion",
    cta: "Use the independent guide",
  },
  {
    id: "short-port",
    emoji: "⏱️",
    label: "Best Short Port Call",
    description: "Valletta alone, when your call does not leave enough time to travel further across the island.",
    href: "/malta-short-port-call",
    cta: "Plan a short call",
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
