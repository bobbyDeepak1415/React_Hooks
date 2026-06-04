import React, { useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  const [count, setCount] = useState(0);

  const [item,setItem]=useState()

  console.log("parent rendering...")

  return (
    <div>
      <input value={item} onChange={(e)=>setItem(e.target.value)}></input>
      <h2>count is at :{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <div>
        <Child1 count={count} />
      </div>
    </div>
  );
};

export default Demo;
