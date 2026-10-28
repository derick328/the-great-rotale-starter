# Image inventory and credits

Originals remain unchanged in `The great royale images/` at the repository root. Matching was case-insensitive by basename, with these visually checked aliases: `Homepage` → `home`, `room pic` → `room`. Room categories follow the explicit filenames, not assumptions about amenities.

| Requested image | Original file | Public copy | Use |
| --- | --- | --- | --- |
| home | Homepage.jpg | /images/hotel/home.jpg | Homepage hero |
| logo | logo.jpg | /images/hotel/logo.jpg | Navbar; proportionally resized to src/app/icon.png for favicon |
| room | room pic.jpg | /images/hotel/room.jpg | “Your space to slow down.” |
| Luxury room | Luxury room.jpg | /images/hotel/luxury-room.jpg | Luxury Room, TZS 50,000 per night |
| Deluxe room | Deluxe room.jpg | /images/hotel/deluxe-room.jpg | Deluxe Room, TZS 70,000 per night |
| kisinia | Kisinia.webp | /images/food/kisinia.webp | Featured Kisinia |
| pizza | **Missing: pizza.{jpg,jpeg,png,webp,avif}, case-insensitive** | Existing Unsplash URL retained | Illustrative menu photo |
| Biriani (additional supplied file) | Biriani.jpeg | /images/food/biriani-supplied.jpeg | Temporary illustrative Friday banner; photographer/source unverified |

Hotel, room, Kisinia and logo files are user-supplied hotel assets. Copies retain their original bytes; Next.js optimizes display sizes. The logo uses `object-contain` without cropping. Photographs use CSS `object-cover` and may be cropped to the display frame. The original source directory is never modified.

## Biriani: requested Wikimedia download is blocked

The Commons file page was inspected, and the original JPEG URL was located. The local download failed with `curl: (6) Could not resolve host: upload.wikimedia.org` in this restricted environment. **The Wikimedia photograph is not installed or displayed.** `/images/food/biriani.jpg` has not been fabricated from another image.

The supplied `Biriani.jpeg` is used as an explicitly illustrative interim visual, not as a verified photograph of the hotel's dish. Its provenance is unknown, and the Wikimedia credit/license below does **not** apply to it. This limitation is also disclosed in the visible bilingual photography credits.

### Verified details for the requested replacement

- Title: **Biryani Rice.jpg**
- Photographer: **LuckyRani2990**
- Creator page: https://commons.wikimedia.org/wiki/User:LuckyRani2990
- Source: https://commons.wikimedia.org/wiki/File:Biryani_Rice.jpg
- Original file: https://upload.wikimedia.org/wikipedia/commons/f/f5/Biryani_Rice.jpg
- Original format: JPEG, 3264 × 1952 pixels
- License: **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**
- License URL: https://creativecommons.org/licenses/by-sa/4.0/

When network access is available, download that original file (not a search thumbnail) to `public/images/food/biriani.jpg`, verify its JPEG format, and change `site.images.biriani` in `src/lib/site.ts`. Keep it marked illustrative. In the **visible** Friday caption/photography credits and this documentation, replace the supplied-image statement with the creator, linked Commons source, linked CC BY-SA 4.0 license, and a modification notice, for example:

> “Biryani Rice.jpg” by LuckyRani2990, Wikimedia Commons, CC BY-SA 4.0. Resized, optimized and cropped for display. Illustrative photograph, not the hotel's Biriani. Any adaptations of this photograph are also available under CC BY-SA 4.0.

Translate the explanatory text in the Swahili copy as well. Preserve the original JPEG for download. License any photo adaptations under CC BY-SA 4.0, retain attribution and modification notices, and do not imply photographer endorsement. The photo's license does not relicense unrelated site code or hotel assets.

For the hotel's own replacement, put the confirmed hotel image in `public/images/food/`, update `site.images.biriani`, and update both languages' alt text, caption and credit statements to reflect its actual provenance. Remove the temporary-image wording only after the hotel confirms the photograph is its own.

## Other illustrative photographs retained

The existing pizza, burger and breakfast photos remain illustrative Unsplash assets. Their URLs and source identifiers are unchanged in `src/lib/site.ts`; no claim is made that they depict this hotel's food. They load directly from Unsplash in the browser, using `next/image` with `unoptimized` for that host only. This avoids server-side Unsplash fetch timeouts; the browser still needs access to Unsplash. Local hotel photos continue using Next.js optimization.

- Pizza: https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1300&q=82
- Burgers: https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1300&q=82
- Breakfast (also used in the introduction): https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1300&q=82

The UI includes visible photography credits and translated illustrative alt text. Add real pizza, burger and breakfast images to `public/images/food/`, update their paths in `src/lib/site.ts`, and update captions/credits when replacing them.
