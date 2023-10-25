
function App() {
    return (
        <div>
            <h1>Tic-React-Toe</h1>

        <h2>It's X's turn!</h2>
        
        <div className="flex-container flex-column">

        <div className="flex-container flex-wrap" id="board">

        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        </div>

        <button id="reset-button">RESET</button>

        </div>
        </div>
    )
}

ReactDOM.render(<App />, root)