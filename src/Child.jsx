import React, { memo } from "react";

const Child = ({count}) => {
  console.log("child rendering...");

  return (
    <div>
      <h1>Child count at:{count}</h1>
    </div>
  );
};

export default memo(Child);
