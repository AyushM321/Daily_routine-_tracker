# 📅 Daily Routine Tracker

A simple, modern, mobile-friendly **Daily Routine Tracker** designed to help you organize daily tasks, track progress, manage deadlines, and build consistency.

> **Current Version: v0.5**

## ✨ Features

### 📅 Daily Date Selection
- View routines for different dates.
- Use the date selector to move between days.
- The selected date is highlighted.
- The app distinguishes the actual current date from other selected dates.

### ✅ Daily Routines
- Add daily tasks and routines.
- Mark routines as completed.
- Edit or delete routines.
- Support recurring weekly routines.
- Keep routines organized by date and time.

### 📊 Progress Tracking
- Shows completion progress as a percentage.
- Progress updates automatically when tasks are completed.
- Clean, minimal progress display.

### 🎯 Deadlines
- Add important deadlines separately from daily routines.
- View upcoming deadlines from the dashboard.
- Keep important dates visible without mixing them into the routine list.

### 🔥 Streak Tracking
- Tracks consecutive days of completed routines.
- Displays the current streak on the dashboard.
- Encourages consistency and discipline.

### 💭 Daily Motivation
- A motivational line appears below the selected date.
- The motivation changes automatically for different dates.
- Different days can display different motivational messages.

### ➕ Quick Add
- Use the `+` button to quickly add routines or deadlines.

### 📱 Mobile-First Design
- Designed primarily for smartphones.
- Responsive layout.
- Touch-friendly controls.
- Dark, modern interface.

### 🎨 Modern UI
- Dark productivity-focused theme.
- Rounded cards and controls.
- Clean spacing and typography.
- Designed to feel like a real mobile productivity app.

### 📲 PWA Support
The project is designed as a Progressive Web App and includes:
- Web App Manifest
- Service Worker
- App icons
- Offline caching
- Installable home-screen experience

## 🖥️ Dashboard

The main dashboard is designed around a simple flow:

```text
Daily Routine v0.5

Selected Date
Daily Motivation

Date Selector

Deadlines        Progress
                 0%

Daily Routine
Tasks for selected date
```

## 📁 Project Structure

```text
Daily_routine_tracker/
│
├── index.html
├── sw.js
├── manifest.json
├── icon-192.png
├── icon-512.png
└── README.md
```

Additional files may be added as the application develops.

## 🚀 Getting Started

### Using GitHub Pages

1. Open the repository.
2. Make sure the project files are in the repository root.
3. Enable GitHub Pages from the repository settings.
4. Select the `main` branch as the deployment source.
5. Open the generated GitHub Pages website.

### Running Locally

Clone the repository:

```bash
git clone https://github.com/AyushM321/Daily_routine_tracker.git
```

Open the project:

```bash
cd Daily_routine_tracker
```

Run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 📲 Install as an App

When the browser recognizes the project as a PWA:

1. Open the Daily Routine Tracker website.
2. Open the browser menu.
3. Choose **Add to Home screen** or **Install app**.
4. Confirm the installation.
5. The Daily Routine Tracker icon will appear on the device home screen.

## 🧠 Date System

Each selected date represents its own routine view.

For example:

```text
3 September 2026
→ Today's routines

4 September 2026
→ Tomorrow's routines

2 September 2026
→ Yesterday's routines
```

The app should only use **Today** when the selected date is actually the current date.

Other dates remain selectable and editable.

## 🔁 Recurring Weekly Routines

A routine can be configured to repeat on a specific weekday.

Example:

```text
Monday
Workout — 7:00 AM

Wednesday
Coding — 7:30 PM

Friday
Revision — 4:00 PM
```

Recurring routines can continue appearing on their scheduled weekday while individual dates can be customized when supported by the app.

## 📝 Routine Information

A routine can contain information such as:

```text
Task name
Date
Start time
End time
Repeat schedule
Completion status
```

Example:

```text
Wake Up
7:00 AM

Study
7:30 AM – 9:00 AM

Revision
4:00 PM
```

## 🎯 Deadline Management

Deadlines are separate from daily routines.

Example:

```text
Mathematics Assignment
10 September 2026

CSE Lab
15 September 2026
```

This keeps important future events visible while preserving the daily routine list.

## 🔥 Streak System

The streak system is designed to reward consistency.

Example:

```text
Day 1 → 🔥 1 day
Day 2 → 🔥 2 days
Day 3 → 🔥 3 days
```

The exact streak behavior is controlled by the application's JavaScript logic.

## 💾 Data Storage

The current application is designed to store routine information locally in the browser.

This means:
- Routine data can remain on the device/browser.
- GitHub stores the application code, not the user's personal routine data.
- Clearing the browser's site data can remove locally stored information.

### Recommended future feature

A **Backup / Restore** system should be added so routines and deadlines can be exported and restored safely.

## ⚙️ Progressive Web App

The project uses a Service Worker:

```text
sw.js
```

The Service Worker can:
- Cache important application files.
- Improve loading reliability.
- Support offline use.
- Remove outdated caches when the app version changes.

The Web App Manifest:

```text
manifest.json
```

provides information such as the application name, display mode, theme, and icons.

## 🎨 Design Philosophy

The application aims to feel like a real personal productivity app rather than a basic webpage.

Design goals:

- Minimal
- Modern
- Dark
- Mobile-first
- Fast
- Easy to use
- Productivity-focused

## 📱 Responsive Design

The interface is intended to work on:

- Android phones
- iPhones
- Tablets
- Desktop browsers

The layout adapts to different screen sizes.

## 🔒 Privacy

The application is intended to keep personal routine information on the user's device using browser storage.

No cloud account or external database is required for the basic version.

## 🛠️ Technologies

The project uses standard web technologies:

- HTML5
- CSS3
- JavaScript
- Local Storage
- Progressive Web App APIs
- Service Workers
- Web App Manifest

## 📌 Version

### v0.5

The current version focuses on:
- Daily routine management
- Date selection
- Deadline tracking
- Progress percentage
- Streak tracking
- Daily motivation
- Mobile-first UI
- PWA support

Future versions can increment the version number when major functionality or UI improvements are released.

## 🗺️ Roadmap

Possible future improvements:

- [ ] Better routine editor
- [ ] Routine categories
- [ ] Task priorities
- [ ] Custom motivational messages
- [ ] Monthly calendar
- [ ] Productivity statistics
- [ ] Weekly productivity reports
- [ ] Improved streak system
- [ ] Notifications
- [ ] Backup and restore
- [ ] Cloud synchronization
- [ ] Multiple themes
- [ ] Settings page
- [ ] More animations
- [ ] Improved deadline management
- [ ] Better PWA installation experience

## 🐛 Bug Reports

If you find a bug:

1. Reproduce the problem.
2. Note the device and browser.
3. Take a screenshot if possible.
4. Describe what happened.
5. Describe what you expected to happen.

## 💡 Feature Requests

For a new feature, describe:

```text
Feature:
Why it is useful:
How it should work:
```

## 👨‍💻 Developer

**Ayush Majumdar**

Daily Routine Tracker is a personal productivity project focused on:

> **Discipline. Consistency. Progress.**

## 📄 License

This project currently does not specify a separate open-source license.

All rights remain with the project owner unless a license is added to the repository.

## ⭐ Support

If you find the project useful, consider giving the repository a ⭐ on GitHub.

---

> **You don't need to be perfect every day.  
> You just need to keep showing up.**
