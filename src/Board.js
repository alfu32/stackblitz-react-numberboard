import React, { useState } from 'react';
import './Board.css';
import Cell from './Cell';

export default function Board({ alphabet, size, children }) {
  const [vals,setValues] = useState([])
  const array = new Array(size).fill(0);
  const values = [...vals];
  return (
    <div className="table">
      <div>{values.length}</div>
      {array.map((row, ri) => {
        return (
          <div className={'row'}>
            {array.map((col, ci) => {
              // const index=ri * 100 + ci;
              const index=ri * size + ci;
              let val=ri * size + ci;
              let value = values[index]||0;
              return (
                <Cell
                  index={index}
                  val={val}
                  hue={value}
                  click={
                    e => {
                      console.log(values);
                      values[index]=0 +((value + 1)%12);
                      setValues(values);
                    }
                  }
                />
              );
              /*return <Cell val={(ri ? alphabet[ri] : '') + alphabet[ci]} />;*/
            })}
          </div>
        );
      })}
    </div>
  );
}
