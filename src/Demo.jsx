import React, { useRef } from "react";

const Demo = () => {

  const count=useRef(0)

  return <div>
    <h1>count is at:</h1>
    <button ref={count} >Increment</button>
  </div>;
};

export default Demo;
