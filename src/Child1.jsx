import React from 'react'

const Child1 = (props) => {

    console.log("child rendering...")
  

  return (
    <div>
      <h2>Child count is at:{props.count}</h2>
    </div>
  )
}

export default React.memo(Child1)

