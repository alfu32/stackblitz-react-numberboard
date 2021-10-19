import React, { useState } from 'react';
import './Cell.css';

export default function Cell({ val, children }) {
  const [color, setColor] = useState(0);
  return (
    <div
      className="cell"
      color={color}
      onClick={(e) => {
        setColor((color + 1) % 3);
      }}
    >
      {val}
      {/*<sub>{color}</sub>*/}
    </div>
  );
}
