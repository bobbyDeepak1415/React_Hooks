import React from "react";

const Child1 = ({ count, memoizedClickkkk, setFirstName }) => {
  console.log("Child1 rendering...");

  let title = "Bobby";

  return (
    <div>
      Child count at:{count}
      <button onClick={memoizedClickkkk}>child click</button>
      <button onClick={() => setFirstName(title)}>setName</button>
    </div>
  );
};

export default React.memo(Child1);
