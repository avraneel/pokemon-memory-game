let score = 0;
let bestScore = 0;
let stack = [];

function playRound(name) {
  if (stack.indexOf(name) > -1) {
    // card exists, so you win the round
    console.log(`${name} exists`);
    if (stack.length > bestScore) {
      bestScore = stack.length;
      console.log(`Best Score = ${score}`);
    }
    score = 0;
    console.log(`Score = ${score}`);
    stack = [];
    // clear stack needed
  } else {
    stack.push(name);
    score++;
    console.log(`Score = ${score}`);
  }
}

playRound("aa");
playRound("bb");
playRound("cc");
playRound("dd");
playRound("bb");
playRound("1");
playRound("2");
playRound("3");
playRound("1");
playRound("q");
playRound("w");
playRound("e");
playRound("r");
playRound("t");
playRound("t");
