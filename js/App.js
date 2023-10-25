function App() {

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

    const [board, setBoard] = React.useState(["","","","","","","","",""])
    let turn = 'X';
    let win;

    function getWinner() {

        let winner = null;
    
        winningCombos.forEach(function(combo, index) {
    
            if(board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) 
            
            winner = board[combo[0]];
        });
        
        if (winner) return winner;
    
        else if (board.includes('')) return null;
        
        else return 'T';
    }

    function handleTurn(event) {

        console.log(event.target)

        let idx = event.target.id

        let newBoard = [...board]

        newBoard[idx] = turn

        setBoard(newBoard)
    
        turn = turn === 'X' ? 'O' : 'X'
    }

    return (
        <div>

        <h1>Tic-React-Toe</h1>

        <h2>It's X's turn!</h2>
        
        <div className="flex-container flex-column">

        <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>

            {
                board.map((data, index)=>{
                    return <div key={index} id={index} className="square">{data}</div>
                })
            }

        </div>

        <button id="reset-button">RESET</button>

        </div>
        
        </div>
    )
}

ReactDOM.render(<App />, root)