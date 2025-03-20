import React from 'react';
import './board.css';

const Board = ({ board, setBoard, initialBoard }) => {

  const handleChange = (rowIndex, cellIndex, value) => {
    if (initialBoard[rowIndex][cellIndex]) return;

    if (/^[1-9]?$/.test(value)) {
      const newBoard = board.map((row, r) =>
        row.map((cell, c) => 
          r === rowIndex && c === cellIndex ? (value ? parseInt(value) : null) : cell
        )
      );
      setBoard(newBoard);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={`grid grid-cols-3 ${rowIndex % 3 === 0 && rowIndex !== 0 ? 'border-black' : ''}`}>
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} 
              className={`cell flex items-center justify-center w-12 h-12 border  ${cellIndex % 3 === 0 && cellIndex !== 0 ? 'border-black' : ''}  
              ${initialBoard[rowIndex][cellIndex] ? 'filledCell' : 'emptyCell'}`}
              >
            
              {initialBoard[rowIndex][cellIndex] ? (cell) : 
              (
                <input
                  type="text"
                  maxLength="1"
                  value={cell || ''}
                  onChange={(e) => handleChange(rowIndex, cellIndex, e.target.value)}
                  className="inputCell w-full h-full text-center outline-none"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
