import React, { useEffect, useState } from 'react'

const useFetchProds = (url) => {
  
  const [users,setUsers]=useState([])

  useEffect(()=>{
const fetchData=async()=>{
  const res=await fetch(url)
  const response=await res.json()
  const userData=response.users
  const firstNames=userData.map((user)=>{
    return{
      name:user.firstName
    }
  })
  
  console.log(firstNames)
  setUsers(firstNames)


}
fetchData()
  },[url])

  return {users}
}

export default useFetchProds
