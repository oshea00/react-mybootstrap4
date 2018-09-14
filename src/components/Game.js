import React from 'react'
import '../App.css'

const Square = props => {
    return (
        <button 
            className="square" 
            onClick={e=>props.onClick(e)}>
        { props.value }
        </button>
    );
}

class Board extends React.Component { 
    renderSquare(i) {
        return (
            <Square 
                value={this.props.play.squares[i]} 
                onClick={()=>this.props.onClick(i)}
            />
        ); 
    }

    render() {
        const winner = calculateWinner(this.props.play.squares);
        const status = "Next Player: " + this.props.play.nextPlayer + " "
         + (( winner===null) ? "" : "- Winner:" + winner)
        return (
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currMove: 0,
            history: [ 
            {
                squares : 
                ["\u00a0","\u00a0","\u00a0",
                 "\u00a0","\u00a0","\u00a0",
                 "\u00a0","\u00a0","\u00a0"],
                label: 'Initial board',
                nextPlayer : 'X',
            }]
        };
    }

    markSquare(i) {
        const n = this.state.history.length-1;
        const lastmove = this.state.history[n];
        const s = lastmove.squares.slice();
        if (calculateWinner(s) || s[i] !== "\u00a0")
            return;
        s[i]=lastmove.nextPlayer;
        const nextMove = { 
            squares: s, 
            label: (lastmove.nextPlayer==='X') ? 'X Moves':'O Moves',
            nextPlayer:(s[i]==='X')?'O':'X'
        };
        this.setState({ currMove: n+1, history: this.state.history.concat(nextMove)});
    }

    jumpTo(i) {
        this.setState(prev=>Object.assign({},prev,{ currMove:i}));
    }

    render() {
        return (
            <div className="game row">
                <div className="board col-sm-4">
                    <Board 
                        play={this.state.history[this.state.currMove]} 
                        onClick={e=>this.markSquare(e)}/>
                </div>
                <div className="game-info col-sm-4">
                    <div>{/* status */}</div>
                    <ol>
                    {
                        this.state.history.map((h,i)=>
                        { 
                            return (
                                <li key={i}>
                                    <button
                                        onClick={()=>this.jumpTo(i)}>
                                        {this.state.history[i].label}
                                    </button>
                                </li>
                            )
                        })
                    }
                    </ol>
                </div>
            </div>
       );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i=0;i<lines.length;i++) {
        const [a, b, c] = lines[i];
        if (squares[a] !== "\u00a0" && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}

export default Game;

