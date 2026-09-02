# Daily Routine v0.9

A dark, mobile-friendly daily routine and deadline tracker.

## v0.9 update
- Updated app version from v0.8 to v0.9.
- The Deadlines and Progress panels stay in the same responsive grid row.
- The Progress panel now adapts its typography to the panel's available height: when the panel becomes taller, the Progress label and percentage scale up; when it becomes shorter, they scale down.
- Removed the old progress bar; only the Progress label and percentage are shown.
- Service-worker cache bumped to `daily-routine-v09` so GitHub Pages can pick up the new app version.
- Existing app data and icons are preserved.

## GitHub Pages upload
Upload/replace the files in this folder at the root of your repository:

- `index.html`
- `sw.js`
- `manifest.json`
- `icon.svg`
- `icon-192.png`
- `icon-512.png`

After uploading, open the GitHub Pages site and refresh it. If an older cached version is still visible, close the installed PWA/browser tab and reopen the site once so the v0.9 service worker can activate.
