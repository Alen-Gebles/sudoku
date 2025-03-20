import './App.css'
import { useState } from 'react'

import Board from './components/board/app';

function App() {

  const board = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
  ];

  const [grid, setGrid] = useState(board);
  const initialBoard = board.map(row => row.map(cell => cell !== null));

  return (
    <>
      <Board board={grid} setBoard={setGrid} initialBoard={initialBoard} />
    </>
  )
}

export default App;
