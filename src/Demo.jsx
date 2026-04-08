import React, { useCallback, useMemo, useState } from "react";
import Child1 from "./Child1";
import { handleClick } from "./handleClick";

const Demo = () => {
  console.log("Demo rendering...");

  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");
  const [title,setTitle]=useState("")

  const expensiveValue = useMemo(() => {
    console.log("expensive function run...");
    return count * 100;
  }, [count]);

  const countFromChild = useCallback(() => {
    // setCount((prev) => prev + 1);
    handleClick(setCount);
  }, []);



  return (
    <div>
      <p>{title}</p>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <h1>Demo count is at :{count}</h1>
      <h2>Expensive value:{expensiveValue}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <Child1 setTitle={setTitle} updatedValue={countFromChild} count={count} />
      </div>
    </div>
  );
};

export default Demo;
