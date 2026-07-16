# Mallen Excavating — Real Client Site

## What this is
A real website (not a demo) for Mallen Excavating, owned by Wayne Mallen
(Nicole's father-in-law), Poughkeepsie, NY. Family business since 1974.
This is the practice/first build for [[project-smart-sites-venture]] before
Nicole sells this model to strangers — but it's for a real relative's real
business, so content must stay accurate, not fabricated.

## Business facts (source of truth: src/lib/business.ts)
- Owner: Wayne Mallen. Phone (845) 471-3457. Email tuney443@aol.com.
- Founded 1974, Poughkeepsie NY, serves the Hudson Valley.
- Services: septic systems, water/sewer hookups, basement waterproofing,
  drainage, grading/topsoil, land clearing, driveways, general site work.
- Real reviews used verbatim: Dan Schmitt (Facebook, 2020), Lizzy Savino
  (Google). Gary Poole and John Hyla have 5-star ratings with no review text
  — shown as rating-only chips, never given fabricated quotes.
- Domain mallenexcavating.com is UNREGISTERED as of 2026-07-16 (verified via
  whois) — worth grabbing before pitching this live.

## Known placeholder gap
All photography is verified-working Unsplash stock (construction/excavation
themed), NOT Wayne's real jobsite photos. Nicole has 5 real photos (truck,
septic trench, topsoil pile, waterproofing trench, truck+trailer) that need
to be saved as files and swapped into src/lib/images.ts — that file is the
single place image URLs live, so swapping real photos in is a quick, isolated
change once the files exist on disk.

## Build principles
- Same stack/design system as the gregs-air-demo practice project this was
  forked from: Next.js 16 (Turbopack) + TypeScript + Tailwind v4 + Framer
  Motion + lucide-react. Charcoal/white/safety-orange palette.
- Never fabricate review text, job counts, or stats not confirmed by Nicole.
  When real data isn't available, use a truthful/vague stat or omit it.
- `npm run dev` may fail if node_modules/.bin symlinks break after a folder
  copy (happened once — `.bin/next` got flattened into a real file instead
  of a symlink). Fix: `rm node_modules/.bin/next && ln -s ../next/dist/bin/next node_modules/.bin/next`.

## Next steps
1. Nicole drops Wayne's real photos into the project; swap into images.ts.
2. Decide on logo (none currently — using a Truck icon + wordmark).
3. Register mallenexcavating.com if Wayne wants to go live.
4. Show Wayne the site before treating this as "done" — he may want to
   correct or add services/areas we guessed reasonably but didn't confirm.
