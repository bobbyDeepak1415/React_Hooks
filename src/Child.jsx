import React from 'react'

const Child = ({count}) => {

    console.log("child rendering")
  

  return (
    <div>
      <h2>Child count at:{count}</h2>

      
    </div>
  )
}

export default Child
