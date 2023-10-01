let board;
let turn = 'X';
let win;

const winningCombos = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

const squares = Array.from(document.querySelectorAll('#board div'));

document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');

document.getElementById('reset-button').addEventListener('click', init);

function init() {

    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];

    render();
};

function render() {

    board.forEach(function(mark, index){
        console.log(mark, index);

    squares[index].textContent = mark;
    });

    if ( win === 'T' ) {
        messages.textContent = `That's a tie, queen!`
      } else if (win) { 
        messages.textContent = `${win} wins the game!`
      } else {
        messages.textContent = `It's ${turn}'s turn!`
      }
};

function handleTurn() {

    let idx = squares.findIndex(function(square) {
    
    return square === event.target;
    });

    board[idx] = turn;

    if(turn === 'X') turn = 'O';

    else turn = 'X';

    win = getWinner();

    render();

};

function getWinner() {

    let winner = null;

    winningCombos.forEach(function(combo, index) {

        if(board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) 
        
        winner = board[combo[0]];
    });
    
    if (winner) return winner;

    else if (board.includes('')) return null;
    
    else return 'T';
};

init();