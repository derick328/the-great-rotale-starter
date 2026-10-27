# THE GREAT ROTALE — Hotel & Restaurant Website

Modern English/Swahili hotel landing page using **Next.js App Router, TypeScript, Tailwind CSS v4, and pnpm**.

## Quick start

Requires Node.js 20.9+ and pnpm. If pnpm is missing, run `corepack enable` and then `corepack prepare pnpm@10.15.0 --activate` (or `npm install -g pnpm`).

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. For production:

```bash
pnpm build
pnpm start
```

## Customize hotel details

Edit `src/lib/site.ts` for the WhatsApp number, name, Maps link, and image paths.

The phone number is set to Tanzania **0763048068**, converted to **255763048068** for WhatsApp's wa.me URL.

The Maps link you supplied points to a Google listing displayed as **THE GREAT ROYALE** (different from the requested **ROTALE**). Confirm spelling before launching.

## Images / logo

The starter uses remote **illustrative Unsplash photos**; they are not images of the actual hotel or guaranteed depictions of the named dishes. Put the real images in `public/images` with these filenames, and update the corresponding image paths in `src/lib/site.ts`:

- `hotel-hero.jpg` — hero / building image
- `room.jpg` — actual room photo
- `kisinia.jpg` — actual Kisinia
- `pizza.jpg` — actual pizza
- `biriani.jpg` — Ijumaa Biriani
- `burger.jpg` — burger
- `breakfast.jpg` — breakfast / dining

These are **temporary sample images** and should be replaced with actual hotel photography before public launch, particularly rooms, Kisinia and pizza. The current brand lockup is text + a letter R rather than the hotel's official logo. Replace the logo in `src/components/hotel-site.tsx` when the real artwork arrives.

## Language and WhatsApp

Click EN / SW in the navbar to switch languages. Buttons prefill inquiry messages; they **do not** process payments, manage inventory, confirm reservations, or place orders automatically.

## Deployment to Vercel

Push this folder to GitHub, import the repository in Vercel, set Framework Preset to **Next.js** and Install Command to `pnpm install` if needed. Vercel can detect pnpm from `packageManager` or the pnpm lockfile. No API keys or environment variables required.

## Launch checklist

- Confirm final brand spelling (**ROTALE** vs Maps **ROYALE**)
- Replace all temporary photos with real or appropriately licensed media
- Insert official logo
- Confirm which room types/prices to show (currently no rates are invented)
- Confirm exact Kisinia / Friday Biriani presentation and pricing
- Test WhatsApp flows and Google Maps with the hotel owner
- Add hotel policies / operating hours as provided
