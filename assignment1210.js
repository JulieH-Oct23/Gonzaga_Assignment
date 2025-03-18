// forEach Exercise
const movies = [
	{title: "Inception", director: "Christopher Nolan", yearReleased: 2010},
	{title: "Interstellar", director: "Christopher Nolan", yearReleased: 2014},
	{title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", yearReleased: 1999},
	{title: "Blade Runner 2049", director: "Denis Villeneuve", yearReleased: 2017},
	{title: "The Martian", director: "Ridley Scott", yearReleased: 2015},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014},
	{title: "Arrival", director: "Denis Villeneuve", yearReleased: 2016},
	{title: "Eternal Sunshine of the Spotless Mind", director: "Michel Gondry", yearReleased: 2004},
	{title: "Minority Report", director: "Steven Spielberg", yearReleased: 2002},
	{title: "Ex Machina", director: "Alex Garland", yearReleased: 2014}
];

movies.forEach(function (movie)
               {
	               console.log(`${movie.title} (${movie.yearReleased}) directed by ${movie.director}`);
               });

// map Exercise
const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const newUsers = users.map(function (user)
                           {
	                           return {
		                           fullName: `${user.firstName} ${user.lastName}`,
		                           membershipStatus: user.points > 100 ? "Premium" : "Standard"
	                           };
                           });

console.log(newUsers);

// filter Exercise
const planets = [
	{name: "Mercury", temperature: 440, distance: 0.39},
	{name: "Venus", temperature: 737, distance: 0.72},
	{name: "Earth", temperature: 288, distance: 1},
	{name: "Mars", temperature: 253, distance: 1.5},
	{name: "Jupiter", temperature: 163, distance: 5.2},
	{name: "Saturn", temperature: 133, distance: 9.58},
	{name: "Uranus", temperature: 78, distance: 19.22},
	{name: "Neptune", temperature: 73, distance: 30.05}
];

const habitablePlanets = planets.filter(
	function (planet)
	{
		return planet.temperature >= 253 && planet.temperature <= 323 &&
		       planet.distance >= 0.75 && planet.distance <= 1.5;
	}
);

console.log(habitablePlanets);

// find and findIndex Exercise
const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const firstWaterCreature = mythicalCreatures.find(
	function (creature)
	{
		return creature.type === "Water";
	}
);
console.log(firstWaterCreature.name);

const griffinIndex = mythicalCreatures.findIndex(
	function (creature)
	{
		return creature.name === "Griffin";
	}
);
console.log(griffinIndex);

const enchantedForestCreature = mythicalCreatures.find(
	function (creature)
	{
		return creature.lastSeen === "Enchanted Forest";
	}
);
console.log(enchantedForestCreature.name);

