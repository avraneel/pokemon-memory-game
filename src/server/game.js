const cards = [
  {
    name: "Bulbasaur",
  },
  {
    name: "Charmander",
  },
  {
    name: "Squirtle",
  },
  {
    name: "Wabuffet",
  },
];

function playRound(card) {
  if (stack.indexOf(card.name) > 0) {
    // card exists, so you win the round
    if (stack.length > bestScore) {
      bestScore = stack.length;
    }
  }
}
