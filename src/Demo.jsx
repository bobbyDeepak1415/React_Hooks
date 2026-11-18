import React, { Suspense } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Store from './Store'
// import { getData } from './getData'


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
const Store=React.lazy(()=>import('./Store').then((module)=>{
  return {
    default:module.Store
  }
}))

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

  
  <nav style={{height:"50px",fontSize:"30px",display:"flex",gap:"20px"}}>
    
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/store'>Store</Link>
  </nav>
  <Suspense>

  <Outlet/>
  </Suspense>
<button onClick={()=>import('./getData').then((module)=>alert(module))}>getData</button>

  </div>
}

export default Demo
