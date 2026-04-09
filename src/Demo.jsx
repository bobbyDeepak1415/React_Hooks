import React, { useCallback, useMemo, useState } from "react";
import Child1 from "./Child1";
import { handleClick } from "./handleClick";

const Demo = () => {
  console.log("parenet rendering...");

  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const memoizedFunc = useCallback(() => {
  handleClick(setCount)
  }, []);

  const expensiveFunc = useMemo(() => {
    console.log("expensive func run...");
    return count * 1000;
  }, [count]);

  return (
    <div>
      <h1>parent count is at:{count}</h1>
      <h2>ExpensiveValue:{expensiveFunc}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <Child1 updatedValue={memoizedFunc} count={count} />
    </div>
  );
};

export default Demo;
