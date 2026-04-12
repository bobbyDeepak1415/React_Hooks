import React, { useState } from "react";

const Demo = () => {

  console.log("Parent rendering...")

  const [count,setCount]=useState(0)



  return <div>
    <h1>Parent Count is at:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <div>
<br/>
<br/>
<br/>
<br/>
    <input/>
    </div>
  </div>;
};

export default Demo;
