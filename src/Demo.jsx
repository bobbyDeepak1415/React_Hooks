import React, { useState } from "react";


function reducer(type){
switch(action.type) {
  case "increment":{

  }
}
}

const Demo = () => {

  const [,setCount]=useState(0)

  return (
    <div>
      <h1>count is now :{count}</h1>
      <button onClick={() => reducer("decrement")}>-</button>
      <button onClick={() => reducer("increment")}>+</button>
      <button onClick={() => reducer("reset")}>Reset</button>
    </div>
  );
};

export default Demo;
