# DailyX

## Version v1.5

DailyX is a mobile-first personal productivity PWA for routines, deadlines, streaks, progress and statistics.

### v1.5 — Version History

This release adds the version-history section requested for the Statistics page while preserving the existing v1.4 functionality.

- Added a **Version 1.5** update-history card at the bottom of the Statistics page.
- The card describes the changes introduced in the current version.
- Existing 80% streak/cold-fire rules remain unchanged.
- Existing Statistics & Dashboard, routines, deadlines, copy-task functionality and saved Local Storage data remain unchanged.
- Future updates continue the version sequence automatically: v1.6, v1.7, v1.8, etc.

### Version history rule

For every future app update, increment the app version automatically:

`v1.4 → v1.5 → v1.6 → v1.7 ...`

The Statistics page's version-history section should always identify the current version and describe that version's changes.

### Data safety

The app continues using the existing `routineV3` Local Storage key. The statistics and version-history UI does not intentionally reset or migrate saved routines.

### Existing features

- DailyX branding
- Date selection
- Daily routines
- Weekly recurring routines
- Date-only routines
- Deadline management
- Progress tracking
- 80% streak tracking
- Copy weekly tasks
- Statistics & Dashboard
- Version history
- PWA installation
- Service-worker caching
- `Made by AyushXO 😅` footer

## Files

Keep the existing icon files from the repository:

- `icon.svg`
- `icon-192.png`
- `icon-512.png`

The main app files are:

- `index.html`
- `manifest.json`
- `sw.js`
- `README.md`

## GitHub Pages

1. Open the repository.
2. Upload/replace the four files above in the repository root.
3. Commit the changes.
4. Wait for GitHub Pages to deploy.
5. Reopen/reload the DailyX PWA.

If the old cached version remains, close the installed PWA completely and reopen it.

## Developer

**AyushXO**

Discipline. Consistency. Progress.
