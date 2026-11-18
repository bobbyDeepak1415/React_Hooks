import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Store from './Store'

const Demo = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavWrapper/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
        </Route>

      </Routes>
    </div>
  )
}


function NavWrapper(){
  return <div>

  
  <nav>
    
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/store'>Store</Link>
  </nav>

  <Outlet/>
  </div>
}

export default Demo
