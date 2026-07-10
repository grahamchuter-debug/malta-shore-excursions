import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Valletta Cruise Port Guide",
  subtitle:
    "The Grand Harbour terminal, the climb into Valletta, the Barrakka Lift, transport and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Valletta Waterfront (Pinto Wharf)",
      quay: "Along the Floriana side of the Grand Harbour, directly beneath Valletta's bastion walls",
      usedBy: "Most cruise ships calling at Malta",
      cityAccess:
        "A signed walking route climbs from the waterfront through the bastion gates into Valletta, or the Barrakka Lift rises directly into Upper Barrakka Gardens. Check locally before travelling for current access arrangements.",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Malta",
      paragraphs: [
        "Cruise ships calling at Malta typically berth at the Valletta Waterfront, on the Floriana side of the Grand Harbour, directly beneath the bastion walls that ring the historic city. This is one of the more dramatic cruise arrivals in the Mediterranean: the fortress you are about to explore is visible from the deck before you even disembark.",
        "Exact berth assignments can vary, particularly on days when more than one ship is in port. Check your ship's daily programme and any signage in the terminal area before setting out, rather than assuming a fixed layout.",
        "Because Valletta rises directly above the terminal, Malta is one of the more convenient major Mediterranean cruise calls for a city day. Destinations further afield — Mdina, the Three Cities, the southern coast and Gozo — are separate road or ferry journeys with their own timing considerations.",
      ],
    },
    {
      heading: "The climb from the waterfront into Valletta",
      paragraphs: [
        "Valletta sits on a raised, fortified peninsula, and reaching the historic city from the waterfront involves a genuine uphill climb through the bastion gates. This is a real physical consideration, not a minor detail — pace yourself, especially in warm weather, and treat it as the first part of the day's walking rather than an incidental approach.",
        "The Barrakka Lift offers a practical alternative, rising from the waterfront area directly into Upper Barrakka Gardens and bypassing the steepest stretch. Check locally before travelling for current operating hours and fares, since these can change.",
        "Taxis are generally available around cruise operations, though demand can rise sharply on days when several ships are in port together. Keep your ship's name and terminal details to hand for the return journey.",
      ],
    },
    {
      heading: "Inside Valletta",
      paragraphs: [
        "Once through the bastion gates or up the Barrakka Lift, Valletta is relatively compact and mostly level along its main thoroughfare, Republic Street, though side streets running towards the harbour edges slope and step downward.",
        "Upper Barrakka Gardens, close to the top of the lift, gives an immediate orienting view across the Grand Harbour towards the Three Cities and is a sensible first stop for getting your bearings.",
        "St John's Co-Cathedral, the Grandmaster's Palace and Fort St Elmo's National War Museum lie along or near Republic Street and can be sequenced into a single walking route without needing to backtrack extensively.",
      ],
    },
    {
      heading: "Multi-ship days and congestion",
      paragraphs: [
        "Malta's Grand Harbour can host more than one cruise ship on the same day during busier periods of the season. On these days, expect more competition for taxis, busier queues at headline sights such as St John's Co-Cathedral, and more foot traffic on the main approach routes into Valletta.",
        "Build in extra time on multi-ship days, both for sightseeing and for your return journey, since crowding tends to slow every stage of the day rather than just one.",
      ],
    },
    {
      heading: "Heat, shade and practical comfort",
      paragraphs: [
        "Valletta's streets, particularly Republic Street and the open areas around Upper Barrakka Gardens, offer limited natural shade in the middle of the day. Carry water, use sun protection and consider timing the most exposed parts of your visit for earlier or later in the day when the season makes this practical.",
        "Side streets and the cathedral interior offer some relief from direct sun, and a café or bakery stop mid-visit is a sensible way to break up a hot day without losing much sightseeing time.",
      ],
    },
    {
      heading: "Transport beyond Valletta",
      paragraphs: [
        "Taxis, organised shore excursions and Malta's public bus network all connect Valletta to Mdina, the southern coast and other parts of the island. Confirm current routes, fares and timetables locally rather than assuming a fixed schedule.",
        "A short harbour ferry connects Valletta to the Three Cities across the Grand Harbour, offering a scenic alternative to a longer road route around the harbour.",
        "Gozo requires a separate road transfer to the ferry terminal at Ċirkewwa in the north of Malta, followed by a sea crossing to Mġarr. This combination takes up a meaningful part of any day and should be planned as a full-day undertaking, not a quick add-on.",
      ],
    },
    {
      heading: "Accessibility",
      paragraphs: [
        "The climb from the waterfront and Valletta's sloping side streets are the main accessibility considerations for most visitors. The Barrakka Lift substantially reduces the physical demand of reaching the city, and Republic Street itself is comparatively level once you are inside the walls.",
        "Discuss specific accessibility needs directly with any tour operator or your cruise line before your call, since arrangements for assistance between the gangway, the terminal and onward transport can vary by ship and by day.",
      ],
    },
    {
      heading: "Currency, language and everyday practicalities",
      paragraphs: [
        "Malta uses the euro. Maltese and English are both official languages, and English is widely spoken in shops, restaurants and visitor attractions, which makes everyday communication straightforward for most travellers.",
        "Cards are widely accepted, but carrying a small amount of cash is useful for smaller cafés, market stalls and any informal transactions.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm your ship's all-aboard time, which is earlier than the published departure, and plan your return around that figure rather than the sailing time itself.",
        "For a Valletta-only day, allow time for the descent or the Barrakka Lift queue, particularly on a multi-ship day. For Mdina, the Three Cities, the southern coast or Gozo, build in additional buffer for road transfers and, where relevant, the ferry crossing.",
        "Independent travellers are responsible for reaching the ship on time. If a longer excursion does not leave a comfortable margin, a Valletta-focused day is the lower-risk choice.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Valletta from the cruise terminal?",
      answer:
        "Yes. A signed route climbs from the Valletta Waterfront through the bastion gates into the city. It is a genuine uphill climb, so the Barrakka Lift or a taxi are sensible alternatives for reduced mobility.",
    },
    {
      question: "What is the Barrakka Lift and how much does it cost?",
      answer:
        "A public lift connecting the waterfront to Upper Barrakka Gardens, avoiding the steepest climb into Valletta. Check locally before travelling for current operating hours and fares.",
    },
    {
      question: "Do multiple cruise ships dock in Malta on the same day?",
      answer:
        "Yes, particularly during busier periods of the season. Expect more competition for taxis and busier queues at headline sights, and allow extra time accordingly.",
    },
    {
      question: "Is Malta's cruise port accessible for limited mobility?",
      answer:
        "Partially. The Barrakka Lift helps significantly with Valletta's climb, and Republic Street is comparatively level once inside the city. Discuss specific needs with your cruise line or tour operator before your call.",
    },
    {
      question: "How early should I be back at the ship?",
      answer:
        "Work back from your ship's all-aboard time, not the published departure, and build in a larger buffer on multi-ship days or after excursions to Mdina, the Three Cities, the southern coast or Gozo.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
