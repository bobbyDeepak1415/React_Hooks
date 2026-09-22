import React from 'react'

const Child = ({count,increment}) => {

    console.log("child rendering")


  return (
    <div>
      <h2>Child count at:{count}</h2>

      <button onClick={increment}>+</button>
    </div>
  )
}

export default React.memo(Child)
