// import './App.css'

import { useState } from "react";
import Child from "./Child";

function App() {
  console.log("Parent rendering...");

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Parent count at:{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
        <Child />
      </div>
    </>
  );
}

export default App;
