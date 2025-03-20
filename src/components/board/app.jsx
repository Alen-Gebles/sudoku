'use client';
import React, { useState } from 'react';
import './board.css';

const Board = ({ board, setBoard, initialBoard }) => {
  const [selectedCell, setSelectedCell] = useState(null);

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

  const isHighlighted = (rowIndex, cellIndex) => {
    if (!selectedCell) return false;

    const [selectedRow, selectedCol] = selectedCell;

    // Highlight row and column
    const isSameRow = rowIndex === selectedRow;
    const isSameCol = cellIndex === selectedCol;

    // Highlight 3x3 grid
    const isSameSubgrid =
      Math.floor(rowIndex / 3) === Math.floor(selectedRow / 3) &&
      Math.floor(cellIndex / 3) === Math.floor(selectedCol / 3);

    return isSameRow || isSameCol || isSameSubgrid;
  };

  return (
    <div className="grid grid-cols-9 gap-0">
      {board.map((row, rowIndex) => (
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            className={`cell flex items-center justify-center w-12 h-12 border 
              ${cellIndex % 3 === 0 && cellIndex !== 0 ? ' border-black' : ''}
              ${rowIndex % 3 === 0 && rowIndex !== 0 ? ' border-black' : ''}
              ${isHighlighted(rowIndex, cellIndex) ? ' !bg-green-200' : ''}
              ${initialBoard[rowIndex][cellIndex] ? 'filledCell' : 'emptyCell'}
            `}
          >
            {initialBoard[rowIndex][cellIndex] ? (
              cell
            ) : (
              <input
                type="text"
                maxLength="1"
                value={cell || ''}
                onChange={(e) => handleChange(rowIndex, cellIndex, e.target.value)}
                onFocus={() => setSelectedCell([rowIndex, cellIndex])}
                className="inputCell w-full h-full text-center outline-none"
              />
            )}
          </div>
        ))
      ))}
    </div>
  );
};

export default Board;
