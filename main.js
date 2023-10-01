let board;
let turn = 'X';

const squares = Array.from(document.querySelectorAll('#board div'));

document.getElementById('board').addEventListener('click', handleTurn);

function init() {

    board = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
    ];

    render();
};

function render() {

    board.forEach(function(mark, index){
        console.log(mark, index);

    squares[index].textContent = mark;
    });
};

function handleTurn() {

    let idx = squares.findIndex(function(square) {
    
    return square === event.target;
    });

    board[idx] = turn;

    if(turn === 'X') {
        turn = 'O'
    }
    else {
        turn = 'X'
    };

    render();

};

init();