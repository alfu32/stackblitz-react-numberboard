import React, { useState } from 'react';
import './style.css';
import Board from './Board';

export default function App() {
  const [size, setSize] = useState(5);
  const [color, setColor] = useState(5);
  // const [alphabet, setAlphabet] = useState('0123456789');
  return (
    <div>
      <h1>
        Number Board {size}x{size}{' '}
      </h1>
      <div className="table">
        <div className="row">
          <div
            className="cell"
            onClick={(e) => setSize(size > 3 ? size - 1 : size)}
          >{'<'}</div>
          <div
            className="cell"
            onClick={(e) => setSize(size < 52 ? size + 1 : size)}
          >{'>'}</div>
          {
            new Array(10).fill(0).map(
              (c,i) => {
                const className = 'cell'+(
                  i == color ? ' selected':''
                )
                return (
                  <div
                    className={className}
                    hue={i}
                    onClick={(e) => setColor(i)}
                  >{i}</div>)
              }
            )
          }
          {/*<select className="cell" onChange={(e) => setAlphabet(e.target.value)}>
            <option value="01234567890">decimal</option>
            <option value="0123456789abcdef">hexa</option>
          </select>*/}
        </div>
      </div>
      <Board size={size} color={color} />
    </div>
  );
}
