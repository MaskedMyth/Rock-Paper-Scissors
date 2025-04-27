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
    let outCome = "Draw"

    console.log(`Player Pick: ${playerPick}, Computer Pick: ${computerPick}`)

    if (playerPick == computerPick) {
        outCome = "Draw";
    } else if (playerPick == "Rock") {
        if (computerPick == "Paper") {
            outCome = "Loss";
        } else if (computerPick == "Scissors") {
            outCome = "Win";
        }
    } else if (playerPick == "Paper") {
        if (computerPick == "Rock") {
            outCome = "Win";
        } else if (computerPick == "Scissors") {
            outCome = "Loss";
        }
    } else if (playerPick == "Scissors") {
        if (computerPick == "Rock") {
            outCome = "Loss";
        } else if (computerPick == "Paper") {
            outCome = "Win";
        }
    }

    if (outCome == "Draw") {
        alert("It was a draw");
    } else if (outCome == "Win") {
        alert("Player Wins");
        playerScore += 1;
    } else if (outCome == "Loss") {
        alert("Computer Wins");
        computerScore += 1;
    } else {
        alert("Impossible outcome")
    }

    console.log(`Player Points: ${playerScore}`);
    console.log(`Computer Points: ${computerScore}`);
}

randomComputerPick()
while (gaming) {
    let playerPick = prompt("Rock, Paper, or Scissors?");
    if (playerPick == "quit") {
        break;
    }
    let computerPick = randomComputerPick()

    getWinner(playerPick, computerPick);
}