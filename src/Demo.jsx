import React, { useRef } from "react";

const Demo = () => {

  const handleClick=()=>{
    count.current+=1
    console.log(count.current)
  }

  const count=useRef(0)

  return <div>
    <h1 ref={count}>count is at:{count.current}</h1>
    <button onClick={()=>handleClick()} >Increment</button>
  </div>;
};

export default Demo;
...