# Malta Shore Excursions

World 2.0 editorial cruise planning site for **maltashoreexcursion.com** (singular domain).

## Positioning

Fortress cities, silent streets and 7,000 years of history.
Islands of Knights and Fortresses.

## Domain rule

Canonical domain is always `https://maltashoreexcursion.com` — never the plural form.

## Destination identity

- Config: `src/data/destination-identity.ts`
- Component: `src/components/DestinationLogo.tsx`
- Active mark: `logoConcept: "harbour-fortress"`
- Variants: `full` | `compact` | `mark`

## Key paths

- Homepage: `src/app/page.tsx`
- Flat editorial: `src/app/[slug]/page.tsx` + `src/data/editorial-pages.ts`
- Excursions: `/shore-excursions/[slug]`
- Data: `src/data/`

## Regenerate

```bash
npm run download:images
npm run build
npm run check-links
npm run seo-qa
```
