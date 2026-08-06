import React, { useRef } from "react";

const Demo = () => {

const inputFileRef=useRef(0)

  return <div>
    <input type="file" ref={inputFileRef}/>
    <button></button>
    Your file List here:
  </div>;
};

export default Demo;
...Demo.apply.apply.