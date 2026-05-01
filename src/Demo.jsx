import React, { useCallback, useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  console.log("parent rendering...");
  const [item, setItem] = useState("");

  const [count, setCount] = useState(0);

  const expensiveFunc = useCallback(() => {
    console.log('expensive func reunning...')
    setCount((prev) => prev + 19);
  }, []);

  return (
    <div>
      <h1>The count is at :{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
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
