import React, { memo } from "react";

const Child = ({ count,updateCounter }) => {
  console.log("child rendering...");

  return (
    <div>
      <h1>Child count at:{count}</h1>
      <button onClick={updateCounter}>Click</button>
    </div>
  );
};

export default memo(Child);
