import React, { useCallback, useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  console.log("parenet rendering...");

  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const memoizedFunc = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>parent count is at:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <Child1 updatedValue={memoizedFunc} count={count} />
    </div>
  );
};

export default Demo;
