import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Demo = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavWrapper/>}>
          <Route path='/'></Route>
        </Route>

      </Routes>
    </div>
  )
}


function NavWrapper(){
  return <nav>
    <Link>Home</Link>
    <Link>About</Link>
    <Link>Home</Link>
  </nav>
}

export default Demo
