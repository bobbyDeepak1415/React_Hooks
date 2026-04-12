import React, { useState } from "react";
import Child1 from "./Child1";
import { handleClick } from "./handleClick";

const Demo = () => {
  const [title, setTitle] = useState("");
  const [names, setNames] = useState([]);

  return (
    <div>
      <h1>Demo</h1>
      <h2>Name:{title}</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => handleClick(setNames, title, names, setTitle)}>
        Add
      </button>
      <div>
        {names.map((name, id) => {
          return <li key={id}>{name}</li>;
        })}
      </div>
      <Child1 />
    </div>
  );
};

export default Demo;
