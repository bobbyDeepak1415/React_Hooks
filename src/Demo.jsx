import React, { useCallback, useMemo, useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  console.log("Parent rendering...");

  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const memoizedFunc = useCallback(() => {
    console.log("expensive func run..");
    setCount(count + 1);
  }, [count]);

  const expensiveValue = useMemo(() => {
    console.log("expensive value computed...");
    return count * 100;
  }, [count]);

  return (
    <div>
      <h1>Parent Count is at:{count}</h1>
      <h2>Expensive value:{expensiveValue}</h2>
      <button onClick={memoizedFunc}>Increment</button>
      <div>
        <br />
        <br />
        <br />
        <br />
        <input value={item} onChange={(e) => setItem(e.target.value)} />
      </div>
      <Child1 memoizedFunc={memoizedFunc} count={count} />
    </div>
  );
};

export default Demo;
