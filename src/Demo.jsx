import React, { useState } from "react";
import { useDispatch } from "@reduxjs/toolkit";


const Demo = () => {


  const dispatch = useDispatch()

  const {count}=useSelector()

  return <div>

    <p>count is at:{count}</p>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
  </div>;
};

export default Demo;
