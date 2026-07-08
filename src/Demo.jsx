import React, { useCallback, useMemo, useState } from "react";
import Child1 from "./Child1";
// import handleClick from './handleClick'

const Demo = () => {
  console.log("parent renderi...");

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const memoisedClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const expensiveValue = useMemo(() => {
    console.log("expensive func run..");

    return count * 2000;
  }, [count]);

  return (
    <div>
      <h2>parent count at:{count}</h2>

      <p>expensive value:{expensiveValue}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={memoisedClick}>+</button>
      <Child1 count={count} childClick={memoisedClick} />
    </div>
  );
};

export default Demo;
