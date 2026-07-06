## Make footer social icons share the current page

Currently the four icons in the footer (Instagram, Facebook, X/Twitter, Mail) in `src/components/SiteChrome.tsx` all point to `href="#"`. I'll convert them into working share buttons for the page the visitor is on.

### Behaviour per icon
- **Facebook** — opens `https://www.facebook.com/sharer/sharer.php?u=<current URL>` in a new tab.
- **X (Twitter)** — opens `https://twitter.com/intent/tweet?url=<current URL>&text=<page title>` in a new tab.
- **Mail** — opens `mailto:?subject=<page title>&body=<current URL>` so the visitor's mail app pre-fills a share email.
- **Instagram** — Instagram has no web share URL. On mobile devices that support it, use the native `navigator.share({ url, title })` sheet (which includes Instagram if installed). On desktop, copy the URL to the clipboard and show a small "Link copied — paste into Instagram" toast, since desktop Instagram can't accept a link share.

### Implementation details (in `SiteChrome.tsx` only)
- Replace the `<a href="#">` icons with `<button>`s that read `window.location.href` and `document.title` at click time (so it always shares the page the visitor is on, and works with client-side navigation).
- Add `target="_blank"` + `rel="noopener noreferrer"` semantics for the popup shares.
- Add a lightweight inline toast (absolutely positioned above the footer) for the Instagram/clipboard case — 2s auto-dismiss, matching gold-on-midnight styling. No new dependencies.
- Keep the existing icon SVGs, colours, spacing, and hover styles unchanged.
- Wrap `window`/`navigator` access in guards so SSR doesn't crash.

### Verification
Per your request, I'll stop after the code change so you can test:
1. Click Facebook → new tab opens Facebook's share dialog with the current page URL.
2. Click X → new tab opens the tweet composer with URL + page title.
3. Click Mail → mail client opens with subject + URL.
4. Click Instagram → on desktop, "Link copied" toast; on mobile, native share sheet.

No content, layout, routing, or other components change.