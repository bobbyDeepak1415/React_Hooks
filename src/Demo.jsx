import React, { useReducer } from "react";


const initialState={
  count:0
}

const reducer=(state,action)=>{

  switch(action.type){
    case "decrement" : return {count:state.count-1}
  }

}

const Demo = () => {

  const [state,dispatch]=useReducer(reducer,initialState)



  return <div>
<h1>Count at:{state}</h1>
<button onClick={()=>dispatch({type:"decrement"})}>-</button>


  </div>;
};

export default Demo;
