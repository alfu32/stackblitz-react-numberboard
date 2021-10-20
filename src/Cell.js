import React, { useState } from 'react';
import './Cell.css';

export default function Cell({
  index, val, hue, click, children }) {
  // const [color, setColor] = useState(0);
  return (
    <div
      className="cell"
      hue={hue}
      onClick={click}
    >
      {/*<sub>{hue}</sub>*/}
      <span>{val}</span>
      {/*<sup>{index}</sup>*/}
    </div>
  );
}
