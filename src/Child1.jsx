import React from 'react'



const Child1 = ({count,setName}) => {

console.log('child rendering')  

let title="Deepak"

  return (
    <div>
      <h2>Child count at:{count}</h2>
      <button onClick={()=>setName(title)}>set name</button>
    </div>
  )
}

export default React.memo(Child1)


