import React, { useState } from "react";

const Demo = () => {

  const [count,setCount]=useState(0)

  return <div>

    <p>count is at:{count}</p>
    <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
  </div>;
};

export default Demo;
