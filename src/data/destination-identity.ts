export type LogoConcept = "harbour-fortress" | "harbour-m";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

/**
 * World 2.0 destination identity — controlled centrally for logo, accent and strapline.
 * Compatible with the Málaga prototype architecture for future network migration.
 */
export const destinationIdentity = {
  destination: "Malta",
  descriptor: "Shore Excursions",
  strapline: "Islands of Knights and Fortresses",
  accessibleName: "Malta Shore Excursions",
  accent: "fortress-red",
  logoConcept: "harbour-fortress" as LogoConcept,
  iconStyle: "harbour-fortress",
} as const;
