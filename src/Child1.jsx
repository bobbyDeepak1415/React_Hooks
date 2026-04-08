import React, { useState, memo } from "react";

const Child1 = ({ count, updatedValue }) => {
  console.log("child rendering...");

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Child count is at:{count}</h1>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>Click</button>
      <br />
      <br />
      <br />
      <br />
      <button onClick={updatedValue}>
        ChildIncrement
      </button>
    </div>
  );
};

export default memo(Child1);
