import { useCallback, useState } from "react";
import Child1 from "./Child1";
import handleClick from "./handleClick";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  console.log("parent rendering...");

  const memoizedClick=useCallback(()=>{
handleClick(setCount)
  },[])


  

  return (
    <>
      <h2>Hello</h2>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <p>Parent count at:{count}</p>

      <button onClick={memoizedClick}>Increment</button>

      <Child1 count={count} />
    </>
  );
};

export default Demo;
