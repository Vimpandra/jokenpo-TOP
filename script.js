const rockButton = document.getElementById(`rockButton`);
const paperButton = document.getElementById(`paperButton`);
const scissorsButton = document.getElementById(`scissorsButton`);

const battle = document.getElementById(`battle`);
const results = document.getElementById(`results`);
const score = document.getElementById(`score`);

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const gameOptions = [`rock`, `paper`, `scissors`]
    const random = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[random];
}

function playRound(playerInput, computerInput) {
    battle.textContent = `You played ${playerInput} against the computer's ${computerInput}`;
    console.log(`You played ${playerInput} against the computer's ${computerInput}`);

    if (playerInput === computerInput) {
        console.log(`IT'S A DRAW`);
        results.textContent = `IT'S A DRAW`;
        score.textContent = `You ${playerScore} X ${computerScore} Computer`;
    } else if (
        (playerInput === `rock` && computerInput === `scissors`) ||
        (playerInput === `paper` && computerInput === `rock`) ||
        (playerInput === `scissors` && computerInput === `paper`)
        ) {
            console.log(`YOU WIN`);
            results.textContent = `YOU WIN`;
            playerScore += 1;
            score.textContent = `You ${playerScore} X ${computerScore} Computer`;
            
    } else if (
        (playerInput === `rock` && computerInput === `paper`) ||
        (playerInput === `paper` && computerInput === `scissors`) ||
        (playerInput === `scissors` && computerInput === `rock`)
        ) {
            console.log(`YOU LOSE`);
            results.textContent = `YOU LOSE`;
            computerScore += 1;
            score.textContent = `You ${playerScore} X ${computerScore} Computer`;
    }
}

rockButton.addEventListener(`click`, () => {
    playRound(`rock`, computerPlay());
});
paperButton.addEventListener(`click`, () => {
    playRound(`paper`, computerPlay());
});
scissorsButton.addEventListener(`click`, () => {
    playRound(`scissors`, computerPlay());
});

/*
function game() {
    do {
        playRound();
        console.log(`You ${playerScore} X ${computerScore} Computer`);
    } while (playerScore < 5 && computerScore < 5)
    
    if (playerScore > computerScore) {
        console.log(`Congratulations! You won the game.`);
    } else {
        console.log(`Too bad! You lost against the computer.`)
    }
}

console.log(game())
*/