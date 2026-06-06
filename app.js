const publicShareUrl = "https://f124-0.vercel.app/";
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

const raceWinners = {
  2025: {
    "Australia": "Lando Norris",
    "China": "Oscar Piastri",
    "Japan": "Max Verstappen",
    "Bahrain": "Oscar Piastri",
    "Saudi Arabia": "Oscar Piastri",
    "Miami": "Oscar Piastri",
    "Emilia-Romagna": "Max Verstappen",
    "Monaco": "Lando Norris",
    "Spain": "Oscar Piastri",
    "Canada": "George Russell",
    "Austria": "Lando Norris",
    "Great Britain": "Lando Norris",
    "Belgium": "Oscar Piastri",
    "Hungary": "Lando Norris",
    "Netherlands": "Oscar Piastri",
    "Italy": "Max Verstappen",
    "Azerbaijan": "Max Verstappen",
    "Singapore": "George Russell",
    "United States": "Max Verstappen",
    "Mexico City": "Lando Norris",
    "Sao Paulo": "Lando Norris",
    "Las Vegas": "Max Verstappen",
    "Qatar": "Max Verstappen",
    "Abu Dhabi": "Max Verstappen"
  },
  2023: {
    "Bahrain": "Max Verstappen",
    "Saudi Arabia": "Sergio Perez",
    "Australia": "Max Verstappen",
    "Azerbaijan": "Sergio Perez",
    "Miami": "Max Verstappen",
    "Monaco": "Max Verstappen",
    "Spain": "Max Verstappen",
    "Canada": "Max Verstappen",
    "Austria": "Max Verstappen",
    "Great Britain": "Max Verstappen",
    "Hungary": "Max Verstappen",
    "Belgium": "Max Verstappen",
    "Netherlands": "Max Verstappen",
    "Italy": "Max Verstappen",
    "Singapore": "Carlos Sainz",
    "Japan": "Max Verstappen",
    "Qatar": "Max Verstappen",
    "United States": "Max Verstappen",
    "Mexico City": "Max Verstappen",
    "Sao Paulo": "Max Verstappen",
    "Las Vegas": "Max Verstappen",
    "Abu Dhabi": "Max Verstappen"
  },
  2012: {
    "Australia": "Jenson Button",
    "Malaysia": "Fernando Alonso",
    "China": "Nico Rosberg",
    "Bahrain": "Sebastian Vettel",
    "Spain": "Pastor Maldonado",
    "Monaco": "Mark Webber",
    "Canada": "Lewis Hamilton",
    "Europe": "Fernando Alonso",
    "Great Britain": "Mark Webber",
    "Germany": "Fernando Alonso",
    "Hungary": "Lewis Hamilton",
    "Belgium": "Jenson Button",
    "Italy": "Lewis Hamilton",
    "Singapore": "Sebastian Vettel",
    "Japan": "Sebastian Vettel",
    "Korea": "Sebastian Vettel",
    "India": "Sebastian Vettel",
    "Abu Dhabi": "Kimi Raikkonen",
    "United States": "Lewis Hamilton",
    "Brazil": "Jenson Button"
  },
  2002: {
    "Australia": "Michael Schumacher",
    "Malaysia": "Ralf Schumacher",
    "Brazil": "Michael Schumacher",
    "San Marino": "Michael Schumacher",
    "Spain": "Michael Schumacher",
    "Austria": "Michael Schumacher",
    "Monaco": "David Coulthard",
    "Canada": "Michael Schumacher",
    "Europe": "Rubens Barrichello",
    "Great Britain": "Michael Schumacher",
    "France": "Michael Schumacher",
    "Germany": "Michael Schumacher",
    "Hungary": "Rubens Barrichello",
    "Belgium": "Michael Schumacher",
    "Italy": "Rubens Barrichello",
    "United States": "Rubens Barrichello",
    "Japan": "Michael Schumacher"
  },
  1995: {
    "Brazil": "Michael Schumacher",
    "Argentina": "Damon Hill",
    "San Marino": "Damon Hill",
    "Spain": "Michael Schumacher",
    "Monaco": "Michael Schumacher",
    "Canada": "Jean Alesi",
    "France": "Michael Schumacher",
    "Great Britain": "Johnny Herbert",
    "Germany": "Michael Schumacher",
    "Hungary": "Damon Hill",
    "Belgium": "Michael Schumacher",
    "Italy": "Johnny Herbert",
    "Portugal": "David Coulthard",
    "Europe": "Michael Schumacher",
    "Pacific": "Michael Schumacher",
    "Japan": "Michael Schumacher",
    "Australia": "Damon Hill"
  }
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

const teamStints = {
  "Ayrton Senna": [[1990, 1993, "McLaren"], [1994, 1994, "Williams"]],
  "Alain Prost": [[1990, 1991, "Ferrari"], [1993, 1993, "Williams"]],
  "Nigel Mansell": [[1990, 1992, "Williams"], [1994, 1994, "Williams"], [1995, 1995, "McLaren"]],
  "Nelson Piquet": [[1990, 1991, "Benetton"]],
  "Gerhard Berger": [[1990, 1992, "McLaren"], [1993, 1995, "Ferrari"], [1996, 1997, "Benetton"]],
  "Jean Alesi": [[1990, 1990, "Tyrrell"], [1991, 1995, "Ferrari"], [1996, 1997, "Benetton"], [1998, 1999, "Sauber"], [2000, 2001, "Prost/Jordan"]],
  "Riccardo Patrese": [[1990, 1992, "Williams"], [1993, 1993, "Benetton"]],
  "Michael Schumacher": [[1991, 1991, "Jordan/Benetton"], [1992, 1995, "Benetton"], [1996, 2006, "Ferrari"]],
  "Mika Hakkinen": [[1991, 1992, "Lotus"], [1993, 2001, "McLaren"]],
  "Damon Hill": [[1992, 1992, "Brabham"], [1993, 1996, "Williams"], [1997, 1997, "Arrows"], [1998, 1999, "Jordan"]],
  "Rubens Barrichello": [[1993, 1996, "Jordan"], [1997, 1999, "Stewart"], [2000, 2005, "Ferrari"], [2006, 2008, "Honda"], [2009, 2009, "Brawn"], [2010, 2011, "Williams"]],
  "David Coulthard": [[1994, 1995, "Williams"], [1996, 2004, "McLaren"], [2005, 2008, "Red Bull"]],
  "Jacques Villeneuve": [[1996, 1998, "Williams"], [1999, 2003, "BAR"], [2004, 2004, "Renault"], [2005, 2006, "Sauber/BMW Sauber"]],
  "Heinz-Harald Frentzen": [[1994, 1996, "Sauber"], [1997, 1998, "Williams"], [1999, 2000, "Jordan"], [2001, 2001, "Jordan/Prost"], [2002, 2003, "Arrows/Sauber"]],
  "Eddie Irvine": [[1993, 1995, "Jordan"], [1996, 1999, "Ferrari"], [2000, 2002, "Jaguar"]],
  "Ralf Schumacher": [[1997, 1998, "Jordan"], [1999, 2004, "Williams"], [2005, 2007, "Toyota"]],
  "Giancarlo Fisichella": [[1996, 1997, "Minardi/Jordan"], [1998, 2001, "Benetton"], [2002, 2003, "Jordan"], [2004, 2004, "Sauber"], [2005, 2007, "Renault"], [2008, 2009, "Force India/Ferrari"]],
  "Juan Pablo Montoya": [[2001, 2004, "Williams"], [2005, 2006, "McLaren"]],
  "Kimi Raikkonen": [[2001, 2001, "Sauber"], [2002, 2006, "McLaren"], [2007, 2009, "Ferrari"], [2012, 2013, "Lotus"], [2014, 2018, "Ferrari"], [2019, 2021, "Alfa Romeo"]],
  "Fernando Alonso": [[2001, 2001, "Minardi"], [2003, 2006, "Renault"], [2007, 2007, "McLaren"], [2008, 2009, "Renault"], [2010, 2014, "Ferrari"], [2015, 2018, "McLaren"], [2021, 2022, "Alpine"], [2023, 2025, "Aston Martin"]],
  "Jenson Button": [[2000, 2000, "Williams"], [2001, 2002, "Benetton/Renault"], [2003, 2005, "BAR"], [2006, 2008, "Honda"], [2009, 2009, "Brawn"], [2010, 2017, "McLaren"]],
  "Jarno Trulli": [[1997, 1997, "Minardi/Prost"], [1998, 1999, "Prost"], [2000, 2001, "Jordan"], [2002, 2004, "Renault"], [2004, 2009, "Toyota"], [2010, 2011, "Lotus"]],
  "Nick Heidfeld": [[2000, 2000, "Prost"], [2001, 2003, "Sauber"], [2004, 2004, "Jordan"], [2005, 2005, "Williams"], [2006, 2009, "BMW Sauber"], [2010, 2011, "Mercedes/Renault"]],
  "Mark Webber": [[2002, 2002, "Minardi"], [2003, 2004, "Jaguar"], [2005, 2006, "Williams"], [2007, 2013, "Red Bull"]],
  "Felipe Massa": [[2002, 2002, "Sauber"], [2004, 2005, "Sauber"], [2006, 2013, "Ferrari"], [2014, 2017, "Williams"]],
  "Takuma Sato": [[2002, 2002, "Jordan"], [2003, 2005, "BAR"], [2006, 2008, "Super Aguri"]],
  "Nico Rosberg": [[2006, 2009, "Williams"], [2010, 2016, "Mercedes"]],
  "Robert Kubica": [[2006, 2009, "BMW Sauber"], [2010, 2010, "Renault"], [2019, 2019, "Williams"], [2021, 2021, "Alfa Romeo"]],
  "Lewis Hamilton": [[2007, 2012, "McLaren"], [2013, 2024, "Mercedes"], [2025, 2025, "Ferrari"]],
  "Sebastian Vettel": [[2007, 2007, "BMW Sauber/Toro Rosso"], [2008, 2008, "Toro Rosso"], [2009, 2014, "Red Bull"], [2015, 2020, "Ferrari"], [2021, 2022, "Aston Martin"]],
  "Heikki Kovalainen": [[2007, 2007, "Renault"], [2008, 2009, "McLaren"], [2010, 2013, "Lotus/Caterham"]],
  "Timo Glock": [[2004, 2004, "Jordan"], [2008, 2009, "Toyota"], [2010, 2012, "Virgin/Marussia"]],
  "Adrian Sutil": [[2007, 2007, "Spyker"], [2008, 2011, "Force India"], [2013, 2013, "Force India"], [2014, 2014, "Sauber"]],
  "Kamui Kobayashi": [[2009, 2009, "Toyota"], [2010, 2012, "Sauber"], [2014, 2014, "Caterham"]],
  "Vitaly Petrov": [[2010, 2011, "Renault"], [2012, 2012, "Caterham"]],
  "Sergio Perez": [[2011, 2012, "Sauber"], [2013, 2013, "McLaren"], [2014, 2018, "Force India"], [2019, 2020, "Racing Point"], [2021, 2024, "Red Bull"]],
  "Daniel Ricciardo": [[2011, 2011, "HRT"], [2012, 2013, "Toro Rosso"], [2014, 2018, "Red Bull"], [2019, 2020, "Renault"], [2021, 2022, "McLaren"], [2023, 2024, "AlphaTauri/RB"]],
  "Romain Grosjean": [[2009, 2009, "Renault"], [2012, 2015, "Lotus"], [2016, 2020, "Haas"]],
  "Pastor Maldonado": [[2011, 2013, "Williams"], [2014, 2015, "Lotus"]],
  "Valtteri Bottas": [[2013, 2016, "Williams"], [2017, 2021, "Mercedes"], [2022, 2025, "Alfa Romeo/Kick Sauber"]],
  "Max Verstappen": [[2015, 2016, "Toro Rosso/Red Bull"], [2017, 2025, "Red Bull"]],
  "Carlos Sainz": [[2015, 2017, "Toro Rosso/Renault"], [2018, 2018, "Renault"], [2019, 2020, "McLaren"], [2021, 2024, "Ferrari"], [2025, 2025, "Williams"]],
  "Daniil Kvyat": [[2014, 2014, "Toro Rosso"], [2015, 2016, "Red Bull/Toro Rosso"], [2017, 2017, "Toro Rosso"], [2019, 2020, "Toro Rosso/AlphaTauri"]],
  "Kevin Magnussen": [[2014, 2014, "McLaren"], [2016, 2016, "Renault"], [2017, 2020, "Haas"], [2022, 2024, "Haas"]],
  "Nico Hulkenberg": [[2010, 2010, "Williams"], [2012, 2012, "Force India"], [2013, 2013, "Sauber"], [2014, 2016, "Force India"], [2017, 2019, "Renault"], [2020, 2022, "Racing Point/Aston Martin"], [2023, 2024, "Haas"], [2025, 2025, "Kick Sauber"]],
  "Esteban Ocon": [[2016, 2016, "Manor"], [2017, 2018, "Force India"], [2020, 2020, "Renault"], [2021, 2024, "Alpine"], [2025, 2025, "Haas"]],
  "Pierre Gasly": [[2017, 2018, "Toro Rosso"], [2019, 2019, "Red Bull/Toro Rosso"], [2020, 2022, "AlphaTauri"], [2023, 2025, "Alpine"]],
  "Charles Leclerc": [[2018, 2018, "Sauber"], [2019, 2025, "Ferrari"]],
  "Lando Norris": [[2019, 2025, "McLaren"]],
  "George Russell": [[2019, 2021, "Williams"], [2022, 2025, "Mercedes"]],
  "Alex Albon": [[2019, 2019, "Toro Rosso/Red Bull"], [2020, 2020, "Red Bull"], [2022, 2025, "Williams"]],
  "Lance Stroll": [[2017, 2018, "Williams"], [2019, 2020, "Racing Point"], [2021, 2025, "Aston Martin"]],
  "Oscar Piastri": [[2023, 2025, "McLaren"]],
  "Yuki Tsunoda": [[2021, 2023, "AlphaTauri"], [2024, 2025, "RB/Red Bull"]],
  "Zhou Guanyu": [[2022, 2024, "Alfa Romeo/Kick Sauber"]],
  "Logan Sargeant": [[2023, 2024, "Williams"]],
  "Liam Lawson": [[2023, 2025, "AlphaTauri/RB/Red Bull"]],
  "Franco Colapinto": [[2024, 2025, "Williams/Alpine"]],
  "Oliver Bearman": [[2024, 2024, "Ferrari"], [2025, 2025, "Haas"]],
  "Andrea Kimi Antonelli": [[2025, 2025, "Mercedes"]],
  "Gabriel Bortoleto": [[2025, 2025, "Kick Sauber"]],
  "Jack Doohan": [[2025, 2025, "Alpine"]],
  "Isack Hadjar": [[2025, 2025, "Racing Bulls"]]
};

const seasonMetrics = buildSeasonMetrics();

const seasonRosters = {
  1990: [
    roster("Aguri Suzuki", "Larrousse", 72), roster("Alessandro Nannini", "Benetton", 84),
    roster("Alex Caffi", "Dallara", 69), roster("Andrea de Cesaris", "Dallara", 72),
    roster("Bertrand Gachot", "Coloni", 66), roster("Derek Warwick", "Lotus", 73),
    roster("Eric Bernard", "Larrousse", 73), roster("Gabriele Tarquini", "AGS", 64),
    roster("Gregor Foitek", "Onyx/Brabham", 64), roster("Ivan Capelli", "Leyton House", 79),
    roster("JJ Lehto", "Onyx", 66), roster("Martin Donnelly", "Lotus", 68),
    roster("Mauricio Gugelmin", "Leyton House", 70), roster("Nicola Larini", "Ligier", 68),
    roster("Olivier Grouillard", "Osella", 64), roster("Paolo Barilla", "Minardi", 63),
    roster("Philippe Alliot", "Ligier", 68), roster("Pierluigi Martini", "Minardi", 71),
    roster("Roberto Moreno", "EuroBrun/Benetton", 72), roster("Satoru Nakajima", "Tyrrell", 67),
    roster("Stefano Modena", "Brabham", 71), roster("Yannick Dalmas", "AGS", 64)
  ],
  1991: [
    roster("Aguri Suzuki", "Larrousse", 68), roster("Alessandro Zanardi", "Jordan", 67),
    roster("Alex Caffi", "Footwork", 65), roster("Andrea de Cesaris", "Jordan", 77),
    roster("Bertrand Gachot", "Jordan", 72), roster("Eric Bernard", "Larrousse", 68),
    roster("Gabriele Tarquini", "AGS", 64), roster("Gianni Morbidelli", "Minardi/Ferrari", 67),
    roster("Ivan Capelli", "Leyton House", 71), roster("Johnny Herbert", "Lotus", 69),
    roster("Julian Bailey", "Lotus", 63), roster("Mark Blundell", "Brabham", 66),
    roster("Martin Brundle", "Brabham", 68), roster("Mauricio Gugelmin", "Leyton House", 67),
    roster("Michele Alboreto", "Footwork", 67), roster("Nicola Larini", "Modena", 66),
    roster("Olivier Grouillard", "Fondmetal", 64), roster("Pierluigi Martini", "Minardi", 68),
    roster("Roberto Moreno", "Benetton/Jordan/Minardi", 69), roster("Satoru Nakajima", "Tyrrell", 66),
    roster("Stefano Modena", "Tyrrell", 76), roster("Stefan Johansson", "AGS/Footwork", 65)
  ],
  1992: [
    roster("Aguri Suzuki", "Footwork", 66), roster("Andrea de Cesaris", "Tyrrell", 70),
    roster("Bertrand Gachot", "Larrousse", 66), roster("Christian Fittipaldi", "Minardi", 65),
    roster("Eric van de Poele", "Brabham/Fondmetal", 62), roster("Erik Comas", "Ligier", 66),
    roster("Gianni Morbidelli", "Minardi", 64), roster("Ivan Capelli", "Ferrari", 69),
    roster("JJ Lehto", "Dallara", 68), roster("Karl Wendlinger", "March", 68),
    roster("Martin Brundle", "Benetton", 78), roster("Mauricio Gugelmin", "Jordan", 63),
    roster("Michele Alboreto", "Footwork", 68), roster("Nicola Larini", "Ferrari", 64),
    roster("Olivier Grouillard", "Tyrrell", 63), roster("Paul Belmondo", "March", 61),
    roster("Pierluigi Martini", "Dallara", 66), roster("Stefano Modena", "Jordan", 64),
    roster("Thierry Boutsen", "Ligier", 68), roster("Ukyo Katayama", "Larrousse", 64)
  ],
  1993: [
    roster("Aguri Suzuki", "Footwork", 64), roster("Alessandro Zanardi", "Lotus", 67),
    roster("Andrea de Cesaris", "Tyrrell", 67), roster("Christian Fittipaldi", "Minardi", 67),
    roster("Derek Warwick", "Footwork", 68), roster("Erik Comas", "Larrousse", 66),
    roster("Fabrizio Barbazza", "Minardi", 63), roster("JJ Lehto", "Sauber", 71),
    roster("Johnny Herbert", "Lotus", 70), roster("Karl Wendlinger", "Sauber", 70),
    roster("Luca Badoer", "Lola", 63), roster("Mark Blundell", "Ligier", 72),
    roster("Martin Brundle", "Ligier", 73), roster("Michele Alboreto", "Lola", 62),
    roster("Philippe Alliot", "Larrousse", 66), roster("Pierluigi Martini", "Minardi", 64),
    roster("Thierry Boutsen", "Jordan", 63), roster("Toshio Suzuki", "Larrousse", 61),
    roster("Ukyo Katayama", "Tyrrell", 64)
  ],
  1994: [
    roster("Andrea de Cesaris", "Jordan/Sauber", 68), roster("David Brabham", "Simtek", 62),
    roster("Domenico Schiattarella", "Simtek", 61), roster("Eric Bernard", "Ligier/Lotus", 66),
    roster("Erik Comas", "Larrousse", 66), roster("Gianni Morbidelli", "Footwork", 66),
    roster("Hideki Noda", "Larrousse", 60), roster("JJ Lehto", "Benetton/Sauber", 68),
    roster("Jean-Marc Gounon", "Simtek", 61), roster("Johnny Herbert", "Lotus/Benetton/Ligier", 70),
    roster("Jos Verstappen", "Benetton", 67), roster("Karl Wendlinger", "Sauber", 69),
    roster("Luca Badoer", "Minardi", 63), roster("Mark Blundell", "Tyrrell", 68),
    roster("Martin Brundle", "McLaren", 72), roster("Michele Alboreto", "Minardi", 64),
    roster("Olivier Beretta", "Larrousse", 61), roster("Olivier Panis", "Ligier", 67),
    roster("Pedro Lamy", "Lotus", 62), roster("Philippe Alliot", "McLaren/Larrousse", 65),
    roster("Pierluigi Martini", "Minardi", 66), roster("Roland Ratzenberger", "Simtek", 61),
    roster("Ukyo Katayama", "Tyrrell", 69), roster("Yannick Dalmas", "Larrousse", 61)
  ],
  1995: [
    roster("Andrea Montermini", "Pacific", 61), roster("Bertrand Gachot", "Pacific", 62),
    roster("Gianni Morbidelli", "Footwork", 66), roster("Giovanni Lavaggi", "Pacific", 59),
    roster("Jean-Christophe Boullion", "Sauber", 64), roster("Johnny Herbert", "Benetton", 78),
    roster("Jos Verstappen", "Simtek", 64), roster("Karl Wendlinger", "Sauber", 63),
    roster("Luca Badoer", "Minardi", 63), roster("Martin Brundle", "Ligier", 69),
    roster("Max Papis", "Footwork", 61), roster("Mika Salo", "Tyrrell", 67),
    roster("Olivier Panis", "Ligier", 68), roster("Pedro Diniz", "Forti", 61),
    roster("Pedro Lamy", "Minardi", 63), roster("Pierluigi Martini", "Minardi", 64),
    roster("Roberto Moreno", "Forti", 61), roster("Taki Inoue", "Footwork", 60),
    roster("Ukyo Katayama", "Tyrrell", 65)
  ],
  1996: [
    roster("Andrea Montermini", "Forti", 60), roster("Giovanni Lavaggi", "Minardi", 59),
    roster("Jos Verstappen", "Footwork", 64), roster("Luca Badoer", "Forti", 61),
    roster("Martin Brundle", "Jordan", 68), roster("Mika Salo", "Tyrrell", 66),
    roster("Olivier Panis", "Ligier", 75), roster("Pedro Diniz", "Ligier", 63),
    roster("Pedro Lamy", "Minardi", 62), roster("Ricardo Rosset", "Footwork", 61),
    roster("Tarso Marques", "Minardi", 59), roster("Ukyo Katayama", "Tyrrell", 62)
  ],
  1997: [
    roster("Jan Magnussen", "Stewart", 62), roster("Jarno Trulli", "Minardi/Prost", 67),
    roster("Mika Salo", "Tyrrell", 66), roster("Nicola Larini", "Sauber", 64),
    roster("Norberto Fontana", "Sauber", 60), roster("Olivier Panis", "Prost", 74),
    roster("Pedro Diniz", "Arrows", 63), roster("Shinji Nakano", "Prost", 62),
    roster("Tarso Marques", "Minardi", 60), roster("Ukyo Katayama", "Minardi", 61)
  ],
  1998: [
    roster("Esteban Tuero", "Minardi", 60), roster("Jan Magnussen", "Stewart", 61),
    roster("Jos Verstappen", "Stewart", 63), roster("Mika Salo", "Arrows", 65),
    roster("Olivier Panis", "Prost", 65), roster("Pedro Diniz", "Arrows", 63),
    roster("Ricardo Rosset", "Tyrrell", 59), roster("Shinji Nakano", "Minardi", 61),
    roster("Toranosuke Takagi", "Tyrrell", 61)
  ],
  1999: [
    roster("Luca Badoer", "Minardi/Ferrari", 62), roster("Marc Gene", "Minardi", 64),
    roster("Mika Salo", "BAR/Ferrari", 70), roster("Olivier Panis", "Prost", 64),
    roster("Pedro de la Rosa", "Arrows", 64), roster("Pedro Diniz", "Sauber", 63),
    roster("Ricardo Zonta", "BAR", 62), roster("Stephane Sarrazin", "Minardi", 59),
    roster("Toranosuke Takagi", "Arrows", 60)
  ],
  2000: [
    roster("Alexander Wurz", "Benetton", 64), roster("Gaston Mazzacane", "Minardi", 60),
    roster("Johnny Herbert", "Jaguar", 62), roster("Jos Verstappen", "Arrows", 66),
    roster("Luciano Burti", "Jaguar", 60), roster("Marc Gene", "Minardi", 61),
    roster("Mika Salo", "Sauber", 67), roster("Pedro de la Rosa", "Arrows", 66),
    roster("Pedro Diniz", "Sauber", 63), roster("Ricardo Zonta", "BAR", 62)
  ]
};

const supplementalRosters = {
  2001: [
    roster("Luciano Burti", "Jaguar/Prost", 64), roster("Enrique Bernoldi", "Arrows", 63),
    roster("Tarso Marques", "Minardi", 60), roster("Alex Yoong", "Minardi", 59),
    roster("Tomas Enge", "Prost", 60)
  ],
  2002: [
    roster("Allan McNish", "Toyota", 64), roster("Mika Salo", "Toyota", 67),
    roster("Enrique Bernoldi", "Arrows", 62), roster("Alex Yoong", "Minardi", 59),
    roster("Anthony Davidson", "Minardi", 60)
  ],
  2003: [
    roster("Antonio Pizzonia", "Jaguar", 62), roster("Cristiano da Matta", "Toyota", 67),
    roster("Justin Wilson", "Minardi/Jaguar", 65), roster("Nicolas Kiesa", "Minardi", 59),
    roster("Ralph Firman", "Jordan", 62), roster("Zsolt Baumgartner", "Jordan", 58)
  ],
  2004: [
    roster("Antonio Pizzonia", "Williams", 64), roster("Cristiano da Matta", "Toyota", 65),
    roster("Gianmaria Bruni", "Minardi", 58), roster("Giorgio Pantano", "Jordan", 60),
    roster("Marc Gene", "Williams", 64), roster("Olivier Panis", "Toyota", 66),
    roster("Ricardo Zonta", "Toyota", 63), roster("Zsolt Baumgartner", "Minardi", 58)
  ],
  2005: [
    roster("Alexander Wurz", "McLaren", 66), roster("Anthony Davidson", "BAR", 61),
    roster("Antonio Pizzonia", "Williams", 63), roster("Christijan Albers", "Minardi", 61),
    roster("Narain Karthikeyan", "Jordan", 60), roster("Patrick Friesacher", "Minardi", 58),
    roster("Pedro de la Rosa", "McLaren", 66), roster("Robert Doornbos", "Minardi", 60),
    roster("Tiago Monteiro", "Jordan", 63), roster("Vitantonio Liuzzi", "Red Bull", 63)
  ],
  2006: [
    roster("Christijan Albers", "Midland", 60), roster("Franck Montagny", "Super Aguri", 59),
    roster("Robert Doornbos", "Red Bull", 62), roster("Sakon Yamamoto", "Super Aguri", 58),
    roster("Scott Speed", "Toro Rosso", 61), roster("Tiago Monteiro", "Midland", 60),
    roster("Vitantonio Liuzzi", "Toro Rosso", 62), roster("Yuji Ide", "Super Aguri", 56)
  ],
  2007: [
    roster("Anthony Davidson", "Super Aguri", 62), roster("Alexander Wurz", "Williams", 66),
    roster("Kazuki Nakajima", "Williams", 61), roster("Markus Winkelhock", "Spyker", 59),
    roster("Sakon Yamamoto", "Spyker", 58), roster("Scott Speed", "Toro Rosso", 60),
    roster("Vitantonio Liuzzi", "Toro Rosso", 61)
  ],
  2008: [
    roster("Anthony Davidson", "Super Aguri", 60), roster("Kazuki Nakajima", "Williams", 63),
    roster("Nelson Piquet Jr.", "Renault", 62), roster("Sebastien Bourdais", "Toro Rosso", 63)
  ],
  2009: [
    roster("Jaime Alguersuari", "Toro Rosso", 60), roster("Kazuki Nakajima", "Williams", 61),
    roster("Luca Badoer", "Ferrari", 58), roster("Nelson Piquet Jr.", "Renault", 60),
    roster("Sebastien Bourdais", "Toro Rosso", 61), roster("Sebastien Buemi", "Toro Rosso", 63)
  ],
  2010: [
    roster("Bruno Senna", "HRT", 60), roster("Christian Klien", "HRT", 59),
    roster("Jaime Alguersuari", "Toro Rosso", 62), roster("Karun Chandhok", "HRT", 59),
    roster("Lucas di Grassi", "Virgin", 59), roster("Pedro de la Rosa", "Sauber", 62),
    roster("Sakon Yamamoto", "HRT", 57), roster("Sebastien Buemi", "Toro Rosso", 63),
    roster("Vitantonio Liuzzi", "Force India", 63)
  ],
  2011: [
    roster("Bruno Senna", "Renault", 62), roster("Jaime Alguersuari", "Toro Rosso", 63),
    roster("Jerome d'Ambrosio", "Virgin", 59), roster("Karun Chandhok", "Lotus", 58),
    roster("Narain Karthikeyan", "HRT", 58), roster("Sebastien Buemi", "Toro Rosso", 63),
    roster("Vitantonio Liuzzi", "HRT", 59)
  ],
  2012: [
    roster("Bruno Senna", "Williams", 64), roster("Charles Pic", "Marussia", 59),
    roster("Jean-Eric Vergne", "Toro Rosso", 64), roster("Jerome d'Ambrosio", "Lotus", 60),
    roster("Narain Karthikeyan", "HRT", 57), roster("Pedro de la Rosa", "HRT", 58)
  ],
  2013: [
    roster("Charles Pic", "Caterham", 59), roster("Esteban Gutierrez", "Sauber", 62),
    roster("Giedo van der Garde", "Caterham", 59), roster("Jean-Eric Vergne", "Toro Rosso", 64),
    roster("Jules Bianchi", "Marussia", 64), roster("Max Chilton", "Marussia", 58),
    roster("Paul di Resta", "Force India", 65)
  ],
  2014: [
    roster("Andre Lotterer", "Caterham", 60), roster("Esteban Gutierrez", "Sauber", 60),
    roster("Jean-Eric Vergne", "Toro Rosso", 64), roster("Jules Bianchi", "Marussia", 65),
    roster("Marcus Ericsson", "Caterham", 58), roster("Max Chilton", "Marussia", 58),
    roster("Will Stevens", "Caterham", 58)
  ],
  2015: [
    roster("Alexander Rossi", "Manor", 59), roster("Felipe Nasr", "Sauber", 64),
    roster("Marcus Ericsson", "Sauber", 60), roster("Roberto Merhi", "Manor", 58),
    roster("Will Stevens", "Manor", 58)
  ],
  2016: [
    roster("Felipe Nasr", "Sauber", 61), roster("Jolyon Palmer", "Renault", 60),
    roster("Marcus Ericsson", "Sauber", 60), roster("Pascal Wehrlein", "Manor", 63),
    roster("Rio Haryanto", "Manor", 58), roster("Stoffel Vandoorne", "McLaren", 62)
  ],
  2017: [
    roster("Antonio Giovinazzi", "Sauber", 60), roster("Brendon Hartley", "Toro Rosso", 60),
    roster("Jolyon Palmer", "Renault", 60), roster("Marcus Ericsson", "Sauber", 59),
    roster("Pascal Wehrlein", "Sauber", 62), roster("Stoffel Vandoorne", "McLaren", 62)
  ],
  2018: [
    roster("Brendon Hartley", "Toro Rosso", 60), roster("Marcus Ericsson", "Sauber", 60),
    roster("Sergey Sirotkin", "Williams", 58), roster("Stoffel Vandoorne", "McLaren", 60)
  ],
  2019: [
    roster("Antonio Giovinazzi", "Alfa Romeo", 61), roster("Robert Kubica", "Williams", 58)
  ],
  2020: [
    roster("Antonio Giovinazzi", "Alfa Romeo", 61), roster("Nicholas Latifi", "Williams", 58)
  ],
  2021: [
    roster("Antonio Giovinazzi", "Alfa Romeo", 61), roster("Mick Schumacher", "Haas", 60),
    roster("Nicholas Latifi", "Williams", 58), roster("Nikita Mazepin", "Haas", 56)
  ],
  2022: [
    roster("Mick Schumacher", "Haas", 60), roster("Nicholas Latifi", "Williams", 57)
  ],
  2023: [
    roster("Nyck de Vries", "AlphaTauri", 58)
  ]
};

const state = {
  calendarYear: 2025,
  races: [...calendars[2025]],
  picks: [],
  currentIndex: 0,
  rolledYear: null,
  rerolls: 3,
  result: [],
  dropdownOpen: false
};

function entry(name, from, to, rating, teams, tags) {
  return { name, from, to, rating, teams, tags };
}

function roster(name, team, score) {
  return { name, team, score, yearOnly: true, tags: ["Grid"] };
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

function sameYearWinnerName(race = currentRaceName()) {
  if (state.rolledYear !== state.calendarYear) return null;
  return raceWinners[state.calendarYear]?.[race] || null;
}

function isSameYearRaceWinner(driver, race = currentRaceName()) {
  return Boolean(driver && driver.year === state.calendarYear && driver.name === raceWinners[state.calendarYear]?.[race]);
}

function driversForYear(year) {
  const combined = new Map();

  driverCareers
    .filter(driver => racedInYear(driver, year))
    .map(driver => ({
      ...driver,
      year,
      team: teamForYear(driver, year),
      score: seasonalScore(driver, year),
      metrics: metricsFor(driver.name, year)
    }))
    .forEach(driver => combined.set(driver.name, driver));

  [...(seasonRosters[year] || []), ...(supplementalRosters[year] || [])].forEach(driver => {
    if (!combined.has(driver.name)) {
      combined.set(driver.name, {
        ...driver,
        year,
        metrics: null,
        rating: driver.score,
        from: year,
        to: year,
        teams: [driver.team]
      });
    }
  });

  return [...combined.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function pickerDrivers() {
  const drivers = driversForYear(state.rolledYear);
  const winner = sameYearWinnerName();
  if (!winner) return drivers;
  return [...drivers].sort((a, b) => {
    if (a.name === winner) return -1;
    if (b.name === winner) return 1;
    return a.name.localeCompare(b.name);
  });
}

function teamForYear(driver, year) {
  const stints = teamStints[driver.name];
  const stint = stints?.find(([from, to]) => year >= from && year <= to);
  if (stint) return stint[2];
  if (driver.teams.length === 1) return driver.teams[0];
  const span = Math.max(1, driver.to - driver.from + 1);
  const index = Math.min(driver.teams.length - 1, Math.floor(((year - driver.from) / span) * driver.teams.length));
  return driver.teams[index];
}

function racedInYear(driver, year) {
  const stints = teamStints[driver.name];
  if (stints) return stints.some(([from, to]) => year >= from && year <= to);
  return driver.from <= year && driver.to >= year;
}

function constructorKey(team) {
  return team.split("/")[0].trim();
}

function constructorCode(team) {
  const key = constructorKey(team);
  const codes = {
    "AGS": "AGS",
    "Alfa Romeo": "ALF",
    "AlphaTauri": "AT",
    "Alpine": "ALP",
    "Arrows": "ARR",
    "Aston Martin": "AM",
    "BAR": "BAR",
    "BMW Sauber": "BMW",
    "Benetton": "BEN",
    "Brabham": "BRA",
    "Brawn": "BGP",
    "Caterham": "CAT",
    "Coloni": "COL",
    "Dallara": "DAL",
    "Ferrari": "FER",
    "Fondmetal": "FON",
    "Footwork": "FOO",
    "Force India": "FI",
    "Forti": "FOR",
    "HRT": "HRT",
    "Haas": "HAS",
    "Honda": "HON",
    "Jaguar": "JAG",
    "Jordan": "JOR",
    "Kick Sauber": "SAU",
    "Larrousse": "LAR",
    "Leyton House": "LEY",
    "Ligier": "LIG",
    "Lola": "LOL",
    "Lotus": "LOT",
    "Manor": "MAN",
    "March": "MAR",
    "Marussia": "MAR",
    "McLaren": "MCL",
    "Mercedes": "MER",
    "Minardi": "MIN",
    "Modena": "MOD",
    "Onyx": "ONY",
    "Osella": "OSE",
    "Pacific": "PAC",
    "Prost": "PRO",
    "RB": "RB",
    "Racing Bulls": "VCARB",
    "Racing Point": "RP",
    "Red Bull": "RBR",
    "Renault": "REN",
    "Sauber": "SAU",
    "Simtek": "SIM",
    "Spyker": "SPY",
    "Stewart": "STW",
    "Super Aguri": "SA",
    "Toro Rosso": "STR",
    "Toyota": "TOY",
    "Tyrrell": "TYR",
    "Virgin": "VIR",
    "Williams": "WIL"
  };
  return codes[key] || key.slice(0, 3).toUpperCase();
}

function constructorColor(team) {
  const key = constructorKey(team);
  const colors = {
    "Alfa Romeo": "#8b1e2d",
    "AlphaTauri": "#2f4f7f",
    "Alpine": "#2293d1",
    "Arrows": "#f47b20",
    "Aston Martin": "#006f62",
    "BAR": "#d7d7d7",
    "BMW Sauber": "#1f69c9",
    "Benetton": "#1f9d55",
    "Brawn": "#b6ff00",
    "Ferrari": "#dc0000",
    "Force India": "#ff5f9e",
    "Haas": "#b6babd",
    "Honda": "#ffffff",
    "Jaguar": "#0b5f3a",
    "Jordan": "#f7d117",
    "Kick Sauber": "#01e000",
    "Larrousse": "#e54b4b",
    "Ligier": "#0055a4",
    "Lotus": "#17421f",
    "McLaren": "#ff8700",
    "Mercedes": "#00d2be",
    "Minardi": "#1f3b73",
    "Prost": "#0046ad",
    "Racing Bulls": "#1634cb",
    "Racing Point": "#f596c8",
    "Red Bull": "#1e41ff",
    "Renault": "#ffd800",
    "Sauber": "#006eff",
    "Stewart": "#ffffff",
    "Toro Rosso": "#0032ff",
    "Toyota": "#e4002b",
    "Tyrrell": "#123c7c",
    "Williams": "#00a3e0"
  };
  return colors[key] || "#5f6368";
}

function teamBadgeHtml(team) {
  const color = constructorColor(team);
  const darkText = ["#ffffff", "#ffd800", "#f7d117", "#b6ff00", "#d7d7d7", "#b6babd"].includes(color);
  const code = constructorCode(team);
  const name = code === team ? "" : `<span>${team}</span>`;
  return `<span class="team-badge" style="--team-color:${color};color:${darkText ? "#111" : "#fff"}">${code}</span>${name}`;
}

function teamOptionLabel(driver) {
  const code = constructorCode(driver.team);
  return code === driver.team ? `${driver.name} - ${driver.team}` : `${driver.name} - ${code} ${driver.team}`;
}

function seasonalScore(driver, year) {
  const metrics = metricsFor(driver.name, year);
  if (metrics) {
    return scoreFromMetrics(metrics);
  }

  const careerPosition = driver.rating >= 96 ? 4 : driver.rating >= 92 ? 6 : driver.rating >= 88 ? 9 : 13;
  const activeSpan = Math.max(1, driver.to - driver.from + 1);
  const seasonIndex = year - driver.from;
  const experienceCurve = Math.min(3, seasonIndex * .55);
  const lateCareerFade = Math.max(0, seasonIndex - activeSpan + 3) * .9;
  return Math.round(Math.max(58, Math.min(84, driver.rating - 10 + experienceCurve - lateCareerFade - careerPosition * .18)));
}

function metricsFor(name, year) {
  return seasonMetrics.get(`${name}|${year}`) || null;
}

function metric(position, wins, podiums, poles, starts, note = "") {
  return { position, wins, podiums, poles, starts, note };
}

function scoreFromMetrics(metrics) {
  const starts = Math.max(1, metrics.starts);
  const championshipScore = {
    1: 16,
    2: 13,
    3: 11,
    4: 8.5,
    5: 7,
    6: 6,
    7: 5,
    8: 4,
    9: 3,
    10: 2.5
  }[metrics.position] || 1;

  const winScore = (metrics.wins / starts) * 12;
  const podiumScore = (metrics.podiums / starts) * 6;
  const poleScore = (metrics.poles / starts) * 4;
  const championEdge = metrics.position === 1 ? 2.25 : 0;
  const reliability = Math.min(2, metrics.starts / 12);
  return Math.round(Math.max(68, Math.min(99, 63 + championshipScore + winScore + podiumScore + poleScore + championEdge + reliability)));
}

function buildSeasonMetrics() {
  const rows = [
    ["Ayrton Senna", 1990, metric(1, 6, 11, 10, 16, "World Champion")],
    ["Ayrton Senna", 1991, metric(1, 7, 12, 8, 16, "World Champion")],
    ["Nigel Mansell", 1992, metric(1, 9, 12, 14, 16, "World Champion")],
    ["Alain Prost", 1993, metric(1, 7, 12, 13, 16, "World Champion")],
    ["Michael Schumacher", 1994, metric(1, 8, 10, 6, 16, "World Champion")],
    ["Michael Schumacher", 1995, metric(1, 9, 11, 4, 17, "World Champion")],
    ["Damon Hill", 1996, metric(1, 8, 10, 9, 16, "World Champion")],
    ["Jacques Villeneuve", 1997, metric(1, 7, 8, 10, 17, "World Champion")],
    ["Mika Hakkinen", 1998, metric(1, 8, 11, 9, 16, "World Champion")],
    ["Mika Hakkinen", 1999, metric(1, 5, 10, 11, 16, "World Champion")],
    ["Michael Schumacher", 2000, metric(1, 9, 12, 9, 17, "World Champion")],
    ["Michael Schumacher", 2001, metric(1, 9, 14, 11, 17, "World Champion")],
    ["Michael Schumacher", 2002, metric(1, 11, 17, 7, 17, "World Champion")],
    ["Michael Schumacher", 2003, metric(1, 6, 8, 5, 16, "World Champion")],
    ["Michael Schumacher", 2004, metric(1, 13, 15, 8, 18, "World Champion")],
    ["Fernando Alonso", 2005, metric(1, 7, 15, 6, 19, "World Champion")],
    ["Fernando Alonso", 2006, metric(1, 7, 14, 6, 18, "World Champion")],
    ["Kimi Raikkonen", 2007, metric(1, 6, 12, 3, 17, "World Champion")],
    ["Lewis Hamilton", 2008, metric(1, 5, 10, 7, 18, "World Champion")],
    ["Jenson Button", 2009, metric(1, 6, 9, 4, 17, "World Champion")],
    ["Sebastian Vettel", 2010, metric(1, 5, 10, 10, 19, "World Champion")],
    ["Sebastian Vettel", 2011, metric(1, 11, 17, 15, 19, "World Champion")],
    ["Sebastian Vettel", 2012, metric(1, 5, 10, 6, 20, "World Champion")],
    ["Sebastian Vettel", 2013, metric(1, 13, 16, 9, 19, "World Champion")],
    ["Lewis Hamilton", 2014, metric(1, 11, 16, 7, 19, "World Champion")],
    ["Lewis Hamilton", 2015, metric(1, 10, 17, 11, 19, "World Champion")],
    ["Nico Rosberg", 2016, metric(1, 9, 16, 8, 21, "World Champion")],
    ["Lewis Hamilton", 2017, metric(1, 9, 13, 11, 20, "World Champion")],
    ["Lewis Hamilton", 2018, metric(1, 11, 17, 11, 21, "World Champion")],
    ["Lewis Hamilton", 2019, metric(1, 11, 17, 5, 21, "World Champion")],
    ["Lewis Hamilton", 2020, metric(1, 11, 14, 10, 16, "World Champion")],
    ["Max Verstappen", 2021, metric(1, 10, 18, 10, 22, "World Champion")],
    ["Max Verstappen", 2022, metric(1, 15, 17, 7, 22, "World Champion")],
    ["Max Verstappen", 2023, metric(1, 19, 21, 12, 22, "World Champion")],
    ["Max Verstappen", 2024, metric(1, 9, 14, 8, 24, "World Champion")],
    ["Lando Norris", 2025, metric(1, 7, 18, 6, 24, "World Champion")],
    ["Max Verstappen", 2025, metric(2, 8, 14, 5, 24, "Runner-Up")],
    ["Oscar Piastri", 2025, metric(3, 6, 15, 4, 24, "Top 3")],
    ["Lewis Hamilton", 2016, metric(2, 10, 17, 12, 21, "Runner-Up")],
    ["Daniel Ricciardo", 2016, metric(3, 1, 8, 0, 21, "Top 3")],
    ["Fernando Alonso", 2012, metric(2, 3, 13, 2, 20, "Elite Underdog")],
    ["Kimi Raikkonen", 2005, metric(2, 7, 12, 5, 19, "Elite Pace")],
    ["Kimi Raikkonen", 2003, metric(2, 1, 10, 2, 16, "Runner-Up")],
    ["Juan Pablo Montoya", 2003, metric(3, 2, 9, 1, 16, "Top 3")],
    ["Felipe Massa", 2008, metric(2, 6, 10, 6, 18, "Runner-Up")],
    ["Sebastian Vettel", 2017, metric(2, 5, 13, 4, 20, "Runner-Up")],
    ["Charles Leclerc", 2022, metric(2, 3, 11, 9, 22, "Runner-Up")],
    ["Lando Norris", 2024, metric(2, 4, 13, 8, 24, "Runner-Up")],
    ["Charles Leclerc", 2024, metric(3, 3, 13, 3, 24, "Top 3")],
    ["Valtteri Bottas", 2019, metric(2, 4, 15, 5, 21, "Runner-Up")],
    ["Valtteri Bottas", 2020, metric(2, 2, 11, 5, 17, "Runner-Up")]
  ];

  return new Map(rows.map(([name, year, data]) => [`${name}|${year}`, data]));
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
          <span class="race-pick">${pick ? pick.name : "-"}</span>
          <span class="race-meta">${pick ? `${pick.year} / ${pick.team}` : "Waiting for roll"}</span>
        </span>
      </article>
    `;
  }).join("");
}

function renderRollPanel() {
  const readyToSimulate = allFilled();
  const remainingPicks = Math.max(0, state.races.length - filledCount());
  byId("rolledLabel").textContent = state.rolledYear ? "Drawn Year" : "Next Race";
  byId("currentRaceLabel").textContent = state.rolledYear ? String(state.rolledYear) : readyToSimulate ? "Season complete" : currentRaceName();
  byId("rerollText").textContent = `Re-rolls / ${state.rerolls} left`;
  byId("simulateButton").disabled = !readyToSimulate;
  byId("simulateButton").setAttribute("aria-disabled", String(!readyToSimulate));
  byId("simulateButton").innerHTML = `
    <span class="flag-mark" aria-hidden="true"></span>
    ${readyToSimulate ? "Simulate" : `Pick ${remainingPicks} More`}
  `;
  byId("rollButton").disabled = readyToSimulate;

  if (!state.rolledYear) {
    byId("rollHint").textContent = readyToSimulate
      ? "Full calendar complete. Simulate when you are ready."
      : "Roll the dice to draw any F1 driver year from 1990 to 2025.";
    byId("rollButtonText").textContent = readyToSimulate ? "All Set" : "Roll Year";
    byId("driverPickerButton").textContent = "Roll first";
    byId("driverPickerButton").disabled = true;
    byId("driverOptions").innerHTML = "";
    byId("driverOptions").classList.remove("is-open");
    byId("skipButton").disabled = true;
    return;
  }

  const drivers = pickerDrivers();
  const winner = sameYearWinnerName();
  byId("rollHint").textContent = winner
    ? `Race: ${currentRaceName()}. Same-year winner ${winner} is first and gets a small race-result bonus. Overall season form still matters most.`
    : `Race: ${currentRaceName()}. Choose one driver who raced in ${state.rolledYear}.`;
  byId("rollButtonText").textContent = "Roll Again";
  byId("driverPickerButton").textContent = `Select from ${state.rolledYear}`;
  byId("driverPickerButton").disabled = false;
  byId("driverOptions").classList.toggle("is-open", state.dropdownOpen);
  byId("driverOptions").innerHTML = drivers.map((driver, index) => `
    <button class="driver-option ${isSameYearRaceWinner(driver) ? "race-winner-option" : ""}" type="button" role="option" data-driver-index="${index}">
      <span class="driver-option-name">${driver.name}</span>
      <span class="driver-option-team">
        ${isSameYearRaceWinner(driver) ? `<span class="winner-pill">Race winner</span>` : ""}
        ${teamBadgeHtml(driver.team)}
      </span>
    </button>
  `).join("");
  byId("skipButton").disabled = state.rerolls <= 0;
}

function allFilled() {
  return state.races.length > 0
    && state.picks.length === state.races.length
    && state.picks.every(Boolean);
}

function setCalendar(year) {
  state.calendarYear = year;
  state.races = [...calendars[year]];
  state.picks = Array(state.races.length).fill(null);
  state.currentIndex = 0;
  state.rolledYear = null;
  state.rerolls = 3;
  state.result = [];
  state.dropdownOpen = false;
  byId("results").hidden = true;
  byId("celebration").hidden = true;
  byId("confetti").innerHTML = "";
  render();
}

function rollYear(isReroll = false) {
  if (allFilled()) return;
  if (isReroll && state.rolledYear && state.rerolls <= 0) return;
  if (isReroll && state.rolledYear) state.rerolls -= 1;
  state.rolledYear = 1990 + Math.floor(Math.random() * 36);
  state.dropdownOpen = true;
  render();
  requestAnimationFrame(() => {
    byId("driverPickerButton").scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function chooseDriver(value) {
  if (value === "" || !state.rolledYear || allFilled()) return;
  const picked = pickerDrivers()[Number(value)];
  state.picks[state.currentIndex] = picked;
  const nextOpen = state.picks.findIndex(item => !item);
  state.currentIndex = nextOpen === -1 ? state.races.length - 1 : nextOpen;
  state.rolledYear = null;
  state.dropdownOpen = false;
  render();
}

function simulatePick(pick, race, index) {
  const streetRace = ["Monaco", "Singapore", "Azerbaijan", "Las Vegas", "Saudi Arabia", "Miami"].includes(race);
  const powerRace = ["Italy", "Belgium", "Great Britain", "Qatar", "Austria"].includes(race);
  const historyBonus = pick.tags.includes("Champion") ? 2.5 : 0;
  const streetBonus = streetRace && (pick.tags.includes("Street") || pick.tags.includes("Wet")) ? 3.5 : 0;
  const powerBonus = powerRace && (pick.tags.includes("Power") || pick.tags.includes("Complete")) ? 3 : 0;
  const raceResultBonus = isSameYearRaceWinner(pick, race) ? 3.5 : 0;
  const calendarPressure = index > state.races.length - 4 ? -1 : 0;
  const randomContext = Math.random() * 10 - 5;
  const score = pick.score + historyBonus + streetBonus + powerBonus + raceResultBonus + calendarPressure + randomContext;
  const probability = 1 / (1 + Math.exp(-(score - 87) / 5.8));
  return {
    race,
    pick,
    won: Math.random() < Math.max(.1, Math.min(.94, probability))
  };
}

function runSimulation() {
  if (!allFilled()) {
    state.result = [];
    byId("results").hidden = true;
    const remainingPicks = Math.max(0, state.races.length - filledCount());
    byId("rollHint").textContent = `Pick every circuit first. ${remainingPicks} more ${remainingPicks === 1 ? "race" : "races"} left before simulation.`;
    byId("simulateButton").disabled = true;
    byId("simulateButton").setAttribute("aria-disabled", "true");
    return;
  }
  state.result = state.races.map((race, index) => simulatePick(state.picks[index], race, index));
  const wins = state.result.filter(item => item.won).length;
  byId("resultScore").textContent = `${wins}/${state.races.length}`;
  byId("shareScore").textContent = `${wins}/${state.races.length}`;
  byId("shareSeason").textContent = `${state.calendarYear} Calendar`;
  byId("resultList").innerHTML = state.result.map((item, index) => `
    <article class="result-slot ${item.won ? "win" : "loss"}">
      <span class="race-number">${index + 1}</span>
      <span>
        <span class="race-name">${item.race}</span>
        <span class="race-pick">${item.pick.name}</span>
        <span class="race-meta">${item.pick.year} / ${item.pick.team}</span>
      </span>
    </article>
  `).join("");
  byId("results").hidden = false;
  renderCelebration(wins);
  byId("results").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCelebration(wins) {
  const perfect = wins === state.races.length;
  const celebration = byId("celebration");
  const confetti = byId("confetti");
  celebration.hidden = !perfect;
  confetti.innerHTML = "";

  if (!perfect) return;

  const colors = ["#23d17b", "#e3342f", "#f1c45b", "#ffffff"];
  const pieces = Array.from({ length: 70 }, (_, index) => {
    const left = Math.round(Math.random() * 100);
    const delay = (Math.random() * .45).toFixed(2);
    const color = colors[index % colors.length];
    return `<i style="left:${left}%;animation-delay:${delay}s;--piece-color:${color}"></i>`;
  });
  confetti.innerHTML = pieces.join("");
}

function newRun() {
  setCalendar(state.calendarYear);
}

function makeShareText() {
  const score = byId("resultScore").textContent;
  return `I went ${score} in F1 24-0. Can you go 24-0?`;
}

function drawShareCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1500;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#e3342f";
  ctx.fillRect(0, 0, 18, canvas.height);
  ctx.fillStyle = "#f7f4eb";
  ctx.font = "900 70px Fira Sans, Arial, sans-serif";
  ctx.fillText("F1 24-0", 76, 110);
  ctx.font = "900 190px Fira Sans, Arial, sans-serif";
  ctx.fillText(byId("resultScore").textContent, 72, 300);
  ctx.font = "700 34px Fira Sans, Arial, sans-serif";
  ctx.fillStyle = "#9aa4b8";
  ctx.fillText(`${state.calendarYear} Calendar`, 78, 365);

  ctx.font = "700 28px Fira Sans, Arial, sans-serif";
  state.result.slice(0, 24).forEach((item, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = 78 + col * 530;
    const y = 465 + row * 78;
    ctx.fillStyle = item.won ? "#23d17b" : "#2b2b2b";
    ctx.fillRect(x, y - 34, 12, 48);
    ctx.fillStyle = "#f7f4eb";
    ctx.fillText(`${index + 1}. ${item.race}`, x + 24, y - 8);
    ctx.fillStyle = "#9aa4b8";
    ctx.font = "500 23px Fira Sans, Arial, sans-serif";
    ctx.fillText(`${item.pick.name} / ${item.pick.year}`, x + 24, y + 22);
    ctx.font = "700 28px Fira Sans, Arial, sans-serif";
  });

  ctx.fillStyle = "#e3342f";
  ctx.font = "900 42px Fira Sans, Arial, sans-serif";
  ctx.fillText("CAN YOU GO 24-0?", 76, 1430);
  return canvas;
}

function downloadResultCard() {
  if (!state.result.length) return;
  const link = document.createElement("a");
  link.download = `f1-24-0-${state.calendarYear}.png`;
  link.href = drawShareCanvas().toDataURL("image/png");
  link.click();
}

function shareOnTwitter() {
  if (!state.result.length) return;
  const text = encodeURIComponent(makeShareText());
  const url = encodeURIComponent(publicShareUrl);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
}

function toggleTheme() {
  document.body.classList.toggle("light");
  byId("themeButton").textContent = document.body.classList.contains("light") ? "DARK" : "LIGHT";
}

function openInstructions() {
  byId("instructionsModal").hidden = false;
}

function closeInstructions() {
  byId("instructionsModal").hidden = true;
}

function bindEvents() {
  byId("rollButton").addEventListener("click", () => rollYear(Boolean(state.rolledYear)));
  byId("skipButton").addEventListener("click", () => rollYear(true));
  byId("driverPickerButton").addEventListener("click", () => {
    if (!state.rolledYear) return;
    state.dropdownOpen = !state.dropdownOpen;
    render();
  });
  byId("driverOptions").addEventListener("click", event => {
    const option = event.target.closest("[data-driver-index]");
    if (!option) return;
    chooseDriver(option.dataset.driverIndex);
  });
  byId("simulateButton").addEventListener("click", runSimulation);
  byId("newGameButton").addEventListener("click", newRun);
  byId("downloadCardButton").addEventListener("click", downloadResultCard);
  byId("shareTwitterButton").addEventListener("click", shareOnTwitter);
  byId("themeButton").addEventListener("click", toggleTheme);
  byId("instructionsButton").addEventListener("click", openInstructions);
  byId("closeInstructionsButton").addEventListener("click", closeInstructions);
  byId("instructionsModal").addEventListener("click", event => {
    if (event.target.id === "instructionsModal") closeInstructions();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeInstructions();
  });
}

function render() {
  renderSeasonButtons();
  renderRaceList();
  renderRollPanel();
}

state.picks = Array(state.races.length).fill(null);
bindEvents();
render();
