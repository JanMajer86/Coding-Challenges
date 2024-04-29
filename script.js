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
