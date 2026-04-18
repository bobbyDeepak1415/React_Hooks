import { useRef } from "react";

const Demo = () => {
  const count = useRef(0);

  const handleIncrement=()=>{
    
  }

  return (
    <div>
      <h2>Count is at:{count.current}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Demo;
