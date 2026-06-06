# F1 24-0 Project Documentation

## 1. Project Overview

F1 24-0 is a browser game inspired by sports perfect-season challenge sites such as 82-0.com. The player chooses a Formula 1 calendar season, rolls a random driver season from 1990 to 2025, picks one driver from that rolled year for the current circuit, and repeats until every race on the calendar has a driver.

After the full calendar is filled, the player simulates the season and tries to go undefeated.

The app is built as a fully static website:

- `index.html` defines the page structure.
- `styles.css` handles layout, responsive design, themes, buttons, cards, dropdowns, results, and animations.
- `app.js` contains all game data, state, rendering, driver selection, scoring, simulation, sharing, and event handling.

There is no backend, database, build system, or framework. The site runs directly in the browser.

## 2. How The Game Works

1. The player picks a calendar year.
   This decides the race list. Current playable calendars are `2025`, `2023`, `2012`, `2002`, and `1995`.

2. The player presses `Roll Year`.
   The dice randomly lands on a year from `1990` to `2025`.

3. The player chooses one driver from the rolled year.
   The dropdown shows drivers who raced in that season, sorted alphabetically. Constructor badges are shown next to constructor names.

4. The selected driver is added to the current race.
   The game then moves to the next circuit in the chosen calendar.

5. The player repeats this process until every circuit is filled.
   Simulation is locked until every race has a selected driver.

6. The player presses `Simulate`.
   Each race is simulated using the selected driver's season strength, driver tags, circuit type bonuses, and a small random factor.

7. The app displays the final record.
   Won races are shown with a green border. Lost races have no green win treatment.

8. The player can download a result card or share the result on X.
   The X share URL points to `https://f124-0.vercel.app/`.

## 3. Main Features

### Calendar Selection

The calendar buttons let the player choose one of five historical or modern F1 calendars:

- `2025`
- `2023`
- `2012`
- `2002`
- `1995`

Changing the calendar resets the run, clears picks, hides results, resets rerolls, and rebuilds the race list.

Implemented in:

- `calendarOptions`
- `calendars`
- `renderSeasonButtons()`
- `setCalendar(year)`

### Dice Roll Year

The roll button randomly chooses a year between `1990` and `2025`.

That rolled year decides which driver list appears. The player is not choosing from every driver in history at once; they are choosing from the drivers who raced in that exact rolled season.

Implemented in:

- `rollYear(isReroll = false)`
- `driversForYear(year)`
- `pickerDrivers()`

### Driver Picker

The app uses a custom dropdown instead of a native select menu. This gives better control over:

- Driver names
- Constructor badges
- Alphabetical ordering
- Same-year race winner highlighting
- Mobile row sizing
- Light-mode readability

The picker shows:

- Driver name
- Constructor code badge
- Constructor name
- Optional `Race winner` pill when the rolled year matches the selected calendar year and the driver won that real race

Implemented in:

- `renderRollPanel()`
- `teamBadgeHtml(team)`
- `constructorCode(team)`
- `constructorColor(team)`
- `pickerDrivers()`

### Constructor Badges

Constructor badges are generated in JavaScript and styled in CSS. Each constructor has:

- A short code such as `FER`, `MCL`, `RBR`, or `MER`
- A constructor color
- Text color handling for bright badges

Badges appear in the driver picker only, not in the race calendar list.

Implemented in:

- `constructorKey(team)`
- `constructorCode(team)`
- `constructorColor(team)`
- `teamBadgeHtml(team)`
- `.team-badge`

### Race List

The race list shows every circuit in the selected calendar in order.

Each slot shows:

- Race number
- Race name
- Picked driver, or `-` if empty
- Pick metadata, or `Waiting for roll` if empty

The active race gets a current-state highlight. Filled races get a completed-state style.

Implemented in:

- `renderRaceList()`
- `currentRaceName()`
- `filledCount()`

### Simulation Lock

The simulation cannot run until every circuit has a selected driver.

Before the calendar is complete, the simulate button shows a message like:

- `Pick 24 More`
- `Pick 23 More`
- `Pick 1 More`

The code also has a defensive guard inside `runSimulation()` so simulation cannot run early even if the button is triggered manually.

Implemented in:

- `allFilled()`
- `renderRollPanel()`
- `runSimulation()`

### Same-Year Race Winner Priority

If the rolled year is the same as the chosen calendar year, and that real race has a known winner, that driver appears first in the dropdown with a `Race winner` pill.

This does not guarantee a win anymore. It gives a small race-result bonus, while overall season performance remains the main scoring factor.

Implemented in:

