import React from 'react'

const Child = ({count,setItem}) => {

    console.log("child rendering")

    const name="Bobby"

  return (
    <div>
      <h2>Child count at:{count}</h2>
      <button onClick={()=>setItem(name)}>set</button>

      
    </div>
  )
}

export default React.memo(Child)
