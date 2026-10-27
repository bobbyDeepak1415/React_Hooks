import React, { useReducer } from 'react'

const initialCount={
  count:0
}

const Demo = () => {

  const [state,dispatch]=useReducer()

  return (
    <div>
           <h2>Count is at:{initialCount.count}</h2>



    </div>
  )
}

export default Demo
