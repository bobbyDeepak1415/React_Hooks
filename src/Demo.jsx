import React, { useCallback, useMemo, useState } from "react";
import Child1 from "./Child1";
import handleClick from "./handleClick";

const Demo = () => {
  console.log("parent rendering...");
  const [item, setItem] = useState("");

  const [count, setCount] = useState(0);

  const expensiveFunc = useCallback(() => {
    console.log("expensive func reunning...");
    handleClick(setCount);
  }, []);

  const memoizedValue = useMemo(() => {
    console.log("expensive value...");

    return count * 1000;
  }, [count]);

  return (
    <div>
      <h1>The count is at :{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <h2>Memoized Value:{memoizedValue}</h2>
      <div>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
      </div>
      <div>
        <Child1 memoizedFunc={expensiveFunc} count={count} />
      </div>
    </div>
  );
};

export default Demo;
