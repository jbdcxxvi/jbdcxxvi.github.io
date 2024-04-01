import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/tictactoe.css';
import Ologo from '../assets/images/O.png';
import Xlogo from '../assets/images/X.png';

const initialBoard = Array(9).fill('');

const TicTacToe = () => {
    const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState('');

  const calculateWinner = (board : Array<string>) => {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return '';
  };

  const handleClick = (index : number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  const renderSquare = (index : number) => {
    let imageUrl = '';
    let altText = '';
    if (board[index] === 'X') {
      imageUrl = Xlogo;
      altText = 'X';
    } else if (board[index] === 'O') {
      imageUrl = Ologo;
      altText = 'O';
    }

    if (index % 2 == 0)
    {
      return (
        <button className="col-sm square btn btn-secondary text-center" onClick={() => handleClick(index)}>
          {/* {imageUrl && <img src={imageUrl} alt={board[index]} className="current-player"/>} */}
          {imageUrl && <h2 className='luckiest-guy-regular'>{altText}</h2>}
        </button>
      );
    }
    else{
      return (
        <button className="col-sm square btn btn-dark text-center" onClick={() => handleClick(index)}>
          {/* {imageUrl && <img src={imageUrl} alt={board[index]} className="current-player"/>} */}
          {imageUrl && <h2 className='luckiest-guy-regular'>{altText}</h2>}
        </button>
      );
    }
    
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner('');
    setXIsNext(true);
  };

  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  // Render the board
  return (
    <div className="container text-center">
        <div className="row">
            <h1 className="honk-tic-tac-toe-title">Tic Tac Toe</h1>
            <div className="status">{status}</div>
        </div>
        <div className="grid-container col-sm-12" id="tic-tac-toe-grid">
            <div className="board-row row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 m-auto pt-2">
                <button className="btn btn-primary" onClick={resetGame}><span className="bi bi-controller p-1"></span>Reset Game</button>
            </div>
        </div>
    </div>
  );
};

export default TicTacToe;
