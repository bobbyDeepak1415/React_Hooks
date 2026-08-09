import React, { useState } from 'react'

const useFetchProds = () => {

  const [item,setItem]=useState("")

  return {item,setItem}
}

export default useFetchProds
