import React, { useState } from "react";
import Child1 from "./Child1";
import { handleClick } from "./handleClick";

const Demo = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <h1>Demo</h1>
      <h2>Name:{title}</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          return <p>{title}</p>;
        }}
      >
        Add
      </button>
      <Child1 />
    </div>
  );
};

export default Demo;
