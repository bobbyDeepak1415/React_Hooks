import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'

const Demo = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navwrapper/>}>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}


function Navwrapper(){
  return<div>

   <nav style={{fontSize:"40px",gap:"10px",display:"flex"}}>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>

  </nav>
  <Outlet/>
  </div>
}

export default Demo

