import React, { useState } from 'react';
import './style.css';
import Board from './Board';

export default function App() {
  const [size, setSize] = useState(5);
  return (
    <div>
      <h1>Number Board</h1>
      <div className="row">
        <div
          className="cell"
          onClick={(e) => setSize(size > 3 ? size - 1 : size)}
        >
          -
        </div>
        <div className="cell" onClick={(e) => setSize(size + 1)}>
          +
        </div>
      </div>
      <Board size={size} />
    </div>
  );
}
