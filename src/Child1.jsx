import React from "react";

const Child1 = ({ count }) => {
  console.log("Child1 rendering...");

  return <div>Child count at:{count}</div>;
};

export default React.memo(Child1);
