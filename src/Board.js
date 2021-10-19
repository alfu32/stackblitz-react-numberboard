import React, { useState } from 'react';
import './Board.css';
import Cell from './Cell';

export default function Board({ size, children }) {
  // const [values,setValues] = useState()
  const array = new Array(size).fill(0);
  return (
    <div className="table">
      {array.map((row, ri) => {
        return (
          <div className={'row'}>
            {array.map((col, ci) => {
              return <Cell val={size * ri + ci} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
