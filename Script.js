let gaming = true;
let computerScore = 0;
let playerScore = 0;
console.log("loaded");
function randomComputerPick() {
    let pick = Math.floor(Math.random() * 3) + 1

    switch (pick) {
        case 1:
            pick = "Rock";
            break;
        case 2:
            pick = "Scissors";
            break;
        case 3:
            pick = "Paper";
            break;
        default:
            console.log("Unknown pick defaulting to rock")
            pick = "Rock";
    }

    return pick;
}

function getWinner(playerPick, computerPick) {
    console.log("HERE")
    if (playerPick === computerPick) return "Draw";

    if ((playerPick === "Rock" && computerPick === "Scissors") ||
        (playerPick === "Paper" && computerPick === "Rock") ||
        (playerPick === "Scissors" && computerPick === "Paper")
    ) return "Win";

    return "Loss";
}

document.addEventListener("DOMContentLoaded", () => {
    const actionEl = document.querySelector(".action");
    const pScoreEl = document.querySelector(".playerScore span");
    const cScoreEl = document.querySelector(".computerScore span");
    const buttons = document.querySelectorAll(".playerButtons button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const playerPick = btn.dataset.pick;
            const computerPick = randomComputerPick();

            const outCome = getWinner(playerPick, computerPick);

            if (outCome == "Win") {
                actionEl.textContent = "You won";
                playerScore++;
            } else if (outCome == "Loss") {
                actionEl.textContent = "You Lost";
                computerScore++;
            } else if (outCome == "Draw") {
                actionEl.textContent = "It was a draw";
            }

            pScoreEl.textContent = playerScore;
            cScoreEl.textContent = computerScore;
        })
    })
})