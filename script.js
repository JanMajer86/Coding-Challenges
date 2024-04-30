// developer skills & editor setup

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += ` ... ${arr[i]}°C in ${i + 1} days`;
  }
  string += ` ... `;
  console.log(string);
};

printForecast(temperatures);
printForecast(temperatures2);

///////////////////////////////////////////////////
// Data Structures, Modern Operators and Strings //
///////////////////////////////////////////////////

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1 (create one player array for each team)
const players1 = game.players[0];
const players2 = game.players[1];

// 2 (first player in array is goalkeeper, others are field players)
const [gk, ...fieldPlayers] = players1;
console.log(`Bayern GoalKeeper: ${gk}`);
console.log(`Bayern Field Players: ${fieldPlayers}`);

// 3 (create array of all players of both teams)
const allPlayers = [...players1, ...players2];
// console.log(`All players: ${allPlayers}`);
// console.log(allPlayers.length);

// 4 create new array: original team + substitute players
const substitute = ["Thiago", "Coutinho", "Perisic"];
const players1Final = [...players1, ...substitute];
console.log(players1Final);

// 5 Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6 Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...playerNames) {
  totalGoals = 0;
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
    totalGoals++;
  }
  console.log(totalGoals);
};

printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");
printGoals(...substitute);
printGoals(...game.scored);

// 7 The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// USING the Short CIrcuiting
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

//////////////////////////////////////////
// Data Structures CODING CHALLENGE #02 //
//////////////////////////////////////////

// 1) Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2) Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

let odds = 0;
const values = Object.values(game.odds);

for (const odd of values) {
  odds += odd;
}
console.log(`Average odd: ${odds / values.length}`);

// 3) Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw").
// Hint: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const string = team === "x" ? "draw" : `victory ${game[team]}`;

  console.log(`Odd of ${string} : ${odd}`);
}

// 4) Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// ?? Absolutně nechňápu
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  // undefined = 1, pokud už je defined, tak +1
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);

//////////////////////////////////////////
// Data Structures CODING CHALLENGE #03 //
//////////////////////////////////////////

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1)
const events = new Set(gameEvents.values());
// 2)
gameEvents.delete(64);
console.log(gameEvents);
// 3)
const gameLength = 90;
const numEvents = gameEvents.size + 1;
console.log(numEvents);
console.log(
  `An event happened, on average, every ${gameLength / numEvents} minutes`
);

// 4
for (const [key, value] of gameEvents.entries()) {
  const str = key < 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${str} ${key}: ${value}`);
}
