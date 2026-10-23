import React from 'react'
import { useSelector } from 'react-redux'


const Demo = () => {


  

  // const count=useSelector((state)=>state.counter.count)
  const count=useSelector((state)=>state.hello.count)


return (
  <>
  <h2>Redux App</h2>
  <div>
    <h2>Count is at: {count}</h2>
    <button>Decrement</button>
    {/* <button>Increment</button> */}
    {/* <button>Multiply By 3</button> */}
    {/* <button>Reset</button> */}
  </div>
  </>
)
  
}

export default Demo
