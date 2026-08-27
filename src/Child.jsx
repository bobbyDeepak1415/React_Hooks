import React, { memo } from "react";

const Child = ({ count, updateCounter }) => {
  console.log("child rendering...");

  return (
    <div>
      <h2>Child count at:{count}</h2>
      <button onClick={updateCounter}>Click</button>
    </div>
  );
};

export default memo(Child);

// promise.all resolves when all the promises resolves. it fails even if a single promise fails

// promise.allSettled resolves when all the promises are completed whether they are resolved or rejected. it never fails

// promise.any resolves if any single promise resolves. it only fails if all the promises fail

// promise.race resolves when the first promise resolves. if the first promise resolves it resolves and if the first promise fails it fails