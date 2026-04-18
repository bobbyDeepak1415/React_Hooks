import { useRef } from "react";


const Demo = () => {

  const count=useRef(0)

  return (
    <div>
      <h2>Count is at:{}</h2>
      <button onClick={() => console.log(count.current)}>Increment</button>
    </div>
  );
};

export default Demo;
