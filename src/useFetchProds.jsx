import React, { useState } from 'react'

const useFetchProds = (initialValue="") => {

  const [value,setValue]=useState(initialValue)

  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  
}

export default useFetchProds
