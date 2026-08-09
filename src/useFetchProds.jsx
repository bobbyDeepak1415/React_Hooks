import React, { useState } from 'react'

const useFetchProds = (initialValue="") => {

  const [value,setValue]=useState(initialValue)

  const handleChange=(e)=>{
    setValue(e.target.value)
  }


  const reset=()=>{
    setValue("")
  }

  const bind={
    value,
    onChange:handleChange
  }

  return {value,setValue,onChange:handleChange,reset,bind}
  
}

export default useFetchProds
