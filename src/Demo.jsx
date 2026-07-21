import React from "react";

import { useState } from "react";

export default function Demo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setItems([...items, input]);
    setInput("");
  };
..
  
  return (
    <div>
      <h2>To do list:</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <div>
        <ol start={1}>
          {items.map((item, id) => {
            return (
              <li draggable onDragEnd={} onDragStart={} onDragEnter={} onDragOver={()} key={id}>
                <span>{item}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
