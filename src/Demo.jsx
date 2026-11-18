import React from 'react'
import useFetchProds from './useFetchProds'

const Demo = () => {

  const url="https://dummyjson.com/users"

  const {users}=useFetchProds(url)

  

  return (
    <div>
      <h2>Users List</h2>
      <ul>

      {users.map((user)=>{
        return <li>{user.name}</li>
       })}
       </ul>
    </div>
  )
}

export default Demo
