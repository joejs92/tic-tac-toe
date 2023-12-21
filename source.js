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

    /*const printBoard = () => {
        for (let i = 0; i < board.length; i++) {
            const printBoard=board[i].join(" ");
            console.log(printBoard);
        }
    }*/
    return {getBoard};
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


    const updateBoard = (board, choice, token,currentValue) => {
        if(choice == 'ul'&& board[0][0] == '0'&& currentValue == '0'){
            board[0][0] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'um'&& board[0][1] == '0'&& currentValue == '0'){
            board[0][1] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'ur'&& board[0][2] == '0'&& currentValue == '0'){
            board[0][2] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'ml'&& board[1][0] == '0'&& currentValue == '0'){
            board[1][0] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'mm'&& board[1][1] == '0'&& currentValue == '0'){
            board[1][1] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'mr'&& board[1][2] == '0'&& currentValue == '0'){
            board[1][2] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'bl'&& board[2][0] == '0'&& currentValue == '0'){
            board[2][0] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'bm'&& board[2][1] == '0'&& currentValue == '0'){
            board[2][1] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else if(choice == 'br'&& board[2][2] == '0'&& currentValue == '0'){
            board[2][2] = token;
            document.getElementById(`${choice}`).textContent = getActivePlayer().token;
            checkWin(board,getActivePlayer().name,getActivePlayer().token);
        }
        else{
            printNewRound();
        }
        console.log(board);
        return;
    }

    const tieState = () => {
        let container = document.querySelector('#top-left');
        let message = document.querySelector('#message');
        message.remove();
        message = document.createElement('p');
        message.setAttribute('id','message');
        container.appendChild(message);
        message.textContent = "Nobody wins!";
        return;
    }

    const winState = (name) => {
        let container = document.querySelector('#top-left');
        let message = document.querySelector('#message');
        message.remove();
        message = document.createElement('p');
        message.setAttribute('id','message');
        container.appendChild(message);
        message.textContent = `${name} wins!`;
        return;
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
        return;
    }

    const printNewRound = () => {
        const win = false;
        let container = document.querySelector('#top-left');
        let message = document.querySelector('#message');
        message.remove();
        message = document.createElement('p');
        message.setAttribute('id','message');
        container.appendChild(message);
        message.textContent = `${getActivePlayer().name}'s turn.`;
    }
    
    const buttons = document.querySelectorAll('.board-button');
        buttons.forEach((buttons) => {
            buttons.addEventListener('click',() => {
                const choice = buttons.id;
                const currentValue = document.getElementById(`${choice}`).textContent;
                updateBoard(board.getBoard(), choice,getActivePlayer().token,currentValue);
            });
        });

    printNewRound();

    return {getActivePlayer, switchPlayerTurn, printNewRound};
}



const container = document.querySelector('#top-left');
const message = document.createElement('p');
message.setAttribute('id','message');
container.appendChild(message);
message.textContent = "Please enter player names, then hit 'start' button.";

const button = document.querySelector('#start');
button.addEventListener('click',() => {
    let playerOneName = document.getElementById('player1').value;
    let playerTwoName = document.getElementById('player2').value;
    const buttons = document.querySelectorAll('.board-button');
        buttons.forEach((buttons) => {
            const choice = buttons.id;
            document.getElementById(`${choice}`).textContent = '0';
        });
    GameController(playerOneName,playerTwoName);
});