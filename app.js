const calendarOptions = [2025, 2023, 2012, 2002, 1995];

const calendars = {
  2025: [
    "Australia", "China", "Japan", "Bahrain", "Saudi Arabia", "Miami",
    "Emilia-Romagna", "Monaco", "Spain", "Canada", "Austria", "Great Britain",
    "Belgium", "Hungary", "Netherlands", "Italy", "Azerbaijan", "Singapore",
    "United States", "Mexico City", "Sao Paulo", "Las Vegas", "Qatar", "Abu Dhabi"
  ],
  2023: [
    "Bahrain", "Saudi Arabia", "Australia", "Azerbaijan", "Miami", "Monaco",
    "Spain", "Canada", "Austria", "Great Britain", "Hungary", "Belgium",
    "Netherlands", "Italy", "Singapore", "Japan", "Qatar", "United States",
    "Mexico City", "Sao Paulo", "Las Vegas", "Abu Dhabi"
  ],
  2012: [
    "Australia", "Malaysia", "China", "Bahrain", "Spain", "Monaco", "Canada",
    "Europe", "Great Britain", "Germany", "Hungary", "Belgium", "Italy",
    "Singapore", "Japan", "Korea", "India", "Abu Dhabi", "United States", "Brazil"
  ],
  2002: [
    "Australia", "Malaysia", "Brazil", "San Marino", "Spain", "Austria", "Monaco",
    "Canada", "Europe", "Great Britain", "France", "Germany", "Hungary", "Belgium",
    "Italy", "United States", "Japan"
  ],
  1995: [
    "Brazil", "Argentina", "San Marino", "Spain", "Monaco", "Canada", "France",
    "Great Britain", "Germany", "Hungary", "Belgium", "Italy", "Portugal",
    "Europe", "Pacific", "Japan", "Australia"
  ]
};

