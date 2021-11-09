import React from 'react';
import Board from './Board.js';
import { Paper } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';

// import gameTheme from './theme.js';

  class Game extends React.Component {
    constructor(props) { 
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
        coord: Array(1).fill(null),
      };
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const newSquares = current.squares.slice();
      
      if (calculateWinner(newSquares) || newSquares[i]) {
        return;
      }
      
      newSquares[i] = this.state.xIsNext ? 'X' : 'O';

      this.setState({
        history: history.concat([{
          squares: newSquares,
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
        coord: this.state.coord.concat({x : Math.floor((i / 3) + 1), y : ((i % 3) + 1)}),
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
        coord: this.state.coord.slice(0,step + 1),
      })
    }

    

    render() {
      
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      
      const moves = history.map((step, move) => {
        const desc = move ?
        'Go to move #' + move :
        'Start over';

        const location = this.state.coord[move] ?
          '(' + this.state.coord[move].x
          + ', ' + this.state.coord[move].y
          + ')' :
          '(0, 0)';

        return (
          <li key={move}>
            {location}
            <button 
            onClick={() => this.jumpTo(move)}>
            {desc}
            </button>
          </li>
        );
      });

     

      let status;
      if (winner) {
      status = 'Winner: ' + winner;
      } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <Paper>
          <div className="game">
          <div className="game-info">
            <div>{status}</div>
            <ol start = "0">{moves}</ol>
          </div>
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          
        </div>
        </Paper>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // =========== theming ============ /


  // ========================================
  
  
export default Game;
  