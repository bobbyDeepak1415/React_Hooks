import React, { useCallback, useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  const [count, setCount] = useState(0);

  const [item, setItem] = useState("");

  console.log("parent rendering...");

  const handleClick = useCallback(() => {
   setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <h2>count is at :{count}</h2>
      <button onClick={handleClick}>Increment</button>
      <div>
        <Child1 increment={handleClick} count={count}/>
      </div>
    </div>
  );
};

export default Demo;
