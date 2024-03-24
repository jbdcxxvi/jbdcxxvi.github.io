let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function handleClick(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById(`${row}${col}`).innerHTML = `<img class="current-player" src="../images/${currentPlayer}.png" alt="${currentPlayer}">`;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        setTimeout(() => {
            checkWinner();
        }, 100); // Adjust the delay time as needed
    }
}

function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            //alert(`${board[i][0]} wins!`);
            document.getElementById('modal-winner-body').innerHTML=`${board[i][0]} wins!`;
            var modal = new bootstrap.Modal(document.getElementById('winnerModal'));
            modal.toggle();
            reset();
            return;
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            //alert(`${board[0][j]} wins!`);
            document.getElementById('modal-winner-body').innerHTML=`${board[0][j]} wins!`;
            var modal = new bootstrap.Modal(document.getElementById('winnerModal'));
            modal.toggle();
            reset();
            return;
        }
    }

    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        //alert(`${board[0][0]} wins!`);
        document.getElementById('modal-winner-body').innerHTML=`${board[0][0]} wins!`;
        var modal = new bootstrap.Modal(document.getElementById('winnerModal'));
        modal.toggle();
        reset();
        return;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        //alert(`${board[0][2]} wins!`);
        document.getElementById('modal-winner-body').innerHTML=`${board[0][2]} wins!`;
        var modal = new bootstrap.Modal(document.getElementById('winnerModal'));
        modal.toggle();
        reset();
        return;
    }

    // Check for a tie
    if (!board.flat().includes('')) {
        //alert("It's a tie!");
        document.getElementById('modal-winner-body').innerHTML="It's a tie!";
        var modal = new bootstrap.Modal(document.getElementById('winnerModal'));
        modal.toggle();
        reset();
        return;
    }
}

function reset() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`${i}${j}`).innerHTML = '';
        }
    }
}
