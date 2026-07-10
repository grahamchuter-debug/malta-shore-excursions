import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Malta?",
    answer:
      "Most cruise ships berth at the Valletta Waterfront in the Grand Harbour, directly beneath Valletta's bastion walls on the Floriana side of the peninsula. Berths can vary, so check your ship's information on arrival.",
  },
  {
    question: "How far is Valletta from the Malta cruise port?",
    answer:
      "Valletta sits directly above the Grand Harbour cruise terminal. Reaching the historic city involves a genuine uphill climb through the bastion gates, or the Barrakka Lift into Upper Barrakka Gardens as an alternative.",
  },
  {
    question: "What is the Barrakka Lift?",
    answer:
      "A public lift that rises from the Valletta Waterfront directly into Upper Barrakka Gardens, avoiding the steepest part of the climb into the city. Check locally before travelling for current operating hours and fares.",
  },
  {
    question: "Can I explore Valletta independently?",
    answer:
      "Yes. Valletta is compact, well signed and sits directly above the cruise terminal, making it one of the more independent-friendly capitals in the Mediterranean. St John's Co-Cathedral, Upper Barrakka Gardens and Republic Street can all be covered in a single walking circuit.",
  },
  {
    question: "How far is Mdina from the cruise port?",
    answer:
      "Mdina lies across the island from the Grand Harbour and requires a road journey by taxi, bus or organised transport. Check locally before travelling for current journey times.",
  },
  {
    question: "Is Mdina worth visiting alongside Valletta?",
    answer:
      "Yes, particularly on a standard or long call. Mdina offers a quieter, traffic-free counterpoint to Valletta's harbourfront energy — see our Valletta versus Mdina comparison for a fuller breakdown.",
  },
  {
    question: "How do I get to Gozo from the Malta cruise port?",
    answer:
      "Gozo requires a road transfer across Malta to the ferry terminal at Ċirkewwa, then a sea crossing to Mġarr on Gozo. An organised shore excursion typically coordinates the whole journey; independent travel is possible but needs careful timing.",
  },
  {
    question: "Is a Gozo day trip realistic on a cruise call?",
    answer:
      "Only on a long call with a generous return buffer. The combined road transfer and ferry crossing consume a meaningful part of the day before any sightseeing on Gozo begins.",
  },
  {
    question: "What is the Blue Grotto and is it always open?",
    answer:
      "The Blue Grotto is a series of sea caves on Malta's southern coast, best known for the vivid blue colour of the water in morning light. Boat trips into the caves depend on sea conditions and can be paused in rough weather — check locally before travelling.",
  },
  {
    question: "Are Malta's prehistoric temples really older than the pyramids?",
    answer:
      "Yes. The Megalithic Temples of Malta, including Ħaġar Qim, Mnajdra and Ġgantija on Gozo, are a UNESCO World Heritage Site and are among the oldest free-standing stone structures known anywhere in the world.",
  },
  {
    question: "What is Marsaxlokk known for?",
    answer:
      "A traditional fishing village on Malta's south-eastern coast, known for its brightly painted luzzu boats and a harbourside market. It pairs naturally with the Blue Grotto and the prehistoric temples nearby.",
  },
  {
    question: "What happened at the Great Siege of 1565?",
    answer:
      "The Knights of St John, based at Birgu in what is now the Three Cities, withstood a sustained Ottoman invasion in 1565. Their survival led directly to the construction of Valletta as a new, purpose-built fortress capital.",
  },
  {
    question: "What happened to Malta during the Second World War?",
    answer:
      "Malta endured a sustained bombing campaign and blockade between 1940 and 1942, and the entire population was awarded the George Cross for its endurance. Fort St Elmo's National War Museum and the Lascaris War Rooms in Valletta tell this story in detail.",
  },
  {
    question: "What food should I try in Malta?",
    answer:
      "Look for pastizzi, a flaky pastry filled with ricotta or mushy peas, along with ftira bread, a traditional Maltese platter, fenkata rabbit stew and sweet imqaret date pastries. Marsaxlokk is a good setting for fresh seafood.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Ship-sponsored excursions offer the clearest protection if an organised tour is delayed. Reputable independent operators may offer smaller groups and better value, but check their port-day experience, cancellation terms and return guarantee.",
  },
  {
    question: "How much return-to-ship buffer should I allow in Malta?",
    answer:
      "For a Valletta-only day, work back from all-aboard with a sensible margin. For Mdina, the Three Cities, the southern coast or Gozo, build in a larger buffer to allow for road transfers, ferry crossings and busier days when multiple ships share the harbour.",
  },
  {
    question: "Are Malta's shore excursions accessible for limited mobility?",
    answer:
      "Partially. The Barrakka Lift helps with Valletta's climb, and Marsaxlokk and the Blue Grotto clifftop are flat and straightforward. Mdina is largely level within the walls, but Gozo and underground sites such as the Lascaris War Rooms involve more demanding terrain — discuss specific needs with any operator before booking.",
  },
  {
    question: "What currency and language are used in Malta?",
    answer:
      "Malta uses the euro. Maltese and English are both official languages, and English is widely spoken in shops, restaurants and visitor attractions across the islands.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
