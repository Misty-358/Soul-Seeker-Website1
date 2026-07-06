
## Mobile responsive redesign — Option B

Make the site work correctly on phones without changing the desktop design. All work is presentational (CSS + JSX classes); no content, routes, or business logic change.

### 1. Header / navigation (`src/components/SiteChrome.tsx`)
- Add a hamburger button that appears under the `lg` breakpoint. Tapping it opens a full-width drawer with the same 7 nav links, styled to match (gold-on-midnight).
- Auto-close drawer on route change; lock body scroll while open.
- Shrink the header on mobile: logo image 40px (was 56), wordmark scales via `clamp(16px, 4vw, 22px)`, tighter horizontal padding.
- Footer: smaller type + tighter gaps on mobile; hide the star separators between links on phones so it wraps cleanly.

### 2. Global mobile CSS (`src/styles.css`)
Add one small `@media (max-width: 767px)` block that:
- Sets `html, body { overflow-x: hidden }` and `img { max-width: 100% }` to kill any horizontal scroll.
- Collapses the big fixed section padding (`px-10`) to `1rem` on section wrappers.
- Forces every layout grid using arbitrary column templates (`grid-cols-[...]`) plus `grid-cols-2` / `grid-cols-3` to a single column on phones. Ornamental SVGs are unaffected (they use `viewBox`, not CSS grid).
- Provides utility classes `ss-h1-mobile`, `ss-h2-mobile`, `ss-lead-mobile` that clamp the large inline `fontSize: 68/44/82/22` headings down to readable sizes.
- `ss-decor-mobile` to hide the absolutely-positioned moon backdrop on Introduction.
- `ss-top-mobile` to reduce the `pt-36` hero top padding on phones.

### 3. Route files — add mobile helper classes only
No structural rewrites. Just tag existing headings and sections with the utility classes above:

- **`src/routes/index.tsx`** — hero section: change `px-10` → `px-4 sm:px-6 lg:px-10`, add `ss-top-mobile`, tag H1 with `ss-h1-mobile`, tag intro paragraph with `ss-lead-mobile`, tag inner H2 with `ss-h2-mobile`.
- **`src/routes/features.tsx`** — same padding change; H1 gets `ss-h1-mobile`; the features 3-column grid keeps its classes (global CSS collapses to 1 col on phones, and I'll add `sm:grid-cols-2 lg:grid-cols-3` so tablets get 2 columns); side arch image gets `ss-decor-mobile` or a responsive width.
- **`src/routes/introduction.tsx`** — same padding change; H1 (`fontSize: 82`) gets `ss-h1-mobile`; moon backdrop gets `ss-decor-mobile`; inline `width: 360`, `width: 200` images get responsive max-widths.
- **`src/routes/about.tsx`** — same padding + heading tagging pass. The many decorative SVG mandalas remain as-is (they scale with their containers).
- **`src/routes/contact.tsx`** — mostly already responsive; reduce panel padding on mobile (`p-8` → `p-5 sm:p-8`), stack the two panels (already `md:grid-cols-[...]`).

### 4. Verification
- Flush HMR after edits.
- Set preview viewport to mobile, then to desktop, and screenshot the Home, Features, Introduction, About and Contact pages to confirm: no horizontal scroll, hamburger works, text is readable, sections stack cleanly, desktop still looks identical.
- Per your standing rule, leave the preview on desktop pop-out at the end.

### What I won't touch
- Any copy or content.
- The ornamental SVG artwork (starfields, mandalas, emblems) — they already scale.
- Colours, fonts, or brand tokens.
- Backend / routing / server functions.

Approve this and I'll implement it in one pass.
