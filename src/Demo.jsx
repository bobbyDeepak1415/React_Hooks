import { useRef } from "react";


const Demo = () => {

  const count=useRef(0)

  return (
    <div>
      <h2>Count is at:{count.current}</h2>
      <button onClick={}>Increment</button>
    </div>
  );
};

export default Demo;
