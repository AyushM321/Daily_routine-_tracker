# DailyX

## Version v1.4

DailyX is a mobile-first personal productivity PWA for routines, deadlines, streaks and progress.

### v1.4 — UI Polish + Animation

This release adds subtle, performance-friendly UI polish and animations without changing the existing data model or core workflows.

- Smoother page entrance
- Press/hover feedback on controls
- Animated date cards
- Smoother task/deadline appearance
- Animated completion check
- Smoother modal opening
- Refined visual transitions

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

If the old cached version remains, close the installed PWA completely and reopen it. The v1.4 service-worker cache is named `dailyx-v13`.

## Developer

**AyushXO**

Discipline. Consistency. Progress.


### v1.4 — 80% Streak System
80%+ completion counts as a successful day; one sub-80% day becomes cold fire (🥶), the next successful day starts a new streak, and two consecutive sub-80% days reset the current streak. Best streak is preserved.
