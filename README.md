# THE GREAT ROTALE — Hotel & Restaurant Website

Modern English/Swahili hotel landing page using **Next.js App Router, TypeScript, Tailwind CSS v4, and pnpm**.

## Quick start

Requires Node.js 24.x and pnpm 10.15.0. If pnpm is missing, run `corepack enable` and then `corepack prepare pnpm@10.15.0 --activate` (or `npm install -g pnpm@10.15.0`).

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

Real hotel images are copied from `The great royale images/` into `public/images/hotel/` and `public/images/food/`. The original files remain unchanged. The navbar uses the official logo with its proportions intact; `src/app/icon.png` is a 64 × 64 favicon derived from it. All page photography uses Next.js Image with responsive sizes.

See [the image inventory and credits](docs/image-credits.md) for exact mappings, missing files, provenance and replacement instructions. `Homepage.jpg` supplies the hero; `room pic.jpg` supplies the room feature. The exact room-category filenames supply the matching booking cards.

The requested `pizza` image is missing, so the existing illustrative Unsplash photo remains. Burgers and breakfast are also illustrative. The provided `Biriani.jpeg` is temporarily displayed as an **illustrative image with unverified provenance**. The requested Wikimedia original could not be downloaded in the restricted environment; its verified photographer, source, CC BY-SA 4.0 details and replacement requirements are documented. It is not falsely credited to the supplied file.

## Room inquiries

The homepage navigation and hero link to `#rooms`. `src/lib/site.ts` holds the two categories and rates: Luxury Room at **TZS 50,000 per night**, Deluxe Room at **TZS 70,000 per night**. Each booking button opens a URL-encoded WhatsApp inquiry with that category and rate, asking the team to confirm availability. No amenities, capacity, live availability or payment flow are inferred.

## Language and WhatsApp

Click EN / SW in the navbar to switch languages. Buttons prefill inquiry messages; they **do not** process payments, manage inventory, confirm reservations, or place orders automatically.

## Verification of this update

- Production `pnpm build`: passed (Next.js 15.5.28). Final validation runs from an isolated copy of the same source/assets to avoid concurrent changes to the working site’s `.next` output.
- TypeScript: passed. ESLint: zero errors, one existing anonymous-default-export warning in `postcss.config.mjs`.
- Component render checks passed in English and Swahili, including language/menu event handlers, translated labels, both room prices, all 11 WhatsApp links per language, exact URL-encoded room inquiries, Maps and navigation anchors.
- All seven copied images match the source bytes and decode successfully; all local image references exist. The favicon is generated from the supplied logo.
- Browser viewport, visual layout and keyboard end-to-end checks remain unverified: Chromium cannot launch in this sandbox (`Operation not permitted`). Component handler checks do not substitute for browser testing. Direct browser delivery of the Unsplash photographs cannot be verified without network access.
- The requested original Wikimedia image download remains incomplete because network DNS is unavailable; see [image credits](docs/image-credits.md).

The installed pnpm launcher was version 12.15.0, while this project still pins 10.15.0. For validation only, automatic package-manager downloads were disabled with `npm_config_manage_package_manager_versions=false`, and a temporary `pnpm-workspace.yaml` set `verifyDepsBeforeRun: false` to prevent pnpm 12's automatic pre-script install. That temporary file was removed. Dependencies and the lockfile were not changed or reinstalled.

## Local development network

`next.config.ts` allows the development origin `192.168.0.189`, matching the reported local network address. Update that entry if your computer's IP changes, then restart `pnpm run dev` and reload the page. This setting only applies to development.

The pnpm message about running through Node.js is a launcher warning: the supplied log shows the dev server starts successfully. It is separate from the Unsplash image timeouts and does not require changing project dependencies.

## Deployment to Vercel

1. Push the project to GitHub, GitLab, or Bitbucket, including `pnpm-lock.yaml` and `vercel.json`.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Set **Root Directory** to the folder containing this `package.json`. Leave it at the repository root if this folder is the whole repository.
4. Use the **Next.js** framework preset and leave the build, install, and output directory overrides disabled. The committed `vercel.json` configures installation and building; `package.json` selects Node.js 24.x and pnpm 10.15.0 through Corepack.
5. Click **Deploy** and open the resulting URL. Check the EN / SW switch, WhatsApp inquiry buttons, and Maps link.

No API keys or application environment variables are required. The existing DM Sans and Playfair Display Latin fonts are bundled locally with their SIL Open Font License notices in `public/fonts/`, so fonts no longer require build-time downloads. Pizza, burger and breakfast photographs load directly from Unsplash in the browser to avoid server-side fetch timeouts. Local photos still use Next.js optimization; failed photo requests display a descriptive fallback.

Vercel installs dependencies with `corepack pnpm install --frozen-lockfile` and builds with `corepack pnpm build`. Keep the lockfile committed whenever dependencies change. Vercel manages serving the application; no custom start command or static export is needed. See [Vercel's Next.js documentation](https://vercel.com/docs/frameworks/full-stack/nextjs).

## Launch checklist

- Confirm final brand spelling (**ROTALE** vs Maps **ROYALE**)
- Replace remaining illustrative food photos with confirmed hotel images or documented licensed media
- Complete the Wikimedia Biriani download and visible CC BY-SA credit if using that replacement
- Confirm published room rates remain current
- Confirm exact Kisinia / Friday Biriani presentation and pricing
- Test WhatsApp flows and Google Maps with the hotel owner
- Add hotel policies / operating hours as provided
