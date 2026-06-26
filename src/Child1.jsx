import React, { useEffect, useState } from 'react'

const Child1 = () => {

  const [count,setCount]=useState(0)

  useEffect(()=>{
    const getId=setInterval(()=>{
setCount(count+1)

return ()=>clearInterval(getId)

    },1000)
  })

  return (
    <div>

      <p>{count}</p>
      
    </div>
  )
}

export default Child1
