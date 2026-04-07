import React, { memo } from "react";

const Child = () => {
  console.log("child rendering...");

  return (
    <div>
      <h1>Child count at:</h1>
    </div>
  );
};

export default memo(Child);
