import { useState } from "react";
import Child1 from "./Child1";

const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <Child1 count={count} />
    </div>
  );
};

export default Demo;
