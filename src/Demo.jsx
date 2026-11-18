import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Demo = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavWrapper/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/'></Route>
          <Route path='/'></Route>
        </Route>

      </Routes>
    </div>
  )
}


function NavWrapper(){
  return <nav>
    <Link path='/'>Home</Link>
    <Link path='/about'>About</Link>
    <Link path='/store'>Store</Link>
  </nav>
}

export default Demo
