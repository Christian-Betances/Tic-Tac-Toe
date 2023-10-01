let board;

function init() {

    board = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
    ];

    render();
};

init();

function render() {

    board.forEach(function(mark, index){
        console.log(mark, index);
    })
}