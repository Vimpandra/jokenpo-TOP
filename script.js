const rockButton = document.getElementById(`rockButton`);
const paperButton = document.getElementById(`paperButton`);
const scissorsButton = document.getElementById(`scissorsButton`);

const battle = document.getElementById(`battle`);
const results = document.getElementById(`results`);
const score = document.getElementById(`score`);
const finalResult = document.getElementById(`finalResult`);
const finalMessage = document.getElementById(`finalMessage`);

const gameWindow = document.getElementById(`gameWindow`);
const startButton = document.getElementById(`startButton`);
startButton.addEventListener(`click`, () => {
    battle.textContent = `Get ready to face your destiny`;
    results.textContent = `FIGHT!`;
    gameWindow.classList.toggle(`hide`);
    startButton.classList.add(`hide`);
    finalResult.textContent = ``;
    finalMessage.textContent = ``;
    playerScore = 0;
    computerScore = 0;
    score.textContent = `You ${playerScore} X ${computerScore} Computer`;
});

rockButton.addEventListener(`click`, () => playRound(`rock`, computerPlay()));
paperButton.addEventListener(`click`, () => playRound(`paper`, computerPlay()));
scissorsButton.addEventListener(`click`, () => playRound(`scissors`, computerPlay()));

let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const gameOptions = [`rock`, `paper`, `scissors`]
    const random = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[random];
};

function playRound(playerInput, computerInput) {
    battle.innerHTML = `You played <strong>${playerInput}</strong> against the computer's <strong>${computerInput}</strong>`;

    if (playerInput === computerInput) {
        results.textContent = `IT'S A DRAW`;
        score.textContent = `You ${playerScore} X ${computerScore} Computer`;
    } else if (
        (playerInput === `rock` && computerInput === `scissors`) ||
        (playerInput === `paper` && computerInput === `rock`) ||
        (playerInput === `scissors` && computerInput === `paper`)
        ) {
            results.textContent = `YOU WIN`;
            playerScore += 1;            
            score.textContent = `You ${playerScore} X ${computerScore} Computer`;
    } else if (
        (playerInput === `rock` && computerInput === `paper`) ||
        (playerInput === `paper` && computerInput === `scissors`) ||
        (playerInput === `scissors` && computerInput === `rock`)
        ) {
            results.textContent = `YOU LOSE`;
            computerScore += 1;
            score.textContent = `You ${playerScore} X ${computerScore} Computer`;
    }
    checkWinner();
};

function checkWinner() {
    if (playerScore === 5) {
        gameWindow.classList.add(`hide`);
        startButton.textContent = `Play again`;
        startButton.classList.remove(`hide`);
        finalResult.textContent = `Congratulations!`;
        finalMessage.textContent = `You are a Jokenpo CHAMPION!`;
    } else if (computerScore === 5) {
        gameWindow.classList.add(`hide`);
        startButton.textContent = `Play again`;
        startButton.classList.remove(`hide`);
        finalResult.textContent = `Too bad!`;
        finalMessage.textContent = `You lost against the computer.`;
    } else return;
}