- `raceWinners`
- `sameYearWinnerName(race)`
- `isSameYearRaceWinner(driver, race)`
- `pickerDrivers()`
- `simulatePick(pick, race, index)`

### Driver Season Ratings

Driver strength changes by season. The same driver can be rated differently across different years.

The app uses two rating paths:

1. Metric-based scoring for important seasons.
   Uses championship position, wins, podiums, poles, starts, champion edge, and reliability.

2. Career fallback scoring for lower-detail seasons.
   Uses base driver rating, career phase, experience curve, and late-career fade.

Implemented in:

- `seasonMetrics`
- `buildSeasonMetrics()`
- `metric(position, wins, podiums, poles, starts, note)`
- `metricsFor(name, year)`
- `scoreFromMetrics(metrics)`
- `seasonalScore(driver, year)`

### Driver Data Coverage

The app combines multiple data sources inside `app.js`:

- `driverCareers`: core driver ranges, base ratings, teams, and tags
- `teamStints`: specific team periods for drivers with team changes
- `seasonMetrics`: detailed metrics for major driver seasons
- `seasonRosters`: fuller yearly rosters for seasons that need complete dropdown coverage
- `supplementalRosters`: extra grid drivers for missing years

This lets early 1990s, 2000s, 2010s, and modern seasons show broader driver lists instead of only elite names.

Implemented in:

- `driversForYear(year)`
- `racedInYear(driver, year)`
- `teamForYear(driver, year)`

### Race Simulation Logic

Each race is simulated independently.

The score starts with the picked driver's season score, then adjusts for:

- Champion history bonus
- Street circuit bonus
- Power circuit bonus
- Small same-year race winner bonus
- Late-calendar pressure
- Random race context

That score is converted into a win probability using a logistic curve. This keeps strong seasons strong, but still allows upsets.

Implemented in:

- `simulatePick(pick, race, index)`
- `runSimulation()`

### Results

After simulation, the app shows:

- Final score, such as `18/24`
- Share card
- Download button
- Share on X button
- New run button
- Race-by-race results

Won races use the `win` class. Lost races use the `loss` class.

Implemented in:

- `runSimulation()`
- `.result-slot.win`
- `.result-slot.loss`

### Perfect Run Celebration

If the player wins every race, the app shows:

- `PERRRFFFFFFECCCCCCT`
- `HUUURRRRAAAYY. 24-0.`
- Confetti animation

Implemented in:

- `renderCelebration(wins)`
- `.celebration`
- `.confetti`
- `@keyframes confetti-fall`

### Download Result Card

The result card is generated with the browser canvas API.

The canvas includes:

- Game title
- Final record
- Calendar year
- Race-by-race picks
- Win/loss markers
- `CAN YOU GO 24-0?`

The player downloads it as a PNG.

Implemented in:

- `drawShareCanvas()`
- `downloadResultCard()`

### Share On X

The app opens an X share intent with:

- The player's result text
- The public app URL: `https://f124-0.vercel.app/`

Implemented in:

- `publicShareUrl`
- `makeShareText()`
- `shareOnTwitter()`

### Instructions Modal

The instructions modal is opened with the `?` button and explains the game in beginner-friendly steps.

It can be closed by:

- Close button
- Clicking outside the modal
- Pressing Escape

Implemented in:

- `openInstructions()`
- `closeInstructions()`
- `bindEvents()`
- `.instructions-modal`
- `.instructions-box`

### Theme Toggle

The app supports dark and light modes.

Dark mode is the default glossy black theme. Light mode uses a readable light background and properly contrasted dropdowns.

Implemented in:

- `toggleTheme()`
- `body.light`
- Light-mode CSS variable overrides

### Mobile-Friendly Layout

The app is designed to work mostly on mobile.

Mobile-specific improvements include:

- Single-column layout at smaller widths
- Larger dropdown rows
- Wrapped driver names
- Full-width simulate button
- No horizontal overflow
- Scroll-safe instruction modal

Implemented in:

- `@media (max-width: 880px)`
- `@media (max-width: 620px)`

## 4. File Structure

```text
index.html
styles.css
app.js
PROJECT_DOCUMENTATION.md
```

### `index.html`

Contains the semantic structure of the app:

- Top navigation
- Instructions modal
- Hero area
- Calendar setup
- Roll panel
- Driver picker container
- Race list
- Results section
- Share card
- Celebration block
- Footer credit

### `styles.css`

Contains all presentation logic:

- Theme variables
- Glossy dark theme
- Light theme
- Buttons
- Panels
- Driver dropdown
- Constructor badges
- Race/result rows
- Share card
- Confetti animation
- Mobile breakpoints

