import React from "react";

const Child1 = ({ increment, count }) => {
  console.log("child rendering...");

  return (
    <div>
      <p>Child count is at:{count}</p>
      <button onClick={()=>increment()}>Child increment</button>
    </div>
  );
};

export default React.memo(Child1);
