# DailyX

## Version v1.8

DailyX is a mobile-first personal productivity PWA for routines, deadlines, streaks, progress and statistics.

### v1.8 — Shared Version Source + PWA Update Fix

- Main page and Statistics page now read the same version value.
- Added `version.js` as the single source of truth for the app version.
- Main page displays the shared `APP_VERSION`.
- Statistics Version History title displays the same shared version.
- Updated the service-worker cache to `dailyx-v18`.
- App-shell files use network-first loading so GitHub Pages updates are less likely to remain stuck on an older cached version.
- Preserved existing routines, deadlines, 80% streak/cold-fire behavior, statistics, copy-task functionality and Local Storage data.

### Future version rule

For the next release, change only this line in `version.js`:

`const APP_VERSION = 'v1.9';`

Both the main page and Statistics page will then show v1.9 automatically.

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
