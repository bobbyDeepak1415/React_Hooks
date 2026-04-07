// import './App.css'

import { useCallback, useState } from "react";
import Child from "./Child";

function App() {
  console.log("Parent rendering...");

  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

 
  return (
    <>
      <div>
        <h1>Parent count at:{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <input onChange={(e) => setItem(e.target.value)} value={item} />
        <Child updateCounter={()=>setCount(count+1)} count={count} />
      </div>
    </>
  );
}

export default App;
