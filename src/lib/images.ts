export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img("hero-home", "Valletta's Grand Harbour and fortress walls — gateway to Malta from the cruise port"),
  ogDefault: img("og-default", "Malta cruise planning — Valletta, Mdina, the Three Cities and Gozo from the cruise port"),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Malta Shore Excursions",
  },
  port: img("cruise-port", "Malta cruise port beside Valletta's fortifications"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "hero-home": img("hero-home", "Grand Harbour and Valletta's bastions from the water"),
  valletta: img("valletta", "Valletta's fortress streets and Upper Barrakka Gardens"),
  mdina: img("mdina", "Mdina's walled Silent City streets"),
  "three-cities": img("three-cities", "Vittoriosa and the Three Cities across Grand Harbour"),
  "blue-grotto": img("blue-grotto", "The Blue Grotto sea caves on Malta's south coast"),
  marsaxlokk: img("marsaxlokk", "Painted luzzu fishing boats at Marsaxlokk harbour"),
  gozo: img("gozo", "Victoria's Citadel overlooking Gozo"),
  temples: img("temples", "Malta's prehistoric temple ruins"),
  food: img("food", "Maltese street food and market culture in Valletta"),
  harbour: img("harbour", "Grand Harbour and Marsamxett Harbour seen from the water"),
  fortifications: img("fortifications", "The Knights' fortress walls guarding Valletta"),
  walking: img("walking", "Walking Malta's old town streets from the cruise terminal"),
  compare: img("compare", "Comparing Malta shore excursion options from the cruise port"),
  family: img("family", "Family exploring Malta's fortress cities from a cruise ship"),
  private: img("private", "Private Malta shore excursion with a dedicated guide and vehicle"),
  "war-history": img("war-history", "Malta's Knights and wartime fortress history"),
  "cruise-port": img("cruise-port", "Malta cruise port terminal beside Valletta"),
  "og-default": img("og-default", "Malta shore excursion planning from the cruise port"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "exclusive-snapshot-of-malta": "valletta",
  "malta-hop-on-hop-off-bus": "walking",
  "two-harbours-cruise": "harbour",
  "the-three-cities": "three-cities",
  "blue-grotto-and-marsaxlokk": "blue-grotto",
  "medieval-mdina": "mdina",
  "prehistoric-temples-and-views": "temples",
  "valletta-street-food-tasting-walk": "food",
  "private-highlights-valletta-mdina": "private",
  "private-guide-vehicle-half-day": "private",
  "private-guide-vehicle-full-day": "private",
  "gozo-with-a-difference": "gozo",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "valletta");
}

export const excursionsHubImage = pick("valletta");

const highlightImageKeys: Record<string, string> = {
  "valletta-from-malta-cruise-port": "valletta",
  "mdina-shore-excursion-guide": "mdina",
  "three-cities-from-malta": "three-cities",
  "blue-grotto-from-malta": "blue-grotto",
  "gozo-from-malta-cruise-port": "gozo",
};

const comparisonImageKeys: Record<string, string> = {
  "valletta-or-mdina": "compare",
  "private-tour-vs-group-tour": "private",
  "best-malta-shore-excursion": "fortifications",
  "one-day-in-valletta": "walking",
  "is-gozo-worth-it": "gozo",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "fortifications");
}

export function getGuideImage(key: string): SiteImage {
  return pick(key in subjectImages ? key : "fortifications");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("valletta");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("harbour");
}

export const guidesHubImage = pick("fortifications");
