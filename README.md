# F1 24-0

Inspired by the viral 82-0 NBA challenge and 7a0 Football, F1 24-0 is a browser-based Formula 1 drafting game where you try to build a perfect season.

Pick a calendar. Roll random years from F1 history. Choose drivers from those seasons. Fill every race on the calendar and simulate the championship.

Can you go 24-0?

🌐 Live Demo: https://f124-0.vercel.app/

---

## How It Works

1. Choose a calendar season.
2. Roll a random year between 1990 and 2025.
3. Select a driver who raced in that season.
4. Assign that driver to the current race.
5. Repeat until every race on the calendar has a driver.
6. Simulate the season.
7. See how many races you won.

The goal is to build a perfect season and finish:

```text
24-0
```

---

## Features

- Multiple F1 calendar seasons
- Random year drafting system
- Historical driver pool (1990–2025)
- Driver-season based ratings
- Circuit-specific simulation logic
- Race-by-race results
- Perfect season celebrations
- Downloadable result cards
- Direct sharing to X/Twitter
- Dark mode and light mode
- Mobile-friendly design
- Fully static website

---

## Simulation Logic

Every race is simulated independently.

The model considers:

- Driver performance during that season
- Championship results
- Wins, podiums, and poles
- Circuit-type strengths
- Driver tags and specialties
- Reliability
- Same-year race winner bonuses
- Random race context

The simulation is intentionally designed to reward F1 knowledge while still allowing upsets.

---

## Available Calendars

Current playable calendars:

- 2025
- 2023
- 2012
- 2002
- 1995

Each calendar contains its real race schedule.

---

## Tech Stack

Built entirely with:

- HTML
- CSS
- JavaScript

No framework.

No backend.

No database.

Everything runs directly in the browser.

---

## Project Structure

```text
.
├── index.html
├── styles.css
├── app.js
└── PROJECT_DOCUMENTATION.md
```

### index.html

Contains:

- Layout
- Navigation
- Instructions modal
- Calendar controls
- Race list
- Results section

### styles.css

Contains:

- Themes
- Responsive design
- Buttons
- Dropdown styling
- Animations
- Share card styling

### app.js

Contains:

- Driver data
- Calendar data
- Simulation engine
- UI rendering
- Sharing logic
- Result generation

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/your-username/f1-24-0.git
```

Enter the project directory:

```bash
cd f1-24-0
```

Open:

```text
index.html
```

in your browser.

Or use a local server:

```bash
python -m http.server
```

Then visit:

```text
http://localhost:8000
```

---

## Future Improvements

- Additional calendar seasons
- Expanded historical driver coverage
- Seeded runs
- Difficulty modes
- More circuit-specific traits
- Local run history
- Global leaderboard
- Community challenges

---

## Inspiration

This project was inspired by:

- https://82-0.com
- https://7a0.com.br

The goal was to bring the same draft-and-simulate gameplay loop to Formula 1.

---

## Feedback

If you're an F1 fan, give it a try and let me know your best score.

Can you build a perfect season?

🏎️ https://f124-0.vercel.app/
