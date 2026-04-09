import React, { memo } from "react";

const Child1 = ({ count,updatedValue }) => {
  console.log("child rendering...");

  return (
    <div>
      <h1>Child count is at:{count}</h1>
      <button onClick={updatedValue}>Child increment</button>
    </div>
  );
};

export default memo(Child1);