const driverCareers = [
  entry("Ayrton Senna", 1990, 1994, 97, ["McLaren", "Williams"], ["Street", "Wet", "Qualifying"]),
  entry("Alain Prost", 1990, 1993, 95, ["Ferrari", "Williams"], ["Champion", "Race Pace"]),
  entry("Nigel Mansell", 1990, 1995, 94, ["Williams", "McLaren"], ["Power", "Attack"]),
  entry("Nelson Piquet", 1990, 1991, 88, ["Benetton"], ["Veteran"]),
  entry("Gerhard Berger", 1990, 1997, 88, ["McLaren", "Ferrari", "Benetton"], ["Power"]),
  entry("Jean Alesi", 1990, 2001, 87, ["Tyrrell", "Ferrari", "Benetton", "Sauber", "Prost", "Jordan"], ["Street", "Wet"]),
  entry("Riccardo Patrese", 1990, 1993, 84, ["Williams", "Benetton"], ["Reliable"]),
  entry("Michael Schumacher", 1991, 2006, 99, ["Jordan", "Benetton", "Ferrari"], ["Champion", "Complete", "Spa"]),
  entry("Mika Hakkinen", 1991, 2001, 95, ["Lotus", "McLaren"], ["Champion", "Qualifying"]),
  entry("Damon Hill", 1992, 1999, 91, ["Brabham", "Williams", "Arrows", "Jordan"], ["Champion"]),
  entry("Rubens Barrichello", 1993, 2011, 88, ["Jordan", "Stewart", "Ferrari", "Honda", "Brawn", "Williams"], ["Reliable"]),
  entry("David Coulthard", 1994, 2008, 88, ["Williams", "McLaren", "Red Bull"], ["Power"]),
  entry("Jacques Villeneuve", 1996, 2006, 90, ["Williams", "BAR", "Renault", "Sauber", "BMW Sauber"], ["Champion"]),
  entry("Heinz-Harald Frentzen", 1994, 2003, 86, ["Sauber", "Williams", "Jordan", "Prost", "Arrows"], ["Underdog"]),
  entry("Eddie Irvine", 1993, 2002, 85, ["Jordan", "Ferrari", "Jaguar"], ["High Floor"]),
  entry("Ralf Schumacher", 1997, 2007, 85, ["Jordan", "Williams", "Toyota"], ["Power"]),
  entry("Giancarlo Fisichella", 1996, 2009, 84, ["Minardi", "Jordan", "Benetton", "Renault", "Force India", "Ferrari"], ["Wet"]),
  entry("Juan Pablo Montoya", 2001, 2006, 89, ["Williams", "McLaren"], ["Attack", "Low Downforce"]),
  entry("Kimi Raikkonen", 2001, 2021, 94, ["Sauber", "McLaren", "Ferrari", "Lotus", "Alfa Romeo"], ["Champion", "Race Pace"]),
  entry("Fernando Alonso", 2001, 2025, 95, ["Minardi", "Renault", "McLaren", "Ferrari", "Alpine", "Aston Martin"], ["Champion", "Underdog"]),
  entry("Jenson Button", 2000, 2017, 89, ["Williams", "Benetton", "Renault", "BAR", "Honda", "Brawn", "McLaren"], ["Champion", "Smooth"]),
  entry("Jarno Trulli", 1997, 2011, 82, ["Minardi", "Prost", "Jordan", "Renault", "Toyota", "Lotus"], ["Qualifying"]),
  entry("Nick Heidfeld", 2000, 2011, 82, ["Prost", "Sauber", "Jordan", "Williams", "BMW Sauber", "Renault"], ["Reliable"]),
  entry("Mark Webber", 2002, 2013, 86, ["Minardi", "Jaguar", "Williams", "Red Bull"], ["Power"]),
  entry("Felipe Massa", 2002, 2017, 88, ["Sauber", "Ferrari", "Williams"], ["Runner-Up"]),
  entry("Takuma Sato", 2002, 2008, 78, ["Jordan", "BAR", "Super Aguri"], ["Attack"]),
  entry("Nico Rosberg", 2006, 2016, 91, ["Williams", "Mercedes"], ["Champion", "Qualifying"]),
  entry("Robert Kubica", 2006, 2021, 84, ["BMW Sauber", "Renault", "Williams", "Alfa Romeo"], ["Underdog"]),
  entry("Lewis Hamilton", 2007, 2025, 98, ["McLaren", "Mercedes", "Ferrari"], ["Champion", "Wet", "Silverstone"]),
  entry("Sebastian Vettel", 2007, 2022, 96, ["BMW Sauber", "Toro Rosso", "Red Bull", "Ferrari", "Aston Martin"], ["Champion", "High Downforce"]),
  entry("Heikki Kovalainen", 2007, 2013, 79, ["Renault", "McLaren", "Lotus", "Caterham"], ["Winner"]),
  entry("Timo Glock", 2004, 2012, 77, ["Jordan", "Toyota", "Virgin", "Marussia"], ["Reliable"]),
  entry("Adrian Sutil", 2007, 2014, 77, ["Spyker", "Force India", "Sauber"], ["Street"]),
  entry("Kamui Kobayashi", 2009, 2014, 78, ["Toyota", "Sauber", "Caterham"], ["Attack"]),
  entry("Vitaly Petrov", 2010, 2012, 76, ["Renault", "Caterham"], ["Wildcard"]),
  entry("Sergio Perez", 2011, 2025, 87, ["Sauber", "McLaren", "Force India", "Racing Point", "Red Bull"], ["Street", "Tire Saver"]),
  entry("Daniel Ricciardo", 2011, 2024, 89, ["HRT", "Toro Rosso", "Red Bull", "Renault", "McLaren", "AlphaTauri", "RB"], ["Street", "Late Braker"]),
  entry("Romain Grosjean", 2009, 2020, 80, ["Renault", "Lotus", "Haas"], ["High Risk"]),
  entry("Pastor Maldonado", 2011, 2015, 78, ["Williams", "Lotus"], ["Winner", "High Risk"]),
  entry("Valtteri Bottas", 2013, 2025, 88, ["Williams", "Mercedes", "Alfa Romeo", "Kick Sauber"], ["Qualifying"]),
  entry("Max Verstappen", 2015, 2025, 99, ["Toro Rosso", "Red Bull"], ["Champion", "Technical", "Complete"]),
  entry("Carlos Sainz", 2015, 2025, 87, ["Toro Rosso", "Renault", "McLaren", "Ferrari", "Williams"], ["Consistent"]),
  entry("Daniil Kvyat", 2014, 2020, 77, ["Toro Rosso", "Red Bull", "AlphaTauri"], ["Wildcard"]),
  entry("Kevin Magnussen", 2014, 2024, 77, ["McLaren", "Renault", "Haas"], ["Aggressive"]),
  entry("Nico Hulkenberg", 2010, 2025, 82, ["Williams", "Force India", "Sauber", "Renault", "Racing Point", "Haas", "Kick Sauber"], ["Qualifying"]),
  entry("Esteban Ocon", 2016, 2025, 82, ["Manor", "Force India", "Renault", "Alpine", "Haas"], ["Reliable"]),
  entry("Pierre Gasly", 2017, 2025, 83, ["Toro Rosso", "Red Bull", "AlphaTauri", "Alpine"], ["Winner"]),
  entry("Charles Leclerc", 2018, 2025, 91, ["Sauber", "Ferrari"], ["Pole", "Street"]),
  entry("Lando Norris", 2019, 2025, 91, ["McLaren"], ["Late Season", "High Floor"]),
  entry("George Russell", 2019, 2025, 88, ["Williams", "Mercedes"], ["Qualifying"]),
  entry("Alex Albon", 2019, 2025, 81, ["Toro Rosso", "Red Bull", "Williams"], ["Defender"]),
  entry("Lance Stroll", 2017, 2025, 78, ["Williams", "Racing Point", "Aston Martin"], ["Wet"]),
  entry("Oscar Piastri", 2023, 2025, 89, ["McLaren"], ["Precision"]),
  entry("Yuki Tsunoda", 2021, 2025, 79, ["AlphaTauri", "RB", "Red Bull"], ["Attack"]),
  entry("Zhou Guanyu", 2022, 2024, 75, ["Alfa Romeo", "Kick Sauber"], ["Reliable"]),
  entry("Logan Sargeant", 2023, 2024, 73, ["Williams"], ["Wildcard"]),
  entry("Liam Lawson", 2023, 2025, 77, ["AlphaTauri", "RB", "Red Bull"], ["Wildcard"]),
  entry("Franco Colapinto", 2024, 2025, 76, ["Williams", "Alpine"], ["Wildcard"]),
  entry("Oliver Bearman", 2024, 2025, 78, ["Ferrari", "Haas"], ["Rookie"]),
  entry("Andrea Kimi Antonelli", 2025, 2025, 80, ["Mercedes"], ["Rookie"]),
  entry("Gabriel Bortoleto", 2025, 2025, 77, ["Kick Sauber"], ["Rookie"]),
  entry("Jack Doohan", 2025, 2025, 75, ["Alpine"], ["Rookie"]),
  entry("Isack Hadjar", 2025, 2025, 76, ["Racing Bulls"], ["Rookie"])
];

