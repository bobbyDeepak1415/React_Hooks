// import './App.css'

import { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import { handleClick } from "./handleClick";

function App() {
  console.log("Parent rendering...");

  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  const updateCountFromChild = useCallback(() => handleClick(setCount), []);

  const expensiveValue = useMemo(() => {
    console.log("calculating...");
    return count * 100;
  }, [count]);

  return (
    <>
      <div>
        <h1>Parent count at:{count}</h1>
        <h1>Expenive value:{expensiveValue}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <input onChange={(e) => setItem(e.target.value)} value={item} />
        <Child updateCounter={updateCountFromChild} count={count} />
      </div>
    </>
  );
}

export default App;
