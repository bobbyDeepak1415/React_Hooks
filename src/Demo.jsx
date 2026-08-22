import React, { useState } from "react";
import { useDispatch,useSelector } from "";


const Demo = () => {


  const dispatch = useDispatch()

  const {count}=useSelector(state=>state.counter.count)

  return <div>

    <p>count is at:{count}</p>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
  </div>;
};

export default Demo;
