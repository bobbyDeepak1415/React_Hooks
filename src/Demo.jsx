import React, { useCallback, useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  const [count, setCount] = useState(0);

  console.log("parent rendering...");

  const memoizedValue = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Parent count is at:{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <div>
        <Child1 count={count} updatedValue={memoizedValue} />
      </div>
    </div>
  );
};

export default Demo;
