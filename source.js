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

    const updateBoard = (choice, token) => {
        if(choice == 'ul'&& board[0][0] == '0'){
            board[0][0] = token;
        }
        else if(choice == 'um'&& board[0][1] == '0'){
            board[0][1] = token;
        }
        else if(choice == 'ur'&& board[0][2] == '0'){
            board[0][2] = token;
        }
        else if(choice == 'ml'&& board[1][0] == '0'){
            board[1][0] = token;
        }
        else if(choice == 'mm'&& board[1][1] == '0'){
            board[1][1] = token;
        }
        else if(choice == 'mr'&& board[1][2] == '0'){
            board[1][2] = token;
        }
        else if(choice == 'bl'&& board[2][0] == '0'){
            board[2][0] = token;
        }
        else if(choice == 'bm'&& board[2][1] == '0'){
            board[2][1] = token;
        }
        else if(choice == 'br'&& board[2][2] == '0'){
            board[2][2] = token;
        }
    }

    const getBoard = () => board;

    const printBoard = () => {
        for (let i = 0; i < board.length; i++) {
            const printBoard=board[i].join(" ");
            console.log(printBoard);
        }
    }
    return {getBoard, printBoard, updateBoard};
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
        board.updateBoard(choice,getActivePlayer().token);
        switchPlayerTurn();
        printNewRound();
        return choice;
    }

    printNewRound();

    return {getActivePlayer};
}
const game = GameController();

