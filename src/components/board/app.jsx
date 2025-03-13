import React from 'react'

const Board = ({ board }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-3 ${rowIndex % 3 === 0 && rowIndex !== 0 ? 'border-black' : ''}`}
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`flex items-center justify-center w-12 h-12 border ${cellIndex % 3 === 0 && cellIndex !== 0 ? 'border-black' : ''}`}
            >
              {cell || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

