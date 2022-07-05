const rockButton = document.getElementById(`rockButton`);
const paperButton = document.getElementById(`paperButton`);
const scissorsButton = document.getElementById(`scissorsButton`);

const battle = document.getElementById(`battle`);
const results = document.getElementById(`results`);

rockButton.addEventListener(`click`, function() {playRound(`rock`)});
paperButton.addEventListener(`click`, function() {playRound(`paper`)});
scissorsButton.addEventListener(`click`, function() {playRound(`scissors`)});

function computerPlay() {
    const gameOptions = [`rock`, `paper`, `scissors`]
    const random = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[random];
}

function playRound(playerInput) {
    let computerInput = computerPlay();

    battle.textContent = `You played ${playerInput} against the computer's ${computerInput}`;

    if (playerInput === computerInput) {
        console.log(`IT'S A DRAW`);
        results.textContent = `IT'S A DRAW`;
    } else if (
        (playerInput === `rock` && computerInput === `scissors`) ||
        (playerInput === `paper` && computerInput === `rock`) ||
        (playerInput === `scissors` && computerInput === `paper`)
    ) {
        console.log(`YOU WIN`);
        results.textContent = `YOU WIN`;
    } else if (
        (playerInput === `rock` && computerInput === `paper`) ||
        (playerInput === `paper` && computerInput === `scissors`) ||
        (playerInput === `scissors` && computerInput === `rock`)
    ) {
        console.log(`YOU LOSE`);
        results.textContent = `YOU LOSE`;
    }
}

