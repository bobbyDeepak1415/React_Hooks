import React, { useCallback, useMemo, useState } from "react";

const Demo = () => {
  console.log("parent rendering...");

  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const expensiveResult = useMemo(() => {
    console.log("calculation...");
    return count * 100;
  }, [count]);

  // const expensiveResult = count * 100;

  const memoizedClick = useCallback(() => {
    console.log("memoizedClick");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Parent count is at:{count}</h1>
      <h2>Expensive Result is :{expensiveResult}</h2>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type="text"
      />
      <button onClick={memoizedClick}>Increment</button>
    </div>
  );
};

export default Demo;
