const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

let gameIsLive = true;
let xIsNext = true;
let winner = null;

const handleWin = function () {}

const checkGameStatus = function () {
    const cell1 = cellDivs[0].classList[1];
    const cell2 = cellDivs[1].classList[1];
    const cell3 = cellDivs[2].classList[1];
    const cell4 = cellDivs[3].classList[1];
    const cell5 = cellDivs[4].classList[1];
    const cell6 = cellDivs[5].classList[1];
    const cell7 = cellDivs[6].classList[1];
    const cell8 = cellDivs[7].classList[1];
    const cell9 = cellDivs[8].classList[1];

    if(cell1 && cell1 === cell2 && cell1 === cell3) {
        gameIsLive = false;
        winner = cell1;
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
        if (cell1 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if(cell4 && cell4 === cell5 && cell4 === cell6) {
        gameIsLive = false;
        winner = cell4;
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
        if (cell4 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if(cell7 && cell7 === cell8 && cell7 === cell9) {
        gameIsLive = false;
        winner = cell7;
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
        if (cell7 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if(cell1 && cell1 === cell4 && cell1 === cell7) {
        gameIsLive = false;
        winner = cell1;
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
        if (cell1 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if(cell2 && cell2 === cell5 && cell2 === cell8) {
        gameIsLive = false;
        winner = cell2;
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
        if (cell2 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if(cell3 && cell3 === cell6 && cell3 === cell9) {
        gameIsLive = false;
        winner = cell3;
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
        if (cell3 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if(cell1 && cell1 === cell5 && cell1 === cell9) {
        gameIsLive = false;
        winner = cell1;
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
        if (cell1 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if(cell3 && cell3 === cell5 && cell3 === cell7) {
        gameIsLive = false;
        winner = cell3;
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
        if (cell3 === 'x') {
            statusDiv.innerHTML = "x has won!";
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o has won!</span>";
        }
    }
    else if (cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8 && cell9) {
        gameIsLive = false;
        statusDiv.innerHTML = "<span class='yellow'>It's a draw</span>";
    }
    else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = 'x is next';
        }
        else {
            statusDiv.innerHTML = "<span class='white'>o is next</span>";
        }
    }
}

// event handlers
const handleReset = function (e) {
    xIsNext = true;
    winner = null;
    statusDiv.innerHTML = 'x is next';
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
}
const handleCellClick = function (e) {
    const classList = e.target.classList;

    if (!gameIsLive || classList[1] == 'x' || classList[1] == 'o') {
        return;
    }

    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
    }
    else {
        classList.add('o');
        checkGameStatus();
    }
}

// event listeners
resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick);
}