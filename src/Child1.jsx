import React, { useState } from "react";

const Child1 = ({ count }) => {
  console.log("child rendering...");

  const [num,setNum]=useState(0)

  return (
    <div>
      <h1>Child count is at:{count}</h1>
      <h2>{num}</h2>
      <button onClick={()=>setNum(num+1)}>Click</button>
    </div>
  );
};

export default Child1;