### `app.js`

Contains all interactive logic:

- Calendar data
- Driver data
- Constructor data
- Game state
- Driver filtering
- Seasonal scoring
- UI rendering
- Dice rolling
- Driver selection
- Simulation
- Sharing
- Canvas export
- Event listeners

## 5. Important JavaScript Functions

### `byId(id)`

Small helper for `document.getElementById(id)`.

### `filledCount()`

Counts how many race slots already have selected drivers.

### `currentRaceName()`

Returns the current unfilled race name.

### `driversForYear(year)`

Builds the driver list for a rolled season by combining career data, season rosters, and supplemental roster data.

### `pickerDrivers()`

Returns the dropdown driver list. It keeps drivers alphabetical, except when a same-year race winner exists. In that case, the real winner appears first.

### `teamForYear(driver, year)`

Determines which constructor a driver raced for in a specific year.

### `seasonalScore(driver, year)`

Calculates the driver-season score. Uses detailed metrics when available and fallback career logic otherwise.

### `scoreFromMetrics(metrics)`

Converts a season's championship position, wins, podiums, poles, starts, and reliability into a rating.

### `renderSeasonButtons()`

Renders the calendar season buttons.

### `renderRaceList()`

Renders all races in the selected calendar and displays each picked driver.

### `renderRollPanel()`

Updates the current year/race card, roll button, picker state, reroll text, and simulate button.

### `setCalendar(year)`

Starts a fresh run for a selected calendar year.

### `rollYear(isReroll)`

Rolls a random driver season from `1990` to `2025`.

### `chooseDriver(value)`

Adds a selected driver to the current race and moves the game to the next empty race.

### `simulatePick(pick, race, index)`

Simulates one race using driver strength, tags, circuit type, same-year race winner bonus, pressure, and randomness.

### `runSimulation()`

Runs the full calendar simulation after every race has a driver.

### `renderCelebration(wins)`

Shows perfect-run celebration and confetti if the player wins every race.

### `drawShareCanvas()`

Creates the downloadable result card using the canvas API.

### `downloadResultCard()`

Downloads the generated canvas as a PNG.

### `shareOnTwitter()`

Opens the X share intent with the result text and deployed app URL.

### `toggleTheme()`

Switches between dark and light mode.

### `bindEvents()`

Connects all buttons and UI actions to the app logic.

### `render()`

Main render function. It refreshes season buttons, race list, and roll panel.

## 6. Technologies Used

### HTML

Used for the app shell, semantic sections, buttons, modal, race list containers, and result containers.

### CSS

Used for all design and responsive behavior:

- CSS variables
- Dark/light themes
- Grid layouts
- Button states
- Dropdown styling
- Mobile breakpoints
- Confetti animation

### JavaScript

Used for all game behavior:

- State management
- Driver filtering
- Scoring
- Simulation
- Rendering
- Events
- Sharing
- Canvas export

### Canvas API

Used to generate the downloadable result card.

### X Intent URL

Used for sharing results:

```text
https://twitter.com/intent/tweet
```

## 7. Why The App Is Static

The project works well as a static site because:

- All game data is embedded in `app.js`.
- The simulation runs locally in the browser.
- There is no login system.
- There is no database.
- Sharing uses a public URL.
- Downloading uses the browser canvas API.

This makes deployment simple on platforms such as Vercel, Netlify, GitHub Pages, or any static host.

## 8. Deployment Notes

The public share URL is:

```text
https://f124-0.vercel.app/
```

If the deployed URL ever changes, update:

```js
const publicShareUrl = "https://f124-0.vercel.app/";
```

inside `app.js`.

## 9. Testing Checklist

Before shipping changes, check:

- Page loads without console errors.
- Instructions modal opens and closes.
- Calendar buttons reset the run.
- Roll Year opens a driver list.
- Driver dropdown is readable in dark and light mode.
- Driver dropdown is usable on mobile width.
- Simulate stays disabled until every race is filled.
- Same-year winner appears first but does not auto-win.
- Results show win/loss rows correctly.
- Perfect score triggers celebration.
- Download Card creates a PNG.
- Share On X opens with `https://f124-0.vercel.app/`.

## 10. Future Improvements

Possible next upgrades:

- Add more selectable calendar seasons.
- Expand driver-season metrics for every year from 1990 onward.
- Store run history in local storage.
- Add a seed system so users can replay the same dice rolls.
- Add difficulty modes.
- Add more circuit-specific traits.
- Add constructor logos as image assets if official usage rights are handled.
- Add automated unit tests for scoring and roster generation.

