#!/usr/bin/env node
/**
 * Download Malta images from Wikimedia Commons (CC-licensed).
 */
import { writeFileSync, mkdirSync, readFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA = "MaltaShoreExcursions/1.0 (https://maltashoreexcursion.com; image setup)";

/** Unique primary subjects — avoid generic beaches. */
const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Valletta Grand Harbour from Upper Barrakka Gardens.jpg",
    "File:Grand harbour 2019-04-11-6.jpg",
    "File:Valletta skyline (cropped).jpg",
  ],
  "og-default.jpg": [
    "File:Valletta Grand Harbour from Upper Barrakka Gardens.jpg",
    "File:Malta - Valletta - Upper Barrakka Gardens 39.jpg",
  ],
  "cruise-port.jpg": [
    "File:Valletta Cruise Port, Malta.jpg",
    "File:Valletta Cruise Port.jpg",
  ],
  "valletta.jpg": [
    "File:Malta - Valletta - Upper Barrakka Gardens 39.jpg",
    "File:Malta - Valletta - Republic Street & Republic Square.jpg",
    "File:Valletta, Republic Street.jpg",
  ],
  "mdina.jpg": [
    "File:Streets of Mdina 3.jpg",
    "File:Malta - Mdina - Gate+bridge+ditch 01 ies.jpg",
    "File:Panorama of Mdina from Mtarfa.jpg",
  ],
  "three-cities.jpg": [
    "File:Vittoriosa-seafront-grand-harbour-marina.JPG",
    "File:Birgu waterfront & marina.jpg",
    "File:Senglea - Malta.jpg",
  ],
  "blue-grotto.jpg": [
    "File:Malta Blue Grotto BW 2011-10-09 11-08-16.JPG",
    "File:Blue grotto and boat, Malta.jpg",
  ],
  "marsaxlokk.jpg": [
    "File:Luzzu in Marsaxlokk 03.jpg",
    "File:Luzzu in Marsaxlokk 01.jpg",
  ],
  "gozo.jpg": [
    "File:Ciudadela, Victoria, isla de Gozo, Malta, 2021-08-22, DD 22.jpg",
    "File:Templo de Ġgantija, isla de Gozo, Malta, 2021-08-23, DD 37.jpg",
  ],
  "temples.jpg": [
    "File:Complejo de Ħaġar Qim, isla de Malta, Malta, 2021-08-25, DD 63.jpg",
    "File:Templo de Ġgantija, isla de Gozo, Malta, 2021-08-23, DD 37.jpg",
  ],
  "food.jpg": [
    "File:Pastizzi and Kinnie (cropped).JPG",
    "File:Cheese pastizzi and Kinnie Nov 2014.JPG",
  ],
  "harbour.jpg": [
    "File:Grand harbour 2019-04-11-6.jpg",
    "File:Malta - Pietà - Triq Marina - Marsamxett Harbour 19.jpg",
  ],
  "fortifications.jpg": [
    "File:Malta - Valletta - Upper Barrakka Gardens 02.jpg",
    "File:Saluting battery from Upper Barrakka gardens.jpg",
  ],
  "walking.jpg": [
    "File:Malta - Valletta - Republic Street 02.jpg",
    "File:Malta - Valletta - Republic Street & Republic Square.jpg",
  ],
  "compare.jpg": [
    "File:Malta - Mdina - Gate+bridge+ditch 01 ies.jpg",
    "File:Malta - Valletta - Upper Barrakka Gardens 39.jpg",
  ],
  "family.jpg": [
    "File:Malta - Valletta - Upper Barrakka Gardens 05 Elevator.jpg",
    "File:Streets of Mdina 1.jpg",
  ],
  "private.jpg": [
    "File:Malta - Mdina - Gate+bridge+ditch 01 ies.jpg",
    "File:Vittoriosa-seafront-grand-harbour-marina.JPG",
  ],
  "war-history.jpg": [
    "File:Malta - Valletta - St. Elmo Place - National War Museum Fort St. Elmo.jpg",
    "File:Underground Air-Raid Shelters - Malta at War Museum 1.jpg",
  ],
};

async function commonsThumbUrl(title, width = 2400) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", String(width));
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function resolveAndSave(filename, candidates) {
  for (const title of candidates) {
    try {
      const url = await commonsThumbUrl(title);
      if (!url) {
        console.warn(`  no url: ${title}`);
        continue;
      }
      const outPath = join(OUT, filename);
      const srcPath = join(SOURCE, filename);
      const bytes = await download(url, outPath);
      copyFileSync(outPath, srcPath);
      console.log(`✓ ${filename} ← ${title} (${Math.round(bytes / 1024)}KB)`);
      return true;
    } catch (err) {
      console.warn(`  fail ${title}: ${err.message}`);
    }
  }
  console.error(`✗ FAILED ${filename}`);
  return false;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(SOURCE, { recursive: true });

let ok = 0;
for (const [file, candidates] of Object.entries(IMAGE_FILES)) {
  if (await resolveAndSave(file, candidates)) ok++;
}
console.log(`\nDownloaded ${ok}/${Object.keys(IMAGE_FILES).length} images`);
if (ok < Object.keys(IMAGE_FILES).length) process.exit(1);
