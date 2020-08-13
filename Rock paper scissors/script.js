const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
var winnerScores = [0,0];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame (e) {
    let playerSelection = this.value;
    let computerSelection = Math.random();

    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    }
    else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors"
    }

    let result = checkWinner(playerSelection, computerSelection);

    if (result === "Player") {
        result = result + " Wins!";
        winnerScores[0]++;
    }

    if (result === "Computer") {
        result = result + " Wins!";
        winnerScores[1]++;
    }

    if (result === "Draw") {
        result = result + ". It's a tie!";
    }

    score.innerHTML = "Player: [" + winnerScores[0] + "] Computer: [" + winnerScores[1] + "]";

    message.innerHTML = "Player: "+ playerSelection +" || Computer: "+ computerSelection +"<br>"+ result;
}

function checkWinner(player, computer) {
    if (player === computer) {
        return "Draw";
    }

    if (player === "Rock") {
        if (computer === "Paper") {
            return "Computer"
        }
        else {
            return "Player"
        }
    }

    if (player === "Paper") {
        if (computer === "Scissors") {
            return "Computer"
        }
        else {
            return "Player"
        }
    }

    if (player === "Scissors") {
        if (computer === "Rock") {
            return "Computer"
        }
        else {
            return "Player"
        }
    }
}