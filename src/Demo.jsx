import React, { useMemo, useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  console.log("Demo rendering...");

  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("expensive function run...");
    return count * 100;
  }, [count]);

  return (
    <div>
      <h1>Demo count is at :{count}</h1>
      <h2>Expensive value:{expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <Child1 count={count}/>
      </div>..
    </div>
  );
};

export default Demo;
