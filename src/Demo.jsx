import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import About from './About'
// import Home from './Home'
import {Store} from './Store'
import { getData } from './getData'

const Home=React.lazy(()=>import('./Home').then((module)=>{
  return {
    default:module.default
  }
}))
const About=React.lazy(()=>import('./About').then((module)=>{
  return {
    default:module.default
  }
}))
const Store

const Demo = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navwrapper/>}>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/store' element={<Store/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}


function Navwrapper(){
  return<div>

   <nav style={{fontSize:"40px",gap:"20px",display:"flex"}}>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/store'>Store</Link>

  </nav>
  <Outlet/>
  <button onClick={()=>alert(getData())}>GetData</button>
  </div>
}

export default Demo

