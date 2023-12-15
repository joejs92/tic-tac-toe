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


    const updateBoard = (board, choice, token) => {
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
        else{
            console.log("Please make a valid selection.");
            printNewRound();
        }
        
    }

    const tieState = () => {
        board.printBoard();
        console.log(`Nobody wins!`);
        const playAgain = prompt("Would you like to play again? (y/n)");
        if(playAgain == 'y'){
            GameController();
        }
    }

    const winState = (name) => {
        board.printBoard();
        console.log(`${name} wins!`);
        const playAgain = prompt("Would you like to play again? (y/n)");
        if(playAgain == 'y'){
            GameController();
        }
    }

    const checkWin = (board, name, token) => {
        let win = false;
        let zero = false;
        for (let i=0; i < 3; i++) {
            if(board[i].includes('0')){
                zero = true;
            }
            if(board[i][0]==token && board[i][1]==token && board[i][2]==token){
                win = true;
            }
            else if(board[0][i]==token && board[1][i]==token && board[2][i]==token){
                win = true;
            }
            else if(board[0][0]==token && board[1][1]==token && board[2][2]==token){
                win = true;
            }
            else if(board[2][0]==token && board[1][1]==token && board[0][2]==token){
                win = true;
            }
        }
        if(win == false && zero == true){
            switchPlayerTurn();
            printNewRound();
        }
        else if(win == false && zero == false){
            tieState(name);
        }
        else{
            winState(name);
        }
    }

    const printNewRound = () => {
        const win = false;
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`)
        const choice = prompt("Choose a square.");
        updateBoard(board.getBoard(), choice,getActivePlayer().token);
        checkWin(board.getBoard(),getActivePlayer().name,getActivePlayer().token);
        return choice;
    }

    printNewRound();

    return {getActivePlayer, switchPlayerTurn,printNewRound};
}
const game = GameController();