import React from "react";

const Child1 = ({ count, memoizedFunc }) => {
  console.log("child rendering...");
  return (
    <div>
      <h1>Child count is at:{count}</h1>
      <button onClick={memoizedFunc}>Child Click</button>
    </div>
  );
};

export default React.memo(Child1);
