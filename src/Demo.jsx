import React, { useState } from "react";

const Demo = () => {

  const [count,setCount]=useState(0)

  return (
    <div>
      <h1>count is now :{count}</h1>
      <button onClick={()}>-</button>
      <button onClick={}>+</button>
      <button onClick={}>Reset</button>
    </div>
  );
};

export default Demo;
