import { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Hello</h2>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default Demo;
