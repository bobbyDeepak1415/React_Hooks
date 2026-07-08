import { useState } from "react";
import Child1 from "./Child1";

const Demo = () => {

  console.log("parent rendering...")
  const [count, setCount] = useState(0);

  const [input,setInput]=useState("")

  return (
    <div>
      <h1>Hello</h1>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <Child1 count={count} />
    </div>
  );
};

export default Demo;
