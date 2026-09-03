# DailyX

## Version v1.2

DailyX is a mobile-first personal productivity PWA for routines, deadlines, streaks and progress.

### v1.2 — Statistics & Dashboard

This release adds a dedicated **Statistics** screen.

Open it from the **☰ menu button** on the Home screen.

It includes:

- Current streak
- Best streak
- Total recorded task completions
- Overall completion rate
- Last 7 days productivity chart
- Overall progress ring
- Total routine schedules
- Weekly routine count
- Date-only routine count
- Upcoming deadline count

### Data safety

The app continues using the existing `routineV3` Local Storage key. The v1.2 statistics feature reads the existing routine and completion data; it does not intentionally reset or migrate your saved routines.

Existing features remain:

- DailyX branding
- Date selection
- Daily routines
- Weekly recurring routines
- Date-only routines
- Deadline management
- Progress tracking
- Streak tracking
- Copy weekly tasks
- PWA installation
- Service-worker caching
- `Made by AyushXO 😅` footer

## Files

Keep the existing icon files from your repository:

- `icon.svg`
- `icon-192.png`
- `icon-512.png`

Replace these files with the v1.2 versions:

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

If the old cached version remains, close the installed PWA completely and reopen it. The v1.2 service-worker cache is named `dailyx-v12`.

## Developer

**AyushXO**

Discipline. Consistency. Progress.
