import { useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  console.log("parent rendering...");

  return (
    <>
      <h2>Hello</h2>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <p>Parent count at:{count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <Child1 count={count} />
    </>
  );
};

export default Demo;
