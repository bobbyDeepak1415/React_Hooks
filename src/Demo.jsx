import React, { useRef } from "react";

const Demo = () => {

  const count=useRef(0)
  return <div>

{/* <h2>Count is at:{</h2> */}
<button  onClick={()=>{

  console.log(count.current)
  count.current+=1
}
}>Click</button>

  </div>;
};

export default Demo;
