function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j=0; j < columns; j++) {
            board[i].push("0");
        }
    }
    for (let i = 0; i < board.length; i++) {
        const printBoard=board[i].join(" ");
        console.log(printBoard);
    }
}

