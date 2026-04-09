import React, { memo } from "react";

const Child1 = ({ count,memoizedFunc }) => {
  console.log("child rendering...");

  return (
    <div>
      <h1>Child count is at:{count}</h1>
      <button onClick={memoizedFunc}>Child increment</button>
    </div>
  );
};

export default memo(Child1);
