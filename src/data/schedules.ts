import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import maltaSchedule from "./imported-schedules/malta.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Malta cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times, berths and dates can change — always confirm your arrival and departure with your cruise line before booking shore excursions.",
  },
  {
    question: "Where do ships dock in Malta?",
    answer:
      "Cruise ships call at Valletta / Grand Harbour. See our Malta Port Guide for terminal access, walking distances toward Valletta and return-to-ship timing.",
  },
  {
    question: "When is Malta cruise season?",
    answer:
      "Malta sees cruise calls across the Mediterranean season, with peak traffic in spring through autumn. Winter calls occur but are less frequent.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships share your Grand Harbour day before booking Gozo or full-island tours",
  "Confirm berth assignment — Valletta / Grand Harbour access shapes walking vs transfer time",
  "Book Mdina and Three Cities tours early on multi-ship days",
  "Compare your hours ashore before choosing Valletta-only vs Gozo excursions",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "malta",
    name: "Malta",
    country: "Malta",
    seoTitle: "Malta Cruise Ship Schedule 2026, 2027 & 2028",
    metaDescription:
      "Malta cruise ship schedule hub for Valletta / Grand Harbour. See which ships are in port and plan Valletta, Mdina, Three Cities and Gozo shore excursions around published arrival and departure times.",
    intro:
      "Malta's cruise gateway is Valletta / Grand Harbour. Check which vessels are scheduled before you book harbour, Mdina or Gozo days.",
    description:
      "Central Mediterranean cruise port — Valletta / Grand Harbour with fortified Valletta and the Three Cities across the water.",
    scheduleOverview:
      "Malta sees seasonal cruise traffic through the Mediterranean calendar, with calls from Western and Eastern Mediterranean itineraries at Valletta / Grand Harbour.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  malta: maltaSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
