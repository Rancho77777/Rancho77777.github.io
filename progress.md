# Project progress

## 2026-07-15

- Created a Vite + vanilla JavaScript static academic laboratory homepage framework.
- Added lab introduction, research directions, team member cards, member detail pages, About sections, and photo wall placeholders.
- Added responsive styling and local development instructions.
- First content pass: retained the restrained academic visual system while shifting the fictional member profiles toward adult, private-life and interpersonal themes with non-explicit language.
- Restructured navigation into separate hash-routed pages: Lab, People, Research, Contact, plus individual member pages.
- Replaced each member's static photo grid with a right-to-left looping photo flow and added per-member folders under `public/images/` for future images.
- Expanded each member into an independent mini-site with its own top navigation and separate `About` / `Photo Wall` routes. The photo wall is now a three-row justified horizontal gallery with per-image aspect-ratio sizing.
- Added site-wide English/Chinese language switching with localStorage persistence; interface labels and all lab/member content now use bilingual data objects.
- Slowed the Photo Wall marquee timings and distributed Elena's photo list across three rows without cross-row repetition.
- Renamed `elena-rossi` to `yin-yiguo`, updated her bilingual profile to a Nanjing University of Science and Technology / Tencent WXG background, and reformatted `src/data.js` with more line breaks for easier manual editing.
- Reworked member media into `avatar/`, `credentials/`, and `photos/` subfolders, added avatar hover-image support and credential-image sequencing, and moved Yin Yiguo's existing wall images into `public/images/yin-yiguo/photos/`.
- Converted the site from a fictional lab homepage into a single-person bilingual homepage for Yin Yiguo, removing lab/team/research/contact navigation in favor of Home / About / Personal Information / Photo Wall.
- Removed the English/Chinese toggle from the live site and fixed the personal homepage to Chinese-only rendering while keeping the underlying data objects compatible.
- Network-downloaded content: npm packages were downloaded from the configured npm registry during `npm install` and are stored locally under `node_modules/`; the npm cache used for this install is `.npm-cache/`. The package manifest and lockfile record exact package versions and registry metadata. Vite is an MIT-licensed open-source build tool; transitive package licenses are documented by each package in `node_modules/<package>/LICENSE*` and package metadata.
- Runtime external reference: `src/styles.css` imports Google Fonts from `https://fonts.googleapis.com/` and `https://fonts.gstatic.com/`; no font files are bundled locally, and the page falls back to local system fonts if unavailable.
- Source/origin URL: project scaffold is original local work. Dependency origin is the npm registry configured in the local npm environment; no external repository or image source was used.
- License/access policy: project scaffold is original local work. Third-party dependency licenses follow their package metadata; no third-party images or editorial content are bundled.

## 2026-07-16

- Added search-engine metadata for 尹伊果, 南京理工大学, 腾讯 WXG, and 产品经理 keywords, including a descriptive title, description, Open Graph tags, author/robots metadata, and Person structured data.
- Added crawlable semantic fallback content to the initial HTML so key identity and affiliation text is present before JavaScript renders the interface.
- Added `public/robots.txt` allowing standard crawlers to access the public site.
- Unified author, creator, publisher, copyright holder, package author, footer copyright, and project documentation attribution as 尹伊果本人.
- Removed the homepage personal-overview section, renamed the About navigation label to 概览, and assigned 4:3 homepage avatars plus square overview-page avatars to the two existing avatar images.
- Organized image assets for the single-person site: removed unused member folders and split Yin Yiguo's avatar assets into separate `home` and `overview` folders.
- Fixed the avatar data paths and removed unused laboratory, research, and legacy member records from `src/data.js`.
- Removed all English content and bilingual wrappers from `src/data.js`; the site data is now Chinese-only.
