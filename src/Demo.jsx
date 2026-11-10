import React, { useState } from 'react'


const initialState={
  count:0
}

function reducer(){

}

const Demo = () => {


  const [state,dispatch]=useState(reducer,initialState)

  return (
    <div>
      <h2>Count is at:{state.count}</h2>
      
    </div>
  )
}

export default Demo
