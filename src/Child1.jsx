import React from "react";

const Child1 = ({ count, memoizedClick }) => {
  console.log("Child1 rendering...");

  return (
    <div>
      Child count at:{count}
      <button onClick={memoizedClick}>child click</button>
    </div>
  );
};

export default React.memo(Child1);
