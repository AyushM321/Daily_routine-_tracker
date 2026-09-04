# DailyX v1.9

Personal mobile-first Progressive Web App for daily routines, tasks, deadlines, progress, streaks and statistics.

## V1.9 — UI polish + animations

- Added smoother page, card, button and modal animations.
- Polished task, deadline, progress and statistics interactions.
- Added subtle staggered entrance motion for lists and dashboard cards.
- Improved focus, press and hover feedback without changing functionality.
- Added reduced-motion support for accessibility.
- Preserved existing routines, deadlines, 80% streak/cold-fire behavior, statistics, copy tasks and Local Storage data.

## Version system

`version.js` is the single source of truth for the app version.

Current version:

`const APP_VERSION = 'v1.9';`

Both the main page and Statistics page read this shared value.

## PWA cache

The service worker cache is `dailyx-v19`. App-shell files use network-first loading so GitHub Pages updates are less likely to remain stuck on an older cached version.

## Files

Upload/replace these files in the repository root:
- `index.html`
- `manifest.json`
- `sw.js`
- `version.js`
- `README.md`

Keep your existing repository icon files (`icon.svg`, `icon-192.png`, `icon-512.png`).

## GitHub Pages

1. Upload/replace the five files above in the repository root.
2. Commit the changes.
3. Wait for GitHub Pages to deploy.
4. Reload DailyX.
5. If an installed PWA still shows the previous version, close it completely and reopen it after the deployment is live.

## Developer

**AyushXO**

Discipline. Consistency. Progress.
