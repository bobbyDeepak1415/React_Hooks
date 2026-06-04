import React from "react";

const Child1 = ({handleClick,count}) => {
  console.log("child rendering...");

  return (
    <div>
      <p>Chilc=d count is at:{count}</p>
      <button onClick={handleClick()}>Child increment</button>
    </div>
  );
};

export default React.memo(Child1);
