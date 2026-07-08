import React from "react";

const Child1 = (props) => {
  console.log("child renderi...");

  return (
    <div>
      <h2>Child count at:{props.count}</h2>
      <button onClick={props.childClick}>++</button>
    </div>
  );
};

export default React.memo(Child1);
