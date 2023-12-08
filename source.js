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

    const getBoard = () => board;

    const printBoard = () => {
        for (let i = 0; i < board.length; i++) {
            const printBoard=board[i].join(" ");
            console.log(printBoard);
        }
    }
    return {getBoard, printBoard};
}

function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard();
    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name: playerTwoName,
            token: "O"
        }
    ];
    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        if(activePlayer == players[0]){
            activePlayer = players[1];
        }
        else{
            activePlayer = players[0];
        }
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`)
        const choice = prompt("Choose a square.");
        switchPlayerTurn();
        printNewRound();
        return choice;
    }

    printNewRound();

    return {getActivePlayer};
}
const game = GameController();

