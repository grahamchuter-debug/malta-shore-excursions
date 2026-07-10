import type { ExcursionPage } from "./types";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
};

const PORT_LOGISTICS =
  "Meeting points are published on the supplier confirmation. Cruise ships normally dock beside Valletta; exact berth and walk times can vary. Allow sufficient return time to your ship.";

export const excursions: ExcursionPage[] = [
  {
    slug: "exclusive-snapshot-of-malta",
    title: "Snapshot of Malta",
    seoTitle: "Snapshot of Malta Shore Excursion — Valletta & Mdina from the Cruise Port",
    metaDescription:
      "Cover Mdina and Valletta on one guided shore excursion sized for a standard Malta cruise call, with honest timing advice.",
    category: "Editor's Choice",
    tagline:
      "Two capitals, one guided day — the walled silence of Mdina and the fortress streets of Valletta, back to back.",
    duration: "4 Hours 30 Minutes",
    pace: "Moderate",
    bestFor:
      "First-time visitors who want both former and current capitals covered without over-filling a standard port day",
    overview:
      "Snapshot of Malta is our Editor's Choice because it solves the single biggest planning question for a first call here: how to see both Mdina and Valletta without choosing between them. The published route pairs the former capital's walled quiet with the current capital's harbour-facing grandeur in one guided outing, at a pace suited to a typical port day rather than a marathon.",
    body: [
      "The day is built around contrast. Mdina, Malta's medieval and Baroque former capital, is a walled hill town where private cars are largely excluded and the narrow lanes stay genuinely quiet — a rare thing on an island this popular with cruise traffic. From there the route calls at the Mosta Dome for a photo stop, one of the largest unsupported church domes in Europe and a striking piece of 19th-century engineering even seen briefly from outside.",
      "The second half shifts registers entirely. Valletta, built by the Knights of St John after the Great Siege of 1565, presents a grid of fortified streets that still reads as a single defensive statement. The group's route through the capital takes in the Upper Barrakka Gardens, whose terraces look directly down onto Grand Harbour — one of the more theatrical viewpoints anywhere in the Mediterranean.",
      "The itinerary's final stop is St John's Co-Cathedral, the Knights' own church and among Europe's most ornate Baroque interiors, with an alternative visit to the Grand Master's Palace published as the fallback if the cathedral is closed to visitors that day (services, restoration work and civic events can all affect access). We'd rather flag that variability now than promise an interior that isn't guaranteed.",
      "Because this excursion asks a lot of two very different towns in four and a half hours, it rewards passengers who want breadth over depth on a single call. If Mdina alone is your priority, Medieval Mdina goes slower and stays longer in the old capital; if the Knights' history is what draws you, The Three Cities digs deeper into fortress Malta on the other side of the harbour.",
    ],
    highlights: [
      "Mdina's walled old capital, largely free of traffic",
      "Photo stop at the Mosta Dome",
      "Valletta's Upper Barrakka Gardens and Grand Harbour views",
      "St John's Co-Cathedral, or the Grand Master's Palace if the cathedral is closed",
    ],
    included: [
      "Licensed guide",
      "Transport between Mdina and Valletta",
      "Guided time in both walled cities",
      "Upper Barrakka Gardens viewpoint stop",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "The supplier lists this as a standard group departure with a published maximum of 30 travellers — ask what size to expect on your date",
      "The meeting point is a short walk from the pier — the supplier states roughly 5–10 minutes — but confirm the exact point on your booking voucher",
      "No food is included, so eat before you leave the ship or plan a stop afterwards in Valletta",
      "Check current price and confirmed inclusions on the supplier listing before booking, since Cathedral versus Palace access can vary by date",
    ],
    faqs: [
      {
        question: "Will we definitely see inside St John's Co-Cathedral?",
        answer:
          "Not guaranteed. The supplier's published itinerary names the Grand Master's Palace as the alternative stop if the Co-Cathedral is closed on your date, so treat the interior visit as likely rather than certain.",
      },
      {
        question: "Is this a big group tour?",
        answer:
          "It's listed as a standard group product with a published maximum of around 30 travellers, rather than a small or private departure. If you want a smaller group, look at the Valletta street food walk or a private option.",
      },
      {
        question: "Is 4.5 hours enough for both Mdina and Valletta?",
        answer:
          "It's enough for a well-paced overview of each — this is a snapshot, not an exhaustive tour of either city. If you'd rather linger in one place, choose Medieval Mdina or a Valletta-focused excursion instead.",
      },
    ],
    relatedExcursionSlugs: ["medieval-mdina", "the-three-cities", "private-highlights-valletta-mdina"],
    featured: true,
    editorialBadge: "Editor’s Choice",
    whyRecommend:
      "It is the strongest all-round introduction to Malta because it combines the current capital and the former capital in a single, cruise-appropriate day — most other excursions specialise in one or the other.",
    cruiseSuitability: ["Works well for a standard port day"],
    groupType: "Standard group tour — supplier lists a published maximum of around 30 travellers",
    foodInclusion: "Not included, supplier states",
    keyLocations: [
      "Mdina",
      "Mosta Dome (photo stop)",
      "Valletta",
      "Upper Barrakka Gardens",
      "St John's Co-Cathedral (or Grand Master's Palace if closed)",
    ],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/snapshot-malta/eumlgoexcmlt",
      productId: "eumlgoexcmlt",
    },
  },
  {
    slug: "malta-hop-on-hop-off-bus",
    title: "Malta Hop-On Hop-Off Bus",
    seoTitle: "Malta Hop-On Hop-Off Bus Shore Excursion — Full-Day Flexible Ticket",
    metaDescription:
      "A full-day hop-on hop-off bus ticket for Malta cruise passengers who want to set their own pace — with candid advice on return timing.",
    category: "Independent Touring",
    tagline: "Your own itinerary, your own pace — a full day's ticket to move around Malta on your own terms.",
    duration: "1 Day",
    pace: "Relaxed",
    bestFor:
      "Independent travellers on a long port day who would rather choose their own stops than follow a fixed group itinerary",
    overview:
      "The Malta Hop-On Hop-Off Bus is the honest answer for cruise passengers who dislike being marched between photo stops on someone else's schedule. A day ticket lets you get on and off along the route network at your own pace — but the flexibility that makes it appealing is exactly what makes it risky on a tight port call, so we're upfront about when it works and when it doesn't.",
    body: [
      "The appeal is straightforward: rather than committing to one guide's fixed stops and timings, a day ticket lets you decide how long to spend in each place, skip anything that doesn't interest you, and change your mind once you're there. For travellers who prefer browsing a market or lingering over a viewpoint to standing in a group semicircle, that independence is genuinely valuable.",
      "The trade-off is equally real. Buses run to a published schedule rather than to your ship's, and traffic, roadworks or a busier-than-usual day can all stretch waiting times between stops. Unlike a guided excursion built around your vessel's return time, a hop-on hop-off ticket puts the return-planning responsibility entirely on you.",
      "We list this as our Best Independent Option rather than our default recommendation for that reason. It rewards travellers with a genuinely long port day, a clear sense of which stops matter to them, and a self-imposed cut-off time that leaves a comfortable margin back to the ship — not a fixed all-aboard chased at the last minute.",
      "If your priority is simply seeing Malta's main sights with someone else managing the clock, a guided option such as Snapshot of Malta removes that planning burden. If you specifically want the freedom to wander, this ticket is the right tool — used with a firm personal deadline.",
    ],
    highlights: [
      "Full-day hop-on hop-off ticket",
      "Freedom to set your own stops and pace",
      "No fixed group schedule to follow",
      "Coverage of Malta's key sightseeing routes",
    ],
    included: ["Full-day hop-on hop-off bus ticket", "Access to the published route network for the day"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Set your own hard return deadline well ahead of all-aboard — a bus schedule will not wait for you",
      "Plan your stops before you board so you aren't deciding on the fly with the clock running",
      "This is not the excursion to choose on a short call; the flexibility needs real spare time to be useful",
      "Check current price and the exact route map on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Is this a good choice for a short port call?",
        answer:
          "No. Because timings depend on the bus schedule and traffic rather than your ship's return time, we recommend this only for passengers with a genuinely long day ashore and a self-set safety margin.",
      },
      {
        question: "Is there a guide on board?",
        answer:
          "This is an independent-use ticket rather than a guided tour. If you want commentary and a fixed itinerary managed for you, choose a guided excursion such as Snapshot of Malta instead.",
      },
      {
        question: "Can I combine this with a guided excursion on the same day?",
        answer:
          "In principle yes if your port hours allow it, but be realistic about the added planning risk of running two independent schedules against one ship departure.",
      },
    ],
    relatedExcursionSlugs: ["two-harbours-cruise", "exclusive-snapshot-of-malta", "valletta-street-food-tasting-walk"],
    editorialBadge: "Best Independent Option",
    whyRecommend:
      "For travellers who value control over their own itinerary above all else, this is the most flexible option in the collection — provided the return planning is treated seriously.",
    cruiseSuitability: ["Requires careful return planning"],
    groupType: "Standard — independent-use day ticket, not a guided group tour",
    foodInclusion: "Not included, supplier states",
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/malta-hop-on-hop-off/eumlcsonoff",
      productId: "eumlcsonoff",
    },
  },
  {
    slug: "two-harbours-cruise",
    title: "Two Harbours Cruise",
    seoTitle: "Two Harbours Cruise Shore Excursion — Grand Harbour & Marsamxett from the Water",
    metaDescription:
      "A short boat cruise around Malta's two great harbours, seen from sea level — an easy, low-commitment addition to a Valletta port day.",
    category: "Harbour Cruise",
    tagline: "Fortress walls from the water — Malta's two great harbours seen the way the Knights saw them.",
    duration: "1 Hour 30 Minutes",
    pace: "Relaxed",
    bestFor: "Passengers wanting a short, low-effort way to see Valletta's fortifications from sea level",
    overview:
      "The Two Harbours Cruise is the simplest, shortest item in this collection: a boat trip around Grand Harbour and Marsamxett Harbour that puts Valletta's bastions and the Three Cities' waterfront in a perspective no walking tour can match. At 90 minutes, it's an easy addition to a longer day rather than a full excursion in itself.",
    body: [
      "Valletta occupies a narrow peninsula between two natural harbours, and its fortifications were designed to be seen — and feared — from the water. A short cruise around both harbours puts you at the vantage point the city's 16th-century engineers actually planned for, looking up at bastion walls that are far harder to appreciate at street level.",
      "Grand Harbour side gives views of the Three Cities across the water — Vittoriosa, Senglea and Cospicua — alongside the working harbour itself, still used by commercial shipping and naval vessels. Marsamxett Harbour, on the other side of the peninsula, offers a quieter, more residential outlook towards Sliema and Manoel Island.",
      "Because the boat does the work, this is about as easy-going as a Malta excursion gets — there's no walking itinerary to keep up with and no fortress steps to climb. It suits travellers who want a scenic, photogenic outing without committing significant time or energy to it.",
      "We haven't verified that this product departs directly from the cruise terminal itself, so don't assume a walk-on option without checking the supplier's confirmed meeting point. Its short length also makes it a natural pairing with a Valletta walking element — either before or after, on the same day.",
    ],
    highlights: [
      "Views of Valletta's bastions from the water",
      "Grand Harbour and the Three Cities waterfront",
      "Marsamxett Harbour and Sliema outlook",
      "A relaxed, low-effort 90-minute outing",
    ],
    included: ["Boat cruise around Grand Harbour and Marsamxett Harbour", "Harbour commentary as provided by the operator"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Don't assume this leaves directly from the cruise terminal — confirm the exact departure point on your booking voucher",
      "Bring a hat and sun protection; there's little shade on the water",
      "Pair it with a Valletta walk on the same day rather than treating it as a standalone outing",
      "Check current price and departure times on the supplier listing",
    ],
    faqs: [
      {
        question: "Does the boat leave from right beside the cruise terminal?",
        answer:
          "That isn't confirmed in the supplier's published details, so check your exact departure point rather than assuming a direct walk-on from the ship.",
      },
      {
        question: "Is this enough to fill a port day on its own?",
        answer:
          "No — at 90 minutes it's best treated as an addition to a longer day in Valletta or the Three Cities, not a full excursion by itself.",
      },
      {
        question: "Is it suitable for passengers who can't manage much walking?",
        answer:
          "Yes, this is one of the easiest options in the collection since the sightseeing happens from your seat on the boat.",
      },
    ],
    relatedExcursionSlugs: ["exclusive-snapshot-of-malta", "the-three-cities", "malta-hop-on-hop-off-bus"],
    editorialBadge: "Best for Harbour Views",
    whyRecommend:
      "No other excursion in the collection shows Valletta's fortifications from this angle, and its short length makes it an easy add-on for passengers on a shorter call.",
    cruiseSuitability: ["Easy to combine with Valletta"],
    groupType: "Standard group boat cruise",
    keyLocations: ["Grand Harbour", "Marsamxett Harbour"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/two-harbours-cruise/eumlharbr",
      productId: "eumlharbr",
    },
  },
  {
    slug: "the-three-cities",
    title: "The Three Cities",
    seoTitle: "The Three Cities Shore Excursion — Vittoriosa, Senglea & Cospicua from Malta Cruise Port",
    metaDescription:
      "Visit Cospicua, Vittoriosa and Senglea plus a Grand Harbour boat cruise on a shore excursion built around the Knights' fortress history.",
    category: "History & Fortresses",
    tagline: "Fortress towns across the water — where the Knights of St John lived before Valletta existed.",
    duration: "4 Hours",
    pace: "Moderate",
    bestFor: "History-minded travellers who want Malta's fortress story told away from Valletta's crowds",
    overview:
      "The Three Cities is our pick for anyone chasing Malta's Knights-and-fortresses history in depth. Before Valletta was built, the Order of St John was based across Grand Harbour in Vittoriosa (Birgu), and this excursion combines land visits to all three historic towns with a boat cruise across the harbour that ties them together.",
    body: [
      "Cospicua, Vittoriosa and Senglea sit on adjoining fortified peninsulas across Grand Harbour from Valletta, and each carries its own layer of the Knights' story. Vittoriosa, also known by its older name Birgu, was the Order's original capital and the site of some of the fiercest fighting of the 1565 Great Siege — its waterfront and Auberge buildings still carry that history in stone.",
      "Senglea's fortifications and watchtower point directly out across the harbour mouth, while Cospicua's long defensive walls, the Cottonera Lines, show the sheer scale the Knights built at once Valletta had absorbed the initial threat. Walking these streets, quieter and less commercialised than Valletta's, gives a different sense of everyday fortress life than the capital's grander set-pieces.",
      "The supplier confirms a 30-minute Grand Harbour boat cruise as part of the itinerary, linking the land visits with the same water-level perspective on Valletta's bastions that makes the Two Harbours Cruise worthwhile — here folded into a broader historical narrative rather than standing alone.",
      "Because the Three Cities see far fewer cruise groups than Mdina or Valletta, this excursion also works as a quieter counterpoint if you've already done a busier itinerary earlier in your Malta visit, or want fortress history told at a more measured pace.",
    ],
    highlights: [
      "Vittoriosa (Birgu), the Knights' original capital",
      "Senglea's fortifications and harbour watchtower",
      "Cospicua and the Cottonera Lines",
      "30-minute Grand Harbour boat cruise, supplier confirms",
    ],
    included: [
      "Licensed guide",
      "Land visits to Cospicua, Vittoriosa and Senglea",
      "30-minute Grand Harbour boat cruise",
      "Transport between sites",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — the old town streets in all three cities involve slopes and uneven paving",
      "This is a good pick if you want fortress history away from Valletta's busiest routes",
      "Check current price and confirm the exact stop order on the supplier listing",
    ],
    faqs: [
      {
        question: "Is the boat cruise the same as the standalone Two Harbours Cruise?",
        answer:
          "It covers similar water, but here it's a 30-minute segment within a larger land-and-water itinerary, as confirmed by the supplier, rather than the separate 90-minute standalone product.",
      },
      {
        question: "How does this differ from Snapshot of Malta?",
        answer:
          "Snapshot of Malta covers Mdina and Valletta; The Three Cities instead focuses on Vittoriosa, Senglea and Cospicua across the harbour, with deeper Knights-era history and less time in Valletta itself.",
      },
      {
        question: "Is there much walking?",
        answer:
          "Yes, a moderate amount across three old towns with some inclines and uneven surfaces, balanced by the seated portion of the harbour cruise.",
      },
    ],
    relatedExcursionSlugs: ["exclusive-snapshot-of-malta", "medieval-mdina", "two-harbours-cruise"],
    editorialBadge: "Best for History",
    whyRecommend:
      "It gives the Knights' fortress history more room than a capital-city overview can, and includes a Grand Harbour cruise as part of a single confirmed itinerary.",
    cruiseSuitability: ["Works well for a standard port day"],
    groupType: "Standard group tour",
    keyLocations: ["Cospicua", "Vittoriosa (Birgu)", "Senglea", "Grand Harbour (30-minute boat cruise)"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/three-cities-malta/eumlaglthrcty",
      productId: "eumlaglthrcty",
    },
  },
  {
    slug: "blue-grotto-and-marsaxlokk",
    title: "Blue Grotto & Marsaxlokk",
    seoTitle: "Blue Grotto & Marsaxlokk Shore Excursion — Malta's South Coast from the Cruise Port",
    metaDescription:
      "See the Blue Grotto and Marsaxlokk on a south-coast shore excursion — the Blue Grotto boat ride is optional and not included.",
    category: "South Coast",
    tagline: "Turquoise caves and painted fishing boats — Malta's south coast, at a gentler pace than the capital.",
    duration: "5 Hours",
    pace: "Moderate",
    bestFor: "Travellers who want coastal scenery and village life rather than another round of fortress walls",
    overview:
      "Blue Grotto & Marsaxlokk trades Malta's Knights-and-capitals history for its working coastline: a dramatic sea cave on one side of the island and a still-active fishing harbour on the other. It's a good counterpoint if you've already covered Valletta or Mdina and want a different register of scenery.",
    body: [
      "The Blue Grotto is a series of sea caves on Malta's south coast, known for the way sunlight through the water produces vivid blue and turquoise colour inside the caves, best seen in the late morning light. The excursion visits the clifftop viewpoint above the caves as standard — but the small-boat ride into the caves themselves is an optional extra arranged locally and is not included in the tour price. Weather and sea conditions can also affect whether boats are running at all on a given day, so treat the ride as a possibility rather than a promise.",
      "Marsaxlokk is the opposite kind of coastal scene: a working fishing village built around a natural harbour, its waterfront lined with brightly painted traditional luzzu boats. There's usually free time here to wander the harbourside market stalls and watch the working boats rather than follow a fixed guided route.",
      "Between the two stops, the south coast offers a quieter, more rural landscape than the fortress towns further north — low limestone cliffs, terraced fields and small settlements rather than bastion walls and cathedral squares.",
      "If seeing inside the Blue Grotto caves matters to you, budget separately for the optional boat and be prepared for it to be weather-dependent; don't book this excursion assuming the boat ride is guaranteed or covered.",
    ],
    highlights: [
      "Blue Grotto clifftop viewpoint",
      "Optional boat ride into the sea caves (extra cost, weather-dependent)",
      "Marsaxlokk fishing harbour and painted luzzu boats",
      "South coast scenery away from the fortress towns",
    ],
    included: ["Licensed guide", "Transport to the Blue Grotto viewpoint and Marsaxlokk", "Free time in Marsaxlokk"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "The Blue Grotto boat ride is optional, arranged and paid for locally, and is not included in this tour — budget separately if you want it",
      "Boat trips into the caves can be cancelled in rough weather, so have a backup plan for that time if the ride matters to you",
      "Bring cash for the optional boat and for Marsaxlokk's market stalls",
      "Check current price on the supplier listing, and confirm what is and isn't included before booking",
    ],
    faqs: [
      {
        question: "Is the Blue Grotto boat ride included in the price?",
        answer:
          "No. The boat ride into the caves is an optional, separately paid local activity, not part of this tour's inclusions. The tour itself covers the clifftop viewpoint.",
      },
      {
        question: "What if the sea is too rough for the boats?",
        answer:
          "The boats can be suspended in poor conditions, in which case you'd still have the clifftop viewpoint but not the ride into the caves. This is outside the tour operator's control.",
      },
      {
        question: "Is Marsaxlokk a full sightseeing stop or just a photo opportunity?",
        answer:
          "It's typically free time to explore the harbourfront and market at your own pace, rather than a guided walking segment.",
      },
    ],
    relatedExcursionSlugs: ["prehistoric-temples-and-views", "medieval-mdina", "exclusive-snapshot-of-malta"],
    whyRecommend:
      "It's the clearest way to see Malta's working coastline rather than another fortress or cathedral, and we flag the optional Blue Grotto boat plainly so nobody is caught out.",
    cruiseSuitability: ["Works well for a standard port day"],
    groupType: "Standard group tour",
    keyLocations: ["Blue Grotto", "Marsaxlokk"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/blue-grotto-marsaxlokk-malta/eumlaglbgrmlk",
      productId: "eumlaglbgrmlk",
    },
  },
  {
    slug: "medieval-mdina",
    title: "Medieval Mdina",
    seoTitle: "Medieval Mdina Shore Excursion — Malta's Silent City from the Cruise Port",
    metaDescription:
      "Spend longer in Mdina, Malta's walled former capital, on a shore excursion focused entirely on the Silent City's medieval and Baroque streets.",
    category: "Medieval Malta",
    tagline: "Malta's Silent City, given the time it deserves — walled lanes, private cars barred, history at every turn.",
    duration: "4 Hours",
    pace: "Moderate",
    bestFor: "Travellers who want to properly absorb Mdina rather than treat it as a brief photo stop",
    overview:
      "Medieval Mdina exists for one reason: to give Malta's former capital more time than the brief pass-through it gets on multi-stop itineraries. Nicknamed the Silent City for its hushed, largely car-free streets, Mdina rewards a slower visit more than almost anywhere else on the island.",
    body: [
      "Mdina was Malta's capital for centuries before the Knights built Valletta, and its walled hilltop position — with private traffic largely excluded from the old town — gives it an atmosphere unlike anywhere else in the collection. Narrow lanes of honey-coloured limestone open onto small squares and church façades that mix medieval origins with later Baroque rebuilding after the 1693 earthquake.",
      "A guided route through the old town takes in its main streets, gates and viewpoints over the surrounding countryside, with time to appreciate details — carved door knockers, shaded courtyards, the interplay of medieval street plan and 17th- and 18th-century architecture — that a rushed stop elsewhere tends to skip past.",
      "Because the whole four hours is dedicated to one town rather than split across two, this suits travellers who found a brief Mdina stop on another itinerary frustratingly short, or who simply prefer depth over a checklist of locations.",
      "If you'd rather see Mdina alongside Valletta in a single day, Snapshot of Malta covers both — just with less time in each. Choose this excursion instead when Mdina itself is the destination, not a stop along the way.",
    ],
    highlights: [
      "Mdina's walled, largely car-free old town",
      "Medieval street plan with Baroque rebuilding after 1693",
      "Viewpoints over the surrounding Maltese countryside",
      "A slower pace than multi-stop itineraries allow",
    ],
    included: ["Licensed guide", "Guided walking route through Mdina's old town", "Transport to and from Mdina"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes for cobbled, sloping streets",
      "This suits travellers who want depth in one place rather than breadth across several",
      "Check current price and confirmed route on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "How is this different from the Mdina stop on Snapshot of Malta?",
        answer:
          "This excursion spends its full four hours in Mdina alone, rather than splitting time between Mdina and Valletta, so it goes into more depth in the old town itself.",
      },
      {
        question: "Is Mdina accessible for visitors with limited mobility?",
        answer:
          "The old town has cobbled streets, slopes and uneven paving throughout, so discuss mobility needs with the operator before booking.",
      },
      {
        question: "Is there free time to explore independently?",
        answer:
          "Structure varies by departure — check the supplier's published itinerary for how much of the visit is guided versus free time.",
      },
    ],
    relatedExcursionSlugs: ["exclusive-snapshot-of-malta", "prehistoric-temples-and-views", "private-highlights-valletta-mdina"],
    whyRecommend:
      "No other excursion in the collection gives Mdina this much uninterrupted time, making it the best choice for travellers who want to properly absorb the Silent City.",
    cruiseSuitability: ["Works well for a standard port day"],
    groupType: "Standard group tour",
    keyLocations: ["Mdina"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/medieval-mdina-malta/eumlaglmedmdn",
      productId: "eumlaglmedmdn",
    },
  },
  {
    slug: "prehistoric-temples-and-views",
    title: "Prehistoric Temples & Views",
    seoTitle: "Prehistoric Temples & Views Shore Excursion — Malta's Ancient History from the Cruise Port",
    metaDescription:
      "Explore Malta's prehistoric temple sites and south-coast viewpoints on a shore excursion built around the island's oldest history.",
    category: "Ancient History",
    tagline: "Stone older than the pyramids — Malta's prehistoric temples, paired with south-coast views.",
    duration: "4 Hours",
    pace: "Relaxed",
    bestFor: "Travellers whose interest in Malta runs deeper than the Knights, back to its Neolithic origins",
    overview:
      "Prehistoric Temples & Views looks past Malta's fortress-and-Knights identity to something considerably older: the island's Neolithic temple culture, among the earliest free-standing stone structures anywhere in the world. This excursion pairs a visit to the temple sites with the open coastal views that surround them.",
    body: [
      "Malta's prehistoric temples predate Stonehenge and the Egyptian pyramids, built by a Neolithic culture whose stoneworking skill still isn't fully explained. Seeing them in person — massive stone slabs arranged in complexes with no mortar and no wheels used in construction — is a different kind of history from the Baroque churches and fortress walls that dominate the rest of a typical Malta itinerary.",
      "The exact sites visited follow the supplier's published itinerary for this route; Malta's south coast is home to several UNESCO-listed temple complexes, of which Ħaġar Qim and Mnajdra are the best known, and the excursion is built around this cluster of ancient sites and the coastal views around them.",
      "Because the interest here is archaeological rather than architectural in the Baroque sense, the pace is gentler and the atmosphere quieter than a Valletta or Mdina walking tour — there's more space to take in the setting rather than move briskly between named landmarks.",
      "If you'd prefer a broader sweep of ancient sites with a different published itinerary, the supplier also lists an Ancient Malta tour as a separate option — worth comparing if this route's exact stops don't match what you're looking for.",
    ],
    highlights: [
      "Malta's Neolithic temple sites, among the world's oldest free-standing stone structures",
      "South-coast views around the temple complexes",
      "A quieter, more contemplative pace than the fortress-town tours",
      "A different layer of Maltese history, older than the Knights",
    ],
    included: ["Licensed guide", "Transport to the temple sites", "Guided time at the ancient monuments"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear sturdy shoes — temple sites involve uneven ancient stonework and some outdoor walking",
      "Bring sun protection; there's limited shade around the archaeological sites",
      "If this exact itinerary doesn't match your interests, ask about the supplier's separate Ancient Malta tour",
      "Check current price and the confirmed site list on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Which temples does this excursion visit?",
        answer:
          "Follow the supplier's published itinerary for the exact sites on your date. Malta's south coast is home to several UNESCO-listed Neolithic temple complexes, and this route is built around that cluster.",
      },
      {
        question: "How does this differ from the supplier's Ancient Malta tour?",
        answer:
          "Both cover Malta's prehistoric history, but they are separate listed products with their own itineraries — compare the published stops on each before choosing.",
      },
      {
        question: "Is much walking involved?",
        answer:
          "It's listed as an easy-paced excursion, though temple sites do involve some outdoor walking over ancient, uneven stone.",
      },
    ],
    relatedExcursionSlugs: ["blue-grotto-and-marsaxlokk", "medieval-mdina", "exclusive-snapshot-of-malta"],
    cruiseSuitability: ["Works well for a standard port day"],
    groupType: "Standard group tour",
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/temples-and-ruins-malta-tour/eumltmpleview",
      productId: "eumltmpleview",
      notes: "Supplier also lists a separate Ancient Malta tour (productId eumlancientst) with its own itinerary",
    },
  },
  {
    slug: "valletta-street-food-tasting-walk",
    title: "Valletta Street Food Tasting Walk",
    seoTitle: "Valletta Street Food Tasting Walk — Small-Group Malta Shore Excursion",
    metaDescription:
      "A small-group Valletta food tasting walk for cruise passengers who've seen the main sights and want to taste the capital instead.",
    category: "Food & Drink",
    tagline: "The capital, tasted rather than photographed — a small-group route through Valletta's food culture.",
    duration: "3 Hours",
    pace: "Relaxed",
    bestFor: "Food-focused travellers, and anyone who has already covered Valletta's main sights and wants a different angle",
    overview:
      "The Valletta Street Food Tasting Walk swaps monuments for menus. Run as a small group rather than a large coach party, it moves through the capital tasting local food and drink rather than ticking off landmarks — a good pick for a second visit to Valletta or for travellers who simply prioritise food over fortresses.",
    body: [
      "Valletta's compact grid makes it an easy city to explore on foot, and this walk uses that scale to link several tasting stops without long transfers between them. The supplier lists this as a small-group product, a contrast to the standard-sized departures on several of the sightseeing tours in this collection.",
      "The tour includes both food tastings and a beverage as part of the ticket, giving a genuine taste of Maltese cuisine's Mediterranean, Sicilian and North African influences rather than a single meal in one restaurant. Exact stops and dishes follow the operator's current route.",
      "Because it stays within Valletta's walls, this pairs naturally with a separate sightseeing excursion on the same trip, or works well as a relaxed activity if you've already done the capital's landmarks on an earlier call or a different tour.",
      "This is a walking-paced, conversational format rather than a formal sit-down meal, so come with an appetite for grazing across several stops rather than expecting one large plate.",
    ],
    highlights: [
      "Small-group format through Valletta",
      "Multiple food tastings across the walk",
      "A beverage included as part of the tour",
      "Valletta's food culture and Mediterranean influences",
    ],
    included: ["Local food guide", "Food tastings at multiple stops", "A beverage, as specified by the supplier"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention allergies or dietary restrictions when booking, well ahead of the walk",
      "Come with an appetite for grazing across several small stops rather than one large meal",
      "A good pairing for a second Valletta visit, or after a sightseeing-focused excursion",
      "Check current price and the confirmed tasting stops on the supplier listing before booking",
    ],
    faqs: [
      {
        question: "Is this a full meal or a series of tastings?",
        answer:
          "It's a series of tastings across multiple stops along the walk, with a beverage included, rather than one sit-down meal.",
      },
      {
        question: "Is it suitable if I've already done a Valletta sightseeing tour?",
        answer:
          "Yes — this is a good complement to a landmarks-focused excursion since it explores the capital through its food rather than repeating the same monuments.",
      },
      {
        question: "How big is the group?",
        answer:
          "The supplier lists this as a small-group excursion, smaller than the standard-sized departures used on several of the sightseeing tours in this collection.",
      },
    ],
    relatedExcursionSlugs: ["exclusive-snapshot-of-malta", "two-harbours-cruise", "malta-hop-on-hop-off-bus"],
    editorialBadge: "Best for Food Lovers",
    whyRecommend:
      "It's the only excursion in the collection built entirely around Valletta's food rather than its monuments, and its small-group format suits travellers who've already seen the capital's landmarks.",
    cruiseSuitability: ["Easy to combine with Valletta"],
    groupType: "Small group, supplier lists Excursion Size: Small",
    foodInclusion: "Beverage and food tastings included, supplier states",
    keyLocations: ["Valletta"],
    activityLevel: "Easy, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/small-group-valletta-street-food-tasting-walk/eumlvalletafoodtour",
      productId: "eumlvalletafoodtour",
    },
  },
  {
    slug: "private-highlights-valletta-mdina",
    title: "Private Highlights: Valletta & Mdina",
    seoTitle: "Private Valletta & Mdina Shore Excursion — Malta's Two Capitals, Your Own Pace",
    metaDescription:
      "A private guided excursion to Valletta and Mdina for cruise passengers who want Malta's two capitals at their own pace, with their own vehicle.",
    category: "Private Touring",
    tagline: "Malta's two capitals, on your schedule — a private guide and vehicle for just your party.",
    duration: "5 Hours",
    pace: "Moderate",
    bestFor: "Families and small groups who want the Snapshot of Malta route without sharing it with a coach group",
    overview:
      "Private Highlights: Valletta & Mdina takes the same two-capitals concept as our Editor's Choice and removes the group-tour compromises — a dedicated guide and vehicle for just your party, with the flexibility to spend more time wherever interests you most and less where they don't.",
    body: [
      "The route covers the same essential ground as Snapshot of Malta — Mdina's walled old town and Valletta's fortress streets — but as a private excursion rather than a standard-sized group departure. That means no waiting on slower members of a larger group, no fixed photo-stop timings, and the ability to linger at Upper Barrakka Gardens or inside a church that's caught your interest.",
      "With an extra half-hour built into the schedule compared with the group version, there's a little more room to adjust pacing on the day — useful for families with children, older travellers who prefer a gentler rhythm, or anyone who simply dislikes being rushed between stops.",
      "A private guide can also tailor commentary to your specific interests, whether that's architecture, the Knights' military history, or simply local life in two very different Maltese towns, in a way that's harder to do for a mixed group of strangers.",
      "This is priced and structured as a private product, so expect a different cost basis than the group excursions in this collection — check the current price and confirm the vehicle size against your party before booking.",
    ],
    highlights: [
      "Private guide and vehicle for just your party",
      "Mdina's walled old town at your own pace",
      "Valletta's fortress streets and Upper Barrakka Gardens",
      "Flexible timing not tied to a larger group",
    ],
    included: ["Private licensed guide", "Private vehicle for your party", "Guided time in Mdina and Valletta"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Tell your guide your priorities in advance — architecture, history, photography or a gentler family pace — to get the most from the private format",
      "Confirm the vehicle size matches your party before booking",
      "Check current price on the supplier listing; private tours are priced differently from standard group departures",
    ],
    faqs: [
      {
        question: "How does this differ from Snapshot of Malta?",
        answer:
          "It covers similar ground — Mdina and Valletta — but as a private tour with a dedicated guide and vehicle rather than a standard group departure, with a somewhat longer published duration.",
      },
      {
        question: "Is this a good option for families?",
        answer:
          "Yes — the ability to adjust pace and skip or extend stops on the day makes private touring generally easier with children or mixed-mobility groups than a fixed-schedule group tour.",
      },
      {
        question: "Is it more expensive than the group version?",
        answer:
          "Private tours are typically priced per vehicle rather than per person, so cost comparisons depend on your group size — check current pricing on the supplier listing.",
      },
    ],
    relatedExcursionSlugs: ["exclusive-snapshot-of-malta", "medieval-mdina", "private-guide-vehicle-half-day"],
    featured: true,
    editorialBadge: "Best Private Option",
    whyRecommend:
      "It's the private equivalent of our Editor's Choice, giving families and small groups the same two-capitals route without the pacing compromises of a standard group tour.",
    cruiseSuitability: ["Works well for a standard port day"],
    groupType: "Private — dedicated guide and vehicle for your party only",
    keyLocations: ["Mdina", "Valletta"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/highlights-valletta-mdina-malta/eumlgomdina",
      productId: "eumlgomdina",
    },
  },
  {
    slug: "private-guide-vehicle-half-day",
    title: "Private Guide & Vehicle — Half Day",
    seoTitle: "Private Half-Day Guide & Vehicle — Custom Malta Shore Excursion",
    metaDescription:
      "A private guide and vehicle for half a day in Malta, built around your own priorities rather than a fixed group itinerary.",
    category: "Private Guide & Vehicle",
    tagline: "A blank half-day, filled with your priorities — private guide and vehicle, route built around you.",
    duration: "4 Hours",
    pace: "Relaxed",
    bestFor: "Travellers who already know what they want to see in Malta and prefer a private, flexible route to a fixed itinerary",
    overview:
      "Private Guide & Vehicle — Half Day is a blank canvas rather than a themed excursion: a dedicated guide and a vehicle for four hours, with the route shaped around whichever combination of Mdina, Valletta, the coast or something more specific matters most to you.",
    body: [
      "Unlike the themed excursions in this collection, this product doesn't come with a fixed set of stops — it's built around a conversation with your guide about what you want to see and how much time to give each place. That could mean a faster-paced version of Snapshot of Malta, a deep dive into one specific site, or a combination nobody else has thought to package as a standard tour.",
      "Because both a guide and a vehicle are provided, this suits travellers who want private flexibility but don't want to drive themselves or navigate on unfamiliar roads. Four hours is enough for a focused half-day covering two or three connected stops rather than an island-wide circuit.",
      "This product is distinct from the private full-day version below — book this one only if half a day genuinely covers your plans, since extending on the day itself may not always be possible.",
      "If you'd rather have a pre-built itinerary designed by us rather than assembling your own on the day, Private Highlights: Valletta & Mdina offers a similarly private format with a fixed, curated route.",
    ],
    highlights: [
      "Fully private guide and vehicle for four hours",
      "Route built around your own priorities, not a fixed itinerary",
      "No group pacing or shared schedule",
      "Flexible enough for a focused half-day circuit",
    ],
    included: ["Private licensed guide", "Private vehicle for your party", "Route planned around your stated priorities"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Come with a rough plan or priority list — this product works best when you already know roughly what you want to see",
      "Confirm in advance which sites are realistic within four hours given travel time between them",
      "Check current price on the supplier listing before booking",
      "If you'd prefer a full day instead, compare against the separate full-day private product rather than assuming this one can simply be extended",
    ],
    faqs: [
      {
        question: "Do I need to know exactly where I want to go before booking?",
        answer:
          "A rough idea helps a great deal — this is an open-format product built around your priorities, not a themed itinerary with fixed stops.",
      },
      {
        question: "Can this be extended into a full day on the spot?",
        answer:
          "Treat the half-day and full-day products as separate bookings rather than assuming an on-the-day extension will be available — book the full-day guide and vehicle product if that's what you actually need.",
      },
      {
        question: "Is a guide included, or just a driver?",
        answer:
          "Both a guide and a vehicle are included — this is a guided private excursion, not a chauffeur-only transfer.",
      },
    ],
    relatedExcursionSlugs: ["private-highlights-valletta-mdina", "private-guide-vehicle-full-day", "exclusive-snapshot-of-malta"],
    cruiseSuitability: ["Works well for a standard port day"],
    groupType: "Private — dedicated guide and vehicle for your party only",
    activityLevel: "Easy, supplier listing — pace is set by your chosen itinerary",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/half-day-guide-vehicle/eumlgoguihalf",
      productId: "eumlgoguihalf",
    },
  },
  {
    slug: "private-guide-vehicle-full-day",
    title: "Private Guide & Vehicle — Full Day",
    seoTitle: "Private Full-Day Guide & Vehicle — Custom Malta Shore Excursion",
    metaDescription:
      "A private guide and vehicle for a full day in Malta, for travellers with a long port call and their own list of priorities.",
    category: "Private Guide & Vehicle",
    tagline: "A full day, entirely yours — private guide and vehicle for the longest port calls.",
    duration: "8 Hours",
    pace: "Moderate",
    bestFor: "Travellers with a long port call who want a private, fully flexible day covering more ground than a half-day allows",
    overview:
      "Private Guide & Vehicle — Full Day is the same open-format concept as the half-day version, extended to a full eight hours for longer calls. It suits travellers who want to combine several of Malta's regions — the capitals, the south coast, Gozo logistics permitting — into one privately guided day rather than choosing a single themed excursion.",
    body: [
      "With eight hours rather than four, this product can realistically stretch across more of the island than the half-day version — potentially combining Valletta and Mdina with a coastal stop such as the Blue Grotto or Marsaxlokk, depending on what you and your guide plan together.",
      "As with the half-day product, there's no fixed itinerary — the value here is a dedicated guide and vehicle shaping the day entirely around your interests, rather than a themed tour built for a general audience. That flexibility is most useful when you already have a reasonably clear sense of your priorities going in.",
      "Do not confuse this with the half-day guide and vehicle product above — they are separate listings with separate durations and pricing, and this full-day version is the one to book if your port call genuinely supports an eight-hour private day.",
      "Because a full day away from the ship carries more return-timing risk than a shorter excursion, build a realistic buffer into your plan with your guide from the outset, particularly if any part of the day involves travel to Malta's south coast or further afield.",
    ],
    highlights: [
      "Fully private guide and vehicle for a full eight-hour day",
      "Enough time to combine multiple regions of Malta",
      "Route built entirely around your own priorities",
      "No group pacing or shared schedule",
    ],
    included: ["Private licensed guide", "Private vehicle for your party", "Route planned around your stated priorities for the full day"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Use the extra time to combine regions rather than over-visiting one place — Malta rewards variety across a full day",
      "Discuss a firm return buffer with your guide given the length of the day",
      "This is a distinct product from the half-day guide and vehicle excursion — check duration and price carefully before booking",
      "Check current price on the supplier listing",
    ],
    faqs: [
      {
        question: "How is this different from the half-day private product?",
        answer:
          "They are separate listings — this one covers a full eight-hour day and is priced accordingly, while the other covers four hours. Choose based on how much time your port call genuinely allows.",
      },
      {
        question: "Can we include Gozo in this private day?",
        answer:
          "Gozo requires a ferry crossing and adds meaningful travel time, so discuss this specifically with your guide when planning the day rather than assuming it fits alongside mainland Malta sightseeing.",
      },
      {
        question: "Is a full day too long for a private tour?",
        answer:
          "Not if your port call supports it, but treat this as a excursion for longer calls — build in a generous return buffer given the extended time away from the ship.",
      },
    ],
    relatedExcursionSlugs: ["private-guide-vehicle-half-day", "private-highlights-valletta-mdina", "gozo-with-a-difference"],
    cruiseSuitability: ["Better for longer calls"],
    groupType: "Private — dedicated guide and vehicle for your party only",
    activityLevel: "Moderate, supplier listing — pace is set by your chosen itinerary",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/guide-vehicle-full-day/eumlgoguifull",
      productId: "eumlgoguifull",
    },
  },
  {
    slug: "gozo-with-a-difference",
    title: "Gozo With a Difference",
    seoTitle: "Gozo With a Difference Shore Excursion — Full-Day Trip from Malta Cruise Port",
    metaDescription:
      "A full-day Gozo excursion covering Ggantija, Victoria's Citadel and Marsalforn — with ferry-timing warnings for shorter calls.",
    category: "Gozo",
    tagline: "Malta's quieter sister island, given a full day — but only when your port call has the hours to spare.",
    duration: "8 Hours",
    pace: "Moderate",
    bestFor: "Travellers with a long port call who want to see Gozo properly rather than rush it",
    overview:
      "Gozo With a Difference is our pick for the best full-day adventure in the collection, but it comes with a genuine caveat: Gozo sits across a ferry crossing from mainland Malta, and this excursion only works on port calls with enough hours to absorb that transfer comfortably. Read the logistics below carefully before booking.",
    body: [
      "Gozo is Malta's smaller, quieter sister island, reached from the mainland by ferry, and its slower pace and greener landscape make it feel distinct from Valletta or Mdina despite the short crossing. This excursion is built around a full day there rather than a fleeting glimpse, with lunch included as part of the itinerary.",
      "The confirmed stops include Ġgantija, one of the world's oldest free-standing temple complexes and older even than Malta's mainland sites; a ride on the trackless train around Marsalforn, a relaxed way to see the coastal town without a long walking circuit; a Crafts Center showcasing local Gozitan artisan work; and the Citadel in Victoria (Rabat), Gozo's fortified hilltop old town with views across most of the island.",
      "We want to be direct about the logistics: this is a full eight-hour day that depends on ferry crossings and transfer timing at both ends, and it is not a suitable choice for a short call. If your ship is in port for a standard six-to-seven-hour window, the ferry alone can consume a meaningful share of that time before you've seen anything on Gozo itself.",
      "If Gozo appeals but your call is shorter, or you'd simply prefer a different published itinerary on the island, the supplier also lists a separate Discover Gozo tour running around nine hours — worth comparing stop-by-stop against this route before deciding. Either way, check your ship's confirmed all-aboard time against the excursion's stated return before booking either Gozo product.",
    ],
    highlights: [
      "Ġgantija prehistoric temple complex",
      "Trackless train ride around Marsalforn",
      "Local Crafts Center visit",
      "Victoria's Citadel and island views",
      "Lunch included",
    ],
    included: ["Licensed guide", "Ferry transfer to and from Gozo", "Lunch", "Ġgantija, Marsalforn train, Crafts Center and Citadel visits"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only book this on a genuinely long port call — the ferry crossing at both ends adds meaningful time beyond the eight hours on Gozo itself",
      "Confirm your ship's exact all-aboard time against the excursion's stated return before booking",
      "If your call is shorter, consider a mainland excursion instead of risking a tight return from Gozo",
      "Compare against the supplier's separate Discover Gozo tour (around nine hours) if this itinerary's stops don't match your interests",
      "Check current price on the supplier listing",
    ],
    faqs: [
      {
        question: "Is this suitable for a short port call?",
        answer:
          "No. This is an eight-hour excursion that also depends on ferry crossings at both ends, so it needs a long port day with a comfortable return margin — not a standard six-to-seven-hour call.",
      },
      {
        question: "What's the difference between this and the supplier's Discover Gozo tour?",
        answer:
          "They are separate listed products with different durations and itineraries — this one runs around eight hours with lunch, Ġgantija, the Marsalforn train, a Crafts Center visit and the Citadel; compare the published stops on Discover Gozo if you want a different combination.",
      },
      {
        question: "What happens if the ferry is delayed?",
        answer:
          "Ferry timing is outside the tour operator's direct control, which is exactly why we recommend this only for longer calls with a generous buffer before your ship's all-aboard time.",
      },
    ],
    relatedExcursionSlugs: ["private-guide-vehicle-full-day", "the-three-cities", "exclusive-snapshot-of-malta"],
    editorialBadge: "Best Full-Day Adventure",
    whyRecommend:
      "It's the most complete way to see Gozo in a single day, but we recommend it specifically and only for passengers whose port call genuinely has the hours to absorb the ferry crossing safely.",
    cruiseSuitability: ["Better for longer calls", "Requires careful return planning"],
    groupType: "Standard group tour",
    foodInclusion: "Lunch included, supplier states",
    keyLocations: ["Ġgantija", "Marsalforn (trackless train)", "Crafts Center", "Victoria's Citadel, Gozo"],
    activityLevel: "Moderate, supplier listing",
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/gozo-with-a-difference/eumlscengoz",
      productId: "eumlscengoz",
      notes: "Supplier also lists a separate Discover Gozo tour (approx. 9 hours, productId eumldiscgoz) with its own itinerary",
    },
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((excursion) => excursion.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((excursion) => excursion.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.featured);
}
