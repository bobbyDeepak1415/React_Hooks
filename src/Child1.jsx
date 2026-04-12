import React, { memo, useState } from "react";

const Child1 = ({ count, memoizedFunc }) => {
  console.log("Child rendering...");

  const [num,setNum]=useState(0)

  return (
    <div>
      <h1>Child Count is at:{count}</h1>

      <h2>num:{num}</h2>
      <button onClick={()=>setNum(num+1)}>AddOne</button>
      <button onClick={memoizedFunc}>Child Incre</button>



    </div>
  );
};

export default memo(Child1);
