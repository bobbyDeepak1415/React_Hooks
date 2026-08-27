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


// promise.all only resolves when all the promises resolve,even if a single promise fails instantly fails

// promise.allSettled resolves after all the promises are completed whether resolved or rejected. it never fails


// promise.any resolves as soon as the first promise resolves. it rejects only if all the promises are rejected.

// promise.race resolves as soon as the first promise resolves. if the first promise fails it fails entirely