const state = {
  calendarYear: 2025,
  races: [...calendars[2025]],
  picks: [],
  currentIndex: 0,
  rolledYear: null,
  rerolls: 3,
  result: []
};

function entry(name, from, to, rating, teams, tags) {
  return { name, from, to, rating, teams, tags };
}

function byId(id) {
  return document.getElementById(id);
}

function filledCount() {
  return state.picks.filter(Boolean).length;
}

function currentRaceName() {
  return state.races[state.currentIndex] || state.races[state.races.length - 1];
}

function driversForYear(year) {
  return driverCareers
    .filter(driver => driver.from <= year && driver.to >= year)
    .map(driver => ({
      ...driver,
      year,
      team: teamForYear(driver, year),
      score: seasonalScore(driver, year)
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function teamForYear(driver, year) {
  if (driver.teams.length === 1) return driver.teams[0];
  const span = Math.max(1, driver.to - driver.from + 1);
  const index = Math.min(driver.teams.length - 1, Math.floor(((year - driver.from) / span) * driver.teams.length));
  return driver.teams[index];
}

function seasonalScore(driver, year) {
  const mid = (driver.from + driver.to) / 2;
  const distance = Math.abs(year - mid);
  const ageCurve = Math.max(-5, 4 - distance * .35);
  const randomSeed = ((year * driver.name.length) % 9) - 4;
  return Math.round(driver.rating + ageCurve + randomSeed * .35);
}

function renderSeasonButtons() {
  byId("seasonButtons").innerHTML = calendarOptions.map(year => `
    <button class="season-button ${year === state.calendarYear ? "is-active" : ""}" type="button" data-year="${year}">
      ${year}
    </button>
  `).join("");

  document.querySelectorAll("[data-year]").forEach(button => {
    button.addEventListener("click", () => {
      setCalendar(Number(button.dataset.year));
    });
  });
}

function renderRaceList() {
  byId("raceListTitle").textContent = `${state.calendarYear} Calendar`;
  byId("calendarLabel").textContent = String(state.calendarYear);
  byId("fillRecord").textContent = `${filledCount()}/${state.races.length}`;

  byId("raceList").innerHTML = state.races.map((race, index) => {
    const pick = state.picks[index];
    const classes = ["race-slot"];
    if (index === state.currentIndex && !allFilled()) classes.push("current");
    if (pick) classes.push("filled");
    return `
      <article class="${classes.join(" ")}">
        <span class="race-number">${index + 1}</span>
        <span>
          <span class="race-name">${race}</span>
          <span class="race-pick">${pick ? pick.name : "—"}</span>
          <span class="race-meta">${pick ? `${pick.year} · ${pick.team}` : "Waiting for roll"}</span>
        </span>
      </article>
    `;
  }).join("");
}

function renderRollPanel() {
  byId("currentRaceLabel").textContent = allFilled() ? "Season complete" : currentRaceName();
  byId("rerollText").textContent = `Re-rolls · ${state.rerolls} left`;
  byId("simulateButton").disabled = !allFilled();

  if (!state.rolledYear) {
    byId("rollHint").textContent = "Roll the dice to draw any F1 driver year from 1990 to 2025.";
    byId("rollButtonText").textContent = "Roll Year";
    byId("driverSelect").innerHTML = `<option value="">Roll first</option>`;
    byId("driverSelect").disabled = true;
    byId("skipButton").disabled = true;
    return;
  }

  const drivers = driversForYear(state.rolledYear);
  byId("rollHint").textContent = `Drawn year: ${state.rolledYear}. Choose one driver who raced that season for ${currentRaceName()}.`;
  byId("rollButtonText").textContent = "Roll Again";
  byId("driverSelect").disabled = false;
  byId("driverSelect").innerHTML = [
    `<option value="">Select from ${state.rolledYear}</option>`,
    ...drivers.map((driver, index) => `<option value="${index}">${driver.name} · ${driver.team} · ${driver.score}</option>`)
  ].join("");
  byId("skipButton").disabled = state.rerolls <= 0;
}

function allFilled() {
  return filledCount() === state.races.length;
}

function setCalendar(year) {
  state.calendarYear = year;
  state.races = [...calendars[year]];
  state.picks = Array(state.races.length).fill(null);
  state.currentIndex = 0;
  state.rolledYear = null;
  state.rerolls = 3;
  state.result = [];
  byId("results").hidden = true;
  render();
}

function rollYear(isReroll = false) {
  if (allFilled()) return;
  if (isReroll && state.rolledYear && state.rerolls <= 0) return;
  if (isReroll && state.rolledYear) state.rerolls -= 1;
  state.rolledYear = 1990 + Math.floor(Math.random() * 36);
  render();
}

function chooseDriver(value) {
  if (!value || !state.rolledYear || allFilled()) return;
  const picked = driversForYear(state.rolledYear)[Number(value)];
  state.picks[state.currentIndex] = picked;
  const nextOpen = state.picks.findIndex(item => !item);
  state.currentIndex = nextOpen === -1 ? state.races.length - 1 : nextOpen;
  state.rolledYear = null;
  render();
}

function simulatePick(pick, race, index) {
  const streetRace = ["Monaco", "Singapore", "Azerbaijan", "Las Vegas", "Saudi Arabia", "Miami"].includes(race);
  const powerRace = ["Italy", "Belgium", "Great Britain", "Qatar", "Austria"].includes(race);
  const historyBonus = pick.tags.includes("Champion") ? 4 : 0;
  const streetBonus = streetRace && (pick.tags.includes("Street") || pick.tags.includes("Wet")) ? 5 : 0;
  const powerBonus = powerRace && (pick.tags.includes("Power") || pick.tags.includes("Complete")) ? 4 : 0;
  const calendarPressure = index > state.races.length - 4 ? -1 : 0;
  const randomContext = Math.random() * 13 - 6;
  const score = pick.score + historyBonus + streetBonus + powerBonus + calendarPressure + randomContext;
  const probability = 1 / (1 + Math.exp(-(score - 86) / 6));
  return {
    race,
    pick,
    won: Math.random() < Math.max(.1, Math.min(.94, probability))
  };
}

function runSimulation() {
  if (!allFilled()) return;
  state.result = state.races.map((race, index) => simulatePick(state.picks[index], race, index));
  const wins = state.result.filter(item => item.won).length;
  byId("resultScore").textContent = `${wins}/${state.races.length}`;
  byId("resultList").innerHTML = state.result.map((item, index) => `
    <article class="result-slot ${item.won ? "win" : "loss"}">
      <span class="race-number">${index + 1}</span>
      <span>
        <span class="race-name">${item.race}</span>
        <span class="race-pick">${item.pick.name}</span>
        <span class="race-meta">${item.pick.year} · ${item.pick.team}</span>
      </span>
    </article>
  `).join("");
  byId("results").hidden = false;
  byId("results").scrollIntoView({ behavior: "smooth", block: "start" });
}

function newRun() {
  setCalendar(state.calendarYear);
}

function toggleTheme() {
  document.body.classList.toggle("light");
  byId("themeButton").textContent = document.body.classList.contains("light") ? "DARK" : "LIGHT";
}

function bindEvents() {
  byId("rollButton").addEventListener("click", () => rollYear(Boolean(state.rolledYear)));
  byId("skipButton").addEventListener("click", () => rollYear(true));
  byId("driverSelect").addEventListener("change", event => chooseDriver(event.target.value));
  byId("simulateButton").addEventListener("click", runSimulation);
  byId("newGameButton").addEventListener("click", newRun);
  byId("themeButton").addEventListener("click", toggleTheme);
}

function render() {
  renderSeasonButtons();
  renderRaceList();
  renderRollPanel();
}

state.picks = Array(state.races.length).fill(null);
bindEvents();
render();
