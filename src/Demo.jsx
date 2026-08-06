import { useCallback, useMemo, useState } from "react";
import Child1 from "./Child1";
import handleClick from "./handleClick";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  console.log("parent rendering...");

  const memoizedClick=useCallback(()=>{
handleClick(setCount)
  },[])


  const expensiveValue=useMemo(()=>{
    return count*1000
  },[count])

  return (
    <>
      <h2>Hello</h2>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <p>Parent count at:{count}</p>
<p>Expensive value:{expensiveValue}</p>
      <button onClick={memoizedClick}>Increment</button>

      <Child1 memoizedClick={memoizedClick} count={count} />
    </>
  );
};

export default Demo;
