import React from 'react'

const Child1 = (props) => {

    console.log("child rendering...")
  

  return (
    <div>
      <h2>Child count is at:{props.count}</h2>
      <button onClick={props.handleClick}>Child button</button>
    </div>
  )
}

export default React.memo(Child1)

