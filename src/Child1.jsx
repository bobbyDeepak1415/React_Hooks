import React from 'react'

const Child1 = ({count}) => {

  console.log("child rendering...")

  return (
    <div>
      <h2>Child count is at:{count}</h2>
    </div>
  )
}

export default Child1
